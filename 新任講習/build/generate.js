'use strict';
// VRM 新任講習 Day1-2（14時限）ビルド
// 前回現任講習の生成系（design.js / layouts.js）をそのまま用いる。
//   node build/generate.js          全時限
//   node build/generate.js 1 2      指定した時限だけ
const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const L = require('./layouts');
const { LOGO } = require('./design');
const DEBRIEFS = require('./debriefs');

const PERIODS = {};
for (let i = 1; i <= 14; i++) {
  const f = path.join(__dirname, 'content', `p${String(i).padStart(2, '0')}.js`);
  if (fs.existsSync(f)) PERIODS[i] = require(f);
}

const OUT = path.resolve(__dirname, '..', 'out');
fs.mkdirSync(OUT, { recursive: true });

// TTX 出題スライドの直後に、同じ番号の模範解答スライドを差し込む。
function withDebriefs(slides) {
  const out = [];
  for (const sd of slides) {
    out.push(sd);
    const key = sd.debriefAfter || (sd.type === 'caseSlide' ? sd.block : null);
    if (key && DEBRIEFS[key]) out.push(Object.assign({ type: 'debrief' }, DEBRIEFS[key]));
  }
  return out;
}

// 遠距離投射のため本文を大きく組む。1枚に載る量が決まるので、topics は2件、
// grid は5件を上限に分割する。縮小せず、continuation スライドに送る。
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

const args = process.argv.slice(2).map(Number).filter(Boolean);
const targets = args.length ? args : Object.keys(PERIODS).map(Number).sort((a, b) => a - b);

let total = 0;
for (const n of targets) {
  const deck = PERIODS[n];
  if (!deck) { console.log(`--   第${String(n).padStart(2)}時限  未作成`); continue; }
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.author = '警備員指導教育責任者';
  pres.title = deck.footJa;

  const slides = splitForLegibility(withDebriefs(deck.slides));
  slides.forEach((sd, i) => {
    const fn = L[sd.type];
    if (!fn) throw new Error(`unknown slide type: ${sd.type} in ${deck.file}`);
    fn(pres, sd, { footJa: deck.footJa, footEn: deck.footEn, n: i + 1 });
  });
  pres.writeFile({ fileName: path.join(OUT, deck.file) });
  total += slides.length;
  console.log(`OK   第${String(n).padStart(2)}時限  ${String(slides.length).padStart(2)}枚  ${deck.file}`);
}
console.log(`\n合計 ${total} 枚 / ${targets.filter(n => PERIODS[n]).length} 時限`);
console.log(LOGO ? 'logo: embedded' : 'logo: NOT PRESENT');
