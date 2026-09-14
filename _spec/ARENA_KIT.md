# ARENA v4 page-builder kit

How every page on this site is built. Read this before touching a page. The stylesheet
(`css/styles.css`) and the interaction layer (`js/main.js`) are the only shared code; pages
are plain HTML that use the classes below and nothing else. No page-level CSS.

## Shared parts (copy verbatim from `index.html`)

1. `<head>`: fonts preconnect, favicon, `css/styles.css?v=arena4`, the `html.js` flag
   script, then the page's own title, description, canonical, Open Graph and JSON-LD.
2. `<header class="site-header">`: the canonical header. The only change per page is
   nothing; `main.js` marks the current page with `aria-current` automatically.
3. `<footer class="site-footer">`, the `.book-bar`, the `.wa-fab` WhatsApp float and the
   `<dialog id="finder-dialog">` class finder, all verbatim.
4. `<script defer src="js/main.js?v=arena4"></script>` last.

All links to `assets/icons.svg#name` and `assets/illustrations/*.png` are relative, so every
page lives in the site root.

## Page skeleton

```html
<main id="main">
  <section class="hero hero--sub [hero--gold|hero--red] [hero--split]" aria-label="…">
    <div class="hero__bg" aria-hidden="true"></div>
    <span class="ribbon" aria-hidden="true"></span>
    <div class="wrap">
      <div>
        <nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="programs.html">Programmes</a></li><li><a href="x.html" aria-current="page">This page</a></li></ol></nav>
        <span class="eyebrow gold">Programme · where it runs</span>
        <h1><span class="line"><span class="line__inner">First line</span></span><span class="line"><span class="line__inner stroke stroke--gold">Second line</span></span></h1>
        <p class="hero__lead lead">Answer-first sentence a search engine or an AI can quote whole, in plain text with no bold.</p>
        <div class="hero__cta"><a class="btn btn--gold" href="#book" data-finder data-magnetic>Book a trial <span class="arr">→</span></a><a class="btn btn--ghost" href="#levels">Jump to levels</a></div>
        <ul class="hero__facts"><li><b>Ages</b> 5 to 10</li><li><b>Where</b> All four centres</li></ul>
      </div>
      <div class="hero__art"><!-- optional: .starframe with a canvas[data-athlete="still"], or an approved character PNG --></div>
    </div>
  </section>
  … content sections …
  <section class="section section--gold bg-grid--ink book-cta" id="book">…</section>
  <section class="section section--arena"> .next-links (three onward links, no dead ends) </section>
</main>
```

`hero--split` puts `.hero__art` in a second column. Without it the hero is single column and
`.hero__art` should be left out. Animation stays simple: reveals, the beam, the ribbons, the
star spin and the ticker. No canvas figures.

## Section surfaces

`.section` plus one of `--paper` (default page ground), `--white`, `--grey`, `--gold`,
`--ink`, `--ink3`, `--arena` (deep black with a spotlight), optional `bg-grid` (dark) or
`bg-grid--ink` (light) texture. Alternate light and dark; open on light after the hero, end on
the gold booking band.

Section header: `.sec-head` > `div` (`.lower3` label + `h2.h-broadcast`) + `p.sec-note`.
Colour the lower-third bar with `<i>` (gold), `<i class="b">` (blue) or `<i class="r">`
(red). End broadcast headings with `<span class="fin">.</span>` for the red full stop.

## Components

