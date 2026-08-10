'use strict';
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const L = require('./layouts');
const { LOGO } = require('./design');
const DEBRIEFS = require('./debriefs');

const { p1, p2 } = require('./content-a');
const { p4, p5 } = require('./content-b');
const { p9, p10 } = require('./content-c');

const DECKS = [p1, p2, p4, p5, p9, p10];
const OUT = path.resolve(__dirname, '..', 'decks');
fs.mkdirSync(OUT, { recursive: true });

// Every TTX case slide is followed by its model-answer slide. Cases keyed by
// `block`; the split-across-two-slides case (4-A) opts in via `debriefAfter`.
function withDebriefs(slides) {
  const out = [];
  for (const sd of slides) {
    out.push(sd);
    const key = sd.debriefAfter || (sd.type === 'caseSlide' ? sd.block : null);
    if (key && DEBRIEFS[key]) out.push(Object.assign({ type: 'debrief' }, DEBRIEFS[key]));
  }
  return out;
}

// The decks are projected from a long throw, so body text is large. That caps how
// much fits on one slide: topics run two per slide, lists five per slide. Anything
// longer is split across continuation slides rather than shrunk.
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function splitForLegibility(slides) {
  const out = [];
  for (const sd of slides) {
    if (sd.type === 'topics' && sd.topics.length > 2) {
      const parts = chunk(sd.topics, 2);
      parts.forEach((grp, i) => {
        out.push(Object.assign({}, sd, {
          topics: grp,
          titleJa: sd.titleJa + `（${i + 1}/${parts.length}）`,
          obj: i === 0 ? sd.obj : undefined,
          objEn: i === 0 ? sd.objEn : undefined,
        }));
      });
    } else if (sd.type === 'grid' && sd.items.length > 5) {
      const per = Math.ceil(sd.items.length / Math.ceil(sd.items.length / 5));
      const parts = chunk(sd.items, per);
      parts.forEach((grp, i) => {
        out.push(Object.assign({}, sd, {
          items: grp,
          titleJa: sd.titleJa + `（${i + 1}/${parts.length}）`,
          lead: i === 0 ? sd.lead : undefined,
          leadEn: i === 0 ? sd.leadEn : undefined,
        }));
      });
    } else {
      out.push(sd);
    }
  }
  return out;
}

let total = 0;
let debriefCount = 0;
for (const deck of DECKS) {
  const pres = new pptxgen();          // one instance per output file
  pres.layout = 'LAYOUT_WIDE';         // must be set before adding slides
  pres.author = '警備員指導教育責任者';
  pres.title = deck.footJa;

  const slides = splitForLegibility(withDebriefs(deck.slides));
  slides.forEach((sd, i) => {
    const fn = L[sd.type];
    if (!fn) throw new Error(`unknown slide type: ${sd.type} in ${deck.file}`);
    if (sd.type === 'debrief') debriefCount++;
    fn(pres, sd, { footJa: deck.footJa, footEn: deck.footEn, n: i + 1 });
  });

  const out = path.join(OUT, deck.file);
  pres.writeFile({ fileName: out });
  total += slides.length;
  console.log(`${deck.file.padEnd(34)} ${String(slides.length).padStart(2)} slides`);
}
console.log(`\ntotal ${total} slides across ${DECKS.length} decks (${debriefCount} model-answer slides)`);
console.log(LOGO ? `logo: embedded (${LOGO.path})` : 'logo: NOT PRESENT — area reserved, re-run after adding assets/logo.*');
