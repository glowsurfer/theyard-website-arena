/* =========================================================================
   THE YARD · ARENA v4 interaction layer
   Zero dependencies. Native scroll only. Everything here is progressive
   enhancement: the site is fully readable and bookable with this file
   absent. All motion respects prefers-reduced-motion.

   Modules
   1. Booking map (single source of truth for per-centre links)
   2. Mobile nav + mega-menu dropdowns
   3. Header behaviour
   4. Scroll reveals (IntersectionObserver)
   5. Count-up stats
   6. Pathway strip (progress rail + arrows)
   7. Magnetic buttons + pointer spotlight
   8. Class finder (inline section + <dialog>)
   9. Simple filters (coaches page)
   ========================================================================= */
(function () {
  'use strict';

  var docEl = document.documentElement;
  docEl.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  /* ================= 1. Booking map ================= */
  var CENTRES = {
    jurong:  { key: 'jurong',  name: 'Jurong',      where: 'Perennial Business City', book: 'https://book.jurong.theyard.sg/',     wa: 'https://wa.me/6587493709', page: 'location-jurong.html' },
    bt:      { key: 'bt',      name: 'Bukit Timah', where: 'KAP Mall',                book: 'https://book.bukittimah.theyard.sg/', wa: 'https://wa.me/6589528017', page: 'location-bukit-timah.html' },
    dempsey: { key: 'dempsey', name: 'Dempsey',     where: 'Dempsey Hill',            book: 'https://book.dempsey.theyard.sg/',    wa: 'https://wa.me/6589498693', page: 'location-dempsey.html' },
    dover:   { key: 'dover',   name: 'Dover',       where: 'SPGG',                    book: 'https://book.dover.theyard.sg/',      wa: 'https://wa.me/6588059607', page: 'location-dover.html' }
  };
  var WA_MAIN = 'https://wa.me/6580891440';
  /* any <a data-book="jurong"> or <a data-wa="dover"> is kept in step with the map above */
  document.querySelectorAll('[data-book]').forEach(function (a) {
    var c = CENTRES[a.getAttribute('data-book')];
    if (c) { a.href = c.book; a.target = '_blank'; a.rel = 'noopener'; }
  });
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    var k = a.getAttribute('data-wa');
    var href = k === 'main' ? WA_MAIN : (CENTRES[k] ? CENTRES[k].wa : null);
    if (href) { a.href = href; a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* ================= 2. Mobile nav + mega menu ================= */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('primary-nav');
  if (toggle && menu) {
    var setNav = function (open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      docEl.classList.toggle('nav-open', open);
      if (open) { menu.querySelectorAll('details.nav__drop').forEach(function (d) { d.open = true; }); }
    };
    toggle.addEventListener('click', function () { setNav(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setNav(false); toggle.focus(); }
    });
  }
  var drops = Array.prototype.slice.call(document.querySelectorAll('details.nav__drop'));
  var isMobileNav = function () { return window.matchMedia('(max-width: 980px)').matches; };
  if (drops.length) {
    var closeAll = function (except) {
      if (isMobileNav()) { return; }
      drops.forEach(function (d) { if (d !== except) { d.open = false; } });
    };
    drops.forEach(function (d) {
      var summary = d.querySelector('summary');
      if (summary) {
        summary.addEventListener('click', function () { window.setTimeout(function () { if (d.open) { closeAll(d); } }, 0); });
      }
      if (finePointer) {
        var hoverTimer = null;
        d.addEventListener('mouseenter', function () { if (isMobileNav()) { return; } window.clearTimeout(hoverTimer); closeAll(d); d.open = true; });
        d.addEventListener('mouseleave', function () { if (isMobileNav()) { return; } hoverTimer = window.setTimeout(function () { d.open = false; }, 180); });
      }
    });
    document.addEventListener('click', function (e) { if (isMobileNav()) { return; } if (!e.target.closest('details.nav__drop')) { closeAll(null); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(null); } });
  }
  /* mark the current page in the nav */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__menu a').forEach(function (a) {
    var target = a.getAttribute('href') || '';
    if (target.split('#')[0] === here) { a.setAttribute('aria-current', 'page'); }
  });

  /* ================= 3. Header ================= */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastY = window.scrollY, ticking = false;
    var onScroll = function () {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      if (!docEl.classList.contains('nav-open')) {
        if (y > lastY + 8 && y > 200) { header.classList.add('is-hidden'); }
        else if (y < lastY - 8 || y <= 200) { header.classList.remove('is-hidden'); }
      }
      lastY = y; ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();
  }

  /* ================= 4. Reveals ================= */
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
        entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
      reveals.forEach(function (el) { io.observe(el); });
      window.setTimeout(function () { reveals.forEach(function (el) { el.classList.add('in'); }); }, 6000);
    }
  }

  /* ================= 5. Count-ups ================= */
  var counts = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  if (counts.length && !reduceMotion && 'IntersectionObserver' in window) {
    var runCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      if (isNaN(target)) { return; }
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1200, t0 = null;
      var step = function (t) {
        if (!t0) { t0 = t; }
        var p = Math.min(1, (t - t0) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-SG') + suffix;
        if (p < 1) { window.requestAnimationFrame(step); }
      };
      window.requestAnimationFrame(step);
    };
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { runCount(entry.target); cio.unobserve(entry.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    counts.forEach(function (el) { cio.observe(el); });
  }

  /* ================= 6. Pathway strip ================= */
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
      track.addEventListener('scroll', function () { if (!railTick) { window.requestAnimationFrame(paintRail); railTick = true; } }, { passive: true });
      paintRail();
    }
    var prev = section.querySelector('[data-strip-prev]');
    var next = section.querySelector('[data-strip-next]');
    var cardStep = function () { var card = track.querySelector('.pcard'); return card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.7; };
    if (prev) { prev.addEventListener('click', function () { track.scrollBy({ left: -cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' }); }); }
    if (next) { next.addEventListener('click', function () { track.scrollBy({ left: cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' }); }); }
  });

  /* ================= 7. Magnetic buttons + spotlight ================= */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      var strength = 0.3;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * strength;
        var y = (e.clientY - r.top - r.height / 2) * (strength + 0.14);
        x = Math.max(-14, Math.min(14, x)); y = Math.max(-10, Math.min(10, y));
        el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
    document.querySelectorAll('[data-spotlight]').forEach(function (sec) {
      var spot = sec.querySelector('.hero-arena__spot');
      if (!spot) { return; }
      var raf = null;
      sec.addEventListener('pointermove', function (e) {
        if (raf) { return; }
        raf = requestAnimationFrame(function () {
          var r = sec.getBoundingClientRect();
          spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
          spot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
          raf = null;
        });
      });
    });
  }

  /* ================= 8. Class finder ================= */
  /* Availability below mirrors _spec/classcard_availability.md (ClassCard, 2026-07-05).
     Never list a regular class at a centre that the matrix does not confirm. */
  var ALL = ['jurong', 'bt', 'dempsey', 'dover'];
  var PROGRAMMES = [
    { id: 'gym-tots', name: 'Gym Tots', ages: ['tots'], centres: ALL, dur: '1 hour', page: 'recreational.html#gym-tots', primary: true,
      blurb: 'A parent-and-child class where toddlers explore obstacle courses and movement stations with you on the floor beside them. Balance, coordination and listening skills all start here.', cta: 'trial' },
    { id: 'kindertots', name: 'KinderTots', ages: ['kinder'], centres: ALL, dur: '1 hour', page: 'recreational.html#kindertots', primary: true,
      blurb: 'Their first class without you on the floor. A coach leads 3 and 4 year olds through bars, beam, vault and floor with games and stations, six children to a coach.', cta: 'trial' },
    { id: 'boys-tots', name: 'Boys Tots', ages: ['kinder'], centres: ['dempsey', 'dover'], dur: '1 hour', page: 'recreational.html#boys',
      blurb: 'The boys’ version of KinderTots, with parallel bars, rings and pommel work in the rotation from the start.', cta: 'trial' },
    { id: 'ninja-tots', name: 'Ninja Tots', ages: ['kinder'], centres: ['bt', 'dempsey'], dur: '1 hour', page: 'ninja.html',
      blurb: 'Obstacle courses, climbing and movement games at toddler scale, for children who never stop moving.', cta: 'trial' },
    { id: 'fundamentals', name: 'FUNdamentals', ages: ['fun'], centres: ALL, dur: '1 hour', page: 'recreational.html#fundamentals', primary: true,
      blurb: 'The core class of the club. Children rotate through vault, bars, beam and floor and work through a 20-skill Skills Matrix, with Bronze, Silver and Gold medals at assessments three times a year.', cta: 'trial' },
    { id: 'boys-fundamentals', name: 'Boys FUNdamentals', ages: ['fun'], centres: ['dempsey', 'dover'], dur: '1 hour', page: 'recreational.html#boys',
      blurb: 'FUNdamentals on the boys’ apparatus: parallel bars, rings and pommel alongside floor, vault and bars.', cta: 'trial' },
    { id: 'ninja-white', name: 'Ninja White', ages: ['fun'], centres: ['bt', 'dempsey'], dur: '1 hour', page: 'ninja.html',
      blurb: 'Gymnastics, parkour and obstacle-course training rotated through each session. It feels like play and builds whole-body strength.', cta: 'trial' },
    { id: 'warriors', name: 'Warriors', ages: ['fun'], centres: ['bt', 'dover'], dur: '1.5 hours', page: 'recreational.html#warriors',
      blurb: 'The first advanced recreational level, entered by assessment or progression from FUNdamentals. Sharper technique, more independence and 90 minutes on the floor.', cta: 'trial' },
    { id: 'senior-warriors', name: 'Senior Warriors', ages: ['teen'], centres: ['dover'], dur: '1.5 hours', page: 'recreational.html#warriors', primary: true,
      blurb: 'Advanced recreational gymnastics for 10 to 16 year olds, with the strength and technique demands to match.', cta: 'trial' },
    { id: 'tumbling', name: 'Tumbling & Trampoline', ages: ['teen'], centres: ['jurong'], dur: '1 to 1.5 hours', page: 'tumbling.html', primary: true,
      blurb: 'Floor, vault and tumble-track training for tweens and teens: round-offs, walkovers, somersaults and aerials, level by level.', cta: 'trial' },
    { id: 'freestyle', name: 'Freestyle', ages: ['fun', 'teen'], centres: ['dover'], dur: '1 to 1.5 hours', page: 'freestyle.html',
      blurb: 'Gymnastics and acrobatic stunts with freedom of movement, for children aged 7 and up who want to move their own way. Freestyle camps run at Dover; ask the team about weekly classes.', cta: 'whatsapp' },
    { id: 'open-gym', name: 'Adult Open Session', ages: ['adult'], centres: ['jurong'], dur: '1.5 hours', page: 'adult.html', primary: true,
      blurb: 'A self-directed 90 minutes across the full apparatus, with a coach always on the floor. Returning gymnasts and complete beginners both welcome.', cta: 'whatsapp' },
    { id: 'adult-foundation', name: 'Adult Foundation Gymnastics', ages: ['adult'], centres: ['bt'], dur: '90 minutes', page: 'adult.html', primary: true,
      blurb: 'A coached adult gymnastics class at Bukit Timah for anyone starting, or restarting, from the basics.', cta: 'whatsapp' },
    { id: 'competitive', name: 'Competitive WAG & MAG', ages: ['fun', 'teen'], centres: ALL, dur: '6 to 24 hrs a week', page: 'competitive.html',
      blurb: 'Selection-based squads on the SGLP and USAG level framework, training at all four centres. Entry starts with a free assessment arranged with your centre team.', cta: 'assessment' }
  ];
  var AGE_LABEL = { tots: '18 months to 3', kinder: '3 to 4', fun: '5 to 10', teen: '10 to 16', adult: '16 and over' };

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var renderResult = function (root, age, centreKey) {
    var out = root.querySelector('[data-finder-result]');
    if (!out) { return; }
    var centre = CENTRES[centreKey];
    if (!age || !centre) {
      out.innerHTML = '<span class="mono">Your recommendation</span><h3>Pick an age and a centre</h3><p>Two taps and the right class appears here, with a direct booking link for your centre.</p>';
      return;
    }
    var matches = PROGRAMMES.filter(function (p) { return p.ages.indexOf(age) > -1 && p.centres.indexOf(centreKey) > -1; });
    var main = matches.filter(function (p) { return p.primary; })[0] || matches[0];
    var html = '';
    if (!main) {
      var elsewhere = PROGRAMMES.filter(function (p) { return p.ages.indexOf(age) > -1; });
      html += '<span class="mono">' + esc(AGE_LABEL[age]) + ' at ' + esc(centre.name) + '</span>';
      html += '<h3>Ask the ' + esc(centre.name) + ' team</h3>';
      html += '<p>Our booking system shows no weekly class in this age band at ' + esc(centre.name) + ' right now. The team can check the latest timetable, suggest a nearby centre, or add you to a waitlist.</p>';
      html += '<div class="btn-row"><a class="btn btn--wa" href="' + centre.wa + '" target="_blank" rel="noopener">WhatsApp ' + esc(centre.name) + '</a><a class="btn btn--ghost-ink btn--sm" href="locations.html">Compare centres</a></div>';
      if (elsewhere.length) {
        html += '<div class="finder__more"><b>This age band elsewhere</b><ul class="finder__list">';
        elsewhere.forEach(function (p) {
          html += '<li><a href="' + esc(p.page) + '">' + esc(p.name) + '</a><span class="mono">' + p.centres.map(function (k) { return CENTRES[k].name; }).join(' · ') + '</span></li>';
        });
        html += '</ul></div>';
      }
      out.innerHTML = html;
      return;
    }
    html += '<span class="mono">Recommended · ' + esc(AGE_LABEL[age]) + ' · ' + esc(centre.name) + '</span>';
    html += '<h3>' + esc(main.name) + '</h3>';
    html += '<div class="finder__meta"><span>' + esc(main.dur) + '</span><span>' + esc(centre.name) + ' · ' + esc(centre.where) + '</span>' + (main.cta === 'trial' ? '<span>Trial fee shown at booking</span>' : '') + '</div>';
    html += '<p>' + esc(main.blurb) + '</p>';
    html += '<div class="btn-row">';
    if (main.cta === 'trial') {
      html += '<a class="btn btn--gold" href="' + centre.book + '" target="_blank" rel="noopener">Book a trial at ' + esc(centre.name) + ' <span class="arr">↗</span></a>';
      html += '<a class="btn btn--ghost-ink btn--sm" href="' + centre.wa + '" target="_blank" rel="noopener">WhatsApp instead</a>';
    } else if (main.cta === 'assessment') {
      html += '<a class="btn btn--gold" href="' + centre.wa + '" target="_blank" rel="noopener">Request a free assessment</a>';
      html += '<a class="btn btn--ghost-ink btn--sm" href="competitive.html">How selection works</a>';
    } else {
      html += '<a class="btn btn--wa" href="' + centre.wa + '" target="_blank" rel="noopener">WhatsApp ' + esc(centre.name) + ' to book</a>';
      html += '<a class="btn btn--ghost-ink btn--sm" href="' + esc(main.page) + '">About this class</a>';
    }
    html += '</div>';
    html += '<p class="finder__alt"><a href="' + esc(main.page) + '">Read about ' + esc(main.name) + '</a> or see <a href="' + esc(centre.page) + '">everything at ' + esc(centre.name) + '</a>.</p>';
    var others = matches.filter(function (p) { return p !== main; });
    if (others.length) {
      html += '<div class="finder__more"><b>Also for this age at ' + esc(centre.name) + '</b><ul class="finder__list">';
      others.forEach(function (p) { html += '<li><a href="' + esc(p.page) + '">' + esc(p.name) + '</a><span class="mono">' + esc(p.dur) + '</span></li>'; });
      html += '</ul></div>';
    }
    out.innerHTML = html;
  };

  var initFinder = function (root) {
    var state = { age: null, centre: null };
    var pick = root.querySelector('input[name$="age"]:checked');
    if (pick) { state.age = pick.value; }
    var pickC = root.querySelector('input[name$="centre"]:checked');
    if (pickC) { state.centre = pickC.value; }
    root.addEventListener('change', function (e) {
      var t = e.target;
      if (t.name && /age$/.test(t.name)) { state.age = t.value; }
      if (t.name && /centre$/.test(t.name)) { state.centre = t.value; }
      renderResult(root, state.age, state.centre);
    });
    renderResult(root, state.age, state.centre);
  };
  document.querySelectorAll('[data-finder-root]').forEach(initFinder);

  var dialog = document.getElementById('finder-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    var openers = document.querySelectorAll('[data-finder]');
    openers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        dialog.showModal();
        docEl.classList.add('dialog-open');
        var first = dialog.querySelector('input[type="radio"]');
        if (first) { first.focus({ preventScroll: true }); }
      });
    });
    dialog.addEventListener('close', function () { docEl.classList.remove('dialog-open'); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) { dialog.close(); } });
    var closeBtn = dialog.querySelector('.fdialog__close');
    if (closeBtn) { closeBtn.addEventListener('click', function () { dialog.close(); }); }
  }

  /* ================= 9. Simple filters (coaches page) ================= */
  document.querySelectorAll('[data-filter-root]').forEach(function (rootEl) {
    var items = Array.prototype.slice.call(rootEl.querySelectorAll('[data-roles]'));
    var state = { role: 'all', centre: 'all' };
    var has = function (el, attr, val) { return val === 'all' || (' ' + (el.getAttribute(attr) || '') + ' ').indexOf(' ' + val + ' ') > -1; };
    var apply = function () {
      var n = 0;
      items.forEach(function (el) { var show = has(el, 'data-roles', state.role) && has(el, 'data-centres', state.centre); el.hidden = !show; if (show) { n++; } });
      var out = rootEl.querySelector('[data-filter-count]');
      if (out) { out.textContent = n + (n === 1 ? ' coach' : ' coaches'); }
    };
    rootEl.querySelectorAll('[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var kind = btn.getAttribute('data-filter'); state[kind] = btn.getAttribute('data-value');
        rootEl.querySelectorAll('[data-filter="' + kind + '"]').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        apply();
      });
    });
  });

  /* ================= footer year ================= */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