| Need | Classes | Notes |
|---|---|---|
| Level-by-level detail | `.level` > `div.level__body` + `div.level__side` | Body: `h3`, `.level__meta` spans, prose, `h4` + `ul`. Side: `.avail` list, `.photo`, buttons |
| Per-centre availability | `ul.avail` > `span.avail__title` + `li` (`b` name + `span.mono`) | Only matrix-confirmed centres. `li.is-off` for centres where it does not run |
| Jump links | `.jumpnav` (`--dark` on dark) | Pills to `#level` anchors |
| Benefits / reasons | `.benefits` (3 cols; `--2`, `--4`) > `.benefit` | Each: `svg.icon` + `h4` + `p` |
| Flagship cards | `.feat` (`.feat--comp` for the blue competitive variant) | `.photo` on top, `.feat__body` below |
| Compact programme list | `.fixtures.fixtures--ink` (light) or `.fixtures` (dark) > `a.fixture` | number, name, meta, arrow |
| Three-step journey | `.steps` > `article.step` (`.step--gold` for the last) | icon, `.step__k`, `h3`, `p` |
| Pathway strip | `.pathway` block as on the homepage | Only where a horizontal sequence helps |
| Stats | `.scorewall` > `div` (`b` + `span`) | Add `data-count` to animate |
| Tickets (parties, camps, events) | `.ticket` > `.ticket__date[.gold/.blue/.red]` + `hr.ticket__divider` + `.ticket__body` | |
| Camp cards | `.camp-card` > `.camp-card__band[.blue/.red/.ink]` + `.camp-card__body` | |
| Price / package cards | `.pkg` (`.pkg--featured`) with `.pkg__flag`, `.pkg__guests`, `.pkg__price small`, `ul li[.is-not]` | Prices always carry "shown at booking" |
| Location cards | `.loc-card` > `.photo` + `.loc-card__body` (`h3`, `address`, `.go`) | |
| Contact rows | `ul.contact-list` (`--dark`) > `li` (`span.mono` label + value) | |
| Map | `.sgmap` (`--light`) with the SVG from `index.html` | |
| Quotes | `.quote.quote--gold/blue/red` with `.quote__stars`, `p`, `cite` | Representative until real reviews land |
| Logo wall | `.logo-wall` > `.logo-wall__item` | Labelled placeholders only |
| B2B capability | `.cap-block` (`--light`) and `.enquiry-cta` (`--light`) | |
| Audience tiles | `.bento` > `a.tile.tile--x` | Business hub |
| FAQ | `.faq` (`--dark`) > `details` > `summary` + `span.faq__x` + `div > p` | Mirror in FAQPage JSON-LD |
| Accordion | `.acc` (`--dark`) > `details` | |
| Notes | `.note` (`--dark`), `.kicker-note` | |
| Onward links | `.next-links` > `a.next-link` (`--light` on light) | |
| Photo | `<figure class="photo photo--img [--tall|--wide]"><img src="assets/photos/x.jpg" alt="…" width height loading="lazy"></figure>`; hero star uses `img.starframe__photo` | Photos come from the marketing Drive library (MARKETING / CONTENT); web copies live in `assets/photos/`, 1600px long edge, JPEG 70. A `.photo` div with a label is the placeholder form when no shot exists yet |
| Icons | `<svg class="icon"><use href="assets/icons.svg#name"/></svg>` | beam bars vault floor rings pommel trampoline ninja tots medal calendar party camp whatsapp pin shield eye clock check star podium spark heart arrow school building compass bolt hand |
| Buttons | `.btn` + `--gold` `--blue` `--red` `--ink` `--white` `--ghost` `--ghost-ink` `--wa`; sizes `--sm` `--lg` `--xl` | `data-magnetic` for the hover pull; `data-finder` opens the class finder |
| Logo | `.logo` with `img.logo__mark` (assets/logo/mark-240.png) and `img.logo__word` (wordmark-white-640 on dark, wordmark-ink-640 on light) | Official files from the brand folder, rendered with a transparent background; never redraw |
| People | `.people` (`--4`, `--5`) > `article.person` with `.person__photo` (img or `--initials`), `.person__name`, `.person__role` or `.person__chips`, `.person__line` or `.person__where`; `data-roles` and `data-centres` on coach cards drive the `.filters` pills through `[data-filter-root]` | Headshots in `assets/team/`, 900px, from the STAFF PHOTOS Drive folder. Roles come from the club's published roster only |
| Booking links | `data-book="jurong|bt|dempsey|dover"` and `data-wa="main|jurong|bt|dempsey|dover"` on any `<a>` | `main.js` keeps the href current; the HTML href is the no-JS fallback |

