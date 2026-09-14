# The Yard website, ARENA v4 (design concept, local prototype)

The "Arena" direction for the theyard.sg redesign, rebuilt in September 2026 as v4. A
29-page static site (28 public pages plus the style tile) built on one stylesheet and one
script, with no build step. It is a review prototype: logos and photography are labelled
placeholders, and the production build will be a WordPress block theme that ports these
components.

## What v4 is

- Competition-day spectacle on every page: a spotlit arena hero with real Yard photography in
  the halftone star, brand ribbons, a broadcast ticker, and light editorial sections
  underneath so the copy stays readable. Animation is kept simple (reveals, beam, ribbons,
  star spin, ticker).
- Conversion first. The homepage opens with a two-tap class finder (age band and centre) that
  returns the matrix-confirmed class, what happens in it and a direct booking link for that
  centre. The same finder opens as a dialog from every "Book a trial" button on every page.
  A sticky mobile booking bar and a WhatsApp float are on every page, and every page ends
  with the gold booking band and three onward links.
- Copy rewritten to the house voice: the parent or child is the hero, The Yard is the guide,
  and the six writing rules are enforced with the style checker (see Verification).
- Availability discipline unchanged: every regular-class claim comes from
  `_spec/classcard_availability.md`.

## Files

| Path | Role |
|---|---|
| `css/styles.css` | Tokens, base, the component kit and the arena concept layer |
| `js/main.js` | Nav, header, reveals, count-ups, pathway strip, magnetic buttons, spotlight, class finder, athlete canvas, booking-link map |
| `assets/icons.svg` | Stroke icon sprite (`<use href="assets/icons.svg#beam">`) |
| `assets/arena/` | Arena backdrop and halftone star (self-contained SVG) |
| `assets/logo/` | Official mark and wordmark with transparent backgrounds, built from the brand files |
| `assets/photos/` | Web-sized photographs from the marketing Drive library (MARKETING / CONTENT) |
| `assets/team/` | Staff headshots from the STAFF PHOTOS Drive folder, for `leadership.html` and `coaches.html` |
| `assets/illustrations/` | Approved hand-drawn characters (small accents only) |
| `_spec/ARENA_KIT.md` | The page-builder contract: skeleton, components, content rules, facts |
| `style-tile.html` | Living documentation of the kit (noindex) |
| `llms.txt`, `robots.txt`, `sitemap.xml` | Search and AI-search discovery |

## View it

```
cd "/Users/rhys/Documents/The Yard - Dev Projects/theyard-website-exp-arena" && python3 -m http.server 8080
```

Then open http://localhost:8080. The pages also work opened directly from disk, except the
icon sprite, which needs a server.

## Verification (run before any review)

```
python3 "../execution/check_writing_style.py" .   # house writing rules, 0 errors expected
python3 _tools/verify_site.py                     # shared parts identical, links, anchors, icons, JSON-LD, titles
python3 -m http.server 8765 &                     # then, for visual checks:
node _tools/cdp_shot.mjs http://localhost:8765/index.html 1440 /tmp/index 1700   # full-page slices
node _tools/cdp_shot.mjs http://localhost:8765/index.html 400 /tmp/index-m 2400  # phone width
node _tools/cdp_eval.mjs http://localhost:8765/index.html 1440 1000 /tmp/dialog.png "document.querySelector('[data-finder]').click(); document.getElementById('finder-dialog').open"
```

`cdp_shot.mjs` drives headless Chrome over the DevTools Protocol (Node 22 or later, no
packages) and scrolls the page first so reveal animations have fired. `cdp_eval.mjs` runs a
JavaScript expression after load, prints the result and any console errors, then screenshots
the viewport.

## Before launch

1. Review the photo choices (48 shots picked from a sample of the Drive library; the About
   page still needs a leadership photo and a coaching-team photo) and confirm consent for the
   children pictured.
2. Confirm the four booking URLs, especially Dover while its recreational classes finish
   moving to ClassCard; the `data-book` attributes make the swap a one-line change in
   `js/main.js`.
3. Embed live Google reviews in place of the representative quotes.
4. Confirm which awards may be named, the canonical Instagram handle, and the partner
   schools list.
5. Wire the contact form to an endpoint and the map to a live embed.
