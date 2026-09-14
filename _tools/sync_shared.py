#!/usr/bin/env python3
"""Copy the shared chrome from index.html into every other page.

The header, footer, mobile booking bar, WhatsApp float and finder dialog must be byte-identical
on every page (verify_site.py checks it). Edit them once in index.html, then run this.
"""
import pathlib, re, sys
root = pathlib.Path(__file__).resolve().parent.parent
ref = (root / "index.html").read_text()
BLOCKS = [
    ('<header class="site-header">', '</header>'),
    ('<footer class="site-footer">', '</footer>'),
    ('<div class="book-bar">', '</div>'),
    ('<a class="wa-fab"', '</a>'),
    ('<dialog id="finder-dialog"', '</dialog>'),
]
def block(txt, start, end):
    i = txt.find(start)
    if i < 0: return None, -1, -1
    j = txt.find(end, i)
    return txt[i:j + len(end)], i, j + len(end)
changed = 0
for p in sorted(root.glob("*.html")):
    if p.name == "index.html" or p.name.startswith("__shot"): continue
    t = p.read_text(); orig = t
    for start, end in BLOCKS:
        new, _, _ = block(ref, start, end)
        old, i, j = block(t, start, end)
        if new is None or old is None: print(f"{p.name}: missing {start}"); continue
        if old != new: t = t[:i] + new + t[j:]
    if t != orig: p.write_text(t); changed += 1; print("synced", p.name)
print(f"{changed} page(s) updated")
