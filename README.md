# The Yard — Website Redesign (local prototype)

Phase 1 + 2 deliverable for the theyard.sg redesign: a clickable **wireframe** + **design-system style tile** built on the existing brand. Plain HTML/CSS, no build step.

> **Status:** wireframe / not production. Logos are **placeholders** — drop in official approved files only, never recreate. Photographic imagery is **suggested stock placeholders**, to be swapped for real centre photography before launch. The hand-drawn character illustrations in `assets/illustrations/` are approved brand art (from the brand Drive folder).

**Built to traffic priority:** the homepage leads with **recreational + competitive gymnastics** (largest traffic), then a secondary router ordered **Schools → Consultancy →** adults / camps / corporate / clubs.

**Improvements in this build:** mobile hamburger nav · accessible form labels + aria · JSON-LD structured data (SportsActivityLocation + per-centre, Course, FAQPage, Service) for SEO/AI-search · trust bar + testimonials · segmented CTAs · font preconnect · playful illustrations integrated.

## View it

Open `index.html` in a browser, or serve the folder:

```
cd /Users/rhys/Documents/Antigravity/theyard-website && python3 -m http.server 8080
```

Then visit http://localhost:8080

## Pages

| File | What it shows |
|---|---|
| `index.html` | Homepage wireframe — hero, "I'm here for…" audience router, programs, events, locations, IG strip, B2B teaser, booking CTA, footer |
| `style-tile.html` | Design system — colour palette + tints, type scale, buttons, badges, cards |
| `program.html` | Representative program page (Ninja Zone) — benefits, class flow, centre availability, FAQ, booking CTA |
| `business.html` | B2B page — one flexible template covering Schools / Consultancy / Corporate / Clubs + enquiry form |
| `css/styles.css` | All tokens + components (the eventual block-theme component library starts here) |

## Where this fits

- **Now (local):** this prototype — version-control it (`git init`) so design iterations are reviewable/reversible.
- **Phase 3 (local):** the production **WordPress block theme** (PHP/CSS/JS) is also maintained locally in git, then deployed to the WP host. WordPress runs on the server; the theme *source* stays local + tracked. These tokens/components port directly into block patterns.

Full plan: `~/.claude/plans/i-m-looking-to-redesign-glimmering-hamming.md`

## What I still need from you

**Required to start the build / protect SEO:**
1. Access to current theyard.sg (WP admin or export) + current theme/page-builder.
2. Google Search Console + GA access (or exports) — for the URL/keyword/backlink baseline + redirect map.
3. Official **logo source files** (SVG/AI/EPS) + full brand guidelines PDF.
4. ClassCard integration details — embed/widget vs deep-link? per-centre portal URLs + API docs.

**High-impact for design quality:**
5. Photography & video library (real centre/class/coach imagery) — or plan a shoot.
6. YouTube channel URL.
7. Reference sites you admire + competitors to differentiate from.
8. B2B voice/tone + messaging.

**Nice to have:** testimonials/reviews, awards/press, partner/school logos; confirmation of which CRM (iClassPro vs ClassCard) is live per centre during the redesign window.
