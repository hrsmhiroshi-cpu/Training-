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

  // ── 第4時限 ───────────────────────────────────────────────────────────────
  'CASE 4-A': {
    titleJa: 'TTX 4-A 模範解答', titleEn: 'TTX 4-A — Model Answers',
    sources: '警備業法、刑法、刑事訴訟法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '犯罪か、確認事項か', key: true, a: '確認が必要な事象。社員が会社備品を持つこと自体は犯罪ではなく、明白性を満たさない。', aEn: 'A matter to verify. An employee holding company property is not itself a crime; the obviousness test is not met.' },
      { q: '様式を知らないことの影響', a: '判断の根拠にしない。知らないなら、確認できる者に確認する。', aEn: 'It is not a basis for a decision. If you do not know, ask someone who can confirm.' },
      { q: 'できること／できないこと', a: 'できるのは確認の依頼、記録、報告。強制、取り上げ、進路をふさぐことはできない。', aEn: 'You may request, record and report. You may not compel, seize, or block their path.' },
      { q: '誰に何分以内に報告するか', a: '警備責任者へ即時。品目、型番、時刻、会話をそのまま伝える。', aEn: 'The security supervisor, immediately: item, model, time, and what was said.' },
    ],
    inject1: { q: '無線「出口で止めろ」', a: '上位者の指示でも権限は増えない。「実力での制止はできません。記録と報告を行います」と代替案を返す。', aEn: 'An order from above does not expand your powers. Reply: "I cannot physically stop them. I will record and report."' },
    inject2: { q: 'そのまま出口へ向かった', a: '追わない。追跡の先で相手に触れれば有形力になる。', aEn: 'Do not follow. If the chase ends in you touching them, that is force.' },
    split: '指示に従うか。従うと答えた班には「何をもって止めるのか」を問う。無言で従わないのが最も悪い。',
    splitEn: 'Do you obey? Ask those who say yes: by what means? Silent non-compliance is the worst outcome.',
  },

  'CASE 4-B': {
    titleJa: 'TTX 4-B 模範解答', titleEn: 'TTX 4-B — Model Answers',
    sources: '刑法第36条、刑事訴訟法、消防法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '腕を押さえた根拠', a: '正当防衛（刑法第36条）。急迫不正の侵害に対し、やむを得ずした行為に当たる。', aEn: 'Self-defence (Penal Code Art. 36): an unavoidable act against an imminent and unlawful attack.' },
      { q: '倒れた時点で権利はどうなるか', key: true, a: '侵害が終わっているので、正当防衛の根拠も終わる。押さえ続ければ過剰防衛になりうる。', aEn: 'The attack has ended, so the basis ends with it. Continuing to hold them can become excessive defence.' },
      { q: '倒れて動かない相手にまず何をするか', a: '人命が最優先。反応と呼吸を確認する。頭を打っている可能性があるので動かさない。', aEn: 'Life comes first. Check for response and breathing. They may have hit their head, so do not move them.' },
      { q: '通報は110番か119番か', a: '119番を先に。人命が優先する。暴行の件は、その後に110番と社内報告で扱う。', aEn: 'Ambulance first — life takes precedence. The assault goes to the police and the internal report afterwards.' },
    ],
    inject1: { q: '「暴行された」と言い始めた', a: '反論しない。時刻・経過・発言をそのまま記録する。判断は警察と会社が行う。', aEn: 'Do not argue. Record the time, the sequence and the words as spoken. Others will assess it.' },
    inject2: { q: '出口へ歩き出した', a: '引き止めない。人相・着衣・退出時刻を記録し、通報時に伝える。', aEn: 'Do not detain them. Record appearance, clothing and the time they left, and pass it on when you call.' },
    split: '救急要請の前に社内へ一報を入れるか。人命に関わる場合は通報を優先する。',
    splitEn: 'Do you notify internally before calling? Where life is at risk, the emergency call comes first.',
  },

  // ── 第5時限 ───────────────────────────────────────────────────────────────
  'CASE 5-A': {
    titleJa: 'TTX 5-A 模範解答', titleEn: 'TTX 5-A — Model Answers',
    sources: '消防法、総務省消防庁、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '最初の一言', key: true, a: '「救急です」。種別を先に言う。場所より先である。種別が分かって初めて相手は隊を選べる。', aEn: '"We need an ambulance." The type comes first, before the location — it is what lets them choose the response.' },
      { q: '伝える順序と、省いてよい項目', a: '種別 → 場所 → 状況（意識・呼吸）→ 人数 → 自分の氏名と折り返し。年齢や顔色は聞かれてから答える。', aEn: 'Type, location, condition, numbers, then your name and call-back. Age and colour can wait until asked.' },
      { q: '「意識はありますか」への答え', a: '「呼びかけに反応がありません」。見た事実で答える。「意識不明です」と断定しない。', aEn: '"He does not respond when spoken to." Answer with what you observed; do not declare him unconscious.' },
      { q: '社員2名に何を頼むか', a: '1名にAEDを取りに行かせ、1名を到着口の誘導に付ける。頼む相手を指差して特定する。', aEn: 'Send one for the AED and post the other at the entrance to meet the crew. Point at each person as you assign it.' },
    ],
    inject1: { q: '「呼吸はしていますか」', a: '「胸の動きは見えますが、確信が持てません」。分からないことは分からないと言う。', aEn: '"I can see chest movement but I am not certain." Say plainly when you do not know.' },
    inject2: { q: '目を開けた', a: '切らない。状態が変わったことをその場で伝える。判断は指令員が行う。', aEn: 'Do not hang up. Report the change as it happens. The dispatcher decides what it means.' },
    split: '社内へ一報を入れてから119番か、119番が先か。人命に関わる場合は通報を優先する。',
    splitEn: 'Notify internally first, or call 119 first? Where life is at risk, the emergency call comes first.',
  },

  'CASE 5-B': {
    titleJa: 'TTX 5-B 模範解答', titleEn: 'TTX 5-B — Model Answers',
    sources: '警察庁「警備員教育」、個人情報保護法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '同僚の報告文の問題点', key: true, a: '見ていない「侵入」を断定している。事実は「扉が開いていた」と「足跡があった」までである。', aEn: 'It asserts an intrusion nobody saw. The facts stop at the open door and the footprints.' },
      { q: 'あなたなら何と報告するか', a: '「20時15分、B1東側非常口が15cmほど開いていた。施錠されているはずの扉で、付近に人影はない。内側に濡れた足跡が数歩分ある」。', aEn: '"At 20:15 the B1 east exit stood about 15 cm open. It should have been locked, nobody was nearby, and there are a few wet footprints inside."' },
      { q: '扉と足跡の扱い', a: '足跡は動かさない、踏まない、拭かない。扉の施錠は上長の指示による。', aEn: 'Do not step on, move or wipe the footprints. Locking the door waits on your supervisor.' },
      { q: '110番するか', a: '判断者は上長またはSite SOPが定める者。警備員が単独で決めない。', aEn: 'The supervisor, or whoever the Site SOP designates, decides. Not you alone.' },
    ],
    inject1: { q: '「早く閉めよう、寒いから」', a: '止める。閉めれば足跡と扉の状態が失われる。理由を短く伝えて、上長に確認する。', aEn: 'Stop them. Closing it destroys the footprints and the state of the door. Say why, briefly, and check with your supervisor.' },
    inject2: { q: '「何時ごろからか分かるか」', a: '推測で答えない。「前回の巡回は◯時◯分、そのときは異常なし」と、確認した事実で答える。', aEn: 'Do not guess. Answer with what you checked: the time of your last round, and that it was normal then.' },
    split: '扉をその場で施錠するか、保全のため開けたままにするか。両論ある。根拠を述べさせる。',
    splitEn: 'Lock the door now, or leave it as found to preserve the scene? Both are defensible. Make them reason it.',
  },

  // ── 第6時限 ───────────────────────────────────────────────────────────────
  'CASE 6-A': {
    titleJa: 'TTX 6-A 模範解答', titleEn: 'TTX 6-A — Model Answers',
    sources: '総務省消防庁「救急蘇生法の指針（市民用）」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: 'しゃくり上げる呼吸の判断', key: true, a: '正常な呼吸ではない。心停止として扱い、胸骨圧迫を開始する。迷ったら開始する。', aEn: 'It is not normal breathing. Treat it as cardiac arrest and start compressions. If unsure, start.' },
      { q: '2名の配置', a: '1名が傷病者に付いて圧迫を開始。もう1名が119番しながらAEDを取りに走る。', aEn: 'One stays and starts compressions. The other calls 119 while going for the AED.' },
      { q: '119番とAEDの順序', a: '同時に進める。2名しかいないので、通報しながら移動する。圧迫は止めない。', aEn: 'In parallel. With only two of you, call while moving. Compressions do not stop.' },
      { q: '到着口までの誘導', a: 'AEDを持ち帰った1名が、そのまま到着口へ戻って誘導する。地下は分かりにくい。', aEn: 'The one who fetched the AED goes back to meet the crew. A basement is hard to find.' },
    ],
    inject1: { q: '指令員から「胸骨圧迫を」', a: '従う。電話をスピーカーにして床に置き、両手を圧迫に使う。', aEn: 'Comply. Put the phone on speaker on the floor so both hands are free for compressions.' },
    inject2: { q: '腕が上がらなくなってきた', a: '交代する。「交代します」と声をかけ、中断を最小にして入れ替わる。質が落ちたまま続けない。', aEn: 'Change over. Say "changing over" and swap with the shortest break. Do not carry on at reduced quality.' },
    split: '2名しかいない場面で、誘導を優先するか圧迫を優先するか。捨てた判断と理由を言わせる。',
    splitEn: 'With only two of you, do you prioritise meeting the crew or the compressions? Make them say what they dropped, and why.',
  },

  // ── 第7時限 ───────────────────────────────────────────────────────────────
  'CASE 7-A': {
    titleJa: 'TTX 7-A 模範解答', titleEn: 'TTX 7-A — Model Answers',
    sources: '警備業法、刑法、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '対話が効いていない兆候', a: '声が大きくなり続けている。同じ言葉を繰り返している。距離を詰めてきている。3つ揃っている。', aEn: 'Rising volume, a repeated phrase, and closing distance. All three are present.' },
      { q: '立ち位置の問題', key: true, a: '背後が行き止まりで、自分の退路がない。出口が相手の後方にある。横に動いて壁を背にしない位置へ移る。', aEn: 'You have a wall behind you and no way out, with the exit behind them. Move sideways off the wall.' },
      { q: 'ポケットの手', a: '注視するが、掴もうとしない。中身は分からない。距離を取ることが対応であって、確認は対応ではない。', aEn: 'Watch it, but do not grab for it. You do not know what is in it. Distance is the response; checking is not.' },
      { q: '離脱・応援・通報の順序', a: '離脱を先に。距離と退路を確保してから応援を呼び、必要に応じて通報する。', aEn: 'Disengage first. Get distance and a way out, then call backup, then call the police if needed.' },
    ],
    inject1: { q: '「責任者を呼べ」とさらに半歩', a: '要求には応じてよい。取り次ぐと伝えながら、同時に距離を戻す。応じることと近づくことは別。', aEn: 'You can act on the request. Say you will refer it while you re-open the distance. Agreeing is not the same as staying close.' },
    inject2: { q: '同僚が相手の背後に立った', a: '囲まない。相手が引き下がれる形を残す。同僚に横へ回るよう合図する。', aEn: 'Do not surround them. Leave them a way to step back. Signal your colleague to move to the side.' },
    split: '同僚を呼ぶか、自分だけで収めるか。人数を増やすことの効果と、囲む危険の両方を述べさせる。',
    splitEn: 'Call the colleague in, or handle it alone? Make them weigh both the effect of numbers and the risk of surrounding.',
  },

  // ── 第8時限 ───────────────────────────────────────────────────────────────
  'CASE 8-A': {
    titleJa: 'TTX 8-A 模範解答', titleEn: 'TTX 8-A — Model Answers',
    sources: '警備業法、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '記載がないときの拠り所', key: true, a: '一般原則に戻る。人命 → 法令 → Site SOP → クライアント要望。自分で新しい運用を作らない。', aEn: 'Fall back on the general order: life, law, Site SOP, client wishes. Do not invent a practice.' },
      { q: 'どの柱に関わるか', a: 'People。退室記録がないまま一晩経っている。まず人の安否である。', aEn: 'People. Someone has been unaccounted for overnight. Their welfare comes first.' },
      { q: '立ち入ってよいか', a: '人の安否確認のために入る。根拠は人命であって、調査ではない。', aEn: 'Enter to check on their welfare. The basis is life, not investigation.' },
      { q: '上長に連絡がつかない場合', a: '緊急連絡体制の次順位者へ。不在を理由に自分で判断しない。', aEn: 'Go to the next person on the call-out list. Absence is not authority to decide.' },
    ],
    inject1: { q: '机に伏せて動かない人物', a: '安否確認に切り替える。呼びかけ、反応がなければ第6時限の手順に入る。', aEn: 'Switch to a welfare check. Call out; if there is no response, run the Period 6 sequence.' },
    inject2: { q: '「徹夜で作業していた」', a: '安否は確認できた。記録に残し、退室記録の欠落は別に報告する。', aEn: 'Their welfare is confirmed. Record it, and report the missing exit log separately.' },
    split: '入る前に上長を待つか、先に安否を確認するか。人命を根拠に説明できるかを問う。',
    splitEn: 'Wait for the supervisor, or check on them first? Ask whether they can justify it on life grounds.',
  },

  // ── 第9時限 ───────────────────────────────────────────────────────────────
  'CASE 9-A': {
    titleJa: 'TTX 9-A 模範解答', titleEn: 'TTX 9-A — Model Answers',
    sources: '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: 'どの柱に関わるか', a: 'Asset（情報資産）。外部に出れば Reputation にも及ぶ。', aEn: 'Asset — information. If it leaves the building it becomes Reputation as well.' },
      { q: '拾ってよいか。読んでよいか', key: true, a: '拾ってよい。読んではいけない。表紙の分類表示までで判断する。', aEn: 'Pick it up, yes. Do not read it. Judge from the cover classification only.' },
      { q: '誰にいつ報告するか', a: '警備責任者へその場で。深夜でも翌朝に回さない。発見時刻が記録の価値を決める。', aEn: 'The security supervisor, immediately. Do not wait for morning — the time of discovery is what gives the record value.' },
      { q: '日誌にどう書くか', a: '発見時刻、場所、分類表示、引渡し先を書く。中身は書かない。', aEn: 'Time, place, classification, and who you handed it to. Never the contents.' },
    ],
    inject1: { q: '清掃員が入室', a: '面前で扱う。単独で処理しない。誰が見ていたかも記録する。', aEn: 'Handle it in their presence. Do not process it alone. Record who saw it.' },
    inject2: { q: '翌朝「あの資料見なかった？」', a: '事実のみ答える。「拾って◯◯へ引き渡しました」。中身には触れない。', aEn: 'Answer with fact only: you picked it up and handed it over. Say nothing of the contents.' },
    split: '保管するか、その場に置いて報告するか。どちらも成り立つ。根拠を述べさせる。',
    splitEn: 'Secure it, or leave it and report? Both are defensible. Make them state the reasoning.',
  },

  'CASE 9-B': {
    titleJa: 'TTX 9-B 模範解答', titleEn: 'TTX 9-B — Model Answers',
    sources: '個人情報保護法、不正競争防止法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '管理職であることは根拠になるか', a: 'ならない。開示の可否は契約とクライアントの規程で決まる。役職では決まらない。', aEn: 'No. The contract and the client\'s rules decide, not the person\'s rank.' },
      { q: '警備員に判断する権限はあるか', a: 'ない。取り次ぐところまでが役割。日頃の協力関係は判断を変える理由にならない。', aEn: 'No. Your role ends at referral. A good working relationship does not change that.' },
      { q: '断り方', a: '「私には開示の判断ができません。担当へお繋ぎします」。断るのではなく、繋ぐと伝える。', aEn: '"I am not able to decide that. Let me connect you with the right person." You are routing, not refusing.' },
      { q: '保全の依頼は受けてよいか', key: true, a: '受けてよい。保全＝残す、開示＝渡す。警備員が受けられるのは前者だけ。', aEn: 'Yes. Preserving means keeping it; disclosing means handing it over. Only the first is yours to accept.' },
    ],
    inject1: { q: '「あなたが見て教えて」', a: '応じられない。自分が見て伝えるのは開示と同じ結果になる。言い換えを見抜く。', aEn: 'Decline. Looking and telling produces the same result as showing. Spot the rephrasing.' },
    inject2: { q: '「依頼書を出す。消さないで」', a: 'これは受けてよい。上書きを防ぐ依頼であり、内容を渡す依頼ではない。時刻とともに記録する。', aEn: 'This you may accept. It prevents overwrite; it does not hand over content. Record it with the time.' },
    split: 'インジェクト①に気づけるか。「見せない」から「見て教える」への言い換えが本問の核。',
    splitEn: 'Can they spot inject 1? The shift from "show me" to "look and tell me" is the heart of this case.',
  },

  // ── 第10時限 ──────────────────────────────────────────────────────────────
  'CASE 10-A': {
    titleJa: 'TTX 10-A 模範解答', titleEn: 'TTX 10-A — Model Answers',
    sources: '警察庁「警備員教育」、全国警備業協会 教育教材',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '台帳と自己申告のどちらを優先するか', key: true, a: '台帳が一次情報。自己申告は二次情報である。確認が取れるまで通さない。', aEn: 'The log is primary; the visitor\'s account is secondary. No entry until it is confirmed.' },
      { q: 'ホスト不在のとき、次にどこへ', a: '同じ部署の別の担当者、クライアント側の受付責任者や総務へ上げる。', aEn: 'Another contact in the department, or the client\'s reception lead or general affairs.' },
      { q: '待たせる／帰す／別担当につなぐ', a: '判断するのはクライアント側の責任者。警備員は確認と取次ぎを行う。', aEn: 'The client\'s responsible party decides. You verify and refer.' },
      { q: '苛立ちへの対応', a: '「お急ぎのところ申し訳ありません」と受け止めたうえで、手続きは変えない。', aEn: 'Acknowledge it — "I am sorry to delay you" — and keep the procedure unchanged.' },
    ],
    inject1: { q: '「とりあえず上まで行かせてくれ」', a: '通さない。確認できていない状態は、時間が経っても変わらない。', aEn: 'Do not admit him. Time passing does not turn an unconfirmed visit into a confirmed one.' },
    inject2: { q: '別の社員が「知っています」', a: '口添えは確認の代わりにならない。その社員がホストに代わって受け入れるなら、氏名を記録する。', aEn: 'Vouching is not verification. If that employee will host him, record their name.' },
    split: '帰っていただくか、待っていただくか。判断はクライアント側にある点を確認させる。',
    splitEn: 'Turn him away or hold him? Make sure they land on the client being the one who decides.',
  },

  // ── 第11時限 ──────────────────────────────────────────────────────────────
  'CASE 11-A': {
    titleJa: 'TTX 11-A 模範解答', titleEn: 'TTX 11-A — Model Answers',
    sources: '警察庁「警備員教育」、全国警備業協会 教育教材',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '社員かどうか判定できるか', key: true, a: 'できない。判定する権限も手段もない。それは受付と所属部署の役割である。', aEn: 'No. You have neither the authority nor the means. That is for reception and the department.' },
      { q: '急いでいる相手への伝え方', a: '「お急ぎのところ申し訳ありません、受付でご対応させていただきます」。受け止めてから案内する。', aEn: '"I am sorry to delay you — we will handle it at reception." Acknowledge first, then direct.' },
      { q: '押し問答の落とし所', a: '受付か警備本部へ誘導し、所属部署への確認と仮入館証の手続きに乗せる。', aEn: 'Guide them to reception or the guard office, for department verification and a temporary pass.' },
      { q: '通してしまった場合', a: '隠さない。人相・着衣・時刻・通過の有無を記録し、上長へ報告してカメラ確認を依頼する。', aEn: 'Do not conceal it. Record appearance, clothing, time and that they passed; report and ask for footage.' },
    ],
    inject1: { q: '列ができ始めた', a: '列は理由にならない。ただし通路を空けるため、本人だけ横へ誘導して手続きに移る。', aEn: 'A queue is not a reason. Move that one person aside to clear the lane, and continue the procedure.' },
    inject2: { q: '「その人、うちの部署です」', a: '口添えは認証の代わりにならない。その社員が受け入れるなら氏名を記録し、仮入館証の手続きに乗せる。', aEn: 'Vouching does not replace authentication. If that employee will host him, record their name and issue a temporary pass.' },
    split: '列がある状況で止め続けるか、いったん通して後追いするか。前例を作る意味を考えさせる。',
    splitEn: 'Hold the line with a queue building, or let him through and follow up? Make them weigh the precedent.',
  },

  'CASE 11-B': {
    titleJa: 'TTX 11-B 模範解答', titleEn: 'TTX 11-B — Model Answers',
    sources: '警察庁「警備員教育」、全国警備業協会 教育教材',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '開けてよいか', key: true, a: '開けない。警備員に開封の権限はない。宛先の確認までが範囲である。', aEn: 'Do not open it. You have no authority to. Checking the addressee is where your part ends.' },
      { q: 'どこに置くか。動かしてよいか', a: '人の少ない場所へ、必要最小限の移動にとどめる。振らない、傾けない、水に入れない。', aEn: 'Move it as little as possible, to where fewest people are. Do not shake, tilt or immerse it.' },
      { q: '連絡の順序', a: '上長へ即時。次にクライアント側の担当窓口。警察への通報の判断は上長が行う。', aEn: 'Your supervisor first, then the client contact. The decision to call the police is theirs.' },
      { q: '宅配業者に確認できること', a: '業者名、配送センター、伝票番号、集荷元。帰る前に控える。', aEn: 'The company, the depot, the docket number and where it was collected. Take it before they leave.' },
    ],
    inject1: { q: '業者が帰ろうとしている', a: '引き止めない。控えられる情報を先に取る。業者は当事者ではない。', aEn: 'Do not detain them. Take what you can note first. The courier is not the issue.' },
    inject2: { q: '「開けて見てみましょうか」', a: '同調しない。社員であっても、その場で開ける判断はしない。上長の指示を待つ。', aEn: 'Do not go along with it. Even an employee does not decide to open it on the spot. Wait for instructions.' },
    split: 'その場に置いて人を遠ざけるか、隔離場所へ移すか。Site SOPの指定が優先する。',
    splitEn: 'Leave it and clear the area, or move it to an isolation point? The Site SOP\'s designation governs.',
  },

  // ── 第12時限 ──────────────────────────────────────────────────────────────
  'CASE 12-A': {
    titleJa: 'TTX 12-A 模範解答', titleEn: 'TTX 12-A — Model Answers',
    sources: '警察庁「警備員教育」、経済産業省「秘密情報の保護ハンドブック」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '入室して確認するか', key: true, a: '単独で踏み込まない。ドアから離れた安全な位置で、時刻・人数・服装・作業内容を整理する。', aEn: 'Do not go in alone. From a safe distance, note the time, the number of people, their clothing and what they are doing.' },
      { q: '報告の内容', a: '上長または警備本部へ即時。「サーバ室に事前連絡のない作業者2名、確認願います」と簡潔に。', aEn: 'Supervisor or guard office, immediately: "Two unannounced workers in the server room — please verify."' },
      { q: '正規の緊急対応かもしれない可能性', a: '確認手順を踏むこと自体は責められない。正規であっても、確認は手続きである。', aEn: 'Following the verification procedure is never blameworthy. Even if it is legitimate, verifying is procedure.' },
      { q: '自分の安全', a: '出入口の動線が見える位置で待機する。逃げ道をふさぐ位置に立たない。', aEn: 'Wait where you can see the exit route. Do not stand where you block their way out.' },
    ],
    inject1: { q: '「どうしました」と声をかけられた', a: '普通に応対する。所属と作業内容、誰の許可かを聞き、そのまま記録する。詰問しない。', aEn: 'Respond normally. Ask their company, the work, and whose authorisation — and record it. Do not interrogate.' },
    inject2: { q: '「担当の方に許可をもらっています」', a: '氏名を聞いて確認に回す。自分では判定しない。「確認しますので少々お待ちください」。', aEn: 'Take the name and pass it up for checking. Do not decide yourself: "Let me confirm that, please wait."' },
    split: '入室記録がないことをどう扱うか。「事前連絡がなかった」事実が最重要情報である点を確認させる。',
    splitEn: 'How do they weigh the missing entry log? Make sure they land on the absence of notification being the key fact.',
  },

  // ── 第13時限 ──────────────────────────────────────────────────────────────
  'CASE 13-A': {
    titleJa: 'TTX 13-A 模範解答', titleEn: 'TTX 13-A — Model Answers',
    sources: '個人情報保護法、経済産業省「秘密情報の保護ハンドブック」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: 'その場での対応', a: '会議室を施錠する。端末はSite SOPに従い保管または現場で保護。ホワイトボードは消さない、撮影しない。', aEn: 'Lock the room. Secure the laptop per the Site SOP. Do not erase or photograph the whiteboard.' },
      { q: '前直の引継ぎ漏れの扱い', key: true, a: '責めない。事実として両方を残す。「前直引継ぎ：異常なし／本職発見時：会議室未施錠、端末1台放置」。', aEn: 'Do not blame. Record both: "Previous shift: nothing reported / On my check: room unlocked, one device left out."' },
      { q: '「異常なし」が危険な理由', a: '何を確認したうえでの異常なしかが伝わらない。確認していないことと、確認して問題がないことが区別できなくなる。', aEn: 'It does not say what was checked. It hides the difference between "checked and clear" and "not checked".' },
      { q: '翌朝、誰に何を伝えるか', a: '上長へ経過を報告し、クライアント側が朝から対応に入れるよう情報を整理して渡す。', aEn: 'Report the sequence to your supervisor, and organise it so the client can pick it up in the morning.' },
    ],
    inject1: { q: '前直「見ていない。自分の担当時間ではない」', a: '議論しない。発言をそのまま記録し、判断は上長に委ねる。', aEn: 'Do not argue. Record what was said, as said, and leave the assessment to your supervisor.' },
    inject2: { q: '「あのPC、誰か動かしましたか」', a: '事実のみ答える。発見時刻と、どこへ保管したかを伝える。中身には触れない。', aEn: 'Answer with fact only: when you found it and where you secured it. Say nothing of the contents.' },
    split: '前直へ直接連絡するか、上長経由にするか。班によって分かれる。根拠を述べさせる。',
    splitEn: 'Contact the previous guard directly, or go through the supervisor? Groups will split. Make them reason it.',
  },

  // ── 第14時限 ──────────────────────────────────────────────────────────────
  'CASE 14-A': {
    titleJa: 'TTX 14-A 模範解答', titleEn: 'TTX 14-A — Model Answers',
    sources: '消防法、総務省消防庁、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '「電子レンジを使っていた」は火災を否定するか', key: true, a: 'しない。発報の原因を説明しうるだけで、火災がないことの確認にはならない。目視するまで断定しない。', aEn: 'No. It may explain the activation, but it does not confirm there is no fire. Do not conclude before you have seen it.' },
      { q: '最初に確認するもの', a: '受信機の地区表示。何階のどの区画か。無線では「3階東区画、発報。現場確認に向かいます」と伝える。', aEn: 'The zone display: which floor, which zone. On the radio: "Third floor east, activation, going to verify."' },
      { q: '通報するか。上長不在なら', a: '判断者はSite SOPが定める。上長が不在なら緊急連絡体制の次順位者へ。不在を理由に自分で決めない。', aEn: 'The Site SOP names who decides. If your supervisor is away, go to the next contact. Absence is not authority.' },
      { q: '防火戸の閉鎖と誘導', a: '通行できる経路が変わっている。閉鎖箇所を確認してから誘導する。階段誘導が前提、エレベーターは使わせない。', aEn: 'The usable routes have changed. Check what has closed before guiding. Stairs only; no lifts.' },
    ],
    inject1: { q: '4階西区画で第2報', a: '2区画同時。非火災報の可能性が下がる。全館避難と通報の判断へ切り替える。', aEn: 'Two zones at once makes a false alarm unlikely. Switch to full evacuation and calling.' },
    inject2: { q: '「ベルを止めてほしい」', a: '止めない。音を止めることは目的ではない。操作権限もSite SOPで定められている。', aEn: 'Do not silence it. Stopping the noise is not the objective, and the authority to do it is set by the SOP.' },
    split: '確認に単独で向かうか、受信機に人を残すか。2名しかいない場合、両立しない。捨てた方を言わせる。',
    splitEn: 'Go and verify alone, or keep someone at the panel? With two people you cannot do both. Make them say which they dropped.',
  },

  // ── 第15時限 ──────────────────────────────────────────────────────────────
  'CASE 15-A': {
    titleJa: 'TTX 15-A 模範解答', titleEn: 'TTX 15-A — Model Answers',
    sources: '警備業法施行規則第38条第3項、警察庁「警備員教育」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '2つの事象を分けるか', key: true, a: '記録は分けて書き、報告では併せて伝える。同時に起きた事実が重要である。', aEn: 'Record them separately, report them together. That they coincided is the key fact.' },
      { q: '4階へ行くか、先に報告するか', a: '先に第一報。「4階カメラ4台停止、入退室記録が不一致」。指示を受けて確認へ向かう。', aEn: 'Report first: "Four cameras down on the fourth floor, logs do not match." Then go up.' },
      { q: '工事業者への確認', a: '人数を聞く。入館4名、退館は3件。差の1名がどこにいるかを確認する。', aEn: 'Ask for a headcount. Four in, three exits logged. Find where the fourth is.' },
      { q: '記録に何を書くか', a: '停止時刻、停止台数、不一致の内容、代替措置、報告先と時刻。推測は書かない。', aEn: 'Time of outage, how many cameras, the mismatch, the fallback, whom you told and when.' },
    ],
    inject1: { q: '「全員出た」と連絡が入った', a: '連絡は受けるが、記録との差は残す。「業者申告：全員退館／記録：3件」と両方書く。', aEn: 'Take the call, but keep the discrepancy. Write both: crew says all out, log shows three.' },
    inject2: { q: '停止中の映像は残っていなかった', a: '検証手段がないことを報告に明記する。人による確認結果を記録に残す。', aEn: 'State in the report that there is no footage. Record what people verified instead.' },
    split: 'カードの貸し借りを疑うか、機器の不具合を疑うか。どちらでも先に人を探す点は共通である。',
    splitEn: 'Card sharing, or a system fault? Either way, both must land on finding the person first.',
  },
};

module.exports = D;
