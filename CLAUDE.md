# CLAUDE.md

Workspace-wide rules live in `../CLAUDE.md`. System overview: `../docs/systems/website.md`.

Static prototype for theyard.sg v4 (the "Arena" concept): 28 pages plus `style-tile.html`, one stylesheet, one script
and no build step. It serves under `/arena/` on the review host, and the live WordPress build ports its components.

## Commands

```bash
python3 -m http.server 8080                       # preview at http://localhost:8080 (the icon sprite needs a server)
python3 _tools/verify_site.py                     # shared-chrome parity, links, anchors, icons, JSON-LD, titles
python3 ../execution/check_writing_style.py *.html
```

Both checks must pass before any review. Run the style checker on `*.html` only: the `_spec/*.md` files are internal
working notes that fail it by design, so the README's `check_writing_style.py .` form reports 317 false errors.

## Gotchas

- The header, footer, book bar, WhatsApp float and finder dialog are shared verbatim across pages. Edit them in
  `index.html` only, then run `_tools/sync_shared.py`; `verify_site.py` fails if they drift.
- Regular-class claims per centre must match `_spec/classcard_availability.md`. Camps, events and parties are exempt.
  Copy contract, components and voice rules are in `_spec/ARENA_KIT.md`.
- Visual checks use `_tools/cdp_shot.mjs`, `cdp_hover.mjs` and `cdp_eval.mjs` (headless Chrome over DevTools
  Protocol, Node 22 or later, no packages, screenshots to `/tmp`).
- `_tools/build_team.py` was a one-off migration that rewrote `index.html` and `assets/team/`. It has already run;
  leave it alone.
