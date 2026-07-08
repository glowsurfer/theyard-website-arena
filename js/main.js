/* =========================================================================
   THE YARD — interaction layer · v3 (scroll-perf overhaul)
   Zero dependencies. Native scroll only (no Lenis, no GSAP, no pinning).
   - Reveals: IntersectionObserver adds .in once, then unobserves.
   - Pathway: native CSS scroll-snap strip; JS only mirrors progress on the
     rail (transform-only) and wires optional prev/next arrows.
   - Everything is progressive enhancement: the site is fully readable and
     navigable with this file absent. All motion respects reduced-motion.
   ========================================================================= */
(function () {
  'use strict';

  var docEl = document.documentElement;
  docEl.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer  = window.matchMedia('(pointer: fine)').matches;

  /* ================= 1. Mobile nav (full-screen overlay) ================= */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('primary-nav');
  if (toggle && menu) {
    var setNav = function (open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      docEl.classList.toggle('nav-open', open);
      if (open) {
        /* expand all dropdown groups so the overlay reads as one menu */
        menu.querySelectorAll('details.nav__drop').forEach(function (d) { d.open = true; });
      }
    };
    toggle.addEventListener('click', function () { setNav(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setNav(false); toggle.focus(); }
    });
  }

  /* ================= 2. Mega-menu dropdowns (<details class="nav__drop">) =
     Native click-to-open works without JS. Enhance with:
     - hover-open/close on fine pointers (desktop)
     - only one panel open at a time
     - click-away + Escape to close                                        */
  var drops = Array.prototype.slice.call(document.querySelectorAll('details.nav__drop'));
  var isMobileNav = function () { return window.matchMedia('(max-width: 980px)').matches; };
  if (drops.length) {
    var closeAll = function (except) {
      if (isMobileNav()) { return; } /* overlay keeps groups expanded */
      drops.forEach(function (d) { if (d !== except) { d.open = false; } });
    };
    drops.forEach(function (d) {
      var summary = d.querySelector('summary');
      if (summary) {
        summary.addEventListener('click', function () {
          /* browser toggles `open` itself after this handler */
          window.setTimeout(function () { if (d.open) { closeAll(d); } }, 0);
        });
      }
      if (finePointer) {
        var hoverTimer = null;
        d.addEventListener('mouseenter', function () {
          if (isMobileNav()) { return; }
          window.clearTimeout(hoverTimer);
          closeAll(d);
          d.open = true;
        });
        d.addEventListener('mouseleave', function () {
          if (isMobileNav()) { return; }
          hoverTimer = window.setTimeout(function () { d.open = false; }, 180);
        });
      }
    });
    document.addEventListener('click', function (e) {
      if (isMobileNav()) { return; }
      if (!e.target.closest('details.nav__drop')) { closeAll(null); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAll(null); }
    });
  }

  /* ================= 3. Header: solidify + hide on scroll down =========== */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastY = window.scrollY;
    var ticking = false;
    var onScroll = function () {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      if (!docEl.classList.contains('nav-open')) {
        if (y > lastY + 8 && y > 160) { header.classList.add('is-hidden'); }
        else if (y < lastY - 8 || y <= 160) { header.classList.remove('is-hidden'); }
      }
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
  }

  /* ================= 4. Scroll reveals (IntersectionObserver) ============
     [data-reveal] elements get .in when ~12% from the viewport bottom,
     then are unobserved. CSS owns the transition. No JS → CSS keeps
     everything visible (opacity rules are gated on html.js).            */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (reveals.length) {
    if (!('IntersectionObserver' in window) || reduceMotion) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      reveals.forEach(function (el) {
        var delay = parseFloat(el.getAttribute('data-delay') || '0');
        if (delay) { el.style.setProperty('--rvd', delay + 's'); }
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });
      reveals.forEach(function (el) { io.observe(el); });
      /* failsafe: nothing may stay hidden (e.g. IO quirks in odd embeds) */
      window.setTimeout(function () {
        reveals.forEach(function (el) { el.classList.add('in'); });
      }, 6000);
    }
  }

  /* ================= 5. Count-up stats ([data-count]) ==================== */
  var counts = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  if (counts.length && !reduceMotion && 'IntersectionObserver' in window) {
    var runCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      if (isNaN(target)) { return; }
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1200;
      var t0 = null;
      var step = function (t) {
        if (!t0) { t0 = t; }
        var p = Math.min(1, (t - t0) / dur);
        var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) { window.requestAnimationFrame(step); }
      };
      window.requestAnimationFrame(step);
    };
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    counts.forEach(function (el) { cio.observe(el); });
  }

  /* ================= 6. Pathway strip: progress rail + arrows ============
     The strip scrolls natively (CSS scroll-snap). We only mirror its
     scroll position onto the rail with a transform (compositor-only)
     and wire optional prev/next buttons.                                 */
  document.querySelectorAll('.pathway').forEach(function (section) {
    var track = section.querySelector('.pathway__track');
    if (!track) { return; }
    var railFill = section.querySelector('.pathway__rail i');
    if (railFill) {
      var railTick = false;
      var paintRail = function () {
        var max = track.scrollWidth - track.clientWidth;
        var p = max > 0 ? track.scrollLeft / max : 0;
        railFill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
        railTick = false;
      };
      track.addEventListener('scroll', function () {
        if (!railTick) { window.requestAnimationFrame(paintRail); railTick = true; }
      }, { passive: true });
      paintRail();
    }
    var prev = section.querySelector('[data-strip-prev]');
    var next = section.querySelector('[data-strip-next]');
    var cardStep = function () {
      var card = track.querySelector('.pcard');
      return card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.7;
    };
    if (prev) { prev.addEventListener('click', function () { track.scrollBy({ left: -cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' }); }); }
    if (next) { next.addEventListener('click', function () { track.scrollBy({ left: cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' }); }); }
  });

  /* ================= 7. Magnetic buttons (pointer:fine + motion OK) ====== */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      var strength = 0.32;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * strength;
        var y = (e.clientY - r.top - r.height / 2) * (strength + 0.14);
        x = Math.max(-16, Math.min(16, x));
        y = Math.max(-12, Math.min(12, y));
        el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }
})();

/* ---- BROADCAST concept: pointer spotlight on the opening titles ---- */
(function () {
  if (!matchMedia('(pointer:fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-spotlight]').forEach(function (sec) {
    var spot = sec.querySelector('.titles__spot');
    if (!spot) return;
    var raf = null;
    sec.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var r = sec.getBoundingClientRect();
        spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        spot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
        raf = null;
      });
    });
  });
})();
