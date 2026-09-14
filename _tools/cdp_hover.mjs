// usage: node cdp_hover.mjs <url> <width> <height> <out.png> <selector> [index]
// Scrolls the element into view, moves the real mouse over it (so :hover applies), screenshots the viewport.
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const [url, w, h, out, sel, idxArg] = process.argv.slice(2);
const idx = parseInt(idxArg || '0', 10);
const port = 9333 + Math.floor(Math.random() * 500);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new','--disable-gpu','--hide-scrollbars','--force-prefers-reduced-motion',`--remote-debugging-port=${port}`,'--user-data-dir=/tmp/cdp-profile-'+port,'--no-first-run','about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
try {
  for (let i = 0; i < 60; i++) { try { if ((await fetch(`http://127.0.0.1:${port}/json/version`)).ok) break; } catch {} await sleep(250); }
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: +w, height: +h, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url }); await sleep(2000);
  const r = await send('Runtime.evaluate', { expression: `(() => { const el = document.querySelectorAll(${JSON.stringify(sel)})[${idx}]; if (!el) return null; el.scrollIntoView({block:'center'}); const b = el.getBoundingClientRect(); return {x: b.left + b.width/2, y: b.top + b.height/2}; })()`, returnByValue: true });
  const pt = r.result.result.value; if (!pt) { console.log('selector not found'); }
  else { await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: pt.x, y: pt.y }); await sleep(600); }
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(out, Buffer.from(shot.result.data, 'base64')); console.log('saved', out, pt);
  ws.close();
} finally { chrome.kill('SIGKILL'); }
