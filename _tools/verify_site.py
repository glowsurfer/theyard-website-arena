#!/usr/bin/env python3
"""Whole-site consistency checks for the ARENA v4 build."""
import re, json, sys, pathlib, html
root = pathlib.Path(__file__).resolve().parent.parent
pages = sorted(p for p in root.glob("*.html") if not p.name.startswith("__shot"))
names = {p.name for p in pages}
sprite_ids = set(re.findall(r'<symbol id="([^"]+)"', (root/"assets/icons.svg").read_text()))
def block(txt, start, end):
    i = txt.find(start); j = txt.find(end, i)
    return txt[i:j+len(end)] if i >= 0 and j >= 0 else None
ref = (root/"index.html").read_text()
ref_header = block(ref, '<header class="site-header">', '</header>')
ref_footer = block(ref, '<footer class="site-footer">', '</footer>')
ref_dialog = block(ref, '<dialog id="finder-dialog"', '</dialog>')
problems = 0
titles = {}
for p in pages:
    t = p.read_text()
    errs = []
    for label, must in [("header", '<header class="site-header">'), ("footer", '<footer class="site-footer">'), ("dialog", 'id="finder-dialog"'),
                        ("book-bar", 'class="book-bar"'), ("wa-fab", 'class="wa-fab"'), ("css", 'css/styles.css?v=arena4'), ("js", 'js/main.js?v=arena4'),
                        ("canonical", '<link rel="canonical"'), ("main", '<main id="main">'), ("skip", 'class="skip-link"')]:
        if must not in t: errs.append(f"missing {label}")
    if block(t, '<header class="site-header">', '</header>') != ref_header: errs.append("header differs from index.html")
    if block(t, '<footer class="site-footer">', '</footer>') != ref_footer: errs.append("footer differs from index.html")
    if block(t, '<dialog id="finder-dialog"', '</dialog>') != ref_dialog: errs.append("finder dialog differs from index.html")
    for h in re.findall(r'href="([^"#?:]+\.html)', t):
        if h not in names: errs.append(f"broken link {h}")
    for anchor in re.findall(r'href="([a-z-]+\.html)#([\w-]+)"', t):
        target = root/anchor[0]
        if target.exists() and f'id="{anchor[1]}"' not in target.read_text(): errs.append(f"missing anchor {anchor[0]}#{anchor[1]}")
    for a in re.findall(r'href="#([\w-]+)"', t):
        if f'id="{a}"' not in t: errs.append(f"missing local anchor #{a}")
    for icon in re.findall(r'icons\.svg#([\w-]+)', t):
        if icon not in sprite_ids: errs.append(f"unknown icon {icon}")
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', t, re.S):
        try: json.loads(m.group(1))
        except Exception as e: errs.append(f"invalid JSON-LD: {e}")
    for src in re.findall(r'src="(assets/[^"]+)"', t):
        if not (root/src).exists(): errs.append(f"missing asset {src}")
    title = re.search(r'<title>(.*?)</title>', t, re.S)
    if title:
        tt = html.unescape(title.group(1).strip())
        if tt in titles: errs.append(f"duplicate title with {titles[tt]}")
        titles[tt] = p.name
        if len(tt) > 70: errs.append(f"title {len(tt)} chars")
    desc = re.search(r'<meta name="description" content="([^"]*)"', t)
    if not desc: errs.append("missing meta description")
    if "—" in t: errs.append(f"{t.count('—')} em dash(es) in source")
    if 'class="page-home"' in t and p.name != "index.html": errs.append("page-home class on inner page")
    if "book-cta" not in t: errs.append("no booking band")
    if "next-links" not in t and p.name not in ("index.html", "style-tile.html"): errs.append("no onward links")
    if errs:
        problems += len(errs); print(f"{p.name}:"); [print("   -", e) for e in errs]
print(f"{len(pages)} pages checked, {problems} problem(s)")
sys.exit(1 if problems else 0)
