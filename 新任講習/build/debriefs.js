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
      { q: '調書・被害届は扱えるか', a: '扱えない。被害届を受理するのは警察である。警備員が預かる根拠がない。', aEn: 'No. Reports are received by the police. A guard has no basis for holding one.' },
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
    inject1: { q: '「君は見ているだけでいい」', a: '立ち会わない。実施の場に加わらず、その場で上長へ連絡する。', aEn: 'Do not attend. Stay out of the process itself, and call your supervisor there and then.' },
    inject2: { q: '社員が出口に並び始めた', a: '通常どおり退館させる。止める根拠がない以上、止めない。', aEn: 'Let them leave as normal. With no basis to stop them, you do not stop them.' },
    split: 'その場で断るか、保留して上長を待つか。どちらも成り立つ。根拠を述べさせる。',
    splitEn: 'Decline on the spot, or hold and wait for the supervisor? Both are defensible. Make them state why.',
  },

  // ── 第2時限 ───────────────────────────────────────────────────────────────
  'CASE 2-A': {
    titleJa: 'TTX 2-A 模範解答', titleEn: 'TTX 2-A — Model Answers',
    sources: '警備業法、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '指示に従ってよいか', key: true, a: '従えない。②法令で止まる。指示は法令の上に立たない。', aEn: 'No. It stops at step 2, the law. An order does not sit above the law.' },
      { q: '実施していない巡回を記録すると', a: '記録が事実と異なるものになる。後の調査・懲戒・訴訟で参照される記録である。', aEn: 'The record no longer matches fact. That record is later used in investigation, discipline and litigation.' },
      { q: '日誌に何と書くか', a: '実施しなかったことと、その理由と時刻を書く。空欄にしない。', aEn: 'Write that it was not carried out, with the reason and the time. Do not leave it blank.' },
      { q: '上長に何と返すか', a: '「実施していないので、実施しなかったと記載します」と伝え、人員不足は別に報告する。', aEn: '"It was not done, so I will record that it was not done." Report the staffing shortfall separately.' },
    ],
    inject1: { q: '「これは指示だ。責任は私が取る」', a: '記録に署名するのは本人である。責任を引き受ける旨の発言があっても、記載は事実に合わせる。', aEn: 'You are the one who signs the record. Whatever is said about responsibility, the entry follows the facts.' },
    inject2: { q: '翌朝クライアントから問い合わせ', a: '記録のとおり答える。事実と異なる記載をしていなければ、答え方に迷う場面が生じない。', aEn: 'Answer as the record stands. If the entry matched the facts, there is nothing to navigate.' },
    split: '断ったうえで上長の指示を記録に残すか、残さないか。両論ある。根拠を述べさせる。',
    splitEn: 'Do you also record the instruction you declined? Both positions are defensible. Make them state why.',
  },

  'CASE 2-B': {
    titleJa: 'TTX 2-B 模範解答', titleEn: 'TTX 2-B — Model Answers',
    sources: '警備業法、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '受け取ってよいか', key: true, a: '受け取らない。判断は会社とクライアントの規程による。現場で決めることではない。', aEn: 'Do not accept. The rules of the company and the client decide this, not you on the spot.' },
      { q: '金額の大小は判断を変えるか', a: '変えない。少額でも、受領の可否は同じ規程で決まる。', aEn: 'No. Whatever the value, the same rule decides whether it may be accepted.' },
      { q: '断り方', a: '「規則で受け取れないことになっております。お気持ちだけ頂戴します」。相手を責めない。', aEn: '"Our rules do not allow us to accept it. Thank you for the thought." Do not put it on them.' },
      { q: '受け取ってしまった場合', a: '隠さない。上長へ申し出て、指示に従って返却または届け出る。', aEn: 'Do not conceal it. Tell your supervisor and return or declare it as instructed.' },
    ],
    inject1: { q: 'カウンターに置いて立ち去ろうとした', a: '追いかけない。その場で上長へ連絡し、品名・時刻・相手の氏名を記録する。', aEn: 'Do not chase them. Call your supervisor, and record the item, the time and their name.' },
    inject2: { q: '社員に「もらっておけば」と言われた', a: '同調しない。判断は規程による。社員の発言は根拠にならない。', aEn: 'Do not go along with it. The rule decides. What an employee says is not a basis.' },
    split: 'その場で断るか、いったん預かって上長に渡すか。現場によって運用が分かれる。',
    splitEn: 'Decline outright, or take it and pass it to your supervisor? Practice differs by site.',
  },

  // ── 第3時限 ───────────────────────────────────────────────────────────────
  'CASE 3-A': {
    titleJa: 'TTX 3-A 模範解答', titleEn: 'TTX 3-A — Model Answers',
    sources: '警備業法第15条、個人情報保護法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '手続きを求めたことは差別か', key: true, a: '差別ではない。全員に同じ手続きを行っている限り、属性を理由にした扱いではない。', aEn: 'No. As long as the same procedure applies to everyone, it is not treatment based on who they are.' },
      { q: '「前は通してもらえた」への答え', a: '前回の運用は根拠にならない。「本日は手続きをお願いしております」と、いま行う手続きだけを伝える。', aEn: 'What happened before is not a basis. Say only what applies now: the procedure is required today.' },
      { q: '撮影と画像の削除', a: '中止を求めることはできる。根拠は管理権者から委ねられた運用。端末の中身は相手の管理下にあり、削除は求められない。', aEn: 'You may ask them to stop, on the site authority\'s rule. The device is theirs; you cannot require deletion.' },
      { q: '警察が来た場合', a: '事実だけを説明する。時刻、求めた手続き、相手の発言。評価や推測は述べない。', aEn: 'Explain facts only: the time, the procedure you asked for, and what was said. No assessment, no guessing.' },
    ],
    inject1: { q: '「責任者を出せ」と動かない', a: '取り次ぐ。自分で決着させない。待たせることは失礼ではない。', aEn: 'Refer it upward. Do not settle it yourself. Asking them to wait is not discourtesy.' },
    inject2: { q: '社員が「通してあげて」と言った', a: '社員の口添えは手続きの代わりにならない。誰の承認かを確認し、記録する。', aEn: 'An employee vouching is not a substitute for the procedure. Confirm whose authorisation it is, and record it.' },
    split: '相手の撮影を続けさせるか、退去を求めるか。現場の運用で分かれる。根拠を述べさせる。',
    splitEn: 'Let the filming continue, or ask them to leave? Practice differs. Make them state the basis.',
  },

  'CASE 3-B': {
    titleJa: 'TTX 3-B 模範解答', titleEn: 'TTX 3-B — Model Answers',
    sources: '警備業法第17条',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '自分の判断で持ち込めるか', key: true, a: '持ち込めない。護身用具は種類と規格が定められ、届け出たものだけを携帯する。', aEn: 'No. Type and specification are prescribed, and only notified equipment may be carried.' },
      { q: 'その場で何と言うか', a: '責めずに事実を確認する。「それは届け出ているものですか」と聞く。', aEn: 'Check the fact without accusing: "Is that one of the notified items?"' },
      { q: '報告するか', a: '報告する。届け出のない装備を使用した場合、本人と会社の双方が責任を負う。', aEn: 'Yes. If unnotified equipment is used, both the individual and the company answer for it.' },
      { q: '新任として報告しにくいこと', a: '相手を評価せず、事実だけを上長へ伝える。判断は上長が行う。', aEn: 'Pass the facts to your supervisor without judging the person. The decision is theirs.' },
    ],
    inject1: { q: '「新人が余計なことを言うな」', a: '議論しない。その場を収め、勤務後に上長へ報告する。', aEn: 'Do not argue. Leave it there, and report to your supervisor after the shift.' },
    inject2: { q: '他の隊員も持っていた', a: '個人の問題ではなく班の運用の問題になる。人数と状況を含めて報告する。', aEn: 'It is no longer one person but how the shift operates. Report the number and the circumstances.' },
    split: 'その場で言うか、勤務後に報告するか。班の人間関係を踏まえて根拠を述べさせる。',
    splitEn: 'Say it at the time, or report after the shift? Make them reason it through with the team in mind.',
  },

};

module.exports = D;
