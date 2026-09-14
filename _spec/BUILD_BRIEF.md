# BUILD BRIEF — theyard.sg v3 (multi-page, second-layer detail, perf-fixed)

Read this + the sibling specs before building any page:
- `_spec/classcard_availability.md` — **SOURCE OF TRUTH for per-centre regular-class claims.**
- `_spec/programs.md` — full program content + benefits.
- `_spec/sections.md` — parties, camps, events, adult, schools, consultancy, corporate, performance.
- `_spec/policies.md` — PUBLIC vs CLIENT-ONLY (member-portal) split.
- `_spec/partners_and_current_site.md` — clients/partners + current-site carry-over.

Keep the **"Play to Podium" look & feel** (charcoal, League Spartan display, Space Mono labels, gold/blue/red, hand-drawn character illustrations in `assets/illustrations/`). This is a professional client-facing site.

## HARD RULES (verified by an adversarial pass afterwards)
1. **Availability discipline.** Never state a REGULAR class is offered at a centre unless `classcard_availability.md` confirms it. Camps/parties/events are exempt. Key facts: Recreational (Gym Tots/KinderTots/FUNdamentals) = all 4; Warriors = BT + Dover; Senior Warriors/Boys/Freestyle-camps = Dover; Boys = Dempsey + Dover; **Ninja Zone = Bukit Timah + Dempsey only**; **Tumbling = Jurong only**; Adult = Jurong (open gym) + BT (Adult Foundation); Competitive = pathway, Jurong HP hub (by selection, not a class grid).
2. **Ninja is smaller — de-emphasise.** Recreational + Competitive are the two top-priority programs and get the most prominence. Ninja/Tumbling/Freestyle/Adult are secondary.
3. **T&Cs.** Client-only terms (fees, billing, withdrawal, make-up tokens, code of conduct, member fine print) live in the MEMBER PORTAL ONLY — never on the public site. Public-safe policies only (Privacy Policy, Website Terms, Safeguarding statement, photo/consent notice, nut-free, inclusion) per `policies.md`. Privacy Policy + Liability Waiver already live at theyard.sg/privacy-policy/ and /liability-waiver/ — link out, don't duplicate client terms.
4. **Logos:** approved illustration set only; the wordmark stays a labelled placeholder — never recreate the logo. Photos = labelled stock placeholders (`.imgph`).
5. **No cyclical dead-ends.** Every program/section has a real second-layer detail page. Hub → detail → related, plus breadcrumbs. `href="#"` allowed only for external booking placeholders (ClassCard/WhatsApp), clearly a CTA.
6. **Prices:** every price is "verify" — show ranges/"from" sparingly or omit; never present unverified prices as firm. Prefer "Book a trial / enquire" over hard price tables (except Parties packages, which may show with a "prices shown at booking" caveat).
7. **Don't fabricate.** Schools / Gym Consultancy / Athletic Performance have NO source content — build them as honest capability + enquiry pages (seed credibility from founder/facility/HP material), clearly offering-focused, with an enquiry CTA. No invented case studies, named schools, or specifics.

## SCROLL-PERFORMANCE OVERHAUL (the clunkiness must go)
- **Remove Lenis entirely** — use native scroll (smoothest, 1:1). Delete the Lenis init + rAF loop + `lenis.scrollTo`; anchor links use native `scroll-behavior`/`scrollIntoView`.
- **Replace the pinned/scrubbed horizontal "pathway"** (GSAP ScrollTrigger pin+scrub) with a **native CSS scroll-snap horizontal strip** (`overflow-x:auto; scroll-snap-type:x mandatory`) — no pin, no scrub, no containerAnimation. Smooth and cheap; still shows recreational→competitive progression.
- **Reveals → IntersectionObserver** (add a `.in` class → CSS transition, `unobserve` after first reveal). Drop the per-element GSAP ScrollTriggers.
- Keep magnetic buttons only on `(pointer:fine)` + no-reduced-motion. Keep grain GPU-promoted + off on touch (already done). No `backdrop-filter`.
- Prefer CSS transitions/keyframes over JS. GSAP may stay ONLY for a light hero entrance if it adds value; otherwise drop it. Everything must degrade with `prefers-reduced-motion` and be fully readable with no JS.
- Target: buttery scroll on a 120Hz Mac; no long tasks tied to scroll.

## INFORMATION ARCHITECTURE (non-cyclical)
**Primary nav:** Programs ▾ · Camps · Parties · Events · Locations ▾ · Business ▾ · About ▾ · [Book a Trial] · [Member Login ↗ (ClassCard portal)]

- **Programs ▾:** Recreational Gymnastics · Competitive (WAG/MAG) · Ninja Zone · Tumbling & Trampoline · Freestyle · Adult · All programs
- **Locations ▾:** Jurong · Bukit Timah · Dempsey · Dover · All locations
- **Business ▾:** Schools · Corporate · Gym Consultancy · Athletic Performance · Partners & Clients
- **About ▾:** Our Story · Why Gymnastics · Contact

