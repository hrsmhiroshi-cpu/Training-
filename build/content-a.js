'use strict';
// 第1時限・第2時限
const COMMON_META_JA = '2026年8月11日（火）　施設警備 現任教育　コーポレートセキュリティ';
const COMMON_META_EN = '11 Aug 2026 — In-Service Training, Facility Security / Corporate Security';

// ── 第1時限 基本教育1「警備業務実施の基本原則」 ──────────────────────────
const p1 = {
  file: '01_1限_基本原則.pptx',
  titleJa: '第1時限 基本教育1 警備業務実施の基本原則',
  footJa: '第1時限｜基本教育1 警備業務実施の基本原則',
  footEn: 'Period 1 | Basic Training 1 — Fundamental Principles',
  slides: [
    {
      type: 'title',
      kicker: '第1時限　07:00 – 08:00　基本教育1',
      kickerEn: 'Period 1 — Basic Training 1',
      titleJa: '警備業務実施の基本原則',
      titleEn: 'Fundamental Principles of Security Operations',
      metaJa: COMMON_META_JA,
      metaEn: COMMON_META_EN,
    },
    {
      type: 'rows',
      titleJa: '本日の縦串 ― 3つの問い',
      titleEn: 'The Three Questions — our thread through every session today',
      lead: 'この3問は、本日私が担当する全コマで繰り返します。答えではなく、根拠を言えるようになることが目標です。',
      leadEn: 'We will return to these in every session I lead today. The goal is not the answer — it is being able to state your reasoning.',
      rows: [
        {
          ja: '何を守っているのか？ ― People / Asset / Reputation のどれか。',
          en: 'What am I protecting? — People, Assets, or Reputation.',
        },
        {
          ja: '私はいまどの立場で動くのか？ ―「私人」か、「管理権者の補助者」か。',
          en: 'In what capacity am I acting? — As a private citizen, or as an agent of the site\'s authority.',
        },
        {
          ja: 'その手段は目的に対して最小限か？ ― 越えたら、それは何になるか。',
          en: 'Is this the minimum necessary? — And if I go beyond it, what does it become?',
        },
      ],
    },
    {
      type: 'cards',
      titleJa: 'コーポレートセキュリティが守るもの',
      titleEn: 'What Corporate Security Protects',
      lead: '守る対象は3つ。情報は「Asset」の中に含みます。',
      leadEn: 'Three categories. Information sits inside Asset.',
      cols: 3,
      cards: [
        {
          n: 'P', h: 'People', hEn: '人',
          b: '従業員・来訪者・役員、そして警備員自身。負傷や事件の当事者になりうる全員。',
          bEn: 'Employees, visitors, executives — and you. Everyone who can become a casualty or a party to an incident.',
        },
        {
          n: 'A', h: 'Asset', hEn: '資産（物的＋情報）', accent: true,
          b: '建物・設備・現金といった物的資産と、書類・データ・ログといった情報資産の両方。',
          bEn: 'Physical assets such as buildings, equipment and cash — and information assets such as documents, data and logs.',
        },
        {
          n: 'R', h: 'Reputation', hEn: '信用',
          b: '企業の信頼・ブランド・対外的な評価。失うと最も戻りにくい。',
          bEn: 'Trust, brand and public standing. The hardest of the three to recover.',
        },
      ],
    },
    {
      type: 'two',
      titleJa: 'Asset の内訳 ― 情報も「資産」',
      titleEn: 'Inside Asset — Information Is an Asset Too',
      left: {
        h: '物的資産', hEn: 'Physical Assets',
        items: [
          { ja: '建物・設備・電源・空調', en: 'Buildings, equipment, power, HVAC' },
          { ja: '現金・金券・什器', en: 'Cash, vouchers, fixtures' },
          { ja: '在庫・原材料・製品', en: 'Stock, materials, products' },
          { ja: '車両・鍵・カード類', en: 'Vehicles, keys, access cards' },
        ],
      },
      right: {
        h: '情報資産', hEn: 'Information Assets',
        items: [
          { ja: '書類・図面・契約書', en: 'Documents, drawings, contracts' },
          { ja: 'データ・端末・記録媒体', en: 'Data, devices, storage media' },
          { ja: '顧客情報・人事情報', en: 'Customer and HR information' },
          { ja: '入退室ログ・カメラ画像', en: 'Access logs and camera footage' },
        ],
      },
      note: '施錠されたサーバ室も、机上に放置された1枚の書類も、同じ「Asset」です。',
      noteEn: 'A locked server room and a single sheet left on a desk fall into the same category.',
    },
    {
      type: 'quote',
      titleJa: '最も戻らない損失は Reputation',
      titleEn: 'The Loss That Does Not Come Back',
      quoteJa: '物と情報の損失は、金額で埋め合わせられることがある。\n信用は、金額では戻らない。',
      quoteEn: 'A loss of property or information can sometimes be repaid.\nA loss of reputation cannot.',
      quoteSize: 20,
      quoteEnSize: 13,
      note: '現場の一言、過剰な有形力、放置された書類 ― どれも「企業の事件」に変わりうる。',
      noteEn: 'A single remark, an excessive use of force, an unattended document — any of these can become a company-level incident.',
    },
    {
      type: 'quote',
      titleJa: '警備業法 第15条 ― 本日の背骨',
      titleEn: 'Security Services Act, Article 15 — the backbone of today',
      quoteJa: '警備業者及び警備員は、警備業務を行うに当たっては、この法律により特別に権限を与えられているものでないことに留意するとともに、他人の権利及び自由を侵害し、又は個人若しくは団体の正当な活動に干渉してはならない。',
      quoteEn: 'In carrying out security operations, security businesses and security guards must bear in mind that this Act confers upon them no special authority, and must not infringe upon the rights and freedoms of others, nor interfere with the legitimate activities of any individual or organisation.',
      quoteSize: 14.5,
      quoteEnSize: 10.5,
      source: '警備業法 第15条 / Article 15',
      note: '制服を着ていても、あなたの法的な立場は通行人と同じ「私人」です。',
      noteEn: 'Even in uniform, your legal standing is exactly that of a passer-by: a private citizen.',
    },
    {
      type: 'cards',
      titleJa: 'できることは、2つだけ',
      titleEn: 'You Have Exactly Two Sources of Authority',
      cols: 2,
      cards: [
        {
          n: '1', h: '誰でもできること', hEn: 'What anyone may lawfully do',
          b: '現行犯逮捕、正当防衛、緊急避難。\nこれらは「警備員だから」ではなく、私人だからできることです。相手が誰であっても要件は変わりません。',
          bEn: 'Citizen\'s arrest, self-defence, necessity. These are available to you as a private citizen — not because you are a guard. The legal tests do not change.',
        },
        {
          n: '2', h: '管理権者から委ねられたこと', hEn: 'What the site\'s authority has delegated', accent: true,
          b: '入館の可否、退去の要請、立入制限、記録。\n委ねられた範囲を超えることはできません。範囲は契約と指令書で決まります。',
          bEn: 'Admission, requests to leave, access restriction, record-keeping. You cannot exceed what was delegated — and the scope is set by the contract and post orders.',
        },
      ],
    },
    {
      type: 'grid',
      titleJa: 'ミニTTX ― ○か×か、根拠を一言で',
      titleEn: 'Mini TTX — Yes or No, and state your reason in one line',
      lead: '手元に○×と根拠を書いてください。挙手は求めません。指名します。',
      leadEn: 'Write your answer and your reason. No hands needed — I will call on you.',
      cols: 2,
      items: [
        { ja: '制服を着ているので、来訪者のカバンを開けて確認した。', en: 'In uniform, you open a visitor\'s bag to check it.' },
        { ja: '目の前で商品を隠して出口を通過した者を取り押さえた。', en: 'You detain someone who concealed goods and walked out.' },
        { ja: '逮捕した相手から、事務所で30分間、事情を聞いた。', en: 'You question a detained person in the office for 30 minutes.' },
        { ja: '殴りかかってきた相手の腕を押さえて止めた。', en: 'You block an incoming punch by holding the arm.' },
        { ja: '相手が倒れた後も、念のため押さえ続けた。', en: 'You keep holding them down after they are already down.' },
        { ja: '管理権者の指示で、入館証のない者に退去を求めた。', en: 'At the authority\'s instruction, you ask an unbadged person to leave.' },
        { ja: '「怪しい」と思ったので、相手の進路に立ちふさがった。', en: 'You block someone\'s path because they look suspicious.' },
        { ja: '落ちていた書類を拾い、そのままゴミ箱に捨てた。', en: 'You pick up a stray document and drop it in the bin.' },
      ],
    },
    {
      type: 'rows',
      titleJa: 'ミニTTX 解説 ― 覚えるのは答えではなく「根拠の型」',
      titleEn: 'Debrief — Learn the reasoning pattern, not the answers',
      lead: '解答　1 ×　2 ○　3 ×　4 ○　5 ×　6 ○　7 ×　8 ×',
      leadEn: 'Answer key:  1 No · 2 Yes · 3 No · 4 Yes · 5 No · 6 Yes · 7 No · 8 No',
      rows: [
        {
          ja: '×の多くは、②の踏み外し ― 委ねられていないことをしている。',
          en: 'Most of the "No" cases are overreach of source ②: doing something never delegated to you.',
        },
        {
          ja: '○は、①か②のどちらかに、きちんと収まっている。',
          en: 'Every "Yes" sits cleanly inside source ① or source ②.',
        },
        {
          ja: '設問5は「終期」の問題。侵害が終われば、正当防衛も終わります。',
          en: 'Item 5 is about when it ends: once the attack stops, so does the right to defend.',
        },
        {
          ja: '設問8は Asset の問題。書類は情報資産です。捨てた時点で証跡が消えます。',
          en: 'Item 8 is an Asset question. A document is an information asset — binning it destroys the record.',
        },
        {
          ja: '根拠の型：「私は〔私人／補助者〕として、〔目的〕のため、〔最小限の手段〕を取った」',
          en: 'The pattern: "As a [citizen / delegated agent], I took [the minimum action] in order to [purpose]."',
          small: true,
        },
      ],
    },
    {
      type: 'close',
      titleJa: '第1時限 まとめ',
      titleEn: 'Period 1 — Recap',
      rows: [
        { ja: '守る対象は People / Asset / Reputation。情報は Asset の中。', en: 'People, Assets, Reputation — with information inside Asset.' },
        { ja: '警備業法15条 ― 特別な権限は与えられていない。立場は私人。', en: 'Article 15 — no special authority is conferred. You act as a private citizen.' },
        { ja: 'できるのは「誰でもできること」と「委ねられたこと」の2つだけ。', en: 'Only two sources of authority: what anyone may do, and what was delegated.' },
      ],
      next: '次は第2時限 ― 権限の限界を、条文と罪名で具体的に押さえます。',
      nextEn: 'Next, Period 2 — the limits of that authority, in statutes and offence names.',
    },
  ],
};

