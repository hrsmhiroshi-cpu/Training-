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
      titleJa: '本日の3つの問い',
      titleEn: 'Three Questions for Today',
      lead: 'この3問は、本日私が担当する全コマで使います。判断の根拠を、この3つで説明してください。',
      leadEn: 'We use these three questions in every session I lead today. Explain your decisions with them.',
      rows: [
        {
          ja: '何を守っているのか。― People / Asset / Reputation のどれか。',
          en: 'What am I protecting? People, Assets, or Reputation.',
        },
        {
          ja: 'どの立場で動くのか。―「私人」か、「管理権者の補助者」か。',
          en: 'In what capacity am I acting? As a private citizen, or for the site authority.',
        },
        {
          ja: 'その手段は最小限か。― 越えた場合、何の罪に当たるか。',
          en: 'Is this the minimum action? If I go beyond it, what offence does it become?',
        },
      ],
    },
    {
      type: 'cards',
      titleJa: 'コーポレートセキュリティが守るもの',
      titleEn: 'What Corporate Security Protects',
      lead: '守る対象は3つ。情報は Asset に含みます。',
      leadEn: 'Three categories. Information is part of Asset.',
      cols: 3,
      cards: [
        {
          n: 'P', h: 'People', hEn: '人',
          b: '従業員、来訪者、役員、警備員自身。負傷や事件の当事者になりうる者。',
          bEn: 'Employees, visitors, executives, and guards. Anyone who can be injured or involved.',
        },
        {
          n: 'A', h: 'Asset', hEn: '資産（物的・情報）', accent: true,
          b: '建物、設備、現金などの物的資産。書類、データ、ログなどの情報資産。',
          bEn: 'Physical assets such as buildings, equipment and cash. Information assets such as documents, data and logs.',
        },
        {
          n: 'R', h: 'Reputation', hEn: '信用',
          b: '企業の信頼、ブランド、対外的な評価。',
          bEn: 'Company trust, brand, and public standing.',
        },
      ],
    },
    {
      type: 'two',
      titleJa: 'Asset の内訳',
      titleEn: 'What Counts as an Asset',
      left: {
        h: '物的資産', hEn: 'Physical assets',
        items: [
          { ja: '建物、設備、電源、空調', en: 'Buildings, equipment, power, air conditioning' },
          { ja: '現金、金券、什器', en: 'Cash, vouchers, fixtures' },
          { ja: '在庫、原材料、製品', en: 'Stock, materials, products' },
          { ja: '車両、鍵、カード類', en: 'Vehicles, keys, access cards' },
        ],
      },
      right: {
        h: '情報資産', hEn: 'Information assets',
        items: [
          { ja: '書類、図面、契約書', en: 'Documents, drawings, contracts' },
          { ja: 'データ、端末、記録媒体', en: 'Data, devices, storage media' },
          { ja: '顧客情報、人事情報', en: 'Customer data, HR data' },
          { ja: '入退室ログ、カメラ画像', en: 'Access logs, camera footage' },
        ],
      },
      note: '施錠されたサーバ室も、机上に放置された書類も、同じ Asset として扱います。',
      noteEn: 'A locked server room and a document left on a desk are both Assets.',
    },
    {
      type: 'quote',
      titleJa: 'Reputation への影響',
      titleEn: 'Impact on Reputation',
      quoteJa: '信用の毀損は、物的損害と異なり、回復に長期を要します。\n現場の対応がそのまま企業の評価になります。',
      quoteEn: 'Damage to reputation takes a long time to repair, unlike physical loss.\nHow you act on site becomes how the company is judged.',
      quoteSize: 17,
      quoteEnSize: 11.5,
      note: '過剰な有形力、断定的な発言、情報の放置。いずれも企業全体の問題になりえます。',
      noteEn: 'Excessive force, statements you cannot support, and unattended information can all become company-level problems.',
    },
    {
      type: 'quote',
      titleJa: '警備業法 第15条',
      titleEn: 'Security Services Act, Article 15',
      quoteJa: '警備業者及び警備員は、警備業務を行うに当たっては、この法律により特別に権限を与えられているものでないことに留意するとともに、他人の権利及び自由を侵害し、又は個人若しくは団体の正当な活動に干渉してはならない。',
      quoteEn: 'When carrying out security operations, security businesses and guards must remember that this Act gives them no special authority. They must not infringe the rights or freedoms of others, and must not interfere with lawful activities.',
      quoteSize: 14.5,
      quoteEnSize: 10.5,
      source: '警備業法 第15条 / Article 15',
      note: '警備員の法的な立場は私人です。制服により権限が加わることはありません。',
      noteEn: 'A security guard is a private citizen in law. The uniform adds no legal authority.',
    },
    {
      type: 'two',
      titleJa: '警察官と警備員 ― 権限の違い',
      titleEn: 'Police Officers and Security Guards — Different Powers',
      lead: '警察官には法律で与えられた権限があります。警備員にはありません。',
      leadEn: 'Police officers have powers granted by law. Security guards do not.',
      left: {
        h: '警察官にある権限', hEn: 'Police powers (Police Duties Execution Act)',
        items: [
          { ja: '職務質問（第2条）', en: 'Stop and question a person (Art. 2)' },
          { ja: '保護（第3条）、避難等の措置（第4条）', en: 'Protective custody (Art. 3). Order evacuation (Art. 4)' },
          { ja: '犯罪の予防及び制止（第5条）', en: 'Prevent and stop a crime (Art. 5)' },
          { ja: '立入（第6条）、武器の使用（第7条）', en: 'Enter premises (Art. 6). Use weapons (Art. 7)' },
          { ja: '逮捕状による逮捕、取り調べ', en: 'Arrest by warrant. Interrogation' },
        ],
      },
      right: {
        h: '警備員にある権限', hEn: 'What a security guard has',
        items: [
          { ja: '左の権限は、いずれもありません', en: 'None of the powers on the left' },
          { ja: '現行犯逮捕（刑訴法213条）― 誰でもできる', en: 'Arrest of a flagrant offender — anyone may do this' },
          { ja: '正当防衛（刑法36条）、緊急避難（37条）― 誰でもできる', en: 'Self-defence and necessity — anyone may do this' },
          { ja: '管理権者から委ねられた範囲', en: 'What the site authority has delegated' },
          { ja: 'その範囲は契約と警備指令書で決まります', en: 'That scope is set by the contract and the post orders' },
        ],
      },
      note: '警備業法第16条 ― 警備員の服装は、警察官など公務員の制服と明確に識別できるものでなければなりません。',
      noteEn: 'Security Services Act Art. 16 — a guard\'s uniform must be clearly distinguishable from the uniform of a police officer or other public official.',
    },
    {
      type: 'cards',
      titleJa: '権限の根拠は2つだけ',
      titleEn: 'Your Authority Has Only Two Sources',
      cols: 2,
      cards: [
        {
          n: '1', h: '誰でもできること', hEn: 'What any person may do',
          b: '現行犯逮捕、正当防衛、緊急避難。\n警備員だからできるのではありません。要件は誰に対しても同じです。',
          bEn: 'Citizen\'s arrest, self-defence, necessity. You have these as a person, not as a guard. The legal tests are the same for everyone.',
        },
        {
          n: '2', h: '管理権者から委ねられたこと', hEn: 'What the site authority delegates', accent: true,
          b: '入館の可否、退去の要請、立入制限、記録。\n委ねられた範囲を超えることはできません。',
          bEn: 'Admission, requests to leave, access restriction, record-keeping. You cannot go beyond what was delegated.',
        },
      ],
    },
    {
      type: 'grid',
      titleJa: 'ミニTTX ― ○か×か、根拠を一言で',
      titleEn: 'Mini TTX — Yes or No, with one line of reasoning',
      lead: '手元に○×と根拠を書いてください。挙手は求めません。指名します。',
      leadEn: 'Write your answer and your reason. No hands needed. I will call on you.',
      cols: 2,
      items: [
        { ja: '制服を着ているので、来訪者のカバンを開けて確認した。', en: 'In uniform, you open a visitor\'s bag to check it.' },
        { ja: '目の前で商品を隠して出口を通過した者を取り押さえた。', en: 'You detain someone who hid goods and walked out.' },
        { ja: '逮捕した相手から、事務所で30分間、事情を聞いた。', en: 'You question a detained person in the office for 30 minutes.' },
        { ja: '殴りかかってきた相手の腕を押さえて止めた。', en: 'You stop an incoming punch by holding the arm.' },
        { ja: '相手が倒れた後も、念のため押さえ続けた。', en: 'You keep holding the person down after they are down.' },
        { ja: '管理権者の指示で、入館証のない者に退去を求めた。', en: 'On the authority\'s instruction, you ask an unbadged person to leave.' },
        { ja: '「怪しい」と思ったので、相手の進路に立ちふさがった。', en: 'You block a person\'s path because they look suspicious.' },
        { ja: '落ちていた書類を拾い、そのままゴミ箱に捨てた。', en: 'You pick up a stray document and put it in the bin.' },
      ],
    },
    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方',
      titleEn: 'Mini TTX — Answers and How to State Your Reasoning',
      lead: '解答　1 ×　2 ○　3 ×　4 ○　5 ×　6 ○　7 ×　8 ×',
      leadEn: 'Answers:  1 No · 2 Yes · 3 No · 4 Yes · 5 No · 6 Yes · 7 No · 8 No',
      rows: [
        {
          ja: '×の多くは、委ねられていないことを行っています。',
          en: 'Most of the "No" answers do something that was never delegated to you.',
        },
        {
          ja: '○は、「誰でもできること」か「委ねられたこと」のどちらかに収まっています。',
          en: 'Each "Yes" fits into source 1 or source 2.',
        },
        {
          ja: '設問5は終期の問題です。侵害が終われば、正当防衛も終わります。',
          en: 'Item 5 is about when it ends. When the attack stops, the right to defend stops.',
        },
        {
          ja: '設問8は Asset の問題です。書類は情報資産です。廃棄すると証跡が残りません。',
          en: 'Item 8 is an Asset question. A document is an information asset. Binning it destroys the record.',
        },
        {
          ja: '根拠の示し方：「〔私人／補助者〕として、〔目的〕のため、〔手段〕を取った」',
          en: 'State it this way: "As a [citizen / delegated agent], I took [action] for [purpose]."',
          small: true,
        },
      ],
    },
    {
      type: 'close',
      titleJa: '第1時限 まとめ',
      titleEn: 'Period 1 — Summary',
      rows: [
        { ja: '守る対象は People / Asset / Reputation。情報は Asset に含む。', en: 'People, Assets, Reputation. Information is part of Asset.' },
        { ja: '警備業法15条 ― 特別な権限は与えられていない。立場は私人。', en: 'Article 15 — no special authority. You act as a private citizen.' },
        { ja: '警察官にある権限は、警備員にはない。服装も区別が求められる。', en: 'Police powers do not extend to guards. Uniforms must also be distinguishable.' },
        { ja: '権限の根拠は「誰でもできること」と「委ねられたこと」の2つ。', en: 'Two sources only: what anyone may do, and what was delegated.' },
      ],
      next: '第2時限 ― その限界を、条文と罪名で確認します。',
      nextEn: 'Period 2 — those limits, in statutes and offence names.',
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
      titleJa: '第1時限の確認',
      titleEn: 'Recap of Period 1',
      rows: [
        { ja: '守る対象は People / Asset / Reputation。', en: 'People, Assets, Reputation.' },
        { ja: '警備業法15条 ― 特別な権限はない。立場は私人。', en: 'Article 15 — no special authority. You act as a private citizen.' },
        { ja: '警察官にある権限（職務質問、保護、制止、立入等）は警備員にはない。', en: 'Police powers such as stop-and-question, custody, and entry do not apply to guards.' },
        { ja: '本コマでは、その限界を条文と罪名で確認します。', en: 'This session sets out those limits, with statutes and offence names.' },
      ],
    },
    {
      type: 'grid',
      titleJa: '日本の法律用語',
      titleEn: 'Japanese Legal Terms',
      lead: '日本国内では日本の法律が適用されます。母国の制度と同じとは限りません。',
      leadEn: 'Japanese law applies in Japan. It may differ from the system in your home country.',
      cols: 2,
      items: [
        { ja: '私人　shijin ― 警備員も法的には私人。', en: 'Private citizen. Your legal status, even in uniform.' },
        { ja: '管理権者　kanri-kensha ― 施設を管理する権限をもつ者。', en: 'The site authority. Your powers come from them.' },
        { ja: '現行犯逮捕　genkōhan-taiho ― 明白かつ直後であること。', en: 'Flagrant-offender arrest. Must be obvious and immediate.' },
        { ja: '正当防衛　seitō-bōei ― 侵害が終われば終わる。', en: 'Self-defence. It ends when the attack ends.' },
        { ja: '緊急避難　kinkyū-hinan ― 害の釣り合いが必要。', en: 'Necessity. Harm caused must not exceed harm avoided.' },
        { ja: '自救行為　jikyū-kōi ― 日本では原則認められない。', en: 'Self-help. As a rule, not permitted in Japan.' },
        { ja: '有形力　yūkeiryoku ― 相手に触れた時点で有形力。', en: 'Physical force. Touching the person is already force.' },
        { ja: '不退去　futaikyo ― 退去要請は管理権者の意思による。', en: 'Refusing to leave. The request must come from the authority.' },
      ],
    },
    {
      type: 'cards',
      titleJa: '権限と限界',
      titleEn: 'Authority and Its Limits',
      cols: 2,
      cards: [
        {
          n: '1', h: '誰でもできる', hEn: 'Available to any person',
          b: '現行犯逮捕（刑訴法213条）\n正当防衛（刑法36条）\n緊急避難（刑法37条）',
          bEn: 'Citizen\'s arrest (CCP Art. 213). Self-defence (Penal Code Art. 36). Necessity (Art. 37).',
        },
        {
          n: '2', h: '委ねられてできる', hEn: 'Delegated by the site authority', accent: true,
          b: '入館の可否の判断\n退去の要請\n立入制限、記録',
          bEn: 'Deciding admission. Requesting a person to leave. Restricting access. Keeping records.',
        },
        {
          n: '3', h: 'できない', hEn: 'Not available to you',
          b: '所持品検査の強制\n取り調べ\n実力による取戻し（自救行為）',
          bEn: 'Forcing a bag search. Interrogation. Recovering property by force.',
        },
        {
          n: '4', h: '越えた場合', hEn: 'If you exceed it',
          b: '逮捕監禁罪、暴行罪、傷害罪、強要罪。\n会社は Reputation を失います。',
          bEn: 'Unlawful confinement, assault, injury, coercion. The company also loses reputation.',
        },
      ],
    },
    {
      type: 'quote',
      titleJa: '現行犯逮捕',
      titleEn: 'Arrest of a Flagrant Offender',
      quoteJa: '現行犯人は、何人でも、逮捕状なくしてこれを逮捕することができる。',
      quoteEn: 'Any person may arrest a flagrant offender without a warrant.',
      quoteSize: 19,
      quoteEnSize: 12.5,
      source: '刑事訴訟法 第213条 / Code of Criminal Procedure, Art. 213',
      note: '要件は、犯罪と犯人が明白であること、そして時間的に接着していることです。疑いだけでは足りません。越えた場合は逮捕監禁罪に当たります。',
      noteEn: 'The offence and the offender must be obvious, and the act immediate. Suspicion is not enough. Going beyond this is unlawful confinement.',
    },
    {
      type: 'rows',
      titleJa: '逮捕後は直ちに引き渡す',
      titleEn: 'After an Arrest, Hand Over Immediately',
      lead: '刑事訴訟法第214条 ― 直ちに検察官または司法警察職員に引き渡さなければなりません。',
      leadEn: 'CCP Art. 214 — the person must be handed to a prosecutor or judicial police official without delay.',
      rows: [
        { ja: '事務所に留め置いて事情を聞くことはできません。取り調べる権限はありません。', en: 'You cannot hold the person in the office to question them. You have no power to interrogate.' },
        { ja: '書面へのサインを求めることはできません。強要に当たる場合があります。', en: 'Do not ask them to sign a statement. This can amount to coercion.' },
        { ja: '私物の確認は、同意がなければできません。', en: 'You cannot examine their belongings without consent.' },
        { ja: '行うことは3つです。安全の確保、警察への引継ぎ、記録。', en: 'Three tasks: secure safety, hand over to police, keep a record.' },
      ],
    },
    {
      type: 'rows',
      titleJa: '所持品検査',
      titleEn: 'Bag Checks',
      rows: [
        { ja: '権限規定はありません。相手の任意の同意がある場合に限られます。', en: 'There is no statutory power. It requires the person\'s voluntary consent.' },
        { ja: '断ることができない状況での同意は、同意になりません。', en: 'Consent given where refusal was not possible is not consent.' },
        { ja: '依頼の形で伝えます。「ご協力いただけますか」。命令にしません。', en: 'Ask, do not order: "Would you be willing to help us?"' },
        { ja: '拒否された場合は引き止めません。判断を警察または管理権者へ渡します。', en: 'If refused, do not detain. Pass the decision to the police or the site authority.' },
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
          b: '急迫不正の侵害に対し、やむを得ずした行為。\n侵害が終われば終わります。\n越えた場合：過剰防衛',
          bEn: 'An unavoidable act against an imminent unlawful attack. It ends when the attack ends. Beyond that: excessive defence.',
        },
        {
          n: '37', h: '緊急避難', hEn: 'Necessity — Penal Code Art. 37',
          b: '現在の危難を避けるための行為。\n生じた害が、避けようとした害を超えないこと。\n越えた場合：過剰避難',
          bEn: 'An act to avoid a present danger. The harm caused must not exceed the harm avoided. Beyond that: excessive necessity.',
        },
        {
          n: '–', h: '自救行為', hEn: 'Self-help — no statutory basis',
          b: '明文の規定はありません。\n原則として認められません。\n盗まれた物を実力で取り返さないこと。',
          bEn: 'There is no statutory basis. As a rule it is not permitted. Do not recover stolen property by force.',
        },
      ],
    },
    {
      type: 'rows',
      titleJa: '有形力の行使',
      titleEn: 'Use of Physical Force',
      lead: '説得は有形力ではありません。相手の身体の自由に干渉した時点から有形力です。',
      leadEn: 'Persuasion is not force. Force begins when you interfere with the person\'s freedom of movement.',
      rows: [
        { ja: '声をかける ― 有形力ではありません。', en: 'Speaking to someone is not force.' },
        { ja: '立ち位置で示す ― 有形力ではありません。', en: 'Positioning yourself is not force.' },
        { ja: '進路に立ちふさがる ― ここが境界です。目的と必要性を説明できますか。', en: 'Blocking the path is the boundary. Can you explain the purpose and the need?' },
        { ja: '触れる、つかむ ― 正当防衛か現行犯逮捕に伴う場合に限られます。', en: 'Touching or seizing is limited to self-defence or a lawful arrest.' },
      ],
    },
    {
      type: 'rows',
      titleJa: 'カメラ画像と入退室ログ',
      titleEn: 'Camera Footage and Access Logs',
      lead: 'カメラ画像も入退室ログも、個人情報になりえます。警備が最も日常的に扱う情報資産です。',
      leadEn: 'Camera footage and access logs can be personal data. They are the information assets guards handle most often.',
      rows: [
        { ja: '目的外に見ません。関心があるという理由で再生しません。', en: 'Do not view them outside their purpose. Curiosity is not a reason.' },
        { ja: '持ち出さない、撮影しない、投稿しない。', en: 'Do not remove, photograph, or post them.' },
        { ja: '閲覧できる者を限ります。閲覧した事実も記録します。', en: 'Limit who may view them. Record that a viewing took place.' },
        { ja: '社内規程は法令を超えられません。規程が権限を作ることはありません。', en: 'Internal rules cannot override the law. A rule cannot create legal authority.' },
      ],
    },
    {
      type: 'ttx',
      titleJa: 'TTX① 社内の持ち出しを現認した',
      titleEn: 'TTX ① — Witnessing an Internal Removal',
      scenarioJa: '20時。退社しようとする従業員のバッグから、会社備品のノートPCが見えている。声をかけると「部長の許可は取ってある」と言い、立ち止まらない。持ち出し許可証の運用は先月変更されたばかりで、あなたは新しい様式を見たことがない。',
      scenarioEn: '20:00. A company laptop is visible in the bag of an employee who is leaving. They say "I have the director\'s permission" and keep walking. The removal-permit procedure changed last month and you have not seen the new form.',
      scenarioH: 1.86,
      questions: [
        { ja: 'これは犯罪か、それとも確認が必要な事象か。判断の根拠は何か。', en: 'Is this a crime, or something that needs checking? On what basis?' },
        { ja: 'いま「私人」か「補助者」か。それぞれで何ができるか。', en: 'Are you acting as a citizen or as a delegated agent? What does each allow?' },
        { ja: '許可証の様式を知らないことは、判断にどう影響するか。', en: 'You do not know the new form. How does that affect your decision?' },
        { ja: '誰に、何分以内に、何を報告するか。', en: 'Who do you report to, within what time, and with what content?' },
      ],
      inject: '相手はそのまま出口へ向かった。追うか、追わないか。',
      injectEn: 'They head for the exit. Do you follow, or not?',
    },
    {
      type: 'rows',
      titleJa: 'TTX① 講評',
      titleEn: 'TTX ① — Debrief',
      rows: [
        { ja: '相手が従業員の場合、権利の所在が不明確です。現行犯逮捕の明白性は満たしにくい。', en: 'When the person is an employee, ownership is unclear. The obviousness test is rarely met.' },
        { ja: 'できるのは委ねられた範囲です。確認の依頼、記録、報告。強制はできません。', en: 'You may request, record and report, within what was delegated. You may not compel.' },
        { ja: '追跡しない判断も成り立ちます。安全と信用への影響を考慮します。', en: 'Choosing not to follow is also valid. Consider the effect on safety and reputation.' },
        { ja: '許可証の様式が不明なときは、断定せず、確認できる者に確認します。', en: 'If you do not know the form, do not conclude. Ask someone who can confirm.' },
        { ja: '記録します。時刻、品目、型番、会話内容を事実として残します。', en: 'Record it: time, item, model number, and what was said, as fact.', small: true },
      ],
    },
  ],
};

module.exports = { p1, p2, COMMON_META_JA, COMMON_META_EN };
