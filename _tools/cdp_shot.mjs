// Full-page screenshots through the Chrome DevTools Protocol (Node 22+, no dependencies).
// usage: node cdp_shot.mjs <url> <width> <outPrefix> [sliceHeight]
// Writes <outPrefix>-N.png slices of the whole document at the given viewport width.
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const [url, widthArg, outPrefix, sliceArg] = process.argv.slice(2);
const width = parseInt(widthArg || '1440', 10);
const slice = parseInt(sliceArg || '1600', 10);
const port = 9333 + Math.floor(Math.random() * 500);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-prefers-reduced-motion',
  `--remote-debugging-port=${port}`, '--user-data-dir=/tmp/cdp-profile-' + port, '--no-first-run', 'about:blank'
], { stdio: 'ignore' });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function waitPort() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(`http://127.0.0.1:${port}/json/version`); if (r.ok) return; } catch {}
    await sleep(250);
  }
  throw new Error('chrome did not start');
}

try {
  await waitPort();
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: width < 700 });
  await send('Page.navigate', { url });
  await sleep(2500);
  // scroll through the page so IntersectionObserver reveals fire, then back to top
  const { result: h } = await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true });
  const total = h.result.value;
  for (let y = 0; y < total; y += 600) { await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` }); await sleep(40); }
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)' });
  await sleep(600);
  const { result: h2 } = await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true });
  const height = h2.result.value;
  let n = 0;
  for (let y = 0; y < height; y += slice) {
    const clip = { x: 0, y, width, height: Math.min(slice, height - y), scale: 1 };
    const shot = await send('Page.captureScreenshot', { format: 'png', clip, captureBeyondViewport: true });
    writeFileSync(`${outPrefix}-${n}.png`, Buffer.from(shot.result.data, 'base64'));
    n++;
  }
  console.log(`${url} -> ${n} slices (${width}x${height})`);
  ws.close();
} finally {
  chrome.kill('SIGKILL');
}
