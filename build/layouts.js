'use strict';
// Slide layout renderers. Each returns nothing; it draws onto a fresh slide.
const { C, F, G, ja, en, bi, base, header, footer, badge } = require('./design');

// Fit n blocks into an available band, capping block height and centring the
// whole stack so short content does not leave one giant hole at the bottom.
function fit(topBase, bottom, n, gap, maxH) {
  const avail = bottom - topBase;
  let h = (avail - gap * (n - 1)) / n;
  if (maxH && h > maxH) h = maxH;
  const used = h * n + gap * (n - 1);
  return { h, top: topBase + (avail - used) / 2 };
}

// 1) Opening slide — dark navy, brand statement
function title(pres, d, ctx) {
  const s = base(pres, { dark: true });
  s.addText([
    ja(d.kicker, { fontSize: 13, bold: true, color: C.teal, breakLine: true }),
    en(d.kickerEn, { fontSize: 10.5, color: 'A9BCCE' }),
  ], { x: G.M, y: 1.55, w: 10.6, h: 0.7, valign: 'top', margin: 0 });

  const twoLine = /\n/.test(d.titleJa);
  s.addText(d.titleJa, {
    x: G.M, y: 2.42, w: 10.9, h: twoLine ? 1.62 : 0.98, valign: 'top', margin: 0,
    fontFace: F.ja, fontSize: 36, bold: true, color: C.white, lineSpacingMultiple: 0.98,
  });
  s.addText(d.titleEn, {
    x: G.M, y: twoLine ? 4.16 : 3.54, w: 10.9, h: 0.85, valign: 'top', margin: 0,
    fontFace: F.en, fontSize: 16, italic: true, color: '9FD8CD',
  });

  s.addShape('rect', { x: G.M, y: 5.28, w: 1.5, h: 0.035, fill: { color: C.teal }, line: { type: 'none' } });

  s.addText([
    ja(d.metaJa, { fontSize: 12, color: 'C9D6E2', bold: false, breakLine: true }),
    en(d.metaEn, { fontSize: 10, color: '8EA3B7' }),
  ], { x: G.M, y: 5.6, w: 10.9, h: 0.9, valign: 'top', margin: 0 });
  return s;
}