## Booking band (every page ends with one)

```html
<section class="section section--gold bg-grid--ink book-cta" id="book" aria-label="Book a trial class">
  <img class="book-cta__char" src="assets/illustrations/char-gold.png" alt="" aria-hidden="true" width="240" height="240" loading="lazy" />
  <div class="wrap" style="position:relative;z-index:1">
    <span class="eyebrow" style="color:var(--ink-3)" data-reveal>Ready when you are</span>
    <h2 class="hugeline" data-reveal>Book a <span class="stroke stroke--ink">trial</span> class.</h2>
    <p class="lead" data-reveal data-delay=".08">…page-specific line…</p>
    <div class="centres-cta">…four a.centre-cta as on index.html…</div>
    <div class="btn-row">…WhatsApp buttons…</div>
  </div>
</section>
```

Competitive, adult, business and event pages swap the wording (assessment, WhatsApp, enquiry)
but keep the band.

## The Yard voice (what makes the copy ours)

The reader is a member of a club, or about to become one. Write the way the best person on
the front desk talks: warm, conversational, specific and brief, like a knowledgeable friend who
happens to coach. Lead with what the child gets and what we can do. One clear recommendation
and one next step. No pressure language (`don't miss out`, `decide now`), no faux praise
(`perfect fit`, `brilliant programme`, `amazing`), no hedging, and no generic gym words
(`world-class`, `state-of-the-art`, `unleash`, `unlock`, `passion`, `thrive`, `nurture`,
`holistic`, `elevate`, `empower`, `seamless`, `bespoke`). Specific beats grand every time.

The Yard's own language, used with a light hand and never as a list:

- Members and the club. Families who train here belong to a club and are members of it. Say
  "members", "the club", "your child's coach", "the centre team".
- Four pillars, each with its own line. MOVE: Learning through motion, building your strength.
  PLAY: Fueled with fun, designed for progress. GROW: Developing character, skills for life.
  BELONG: Individual journeys, unique pathways, one community. The pillar lines may appear as
  labels or eyebrows; in prose, paraphrase them.
- Play to podium: one pathway from a toddler's first roll to the squads at the Jurong arena.
- How we coach: progress is the promise and the pace belongs to the child; foundations before
  sophistication; a good class keeps every child at the edge of what they can do, with the
  strain kept out; plateaus are part of progression; small steps, compounded; every step earns
  its place; what the coach does in the thirty seconds after a fall is the curriculum; we teach
  gymnastics and what we develop is character; a child who leaves us strong, coordinated and
  confident has had a successful time here, whatever sport comes next.
- The medal system. Bronze is a skill done with coach support, Silver is done independently
  with good technique, Gold is done with excellent form and confidence. Assessments three
  times a year celebrate effort and progress.
- Centre personalities from the 2026 Programme Guide: Dover, the All-Rounder; Dempsey, the
  Scenic Studio; Bukit Timah, the Ninja Hub; Jurong, the High-Performance Arena.
- The founder: Rosanna Trigg, a former international gymnast with thirty years as a competitive
  gymnast and coach in the UK, Mexico and Singapore, who founded Gym With Me in 2010 and The
  Yard in 2016. The mission, quotable as a quote: "Combining high-performance athletic
  training with holistic child development in a fun, safe, and nurturing environment."
- All ages and abilities welcome. Every recreational class starts from beginner level.
- The eight tenets of The Yard Way are internal and never appear on the public site. The
  four pillars and their lines are public.

## Content rules (checked by `execution/check_writing_style.py`)

- No em dashes anywhere in visible text. Use a comma, colon, full stop or brackets. En dashes
  are fine inside numeric ranges only if unavoidable; prefer "5 to 10".
