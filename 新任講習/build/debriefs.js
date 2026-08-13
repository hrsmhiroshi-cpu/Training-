'use strict';
// TTX 講評（模範解答）。設問①〜④とスライドの番号が一致するように書く。
// Model answers, numbered to match the questions on the case slide.

const SOP_LABEL = '注記';
const SOP = '模範解答は判断の型を示すものです。実際の手順は各現場のSite SOPと警備指令書が優先します。';
const SOP_EN = 'These answers show a pattern of reasoning. The Site SOP and post orders always take precedence.';

const D = {

  // ── 第1時限 ───────────────────────────────────────────────────────────────
  'CASE 1-A': {
    titleJa: 'TTX 1-A 模範解答', titleEn: 'TTX 1-A — Model Answers',
    sources: '警備業法、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: 'どの柱に関わるか', a: 'People と Reputation。困っている人への対応であり、クライアントの入口での振る舞いでもある。', aEn: "People and Reputation. It is help for a person in need, and it is also your conduct at the client's entrance." },
      { q: '「警察官ではない」の伝え方', key: true, a: '先に否定しない。用件を受け止めてから伝える。「私は警備員です。交番をご案内します」。', aEn: 'Do not open with the denial. Take in what she needs first: "I am a security guard. Let me point you to the police box."' },
      { q: '調書・被害届は扱えるか', a: '扱えない。捜査の権限はなく、書面を預かれば相手の手続きを遅らせることになる。', aEn: 'No. A guard has no investigative power, and holding a document would only delay her own process.' },
      { q: '持ち場を離れてよいか', a: '原則として離れない。案内は口頭と指差しで行い、必要なら上長へ連絡する。', aEn: 'As a rule, do not leave. Give directions verbally and by pointing; contact your supervisor if needed.' },
    ],
    inject1: { q: '「意味がない」と声が大きくなった', a: '反論しない。声量を下げ、できることだけを短く伝える。', aEn: 'Do not argue back. Lower your own volume and state only what you can do.' },
    inject2: { q: '社員が足を止めて見ている', a: '見られている前提で振る舞う。ここでの対応がReputationそのもの。', aEn: 'Act as though you are being watched, because you are. This exchange is Reputation itself.' },
    split: '案内のために持ち場を離れるか。離れないと答えた班には「では誰が対応するのか」を問う。',
    splitEn: 'Do you leave your post? Ask those who say no: then who actually helps her?',
  },

  'CASE 1-B': {
    titleJa: 'TTX 1-B 模範解答', titleEn: 'TTX 1-B — Model Answers',
    sources: '警備業法、刑法、刑事訴訟法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '所持品検査を強制できるか', key: true, a: 'できない。強制すれば強要罪等に当たりうる。求められるのは任意の協力だけである。', aEn: 'No. Compelling it can amount to coercion. Only voluntary cooperation may be requested.' },
      { q: '「クライアントの依頼」は根拠になるか', a: 'ならない。契約と警備指令書が業務範囲を決める。依頼だけで範囲は広がらない。', aEn: 'No. The contract and post orders define the scope. A request does not widen it.' },
      { q: '判断軸のどこで止まるか', a: '②法令で止まる。クライアント要望は④であり、法令を超えることはできない。', aEn: 'At step 2, the law. The client\'s wishes are step 4 and cannot override it.' },
      { q: '断り方', a: '「その対応は私の権限ではできません。上長に確認します」。断るのではなく、繋ぐと伝える。', aEn: '"That is not within my authority. Let me check with my supervisor." You are routing, not refusing.' },
    ],
    inject1: { q: '「君は見ているだけでいい」', a: '同席も加担になりうる。立ち会わず、その場で上長へ連絡する。', aEn: 'Standing by can still make you a participant. Do not attend; call your supervisor there and then.' },
    inject2: { q: '社員が出口に並び始めた', a: '通常どおり退館させる。止める根拠がない以上、止めない。', aEn: 'Let them leave as normal. With no basis to stop them, you do not stop them.' },
    split: 'その場で断るか、保留して上長を待つか。どちらも成り立つ。根拠を述べさせる。',
    splitEn: 'Decline on the spot, or hold and wait for the supervisor? Both are defensible. Make them state why.',
  },

};

module.exports = D;
