'use strict';
// 施設警備 現任教育 スライド — デザインシステム
// Design system for the bilingual (JA primary / EN secondary) training decks.
const fs = require('fs');
const path = require('path');

// ── Brand palette (taken from the corporate logo: navy + teal) ──────────────
const C = {
  navy:   '0F2D52',
  navyDk: '0A2039',
  teal:   '17AF98',
  tealDk: '0E8C79',
  ink:    '1B2733',
  muted:  '5F7183',
  tint:   'EFF4F8',
  tintTl: 'E4F4F0',
  line:   'D6E0E9',
  white:  'FFFFFF',
  warn:   'B5453C',
};

const F = { ja: 'Yu Gothic', en: 'Calibri' };

// ── Canvas geometry (LAYOUT_WIDE = 13.333 x 7.5) ────────────────────────────
const G = {
  W: 13.333, H: 7.5,
  M: 0.7,
  get CW() { return this.W - this.M * 2; },
  logo: { w: 0.86, h: 0.82, y: 0.36, get x() { return G.W - G.M - this.w; } },
  titleY: 0.52,
  get titleW() { return G.logo.x - G.M - 0.35; },
  bodyTop: 1.78,
  bodyBot: 6.82,
  footY: 6.98,
};

// ── Logo ────────────────────────────────────────────────────────────────────
// The logo is inserted at its native aspect ratio, unscaled in colour.
// If the asset has not arrived yet the area is simply left empty.
const LOGO_CANDIDATES = ['assets/logo.png', 'assets/logo.tif', 'assets/logo.tiff', 'assets/logo.jpg'];
const REPO = path.resolve(__dirname, '..');

function findLogo() {
  for (const rel of LOGO_CANDIDATES) {
    const p = path.join(REPO, rel);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

let LOGO = null;
try {
  const p = findLogo();
  if (p) {
    // PNG only can be measured without extra deps; converted upstream by prep-logo.js
    const meta = JSON.parse(fs.readFileSync(path.join(REPO, 'assets', 'logo.meta.json'), 'utf8'));
    LOGO = { path: p, ratio: meta.width / meta.height };
  }
} catch (e) { LOGO = null; }

// Fit the logo inside the reserved box without changing its aspect ratio.
function addLogo(slide, onDark) {
  const box = G.logo;
  if (onDark) {
    // White chip so the navy half of the logo stays legible. Logo colours untouched.
    slide.addShape('roundRect', {
      x: box.x - 0.14, y: box.y - 0.12, w: box.w + 0.28, h: box.h + 0.24,
      fill: { color: C.white }, line: { type: 'none' }, rectRadius: 0.06,
    });
  }
  if (!LOGO) return;
  const r = LOGO.ratio;
  let w = box.w, h = w / r;
  if (h > box.h) { h = box.h; w = h * r; }
  slide.addImage({
    path: LOGO.path,
    x: box.x + (box.w - w) / 2,
    y: box.y + (box.h - h) / 2,
    w, h,
  });
}

// ── Bilingual text helpers ──────────────────────────────────────────────────
const ja = (t, o = {}) => ({ text: t, options: Object.assign({ fontFace: F.ja, color: C.ink }, o) });
const en = (t, o = {}) => ({ text: t, options: Object.assign({ fontFace: F.en, color: C.muted, italic: true }, o) });

// A JA line with its EN line underneath, inside one text box.
function bi(slide, jaText, enText, o) {
  const { x, y, w, h, jaSize = 15, enSize = 10.5, jaColor = C.ink, enColor = C.muted, bold = true, align = 'left' } = o;
  slide.addText([
    ja(jaText, { fontSize: jaSize, bold, color: jaColor, breakLine: true }),
    en(enText, { fontSize: enSize, color: enColor }),
  ], { x, y, w, h, align, valign: 'top', margin: 0, lineSpacingMultiple: 0.92 });
}

// ── Slide chrome ────────────────────────────────────────────────────────────
function base(pres, { dark = false } = {}) {
  const s = pres.addSlide();
  s.background = { color: dark ? C.navy : C.white };
  addLogo(s, dark);
  return s;
}

function header(slide, titleJa, titleEn) {
  slide.addText([
    ja(titleJa, { fontSize: 27, bold: true, color: C.navy, breakLine: true }),
    en(titleEn, { fontSize: 12.5, color: C.teal }),
  ], { x: G.M, y: G.titleY, w: G.titleW, h: 1.05, valign: 'top', margin: 0, lineSpacingMultiple: 0.94 });
}

function footer(slide, leftJa, leftEn, num) {
  slide.addText([
    ja(leftJa + '  ', { fontSize: 9, color: C.muted, bold: false }),
    en(leftEn, { fontSize: 8.5, color: C.line }),
  ], { x: G.M, y: G.footY, w: 9.6, h: 0.32, valign: 'middle', margin: 0 });
  slide.addText(String(num), {
    x: G.W - G.M - 1.0, y: G.footY, w: 1.0, h: 0.32,
    align: 'right', valign: 'middle', margin: 0,
    fontFace: F.en, fontSize: 10, color: C.muted,
  });
}

// ── Motif: teal numbered badge ──────────────────────────────────────────────
function badge(slide, x, y, label, { size = 0.42, fill = C.teal, color = C.white } = {}) {
  slide.addShape('ellipse', { x, y, w: size, h: size, fill: { color: fill }, line: { type: 'none' } });
  slide.addText(String(label), {
    x, y, w: size, h: size, align: 'center', valign: 'middle', margin: 0,
    fontFace: F.en, fontSize: size >= 0.4 ? 14 : 11, bold: true, color,
  });
}

module.exports = { C, F, G, ja, en, bi, base, header, footer, badge, addLogo, LOGO };