- No negative parallelism: none of `X, not Y`, `rather than`, `not only … but`, `it is not`,
  `this is not`. State the positive claim once.
- No scaffolding (`Three things:`, `Importantly`, `That said`, `In other words`).
- No bold inside running prose. Bold lives in tables, labels (a leading label such as
  `Quick facts:` or a fact-pill key) and status markers only.
- Full sentences of natural, varied length. Headlines are complete thoughts. No runs of
  clipped fragments.
- No meeting-room framing (`in the room`, `around the table`, `on the day`). Name the
  action and who does it.
- The reader is the hero (the parent, the child, the teacher, the club). The Yard is the
  guide. Lead with what they want and what stands in the way, then the plan, then the win.

## Facts that must stay true

- Regular-class availability comes from `_spec/classcard_availability.md`:
  Gym Tots, KinderTots, FUNdamentals at all four; Warriors at Bukit Timah and Dover; Senior
  Warriors at Dover; boys' classes at Dempsey and Dover; Ninja Zone at Bukit Timah and
  Dempsey only; Tumbling and Trampoline at Jurong only; Adult at Jurong (Open Session) and
  Bukit Timah (Adult Foundation Gymnastics); Freestyle at Dover (camps confirmed, weekly
  classes "ask the team"); competitive squads train at all four centres, entered by free
  assessment and invitation.
- No centre is "the main centre".
- Prices: parties may show package prices with "prices shown at booking"; everything else
  says the fee is shown at booking or on enquiry.
- Client-only terms (fees, billing, withdrawal, make-up tokens) never appear on the public
  site. Link the Privacy Policy, Liability Waiver and Child Safe Sport Commitment on
  theyard.sg.
- The logo and the photographs are the approved files (brand folder and the marketing Drive
  library). The hand-drawn characters are approved art for small accents; the hand-drawn
  tagline lettering stays off the site.
- Skills content comes only from the Skills Matrix lists in the knowledge base (20 skills per
  level from FUNdamentals up, grouped by apparatus; Ninja 21/25/20; Tumbling 10 per level).
  Never pick a handful of skills to decorate a card; show the matrix structure or nothing.
  Gym Tots and KinderTots have no formal testing.
- Facts: coaching in Singapore for three decades; four centres totalling more than 30,000
  square feet; Jurong is 17,500 square feet. Ninja Zone, Tumbling and Trampoline, Freestyle
  and Adult are recreational programmes and are labelled that way.
- External links (booking portals, WhatsApp, social, theyard.sg policies) open in a new tab.
  Member Login is a dropdown of the four ClassCard portals.
- Schools, consultancy and athletic performance have no source content: honest capability
  and enquiry pages, no invented schools, case studies or numbers.
- Named clients: LinkedIn, TP ICAP, Chanel. No named partner schools.
- The team pages (`leadership.html`, `coaches.html`) carry only names, roles and centres that the
  club has already published (theyard.sg About Us, September 2026) plus the ClassCard timetable
  for centres. No bios beyond sourced facts; Carlos Ojeda's comes from his own MAG page.
- Contacts: WhatsApp main +65 8089 1440; Jurong +65 6816 8022 / wa.me/6587493709 /
  enquiries@theyard.com.sg; Bukit Timah +65 6914 9669 / wa.me/6589528017 /
  enquiries.bukittimah@theyard.com.sg; Dempsey +65 6914 9660 / wa.me/6589498693 /
  dempsey@theyard.com.sg; Dover +65 6914 9662 / wa.me/6588059607 /
  enquiries.dover@theyard.com.sg; data protection dpo@theyard.com.sg.
- Booking: book.jurong.theyard.sg, book.bukittimah.theyard.sg, book.dempsey.theyard.sg,
  book.dover.theyard.sg (Dover recreational still finishing its ClassCard migration; the
  link is swappable through `data-book`).