## PAGE LIST (filenames → content source)
Core / homepage:
- `index.html` — REBUILD. Gymnastics-first hero; trust bar; **Recreational + Competitive** featured block (top priority); then secondary programs (Ninja BT+Dempsey, Tumbling Jurong, Freestyle Dover, Adult); the native scroll-snap **pathway** (rec→competitive); **Parties**, **Camps**, **Events** as three distinct prominent sections; **Locations** (4, each linking to its page); **Partners/clients** logo strip + testimonials; About teaser; booking CTA. Every card → its detail page (no cul-de-sacs).
- `programs.html` — Programs hub: grouped Recreational / Competitive / Other, each linking to detail pages.

Program detail (second-layer, strengths & benefits):
- `recreational.html` — Recreational hub + pathway; anchored sub-sections per level (Gym Tots, KinderTots, FUNdamentals, Warriors & Senior Warriors, Boys classes, Heroes/Legends/Gladiator as pathway levels), each with benefits/what-a-class-looks-like/availability (matrix). Skills-Matrix + medal explainer.
- `competitive.html` — WAG/MAG, assessment/invitation entry, SGLP/USAG levels explainer, Aug–Jul season, Lion City/Diamond meets, Jurong HP hub, international pathways. Present as a pathway (not a class grid).
- `ninja.html` — Ninja Zone (BT + Dempsey only), Ninja Tots/White + Yellow/Green (invitation), ninja rig at BT.
- `tumbling.html` — Tumbling & Trampoline (Jurong only), Beginner/Intermediate/Advanced + medal scale.
- `freestyle.html` — Freestyle (Dover), Foundation/Intermediate; note camps confirmed, weekly classes "enquire".
- `adult.html` — Adult (Jurong open gym + BT Adult Foundation); Open Gym CTA = WhatsApp/enquiry.

Distinct sections:
- `camps.html` — prominent; camp types × centres; format; booking per centre; seasonal urgency.
- `parties.html` — Mini/Mega/Mighty packages, what's included/NOT (nut-free, self-catered), per-centre slots, booking path; strong reputation angle.
- `events.html` — competitions/showcases (Lion City Classic, Diamond Classic, Christmas Show, UWC Dragons, FOBISIA), upcoming + a past-events archive grid, spectator info, "follow us for results"; sponsorship teaser.

Locations (each lists ONLY that centre's matrix-confirmed programs):
- `locations.html` — overview + map of all 4.
- `location-jurong.html` · `location-bukit-timah.html` · `location-dempsey.html` · `location-dover.html` — address/contact/WhatsApp/booking + programs available HERE (matrix) + centre notes (Jurong=HP hub+Tumbling+Olympic arena; BT=Ninja+rig+party room+Adult Foundation; Dempsey=Ninja+Boys+free parking; Dover=Warriors/Senior Warriors/Boys/Freestyle+SPGG).

Business (B2B):
- `business.html` — Partnerships hub (routes to the four lines + partners).
- `corporate.html` — team building/venue hire; past clients **LinkedIn, TP ICAP, Chanel**; enquiry.
- `schools.html` · `consultancy.html` · `performance.html` — honest capability + enquiry pages (seed credibility only; no invented specifics).
- `partners.html` — Partners & Clients: company logos (LinkedIn, TP ICAP, Chanel) + a partner-schools area (placeholder, clearly "clients include…", schools list to be supplied).

About / support:
- `about.html` — founder Rosanna Trigg, philosophy ("progress is the point, not pace"), the 4 centres, coaches, values.
- `why-gymnastics.html` — the benefits/"mother of all sports" evidence page (great for SEO/AI-search).
- `contact.html` — all 4 centres (address/phone/WhatsApp/email), enquiry form, map.
- `style-tile.html` — update to document the v3 component kit (noindex).

## GEO / LLM-search (keep + extend)
Per page: answer-first quotable intro sentence; FAQ + FAQPage JSON-LD where relevant; per-centre LocalBusiness on location pages; Course schema on program pages; BreadcrumbList; OG/Twitter cards; keep `llms.txt`/`robots.txt`/`sitemap.xml` (UPDATE sitemap + llms.txt to include all new pages). Facts must be crawlable text/links (not JS-only).

## COMPONENT KIT (System pass owns css/styles.css + js/main.js)
Provide reusable classes so page builders don't touch CSS: mega-menu nav, breadcrumb, program-hero, benefits grid, level/accordion cards, pathway (scroll-snap), stat/trust bar, testimonial, logo wall (partners), package/pricing cards (parties), camp/event cards, location card + per-centre availability list, B2B capability block + enquiry CTA, FAQ accordion (CSS-only), footer with legal links. Document them in `style-tile.html`.
