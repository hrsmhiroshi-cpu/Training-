'use strict';
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const L = require('./layouts');
const { LOGO } = require('./design');

const { p1, p2 } = require('./content-a');
const { p4, p5 } = require('./content-b');
const { p9, p10 } = require('./content-c');

const DECKS = [p1, p2, p4, p5, p9, p10];
const OUT = path.resolve(__dirname, '..', 'decks');
fs.mkdirSync(OUT, { recursive: true });

let total = 0;
for (const deck of DECKS) {
  const pres = new pptxgen();          // one instance per output file
  pres.layout = 'LAYOUT_WIDE';         // must be set before adding slides
  pres.author = '警備員指導教育責任者';
  pres.title = deck.footJa;

  deck.slides.forEach((sd, i) => {
    const fn = L[sd.type];
    if (!fn) throw new Error(`unknown slide type: ${sd.type} in ${deck.file}`);
    fn(pres, sd, { footJa: deck.footJa, footEn: deck.footEn, n: i + 1 });
  });

  const out = path.join(OUT, deck.file);
  pres.writeFile({ fileName: out });
  total += deck.slides.length;
  console.log(`${deck.file.padEnd(34)} ${String(deck.slides.length).padStart(2)} slides`);
}
console.log(`\ntotal ${total} slides across ${DECKS.length} decks`);
console.log(LOGO ? `logo: embedded (${LOGO.path})` : 'logo: NOT PRESENT — area reserved, re-run after adding assets/logo.*');