// 2) Numbered rows — the workhorse for principle / rule lists
function rows(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const items = d.rows;
  const top = G.bodyTop + (d.lead ? 0.72 : 0);
  if (d.lead) {
    bi(s, d.lead, d.leadEn, { x: G.M, y: G.bodyTop - 0.1, w: G.CW, h: 0.62, jaSize: 13, enSize: 10, jaColor: C.navy, bold: false });
  }
  const gap = items.length >= 5 ? 0.12 : 0.2;
  const { h: rh, top: rTop } = fit(top, G.bodyBot, items.length, gap, 1.28);
  items.forEach((it, i) => {
    const y = rTop + i * (rh + gap);
    s.addShape('roundRect', {
      x: G.M, y, w: G.CW, h: rh, rectRadius: 0.05,
      fill: { color: i % 2 === 0 ? C.tint : 'F7FAFC' }, line: { type: 'none' },
    });
    badge(s, G.M + 0.28, y + (rh - 0.42) / 2, it.n != null ? it.n : i + 1);
    const tx = G.M + 0.94;
    const tw = G.CW - 1.24;
    s.addText([
      ja(it.ja, { fontSize: it.small ? 15 : 17, bold: true, color: C.ink, breakLine: true }),
      en(it.en, { fontSize: it.small ? 13.5 : 15 }),
    ], { x: tx, y: y + 0.12, w: tw, h: rh - 0.2, valign: 'middle', margin: 0, lineSpacingMultiple: 0.92 });
  });
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 3) Cards — 2 or 3 across
function cards(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const list = d.cards;
  const n = list.length;
  const cols = d.cols || (n <= 2 ? 2 : 3);
  const rowsN = Math.ceil(n / cols);
  const top = G.bodyTop + (d.lead ? 0.68 : 0);
  if (d.lead) {
    bi(s, d.lead, d.leadEn, { x: G.M, y: G.bodyTop - 0.12, w: G.CW, h: 0.6, jaSize: 13, enSize: 10, jaColor: C.navy, bold: false });
  }
  const gx = 0.3, gy = 0.28;
  const cw = (G.CW - gx * (cols - 1)) / cols;
  const { h: ch, top: cTop } = fit(top, G.bodyBot, rowsN, gy, rowsN === 1 ? 3.25 : 2.45);
  list.forEach((c, i) => {
    const r = Math.floor(i / cols), col = i % cols;
    const x = G.M + col * (cw + gx);
    const y = cTop + r * (ch + gy);
    s.addShape('roundRect', {
      x, y, w: cw, h: ch, rectRadius: 0.05,
      fill: { color: c.accent ? C.tintTl : C.tint }, line: { type: 'none' },
    });
    badge(s, x + 0.26, y + 0.26, c.n != null ? c.n : i + 1, { fill: c.accent ? C.teal : C.navy });
    s.addText([
      ja(c.h, { fontSize: 19, bold: true, color: C.navy, breakLine: true }),
      en(c.hEn, { fontSize: 13, color: C.teal }),
    ], { x: x + 0.82, y: y + 0.24, w: cw - 1.08, h: 0.72, valign: 'top', margin: 0, lineSpacingMultiple: 0.9 });
    s.addText([
      ja(c.b, { fontSize: 15, bold: false, color: C.ink, breakLine: true }),
      en(c.bEn, { fontSize: 14 }),
    ], { x: x + 0.28, y: y + 1.06, w: cw - 0.56, h: ch - 1.28, valign: 'top', margin: 0, lineSpacingMultiple: 0.95 });
  });
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 4) Statute / key-message panel
function quote(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const boxY = G.bodyTop;
  const boxH = d.note ? 2.62 : 3.3;
  s.addShape('roundRect', {
    x: G.M, y: boxY, w: G.CW, h: boxH, rectRadius: 0.05,
    fill: { color: C.navy }, line: { type: 'none' },
  });
  s.addText(d.quoteJa, {
    x: G.M + 0.5, y: boxY + 0.34, w: G.CW - 1.0, h: boxH * 0.5 - 0.2, valign: 'top', margin: 0,
    fontFace: F.ja, fontSize: d.quoteSize || 18, bold: true, color: C.white, lineSpacingMultiple: 1.02,
  });
  s.addText(d.quoteEn, {
    x: G.M + 0.5, y: boxY + boxH * 0.5 + 0.16, w: G.CW - 1.0, h: boxH * 0.5 - 0.44, valign: 'top', margin: 0,
    fontFace: F.en, fontSize: d.quoteEnSize || 15, color: 'DCEFEB', lineSpacingMultiple: 1.0,
  });
  if (d.source) {
    s.addText(d.source, {
      x: G.M + 0.5, y: boxY + boxH - 0.42, w: G.CW - 1.0, h: 0.3, align: 'right', valign: 'middle', margin: 0,
      fontFace: F.en, fontSize: 10, color: C.teal,
    });
  }
  if (d.note) {
    const noteH = Math.min(G.bodyBot - (boxY + boxH + 0.3), d.noteH || 1.42);
    const ny = G.bodyBot - noteH;
    s.addShape('roundRect', {
      x: G.M, y: ny, w: G.CW, h: noteH, rectRadius: 0.05,
      fill: { color: C.tintTl }, line: { type: 'none' },
    });
    badge(s, G.M + 0.3, ny + (noteH - 0.4) / 2, '!', { size: 0.4 });
    s.addText([
      ja(d.note, { fontSize: 16, bold: true, color: C.navy, breakLine: true }),
      en(d.noteEn, { fontSize: 14, color: C.ink }),
    ], { x: G.M + 0.94, y: ny + 0.12, w: G.CW - 1.3, h: noteH - 0.24, valign: 'middle', margin: 0, lineSpacingMultiple: 0.95 });
  }
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 5) Two-column comparison
function two(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const top = G.bodyTop + (d.lead ? 0.66 : 0);
  if (d.lead) {
    bi(s, d.lead, d.leadEn, { x: G.M, y: G.bodyTop - 0.12, w: G.CW, h: 0.58, jaSize: 13, enSize: 10, jaColor: C.navy, bold: false });
  }
  const gx = 0.34;
  const cw = (G.CW - gx) / 2;
  const ch = G.bodyBot - top - (d.note ? 0.92 : 0);
  [d.left, d.right].forEach((col, i) => {
    const x = G.M + i * (cw + gx);
    s.addShape('roundRect', {
      x, y: top, w: cw, h: ch, rectRadius: 0.05,
      fill: { color: i === 0 ? C.tint : C.tintTl }, line: { type: 'none' },
    });
    s.addText([
      ja(col.h, { fontSize: 19, bold: true, color: i === 0 ? C.navy : C.tealDk, breakLine: true }),
      en(col.hEn, { fontSize: 13, color: C.muted }),
    ], { x: x + 0.3, y: top + 0.24, w: cw - 0.6, h: 0.74, valign: 'top', margin: 0, lineSpacingMultiple: 0.9 });
    const items = [];
    col.items.forEach((it, k) => {
      items.push(ja('・' + it.ja, { fontSize: 15, bold: true, color: C.ink, breakLine: true }));
      items.push(en(it.en, { fontSize: 14, breakLine: k !== col.items.length - 1 }));
    });
    s.addText(items, {
      x: x + 0.3, y: top + 1.08, w: cw - 0.6, h: ch - 1.34, valign: 'top', margin: 0,
      paraSpaceAfter: 3, lineSpacingMultiple: 0.94,
    });
  });
  if (d.note) {
    const ny = top + ch + 0.24;
    bi(s, d.note, d.noteEn, { x: G.M, y: ny, w: G.CW, h: 0.68, jaSize: 13, enSize: 10, jaColor: C.tealDk });
  }
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 6) Compact 2-column checklist (mini TTX ○×, phrase banks)
function grid(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const top = G.bodyTop + (d.lead ? 0.62 : 0);
  if (d.lead) {
    bi(s, d.lead, d.leadEn, { x: G.M, y: G.bodyTop - 0.14, w: G.CW, h: 0.56, jaSize: 13, enSize: 10, jaColor: C.navy, bold: false });
  }
  const items = d.items;
  const cols = d.cols || 2;
  const rowsN = Math.ceil(items.length / cols);
  const gx = 0.3, gy = 0.16;
  const cw = (G.CW - gx * (cols - 1)) / cols;
  const { h: ch, top: gTop } = fit(top, G.bodyBot, rowsN, gy, cols === 1 ? 0.92 : 1.02);
  items.forEach((it, i) => {
    const r = Math.floor(i / cols), col = i % cols;
    const x = G.M + col * (cw + gx);
    const y = gTop + r * (ch + gy);
    s.addShape('roundRect', { x, y, w: cw, h: ch, rectRadius: 0.04, fill: { color: C.tint }, line: { type: 'none' } });
    badge(s, x + 0.2, y + (ch - 0.36) / 2, it.n != null ? it.n : i + 1, { size: 0.36, fill: C.navy });
    s.addText([
      ja(it.ja, { fontSize: 15, bold: true, color: C.ink, breakLine: true }),
      en(it.en, { fontSize: 14 }),
    ], { x: x + 0.66, y: y + 0.08, w: cw - 0.92, h: ch - 0.16, valign: 'middle', margin: 0, lineSpacingMultiple: 0.9 });
  });
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 7) TTX scenario — situation panel + questions
function ttx(pres, d, ctx) {
  const s = base(pres);
  header(s, d.titleJa, d.titleEn);
  const sy = G.bodyTop;
  const sh = d.scenarioH || 1.62;
  s.addShape('roundRect', { x: G.M, y: sy, w: G.CW, h: sh, rectRadius: 0.05, fill: { color: C.navy }, line: { type: 'none' } });
  s.addText([
    ja('状況付与  ', { fontSize: 10.5, bold: true, color: C.teal }),
    en('SITUATION', { fontSize: 9, color: C.teal, italic: false, breakLine: true }),
    ja(d.scenarioJa, { fontSize: 13.5, bold: true, color: C.white, breakLine: true }),
    en(d.scenarioEn, { fontSize: 13.5, color: 'DCEFEB' }),
  ], { x: G.M + 0.42, y: sy + 0.2, w: G.CW - 0.84, h: sh - 0.4, valign: 'top', margin: 0, lineSpacingMultiple: 0.96 });

  const qy = sy + sh + 0.26;
  const qh = G.bodyBot - qy - (d.inject ? 0.98 : 0);
  const qs = d.questions;
  const gap = 0.1;
  const rh = (qh - gap * (qs.length - 1)) / qs.length;
  qs.forEach((q, i) => {
    const y = qy + i * (rh + gap);
    s.addShape('roundRect', { x: G.M, y, w: G.CW, h: rh, rectRadius: 0.04, fill: { color: C.tint }, line: { type: 'none' } });
    badge(s, G.M + 0.24, y + (rh - 0.36) / 2, i + 1, { size: 0.36 });
    s.addText([
      ja(q.ja, { fontSize: 13, bold: true, color: C.ink, breakLine: true }),
      en(q.en, { fontSize: 9.5, color: C.muted }),
    ], { x: G.M + 0.76, y: y + 0.06, w: G.CW - 1.04, h: rh - 0.12, valign: 'middle', margin: 0, lineSpacingMultiple: 0.9 });
  });
  if (d.inject) {
    const iy = G.bodyBot - 0.82;
    s.addShape('roundRect', { x: G.M, y: iy, w: G.CW, h: 0.82, rectRadius: 0.04, fill: { color: C.tintTl }, line: { type: 'none' } });
    s.addText([
      ja('追加付与  ', { fontSize: 10, bold: true, color: C.tealDk }),
      en('INJECT   ', { fontSize: 8.5, color: C.tealDk, italic: false }),
      ja(d.inject, { fontSize: 12.5, bold: true, color: C.ink, breakLine: true }),
      en(d.injectEn, { fontSize: 9, color: C.muted }),
    ], { x: G.M + 0.3, y: iy + 0.08, w: G.CW - 0.6, h: 0.66, valign: 'middle', margin: 0, lineSpacingMultiple: 0.9 });
  }
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// 8) Closing / recap
function close(pres, d, ctx) {
  const s = base(pres, { dark: true });
  s.addText([
    ja(d.titleJa, { fontSize: 30, bold: true, color: C.white, breakLine: true }),
    en(d.titleEn, { fontSize: 13, color: '9FD8CD' }),
  ], { x: G.M, y: 0.72, w: 10.6, h: 1.3, valign: 'top', margin: 0, lineSpacingMultiple: 0.96 });

  const top = 2.28;
  const gap = 0.22;
  const rh = (5.9 - top - gap * (d.rows.length - 1)) / d.rows.length;
  d.rows.forEach((it, i) => {
    const y = top + i * (rh + gap);
    s.addShape('roundRect', { x: G.M, y, w: G.CW, h: rh, rectRadius: 0.05, fill: { color: C.navyDk }, line: { type: 'none' } });
    badge(s, G.M + 0.3, y + (rh - 0.42) / 2, it.n != null ? it.n : i + 1);
    s.addText([
      ja(it.ja, { fontSize: 15, bold: true, color: C.white, breakLine: true }),
      en(it.en, { fontSize: 10.5, color: '9FB6CB' }),
    ], { x: G.M + 0.96, y: y + 0.1, w: G.CW - 1.3, h: rh - 0.2, valign: 'middle', margin: 0, lineSpacingMultiple: 0.92 });
  });
  if (d.next) {
    s.addText([
      ja(d.next, { fontSize: 12, bold: true, color: C.teal, breakLine: true }),
      en(d.nextEn, { fontSize: 9.5, color: '8EA3B7' }),
    ], { x: G.M, y: 6.12, w: G.CW, h: 0.66, valign: 'top', margin: 0 });
  }
  return s;
}

module.exports = { title, rows, cards, quote, two, grid, ttx, close };

// ─────────────────────────────────────────────────────────────────────────────
// Dense layouts matching the VRM corporate deck format:
// learning objective band → numbered topics with sub-bullets → Site SOP → sources
// ─────────────────────────────────────────────────────────────────────────────

const DENSE = {
  titleY: 0.40, titleH: 0.82,
  objY: 1.22, objH: 0.64,
  bodyTop: 1.94, bodyBot: 6.46,
  sopY: 6.52, sopH: 0.32,
  srcY: 6.86, srcH: 0.24,
};

function headerSm(slide, titleJa, titleEn, blockLabel) {
  slide.addText([
    ja(titleJa, { fontSize: 27, bold: true, color: C.navy, breakLine: true }),
    en(titleEn, { fontSize: 14, color: C.teal }),
  ], { x: G.M, y: DENSE.titleY, w: G.titleW - 0.9, h: DENSE.titleH, valign: 'top', margin: 0, lineSpacingMultiple: 0.94 });
  if (blockLabel) {
    slide.addShape('roundRect', {
      x: G.logo.x - 1.18, y: DENSE.titleY + 0.06, w: 1.02, h: 0.34, rectRadius: 0.05,
      fill: { color: C.navy }, line: { type: 'none' },
    });
    slide.addText(blockLabel, {
      x: G.logo.x - 1.18, y: DENSE.titleY + 0.06, w: 1.02, h: 0.34,
      align: 'center', valign: 'middle', margin: 0,
      fontFace: F.en, fontSize: 11, bold: true, color: C.white,
    });
  }
}

function objectiveBand(slide, objJa, objEn) {
  slide.addShape('roundRect', {
    x: G.M, y: DENSE.objY, w: G.CW, h: DENSE.objH, rectRadius: 0.04,
    fill: { color: C.tintTl }, line: { type: 'none' },
  });
  slide.addText([
    ja('身につくこと　', { fontSize: 11, bold: true, color: C.tealDk }),
    en('What You\'ll Learn　', { fontSize: 10.5, color: C.tealDk }),
    ja(objJa, { fontSize: 13, bold: true, color: C.ink, breakLine: true }),
    en(objEn, { fontSize: 12.5 }),
  ], { x: G.M + 0.26, y: DENSE.objY + 0.05, w: G.CW - 0.52, h: DENSE.objH - 0.1, valign: 'middle', margin: 0, lineSpacingMultiple: 0.9 });
}

function sopBand(slide, sopJa, sopEn, label) {
  if (!sopJa) return;
  slide.addText([
    ja((label || 'Site SOP優先') + '　', { fontSize: 10, bold: true, color: C.tealDk }),
    ja(sopJa, { fontSize: 10, bold: false, color: C.ink, breakLine: true }),
    en(sopEn || '', { fontSize: 9, color: C.muted, italic: true }),
  ], { x: G.M, y: DENSE.sopY, w: G.CW, h: DENSE.sopH, valign: 'top', margin: 0, lineSpacingMultiple: 0.88 });
}

function srcLine(slide, sources) {
  if (!sources) return;
  slide.addText([
    ja('ソース　', { fontSize: 7.5, bold: true, color: C.line }),
    ja(sources, { fontSize: 7.5, bold: false, color: C.muted }),
  ], { x: G.M, y: DENSE.srcY, w: G.CW - 1.1, h: DENSE.srcH, valign: 'top', margin: 0 });
}

// Numbered topics, each with sub-bullets. cols 1-3, rows as needed.
function topics(pres, d, ctx) {
  const s = base(pres);
  headerSm(s, d.titleJa, d.titleEn, d.block);
  if (d.obj) objectiveBand(s, d.obj, d.objEn);

  const list = d.topics;
  const cols = d.cols || 2;
  const rowsN = Math.ceil(list.length / cols);
  const top = d.obj ? DENSE.bodyTop : DENSE.objY;
  const gx = 0.28, gy = 0.22;
  const cw = (G.CW - gx * (cols - 1)) / cols;
  const ch = ((DENSE.bodyBot - top) - gy * (rowsN - 1)) / rowsN;

  list.forEach((t, i) => {
    const r = Math.floor(i / cols), col = i % cols;
    const x = G.M + col * (cw + gx);
    const y = top + r * (ch + gy);
    s.addShape('roundRect', {
      x, y, w: cw, h: ch, rectRadius: 0.04,
      fill: { color: i % 2 === 0 ? C.tint : 'F7FAFC' }, line: { type: 'none' },
    });
    badge(s, x + 0.2, y + 0.18, t.n != null ? t.n : i + 1, { size: 0.34, fill: C.navy });
    s.addText([
      ja(t.h, { fontSize: 17, bold: true, color: C.navy, breakLine: true }),
      en(t.hEn, { fontSize: 14, color: C.teal }),
    ], { x: x + 0.62, y: y + 0.14, w: cw - 0.84, h: 0.56, valign: 'top', margin: 0, lineSpacingMultiple: 0.88 });

    const runs = [];
    t.b.forEach((bl, k) => {
      const last = k === t.b.length - 1;
      runs.push(ja('・' + bl.ja, { fontSize: 14, bold: false, color: C.ink, breakLine: true }));
      runs.push(en(bl.en, { fontSize: 13.5, breakLine: !last }));
    });
    s.addText(runs, {
      x: x + 0.24, y: y + 0.74, w: cw - 0.48, h: ch - 0.9, valign: 'top', margin: 0,
      paraSpaceAfter: 2, lineSpacingMultiple: 0.9,
    });
  });

  sopBand(s, d.sop, d.sopEn, d.sopLabel);
  srcLine(s, d.sources);
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

// VRM-style case slide: scenario → question → points to consider → inject
function caseSlide(pres, d, ctx) {
  const s = base(pres);
  headerSm(s, d.titleJa, d.titleEn, d.block || 'CASE');

  const sy = DENSE.objY;
  // Size the scenario panel to its text rather than leaving a fixed hole.
  const jaLines = Math.ceil(d.scenarioJa.length / 74);
  const enLines = Math.ceil(d.scenarioEn.length / 150);
  const sh = d.scenarioH ||
    Math.min(2.20, Math.max(1.05, 0.40 + jaLines * 0.21 + enLines * 0.135 + 0.14));
  s.addShape('roundRect', { x: G.M, y: sy, w: G.CW, h: sh, rectRadius: 0.04, fill: { color: C.navy }, line: { type: 'none' } });
  s.addText([
    ja('シナリオ　', { fontSize: 11, bold: true, color: C.teal }),
    en('SCENARIO', { fontSize: 9.5, color: C.teal, breakLine: true }),
    ja(d.scenarioJa, { fontSize: 15, bold: true, color: C.white, breakLine: true }),
    en(d.scenarioEn, { fontSize: 13.5, color: 'DCEFEB' }),
  ], { x: G.M + 0.34, y: sy + 0.14, w: G.CW - 0.68, h: sh - 0.28, valign: 'top', margin: 0, lineSpacingMultiple: 0.92 });

  const qy = sy + sh + 0.16;
  s.addText([
    ja('問い　', { fontSize: 12, bold: true, color: C.tealDk }),
    ja(d.questionJa, { fontSize: 16, bold: true, color: C.navy, breakLine: true }),
    en(d.questionEn, { fontSize: 13.5 }),
  ], { x: G.M, y: qy, w: G.CW, h: 0.62, valign: 'top', margin: 0, lineSpacingMultiple: 0.9 });

  const py = qy + 0.68;
  const pts = d.points;
  const cols = 2;
  const rowsN = Math.ceil(pts.length / cols);
  const gx = 0.28, gy = 0.12;
  const cw = (G.CW - gx) / cols;
  const nInj = (d.inject ? 1 : 0) + (d.inject2 ? 1 : 0);
  const bot = nInj ? DENSE.sopY - 0.16 - nInj * 0.46 - (nInj - 1) * 0.06 : DENSE.sopY - 0.06;
  const ch = ((bot - py) - gy * (rowsN - 1)) / rowsN;
  pts.forEach((p, i) => {
    const r = Math.floor(i / cols), col = i % cols;
    const x = G.M + col * (cw + gx);
    const y = py + r * (ch + gy);
    s.addShape('roundRect', { x, y, w: cw, h: ch, rectRadius: 0.04, fill: { color: C.tint }, line: { type: 'none' } });
    badge(s, x + 0.18, y + (ch - 0.32) / 2, i + 1, { size: 0.32, fill: C.teal });
    s.addText([
      ja(p.ja, { fontSize: 14, bold: true, color: C.ink, breakLine: true }),
      en(p.en, { fontSize: 13.5 }),
    ], { x: x + 0.6, y: y + 0.06, w: cw - 0.8, h: ch - 0.12, valign: 'middle', margin: 0, lineSpacingMultiple: 0.88 });
  });

  const injs = [];
  if (d.inject) injs.push({ t: d.inject, e: d.injectEn });
  if (d.inject2) injs.push({ t: d.inject2, e: d.inject2En });
  injs.forEach((it, i) => {
    const iy = DENSE.sopY - 0.10 - (injs.length - i) * 0.46 - (injs.length - 1 - i) * 0.06;
    s.addShape('roundRect', { x: G.M, y: iy, w: G.CW, h: 0.46, rectRadius: 0.04, fill: { color: C.tintTl }, line: { type: 'none' } });
    s.addText([
      ja('追加付与' + (i === 0 ? '①' : '②') + '　', { fontSize: 10.5, bold: true, color: C.tealDk }),
      ja(it.t, { fontSize: 13.5, bold: true, color: C.ink, breakLine: true }),
      en(it.e, { fontSize: 12.5 }),
    ], { x: G.M + 0.26, y: iy + 0.03, w: G.CW - 0.52, h: 0.40, valign: 'middle', margin: 0, lineSpacingMultiple: 0.86 });
  });

  sopBand(s, d.sop, d.sopEn, d.sopLabel);
  srcLine(s, d.sources);
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}

module.exports.topics = topics;
module.exports.caseSlide = caseSlide;

// 9) Debrief — answers keyed to the SAME numbers as the case slide's questions
function debrief(pres, d, ctx) {
  const s = base(pres);
  headerSm(s, d.titleJa, d.titleEn, d.block || 'DEBRIEF');

  const injects = [d.inject1, d.inject2].filter(Boolean);
  const splitH = d.split ? 0.50 : 0;
  const injH = injects.length ? injects.length * 0.46 + (injects.length - 1) * 0.08 : 0;
  const tailH = (splitH ? splitH + 0.12 : 0) + (injH ? injH + 0.12 : 0);

  const top = DENSE.objY;
  const bot = DENSE.sopY - 0.10 - tailH;
  const ans = d.answers;
  const gap = 0.11;
  const rh = (bot - top - gap * (ans.length - 1)) / ans.length;

  ans.forEach((a, i) => {
    const y = top + i * (rh + gap);
    s.addShape('roundRect', {
      x: G.M, y, w: G.CW, h: rh, rectRadius: 0.04,
      fill: { color: a.key ? C.tintTl : C.tint }, line: { type: 'none' },
    });
    badge(s, G.M + 0.22, y + (rh - 0.38) / 2, (d.startN || 1) + i, { size: 0.38, fill: C.teal });
    s.addText([
      ja((d.qLabel || '問') + ((d.startN || 1) + i) + '　' + a.q, { fontSize: 11.5, bold: false, color: C.muted, breakLine: true }),
      ja(a.a, { fontSize: 15, bold: true, color: C.ink, breakLine: true }),
      en(a.aEn, { fontSize: 14 }),
    ], { x: G.M + 0.70, y: y + 0.07, w: G.CW - 0.96, h: rh - 0.14, valign: 'middle', margin: 0, lineSpacingMultiple: 0.88 });
  });

  let cy = top + ans.length * (rh + gap) + 0.01;
  injects.forEach((it, i) => {
    const y = cy + i * (0.46 + 0.08);
    s.addShape('roundRect', { x: G.M, y, w: G.CW, h: 0.46, rectRadius: 0.04, fill: { color: 'EEF6FA' }, line: { type: 'none' } });
    s.addText([
      ja('追加付与' + (i === 0 ? '①' : '②') + '　', { fontSize: 10.5, bold: true, color: C.tealDk }),
      ja(it.q + '　→　', { fontSize: 10.5, bold: false, color: C.muted }),
      ja(it.a, { fontSize: 13.5, bold: true, color: C.ink, breakLine: true }),
      en(it.aEn, { fontSize: 12.5 }),
    ], { x: G.M + 0.24, y: y + 0.03, w: G.CW - 0.48, h: 0.40, valign: 'middle', margin: 0, lineSpacingMultiple: 0.86 });
  });
  if (injects.length) cy += injH + 0.12;

  if (d.split) {
    s.addShape('roundRect', { x: G.M, y: cy, w: G.CW, h: splitH, rectRadius: 0.04, fill: { color: C.navy }, line: { type: 'none' } });
    s.addText([
      ja('割れる論点　', { fontSize: 10.5, bold: true, color: C.teal }),
      ja(d.split, { fontSize: 13, bold: true, color: C.white, breakLine: true }),
      en(d.splitEn, { fontSize: 12, color: 'DCEFEB' }),
    ], { x: G.M + 0.24, y: cy + 0.03, w: G.CW - 0.48, h: splitH - 0.06, valign: 'middle', margin: 0, lineSpacingMultiple: 0.86 });
  }

  sopBand(s, d.sop, d.sopEn, d.sopLabel);
  srcLine(s, d.sources);
  footer(s, ctx.footJa, ctx.footEn, ctx.n);
  return s;
}
module.exports.debrief = debrief;