// ── 第2時限 基本教育2「警備業法その他必要な法令」 ────────────────────────
const p2 = {
  file: '02_2限_法令.pptx',
  footJa: '第2時限｜基本教育2 警備業法その他警備業務の適正な実施に必要な法令',
  footEn: 'Period 2 | Basic Training 2 — Applicable Law',
  slides: [
    {
      type: 'title',
      kicker: '第2時限　08:05 – 09:05　基本教育2',
      kickerEn: 'Period 2 — Basic Training 2',
      titleJa: '警備業法その他警備業務の\n適正な実施に必要な法令',
      titleEn: 'The Security Services Act and Other Applicable Law',
      metaJa: COMMON_META_JA,
      metaEn: COMMON_META_EN,
    },
    {
      type: 'rows',
      titleJa: '前限の振り返り（30秒）',
      titleEn: 'Thirty-Second Recap',
      rows: [
        { ja: '守る対象は People / Asset / Reputation。', en: 'People, Assets, Reputation.' },
        { ja: '警備業法15条 ― 特別な権限はない。立場は私人。', en: 'Article 15 — no special authority. You act as a private citizen.' },
        { ja: 'できるのは「誰でもできること」と「委ねられたこと」だけ。', en: 'Only what anyone may do, and what was delegated to you.' },
        { ja: '本コマは、その限界を条文と罪名で具体化します。', en: 'This session puts statutes and offence names to those limits.' },
      ],
    },
    {
      type: 'cards',
      titleJa: '権限と限界マップ',
      titleEn: 'The Authority Map',
      cols: 2,
      cards: [
        {
          n: '1', h: '誰でもできる', hEn: 'Available to anyone',
          b: '現行犯逮捕（刑訴法213条）\n正当防衛（刑法36条）\n緊急避難（刑法37条）',
          bEn: 'Citizen\'s arrest (CCP Art.213) · Self-defence (Penal Code Art.36) · Necessity (Art.37)',
        },
        {
          n: '2', h: '委ねられてできる', hEn: 'Delegated by the site authority', accent: true,
          b: '入館の可否の判断\n退去の要請\n立入制限・記録',
          bEn: 'Deciding admission · Requesting departure · Restricting access · Keeping records',
        },
        {
          n: '3', h: 'できない', hEn: 'Not available to you',
          b: '所持品検査の強制\n取り調べ\n実力による取戻し（自救行為）',
          bEn: 'Compelling a bag search · Interrogation · Recovering property by force (self-help)',
        },
        {
          n: '4', h: '越えると', hEn: 'If you cross the line',
          b: '逮捕監禁罪・暴行罪・傷害罪・強要罪\n― そして会社の Reputation',
          bEn: 'Unlawful confinement, assault, injury, coercion — and the company\'s reputation.',
        },
      ],
    },
    {
      type: 'quote',
      titleJa: '現行犯逮捕 ― 要件は「明白性」',
      titleEn: 'Citizen\'s Arrest — the test is obviousness',
      quoteJa: '現行犯人は、何人でも、逮捕状なくしてこれを逮捕することができる。',
      quoteEn: 'Any person may arrest a flagrant offender without a warrant.',
      quoteSize: 19,
      quoteEnSize: 12.5,
      source: '刑事訴訟法 第213条 / Code of Criminal Procedure, Art. 213',
      note: '「怪しい」では足りません。犯罪と犯人が明白で、時間的に接着していることが必要です。越えれば逮捕監禁罪。',
      noteEn: 'Suspicion is not enough. The offence and the offender must be obvious, and the act immediate. Cross that line and it is unlawful confinement.',
    },
    {
      type: 'rows',
      titleJa: '逮捕後は「直ちに」引き渡す',
      titleEn: 'After an Arrest — hand over immediately',
      lead: '刑事訴訟法第214条 ― 直ちに検察官または司法警察職員に引き渡さなければならない。',
      leadEn: 'CCP Art. 214 — the person must be handed over to a prosecutor or judicial police official without delay.',
      rows: [
        { ja: '事務所に留め置いて事情を聞く ― 取り調べる権限はありません。', en: 'Holding someone in the office to question them — you have no power to interrogate.' },
        { ja: '書面へのサインを求める ― 強要になりえます。', en: 'Asking them to sign a statement — this can amount to coercion.' },
        { ja: '私物を確認する ― 同意がなければできません。', en: 'Examining their belongings — not without consent.' },
        { ja: 'やることは3つ：安全確保、警察への引継ぎ、そして記録。', en: 'Your three tasks: secure safety, hand over to police, and record what happened.' },
      ],
    },
    {
      type: 'rows',
      titleJa: '所持品検査 ― 権限規定はありません',
      titleEn: 'Bag Checks — there is no statutory power',
      rows: [
        { ja: 'できるのは、相手の任意の同意がある場合だけ。', en: 'Only with the person\'s genuinely voluntary consent.' },
        { ja: '断れない状況でとった同意は、同意ではありません。', en: 'Consent obtained where refusal was not a real option is not consent.' },
        { ja: '言い方は依頼形で。「ご協力いただけますか」― 命令にしない。', en: 'Ask, never order: "Would you be willing to help us?"' },
        { ja: '拒否されたら引き止めない。判断を警察・管理権者へ渡す。', en: 'If refused, do not detain. Pass the decision to the police or the site authority.' },
      ],
    },
    {
      type: 'cards',
      titleJa: '正当防衛・緊急避難・自救行為',
      titleEn: 'Self-Defence, Necessity, and Self-Help',
      cols: 3,
      cards: [
        {
          n: '36', h: '正当防衛', hEn: 'Self-defence — Penal Code Art. 36',
          b: '急迫不正の侵害に対し、やむを得ずした行為。\n侵害が終われば、権利も終わる。\n越えると：過剰防衛',
          bEn: 'An unavoidable act against an imminent unlawful attack. When the attack ends, so does the right. Beyond it: excessive defence.',
        },
        {
          n: '37', h: '緊急避難', hEn: 'Necessity — Penal Code Art. 37',
          b: '現在の危難を避けるための行為。\n生じた害が、避けようとした害を超えないこと。\n越えると：過剰避難',
          bEn: 'An act to avert a present danger — provided the harm caused does not exceed the harm avoided. Beyond it: excessive necessity.',
        },
        {
          n: '–', h: '自救行為', hEn: 'Self-help — no statutory basis',
          b: '明文の規定はありません。\n原則として認められません。\n盗まれた物を実力で取り返さないこと。',
          bEn: 'No statutory basis and, as a rule, not permitted. Do not recover stolen property by force.',
        },
      ],
    },
    {
      type: 'rows',
      titleJa: '有形力の行使 ― どこからが暴行か',
      titleEn: 'Use of Force — where assault begins',
      lead: '説得は有形力ではありません。境界は「相手の身体の自由に干渉した瞬間」です。',
      leadEn: 'Persuasion is not force. The line is crossed the moment you interfere with another person\'s physical freedom.',
      rows: [
        { ja: '声をかける ― 有形力ではない。いくらでもできる。', en: 'Speaking to someone — not force. Always available to you.' },
        { ja: '立ち位置で示す ― まだ有形力ではない。', en: 'Positioning yourself to signal — still not force.' },
        { ja: '進路に立ちふさがる ― ここが境界。目的と必要性を説明できますか。', en: 'Blocking someone\'s path — this is the boundary. Can you justify the purpose and necessity?' },
        { ja: '触れる・つかむ ― 正当防衛か現行犯逮捕に伴う最小限のときだけ。', en: 'Touching or seizing — only as the minimum incidental to self-defence or a lawful arrest.' },
      ],
    },
    {
      type: 'rows',
      titleJa: '企業法務リスク ― カメラ画像と入退室ログ',
      titleEn: 'Corporate Legal Risk — footage and access logs',
      lead: '防犯カメラ画像も入退室ログも、個人情報になりえます。警備が最も日常的に触れる情報資産です。',
      leadEn: 'Camera footage and access logs can both constitute personal data — and they are the information assets security touches most often.',
      rows: [
        { ja: '目的外に見ない。「気になったから」で再生しない。', en: 'Do not view outside its purpose. Curiosity is not a reason to replay footage.' },
        { ja: '持ち出さない・撮影しない・SNSに上げない。', en: 'Do not remove it, photograph it, or post it.' },
        { ja: '閲覧できる人を限る。閲覧した事実も記録する。', en: 'Limit who may view it — and record the fact that it was viewed.' },
        { ja: '社内規程は法令を超えられません。規程が権限を作ることはない。', en: 'Internal rules cannot override the law. A company rule cannot create legal authority.' },
      ],
    },
    {
      type: 'ttx',
      titleJa: 'TTX① 社内の持ち出しを現認した',
      titleEn: 'TTX ① — Witnessing an Internal Removal',
      scenarioJa: '20時。退社しようとする従業員のバッグから、会社備品のノートPCが見えている。持ち出し許可証はない。声をかけると「部長の許可は取ってある」と言い、立ち止まらない。',
      scenarioEn: '20:00. As an employee leaves, a company laptop is visible in their bag. There is no removal permit. When you speak to them they reply "I have the director\'s permission," and keep walking.',
      questions: [
        { ja: 'これは「犯罪」か、それとも「気になること」か。判断の根拠は。', en: 'Is this a crime, or merely a concern? On what basis do you decide?' },
        { ja: 'あなたはいま「私人」か「補助者」か。それぞれで何ができるか。', en: 'Are you acting as a citizen or as a delegated agent — and what does each allow?' },
        { ja: 'その場でできる最小限の手段は何か。できないことは何か。', en: 'What is the minimum action available here — and what is off-limits?' },
        { ja: '誰に、何分以内に、何を報告するか。', en: 'Who do you report to, within what time, and with what content?' },
      ],
      inject: '相手はそのまま出口へ向かった。追うか、追わないか。',
      injectEn: 'They head straight for the exit. Do you follow, or not?',
    },
    {
      type: 'rows',
      titleJa: 'TTX① 講評 ― 警備が結論を出さない',
      titleEn: 'TTX ① Debrief — security does not deliver the verdict',
      rows: [
        { ja: '相手が従業員だと、権利の所在が不明確。現行犯逮捕の「明白性」は満たしにくい。', en: 'When the person is an employee, ownership is unclear — the obviousness test for arrest is rarely met.' },
        { ja: 'できるのは委ねられた範囲：確認の依頼、記録、報告。強制はできない。', en: 'You may request, record and report — within what was delegated. You may not compel.' },
        { ja: '追わない判断も正解になりうる。安全と Reputation を天秤にかける。', en: 'Choosing not to pursue can be the right call — weigh safety and reputation.' },
        { ja: '最重要は記録。時刻・品目・会話内容を、事実として残す。', en: 'The record matters most: time, item, and what was said — as fact, not interpretation.' },
        { ja: '結論は人事・法務が出す。警備は事実を渡すところまで。', en: 'HR and Legal reach the conclusion. Security\'s job ends at handing over the facts.', small: true },
      ],
    },
  ],
};

module.exports = { p1, p2, COMMON_META_JA, COMMON_META_EN };
