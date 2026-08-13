'use strict';
// 第2時限｜基本教育2 警備員の資質の向上に関すること
// 内容ソース: Day1統合版 A-1 / A-2

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '02_2限_警備員の資質の向上.pptx',
  footJa: '第2時限｜基本教育2 警備員の資質の向上に関すること',
  footEn: 'Period 2 | Basic Training 2 — Raising the Standard of an Officer',
  slides: [
    {
      type: 'title',
      kicker: `第2時限　${slot(2)}　基本教育2`,
      kickerEn: 'Period 2 — Basic Training 2',
      titleJa: '警備員の資質の向上に関すること',
      titleEn: 'Raising the Standard of a Security Officer',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B2',
      titleJa: '警備員の仕事と責任', titleEn: 'The Work and the Responsibility',
      obj: '自分の仕事が何を引き受けているかを述べ、責任の範囲を言える。',
      objEn: 'You can state what your work takes on, and where your responsibility begins and ends.',
      sop: '担当する業務の範囲、勤務時間、報告先は警備指令書に定められている。',
      sopEn: 'Your assigned duties, hours and reporting line are set out in the post orders.',
      sources: SRC.basic, cols: 2,
      topics: [
        {
          h: '引き受けているもの', hEn: 'What You Take On',
          b: [
            { ja: '契約に基づき、クライアントの施設と人の安全を担当する', en: 'Under contract, you are responsible for the safety of the site and the people in it' },
            { ja: '担当する範囲は、契約と警備指令書で決まっている', en: 'The scope is fixed by the contract and the post orders' },
            { ja: '範囲を自分で広げることも、狭めることもできない', en: 'You cannot widen it, and you cannot narrow it, on your own' },
          ],
        },
        {
          h: '責任の3つの層', hEn: 'Three Layers of Responsibility',
          b: [
            { ja: '刑事責任 ― 権限を越えた行為は、罪に問われうる', en: 'Criminal: acting beyond your authority can be charged as an offence' },
            { ja: '民事責任 ― 損害を与えれば、賠償を負いうる', en: 'Civil: if you cause loss, you can be liable in damages' },
            { ja: '契約上の責任 ― 会社は契約を失いうる', en: 'Contractual: the company can lose the contract' },
          ],
        },
        {
          h: '「良かれと思って」は通らない', hEn: '"I Meant Well" Is Not a Defence',
          b: [
            { ja: '動機が善意でも、権限外の行為は権限外である', en: 'A good motive does not bring an act back inside your authority' },
            { ja: '判断に迷った時点が、報告するタイミングである', en: 'The moment you hesitate is the moment to report' },
            { ja: '一人で抱えない。抱えた結果は本人が負うことになる', en: 'Do not carry it alone. What you carry alone, you answer for alone' },
          ],
        },
        {
          h: '新任として最初に押さえること', hEn: 'What to Get Right First',
          b: [
            { ja: '分からないことは、その場で上長に聞く', en: 'When you do not know, ask your supervisor at the time' },
            { ja: '見たこと・したことを、その場で記録する', en: 'Record what you saw and what you did, at the time' },
            { ja: '前任者の申し送りを、書面で受け取る', en: 'Take the handover from the previous shift in writing' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B2',
      titleJa: '警備員規範と警備員心得', titleEn: 'The Officer Standards and Practices',
      obj: '業界で共有されている行動の基準を挙げ、日々の勤務に結びつけられる。',
      objEn: 'You can name the shared standards of the industry and connect them to daily duty.',
      sop: '挨拶・言葉遣い・立ち位置の具体は現場ごとに定められている。Site SOPによる。',
      sopEn: 'Greetings, wording and standing positions are specified per site. Follow the Site SOP.',
      sources: '全国警備業協会 教育教材、警備業法第15条', cols: 2,
      topics: [
        {
          h: '基本の姿勢', hEn: 'The Basic Stance',
          b: [
            { ja: '法令を守る。社内規程は法令を超えられない', en: 'Follow the law. Internal rules cannot override it' },
            { ja: '他人の権利と自由を侵害しない（法第15条）', en: 'Do not infringe the rights or freedoms of others (Art. 15)' },
            { ja: '公正であること。相手によって扱いを変えない', en: 'Be even-handed. Do not vary your treatment by who the person is' },
          ],
        },
        {
          h: '守秘', hEn: 'Confidentiality',
          b: [
            { ja: '業務上知った情報は他言しない。家族・同僚にも同じ', en: 'Do not pass on what you learn on duty. The same applies to family and colleagues' },
            { ja: '退職後も守秘義務は続く', en: 'The obligation continues after you leave employment' },
            { ja: '「もう終わった話」も対象。時間で解除されない', en: 'It covers closed matters too. Time does not release it' },
          ],
        },
        {
          h: '規律', hEn: 'Discipline',
          b: [
            { ja: '指揮命令に従う。ただし法令を超える指示には従わない', en: 'Follow the chain of command, except where an order exceeds the law' },
            { ja: '勤務時間を守る。交代の遅れは前直を拘束する', en: 'Keep to your hours. Arriving late holds the previous shift on post' },
            { ja: '持ち場を無断で離れない', en: 'Do not leave your post without authorisation' },
          ],
        },
        {
          h: '協力', hEn: 'Working Together',
          b: [
            { ja: '一人で対応しない場面を、あらかじめ決めておく', en: 'Decide in advance which situations you do not handle alone' },
            { ja: '応援を呼ぶことは、能力の不足ではない', en: 'Calling for backup is not a shortfall in ability' },
            { ja: '同僚の対応を、その場で否定しない。後で記録に残す', en: 'Do not contradict a colleague in front of others. Put it in the record afterwards' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B2',
      titleJa: '品格・身だしなみ・接遇', titleEn: 'Bearing, Appearance and Conduct',
      obj: '身だしなみと接遇が業務の一部である理由を述べ、基準に合わせられる。',
      objEn: 'You can say why appearance and conduct are part of the job, and meet the standard.',
      sop: '制服の着用基準、頭髪・装飾品の可否、挨拶の文言は現場ごとに異なる。',
      sopEn: 'Uniform standards, rules on hair and accessories, and set phrases differ by site.',
      sources: '警備業法第16条、全国警備業協会 教育教材', cols: 2,
      topics: [
        {
          h: '服装', hEn: 'Uniform',
          b: [
            { ja: '警察官など公務員の制服と明確に識別できること（法第16条）', en: 'It must be clearly distinguishable from a public official\'s uniform (Art. 16)' },
            { ja: '定められた制服を、定められたとおりに着用する', en: 'Wear the issued uniform exactly as specified' },
            { ja: '汚れ・ほつれ・欠品は、勤務前に申し出る', en: 'Report stains, tears or missing items before you go on duty' },
          ],
        },
        {
          h: '立ち居振る舞い', hEn: 'Bearing',
          b: [
            { ja: '立哨中は壁にもたれない。腕を組まない', en: 'On stand, do not lean on walls or fold your arms' },
            { ja: '私語をしない。私物端末を操作しない', en: 'No chatting on post. Do not use a personal device' },
            { ja: '見られている場所と、そうでない場所を分けない', en: 'Do not behave differently where you think no one is watching' },
          ],
        },
        {
          h: '接遇の基本', hEn: 'How You Deal with People',
          b: [
            { ja: '先に挨拶する。相手が誰であっても同じ', en: 'Greet first, whoever the person is' },
            { ja: '指を差さない。手のひらで方向を示す', en: 'Do not point. Indicate direction with an open hand' },
            { ja: '断るときも、代わりにできることを示す', en: 'When you decline, say what you can do instead' },
          ],
        },
        {
          h: '外国語での対応', hEn: 'When You Work in Another Language',
          b: [
            { ja: '速度を落として短く言う。流暢さより正確さ', en: 'Slow down and keep it short. Accuracy matters more than fluency' },
            { ja: '分からないときは推測で答えず、確認すると伝える', en: 'If you do not understand, do not guess. Say you will check' },
            { ja: '重要な事項は、口頭だけでなく記録に残す', en: 'Put anything important in the record, not only in speech' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B2',
      titleJa: '警備員になれない場合', titleEn: 'Who May Not Serve as an Officer',
      obj: '警備員の制限が法律で定められていることを理解し、申告義務を知る。',
      objEn: 'You understand that restrictions on officers are set by law, and what you must declare.',
      sop: '入社時・在職中の申告手続は会社の規程による。事実が変わったら速やかに申し出る。',
      sopEn: 'Declaration procedures follow company rules. Report promptly if your circumstances change.',
      sources: '警備業法第3条、第14条', cols: 2,
      topics: [
        {
          h: '法律による制限', hEn: 'Restrictions Set by Law',
          b: [
            { ja: '18歳未満の者は、警備員になることができない（法第14条）', en: 'A person under 18 may not serve as a security officer (Art. 14)' },
            { ja: '法第3条に定める欠格事由に該当する者も、警備員になれない', en: 'Nor may a person to whom the disqualifications in Art. 3 apply' },
            { ja: '該当の有無は会社が確認する。個別の要件は第3条による', en: 'The company checks this. The individual grounds are set out in Art. 3' },
          ],
        },
        {
          h: '本人が行うこと', hEn: 'What You Must Do',
          b: [
            { ja: '会社の求める書類を、正確に提出する', en: 'Submit the documents the company asks for, accurately' },
            { ja: '在職中に事実が変わった場合は、速やかに申し出る', en: 'If your circumstances change while employed, report it promptly' },
            { ja: '虚偽の申告は、会社と本人の双方に不利益となる', en: 'A false declaration harms both the company and you' },
          ],
        },
      ],
    },

    {
      type: 'grid',
      titleJa: '日本の職場で使う言葉', titleEn: 'Words Used in a Japanese Workplace',
      lead: '意味を取り違えると、報告が届きません。',
      leadEn: 'If these are misread, your report does not arrive.',
      cols: 2,
      items: [
        { ja: '報告 hōkoku ― 事実を伝えること。', en: 'Report. Passing on a fact.' },
        { ja: '連絡 renraku ― 共有すること。判断は求めない。', en: 'Notify. Sharing information; no decision is asked for.' },
        { ja: '相談 sōdan ― 判断を仰ぐこと。', en: 'Consult. Asking for a decision.' },
        { ja: '申し送り mōshiokuri ― 次の勤務者に引き継ぐこと。', en: 'Handover. Passing duty to the next shift.' },
        { ja: '上長 jōchō ― 自分の指揮命令上の上位者。', en: 'Supervisor. The person above you in the chain of command.' },
        { ja: '立哨 risshō ― 定位置に立って警戒すること。', en: 'Standing post. Keeping watch from a fixed position.' },
        { ja: '巡回 junkai ― 決められた経路を回ること。', en: 'Patrol. Walking a defined route.' },
        { ja: '所定 shotei ― あらかじめ定められていること。', en: 'Prescribed. Fixed in advance by a rule.' },
      ],
    },

    {
      type: 'grid',
      titleJa: 'ミニTTX ― ○か×か、根拠を一言で', titleEn: 'Mini TTX — Yes or No, with one line of reasoning',
      lead: '手元に○×と根拠を書いてください。指名します。',
      leadEn: 'Write your answer and your reason. I will call on you.',
      cols: 2,
      items: [
        { ja: '上長の指示であれば、法令を超える対応もしてよい。', en: 'If your supervisor orders it, you may act beyond the law.' },
        { ja: '応援を呼ぶのは、能力が足りないということである。', en: 'Calling for backup means you are not capable enough.' },
        { ja: '退職すれば、守秘義務はなくなる。', en: 'Once you leave the company, confidentiality ends.' },
        { ja: '相手が誰であっても、扱いを変えない。', en: 'You treat people the same, whoever they are.' },
        { ja: '判断に迷ったときは、まず自分で結論を出してから報告する。', en: 'When unsure, reach a conclusion yourself first, then report.' },
        { ja: '18歳未満でも、本人が希望すれば警備員になれる。', en: 'A person under 18 may serve if they wish to.' },
        { ja: '見られていない場所では、姿勢を崩してもよい。', en: 'Where nobody is watching, you may relax your bearing.' },
        { ja: '日本語が分からない来訪者には、推測で答えてよい。', en: 'With a visitor you cannot understand, it is fine to answer by guessing.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ○　5 ×　6 ×　7 ×　8 ×',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 Yes · 5 No · 6 No · 7 No · 8 No',
      rows: [
        { ja: '設問1は判断軸です。法令は社内規程と指示の上にあります。', en: 'Item 1 is the priority order. The law sits above internal rules and orders.' },
        { ja: '設問2・5は同じ論点です。迷った時点が報告のタイミングです。', en: 'Items 2 and 5 are one point: the moment you hesitate is the moment to report.' },
        { ja: '設問3は守秘義務です。退職後も続きます。', en: 'Item 3 is confidentiality. It continues after you leave.' },
        { ja: '設問6は法第14条です。18歳未満は警備員になれません。', en: 'Item 6 is Article 14. A person under 18 may not serve.' },
        { ja: '設問8は、推測で答えないこと。確認すると伝えて確認します。', en: 'Item 8: do not guess. Say you will check, and then check.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 2-A',
      titleJa: 'TTX 2-A　上長からの指示', titleEn: 'TTX 2-A — An Order from Your Supervisor',
      scenarioJa: '夜勤中、無線で上長から指示が入る。「今日の日誌は、20時の巡回を実施したことにして書いておいてくれ。人手が足りず回れなかったが、記録が空くと契約上まずい」。あなたはその時間、受付を離れられず、巡回していない。',
      scenarioEn: 'On night duty, your supervisor radios: "Write the log as though the 20:00 patrol was done. We were short-handed and could not do it, but a gap in the record is a problem for the contract." You were tied to reception at that hour and did not patrol.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '指示に従ってよいか。判断軸のどこで止まるか。', en: 'May you comply? At which step of the priority order does this stop?' },
        { ja: '実施していない巡回を記録すると、何が起きるか。', en: 'What follows from recording a patrol that did not happen?' },
        { ja: '日誌に、実際には何と書くか。', en: 'What do you actually write in the log?' },
        { ja: '上長に何と返すか。関係を壊さずに断れるか。', en: 'What do you say back? Can you decline without damaging the relationship?' },
      ],
      inject: '上長が「これは指示だ。責任は私が取る」と言った。',
      injectEn: 'Your supervisor says: "This is an order. I will take responsibility."',
      inject2: '翌朝、クライアントから前夜の巡回記録について問い合わせが入った。',
      inject2En: 'The next morning the client asks about the previous night\'s patrol record.',
      sop: '日誌の様式、未実施時の記載方法、報告先は現場ごとに定められている。',
      sopEn: 'The log format, how to record a missed round, and whom to tell are set per site.',
      sources: SRC.basic + '、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 2-B',
      titleJa: 'TTX 2-B　来訪者からの申し出', titleEn: 'TTX 2-B — An Offer from a Visitor',
      scenarioJa: '年末、頻繁に出入りしている取引先の担当者が受付に来て、紙袋を差し出した。「いつもお世話になっているので、警備の皆さんでどうぞ」。中身は菓子折りに見える。断ると相手は「気を悪くしないでください、みんなにお配りしているだけです」と言う。周囲に社員が数名いる。',
      scenarioEn: 'Year-end. A contractor who visits often comes to reception and holds out a paper bag: "You look after us all year — this is for the security team." It appears to be a box of sweets. When you decline, they say: "Please do not take it badly, I am handing these out to everyone." Several employees are nearby.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '受け取ってよいか。判断の根拠は何か。', en: 'May you accept it? On what basis do you decide?' },
        { ja: '金額の大小は、判断を変えるか。', en: 'Does the value of the gift change your decision?' },
        { ja: '断るとき、何と言うか。相手の面子をどう扱うか。', en: 'What do you say when you decline, and how do you leave them their dignity?' },
        { ja: '受け取ってしまった場合、次に何をするか。', en: 'If you have already taken it, what do you do next?' },
      ],
      inject: '相手が紙袋を受付カウンターに置いて、そのまま立ち去ろうとした。',
      injectEn: 'They put the bag down on the counter and start to walk away.',
      inject2: '近くにいた社員が「もらっておけばいいのに」と声をかけてきた。',
      inject2En: 'An employee nearby says: "You may as well just take it."',
      sop: '贈答品の受領可否と、受け取ってしまった場合の届出先は会社とクライアントの規程による。',
      sopEn: 'Whether gifts may be accepted, and where to declare one, follow company and client rules.',
      sources: SRC.basic + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第2時限 まとめ', titleEn: 'Period 2 — Summary',
      rows: [
        { ja: '契約と警備指令書が業務範囲を決める。自分で広げも狭めもできない。', en: 'Contract and post orders set your scope. You cannot widen or narrow it yourself.' },
        { ja: '守秘義務は退職後も続く。相手が家族でも同僚でも同じ。', en: 'Confidentiality continues after you leave, and applies to family and colleagues alike.' },
        { ja: '指揮命令には従う。ただし法令を超える指示には従わない。', en: 'Follow the chain of command, except where an order exceeds the law.' },
        { ja: '迷った時点が報告のタイミング。一人で抱えない。', en: 'The moment you hesitate is the moment to report. Do not carry it alone.' },
      ],
      next: '第3時限 ― 警備業法の条文そのものを読みます。',
      nextEn: 'Period 3 — we read the text of the Security Services Act itself.',
    },
  ],
};
