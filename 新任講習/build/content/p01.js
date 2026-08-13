'use strict';
// 第1時限｜基本教育1 警備業務実施の基本原則
// 受講者の約7割が外国籍。英語は補助ではなく本文として扱い、
// 「日本ではできないこと」を独立した論点として立てる。

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '01_1限_警備業務実施の基本原則.pptx',
  footJa: '第1時限｜基本教育1 警備業務実施の基本原則',
  footEn: 'Period 1 | Basic Training 1 — Fundamental Principles',
  slides: [
    {
      type: 'title',
      kicker: `第1時限　${slot(1)}　基本教育1`,
      kickerEn: 'Period 1 — Basic Training 1',
      titleJa: '警備業務実施の基本原則',
      titleEn: 'Fundamental Principles of Security Operations',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B1',
      titleJa: '警備業とは', titleEn: 'What the Security Industry Is',
      obj: '警備業が「他人の需要に応じて行う民間サービス業」であることを説明できる。',
      objEn: 'You can explain that security is a private service performed in response to the needs of others.',
      sop: '配属先の契約範囲と業務内容はSite SOPと警備指令書に定められている。',
      sopEn: "Your site's contracted scope and duties are set out in the Site SOP and post orders.",
      sources: SRC.basic, cols: 2,
      topics: [
        {
          h: '警備業法 第2条の定義', hEn: 'The Definition in Article 2',
          b: [
            { ja: '警備業務を「他人の需要に応じて」行う営業をいう', en: 'A business that provides security services in response to the needs of others' },
            { ja: '依頼主との契約に基づく。契約の範囲が仕事の範囲になる', en: 'It runs on a contract with the client, and that contract sets the scope of your work' },
            { ja: '営むには都道府県公安委員会の認定が必要', en: 'Operating requires certification by the prefectural public safety commission' },
          ],
        },
        {
          h: '警備業になるもの・ならないもの', hEn: 'Where the Line Falls',
          b: [
            { ja: 'A社がB警備会社に依頼し、B社の警備員が常駐する → 警備業', en: 'Company A contracts firm B, whose officers are stationed there → the security industry' },
            { ja: 'C社の保安係が自社の店舗を見回る → 警備業ではない', en: "Company C's own loss-prevention staff patrol C's store → not the security industry" },
            { ja: 'この区別が、適用される法令と教育義務の有無を分ける', en: 'This distinction decides which laws apply and whether training duties attach' },
          ],
        },
        {
          h: 'コーポレートセキュリティ', hEn: 'Corporate Security',
          b: [
            { ja: '1号警備のうち、企業オフィス常駐に特化した業務', en: 'A form of Type-1 facility security, focused on stationed duty at corporate offices' },
            { ja: '守る対象は、建物ではなく企業活動そのもの', en: 'What is protected is the business activity itself, not the building' },
            { ja: '接遇と情報秘匿が、警備の質そのものになる', en: 'Conduct and confidentiality are themselves the quality of the service' },
          ],
        },
        {
          h: '認定と教育の義務', hEn: 'Certification and Training',
          b: [
            { ja: '警備会社には、警備員を教育する法律上の義務がある', en: 'A security company has a legal duty to train its officers' },
            { ja: '本講習は、その法定教育として実施している', en: 'This course is delivered as that statutory training' },
            { ja: '修了しなければ、警備業務に従事できない', en: 'You cannot be assigned to duty until you have completed it' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B1',
      titleJa: '警備業務の4区分', titleEn: 'The Four Categories of Security Services',
      obj: '1号から4号までの区分を挙げ、自分がどれに従事するかを言える。',
      objEn: 'You can name the four categories and say which one you will be working in.',
      sop: '同じ1号でも業務内容は現場ごとに大きく異なる。配属時にSite SOPを確認する。',
      sopEn: 'Even within Type 1, duties differ greatly by site. Check the Site SOP on assignment.',
      sources: '警備業法第2条第1項、警備業法施行規則', cols: 2,
      topics: [
        {
          h: '1号　施設警備業務', hEn: 'Type 1 — Facility Security',
          b: [
            { ja: '事務所・住宅・興行場・駐車場等における業務', en: 'Offices, residences, venues, car parks and similar premises' },
            { ja: '常駐・巡回・出入管理・受付が中心になる', en: 'Stationed duty, patrol, access control and reception' },
            { ja: '皆さんが従事するのは、この1号である', en: 'This is the category you will be working in' },
          ],
        },
        {
          h: '2号　交通誘導・雑踏警備業務', hEn: 'Type 2 — Traffic and Crowd Control',
          b: [
            { ja: '人や車両の通行する場所、雑踏する場所での業務', en: 'Where people and vehicles pass, or where crowds gather' },
            { ja: '工事現場、イベント会場、駐車場出入口など', en: 'Construction sites, event venues, car park entrances' },
            { ja: '交通整理の権限はない。あくまで誘導である', en: 'There is no power to direct traffic. It is guidance, not enforcement' },
          ],
        },
        {
          h: '3号　運搬警備業務', hEn: 'Type 3 — Valuables in Transit',
          b: [
            { ja: '運搬中の現金・貴金属・核燃料物質等に係る業務', en: 'Cash, precious metals and nuclear materials while in transit' },
            { ja: '現金輸送車への警乗が代表例', en: 'Riding with an armoured cash-transport vehicle is the typical case' },
            { ja: '運搬物と経路の秘匿が重要になる', en: 'Keeping the load and the route confidential is critical' },
          ],
        },
        {
          h: '4号　身辺警備業務', hEn: 'Type 4 — Personal Protection',
          b: [
            { ja: '人の身体に対する危害の発生を警戒し、防止する', en: 'Watching for and preventing harm to a person' },
            { ja: '警察の警護とは根拠法も権限も異なる', en: 'The legal basis and the powers differ from police protection' },
            { ja: '私人の範囲を超えられない点は、他の号と同じ', en: "Like the others, it cannot exceed what a private citizen may do" },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B1',
      titleJa: '警備業の沿革', titleEn: 'How the Industry Developed',
      obj: '警備業法がなぜ生まれたかを述べ、業務が法令で規律される理由を理解する。',
      objEn: 'You can say why the Act came about, and why the work is regulated by law.',
      sources: SRC.hist, cols: 2,
      topics: [
        {
          h: '法律ができるまで', hEn: 'Before the Act',
          b: [
            { ja: '1962年　日本で最初の警備保障会社が設立される', en: "1962: Japan's first security company is founded" },
            { ja: '1964年　東京オリンピックの警備を民間が担った', en: '1964: private security handled the Tokyo Olympics' },
            { ja: '当時は業務を規律する法律がなく、質にばらつきがあった', en: 'No law regulated the work at the time, and quality varied widely' },
          ],
        },
        {
          h: '1972年　警備業法の制定', hEn: '1972 — The Act Is Enacted',
          b: [
            { ja: '昭和47年法律第117号として制定された', en: 'Enacted as Act No. 117 of 1972' },
            { ja: '認定制度・警備員の制限・教育義務を定めた', en: 'It established certification, restrictions on officers, and training duties' },
            { ja: '条文の多くは「やってはいけないこと」を定めている', en: 'Much of the Act defines what must not be done' },
          ],
        },
      ],
    },

    {
      type: 'grid',
      titleJa: '日本の法律用語', titleEn: 'Japanese Legal Terms',
      lead: '日本国内では日本の法律が適用されます。母国の制度と同じとは限りません。',
      leadEn: 'Japanese law applies in Japan. It may differ from the system in your home country.',
      cols: 2,
      items: [
        { ja: '警備業 keibigyō ― 他人の需要に応じて行う営業。', en: "The security industry. A business serving others' needs." },
        { ja: '私人 shijin ― 警備員も法的には私人。', en: 'Private citizen. Your legal status, even in uniform.' },
        { ja: '管理権者 kanri-kensha ― 施設を管理する権限をもつ者。', en: 'The site authority. Your powers come from them.' },
        { ja: '施設管理権 shisetsu-kanriken ― 出入りやルールを決める権利。', en: 'Premises management rights. Deciding entry and rules.' },
        { ja: '認定 nintei ― 公安委員会が警備業者に与えるもの。', en: 'Certification, granted to a security company by the commission.' },
        { ja: '警備指令書 keibi-shireisho ― 現場ごとの指示書。', en: 'Post orders. The written instructions for your site.' },
        { ja: '有形力 yūkeiryoku ― 相手に触れた時点で有形力。', en: 'Physical force. Touching the person is already force.' },
        { ja: '常駐 jōchū ― 現場に配置されて勤務すること。', en: 'Stationed duty. Being posted at a site.' },
      ],
    },

    {
      type: 'quote',
      titleJa: '警備業法 第15条', titleEn: 'Security Services Act, Article 15',
      quoteJa: '警備業者及び警備員は、警備業務を行うに当たつては、この法律により特別に権限を与えられているものでないことに留意するとともに、他人の権利及び自由を侵害し、又は個人若しくは団体の正当な活動に干渉してはならない。',
      quoteEn: 'When carrying out security operations, security businesses and guards must remember that this Act gives them no special authority. They must not infringe the rights or freedoms of others, and must not interfere with lawful activities.',
      quoteSize: 15, quoteEnSize: 13.5,
      source: '警備業法 第15条 / Article 15',
      note: '警備員の法的な立場は私人です。制服により権限が加わることはありません。',
      noteEn: 'A security guard is a private citizen in law. The uniform adds no legal authority.',
    },

    {
      type: 'two',
      titleJa: '警察官と警備員 ― 権限の違い', titleEn: 'Police Officers and Security Guards — Different Powers',
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
      noteEn: "Security Services Act Art. 16 — a guard's uniform must be clearly distinguishable from the uniform of a police officer or other public official.",
    },

    {
      type: 'topics', block: 'B1',
      titleJa: '日本ではできないこと', titleEn: 'What You May Not Do in Japan',
      obj: '日本の法令で警備員に許されていない行為を、具体的に挙げられる。',
      objEn: 'You can name, specifically, the acts Japanese law does not permit a security guard to do.',
      sop: '応援要請の方法、護身用具の配備、所持品確認の運用は現場ごとに異なる。',
      sopEn: 'How to call backup, what equipment is issued, and bag-check practice differ by site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '触れる・つかむ', hEn: 'Touching and Seizing',
          b: [
            { ja: '触れた時点で有形力になる。声かけと立ち位置までが限界', en: 'Touching is already force. Speaking and positioning are the limit' },
            { ja: '許されるのは正当防衛か現行犯逮捕に伴う場合だけ', en: 'It is lawful only with self-defence or a flagrant-offender arrest' },
            { ja: '越えれば暴行罪・傷害罪に当たりうる', en: 'Beyond that it can amount to assault or causing injury' },
          ],
        },
        {
          h: '拘束する・押さえ続ける', hEn: 'Restraining and Holding Down',
          b: [
            { ja: '手錠も結束バンドも使えない。逮捕監禁罪に当たりうる', en: 'No handcuffs, no cable ties. It can amount to unlawful confinement' },
            { ja: '侵害が終われば権利も終わる。倒れた相手を押さえ続けない', en: 'The right ends when the attack ends. Do not keep holding someone already down' },
            { ja: '直ちに警察へ引き渡す（刑事訴訟法第214条）', en: 'Hand the person to the police without delay (CCP Art. 214)' },
          ],
        },
        {
          h: '追跡する・事情を聞く', hEn: 'Pursuit and Questioning',
          b: [
            { ja: '逃げる相手を追わない。追跡は有形力に発展しやすい', en: 'Do not chase someone who runs. Pursuit escalates into force' },
            { ja: '取り押さえた相手から事情を聞く権限はない', en: 'You have no power to question a person you have detained' },
            { ja: '事務所に留め置く、サインを求める、写真を撮ることもできない', en: 'Nor may you hold them in an office, ask them to sign, or photograph them' },
          ],
        },
        {
          h: '持ち物・情報・装備', hEn: 'Property, Information, Equipment',
          b: [
            { ja: '所持品検査は強制できない。同意がなければ開けられない', en: 'A bag check cannot be compelled. Without consent you cannot open it' },
            { ja: '身分証を取り上げて返さないこと、実力で物を取り返すこともできない', en: 'You may not withhold an ID card, nor recover property by force' },
            { ja: '職務質問はできない。氏名や在留資格を問いただす権限はない', en: 'No stop-and-question. You cannot demand a name or a person\'s visa status' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B1',
      titleJa: '守るべき3本柱と判断の軸', titleEn: 'The Three Pillars, and How to Decide',
      obj: '自分の業務が People / Asset / Reputation のどれに関わるかを言い、要求がぶつかったときの優先順位を述べられる。',
      objEn: 'You can say which pillar your action concerns, and state the priority order when demands conflict.',
      sop: '何がAsset・People・Reputationに当たるか、報告ラインとクライアント窓口は現場ごとに異なる。',
      sopEn: 'What counts as each pillar, and the reporting lines and client contacts, differ by site.',
      sources: SRC.basic, cols: 2,
      topics: [
        {
          h: '守るべき3本柱', hEn: 'The Three Pillars',
          b: [
            { ja: 'People：クライアント社員、来訪者、そして自分自身の安全', en: 'People: the safety of client staff, visitors, and yourself' },
            { ja: 'Asset：物理資産と情報資産。情報は見えなくても資産である', en: 'Asset: physical and information assets. Information is an asset even unseen' },
            { ja: 'Reputation：クライアント企業の信用。応対品質が直接効く', en: "Reputation: the client's standing. Your conduct affects it directly" },
            { ja: '1つの行動が3つを同時に守り、1つの過失が3つを同時に損なう', en: 'One action protects all three at once; one lapse damages all three at once' },
          ],
        },
        {
          h: '判断軸　優先する順に', hEn: 'The Order of Priority',
          b: [
            { ja: '① 人命 ― 迷ったらここに戻る', en: '1. Life. When in doubt, come back to this' },
            { ja: '② 法令 ― 社内規程は法令を超えられない', en: '2. The law. Internal rules cannot override it' },
            { ja: '③ Site SOP ― 現場の手順が一般原則に優先する', en: '3. The Site SOP. Site procedure prevails over general principles' },
            { ja: '④ クライアント要望 ― ①〜③に反しない範囲で', en: "4. The client's wishes, within the limits of 1 to 3" },
          ],
        },
        {
          h: 'ステークホルダー三層構造', hEn: 'Three-Tier Stakeholder Structure',
          b: [
            { ja: '自社：警備員の雇用主。教育と指揮命令の主体', en: 'Our company: your employer, responsible for training and the chain of command' },
            { ja: 'ビルオーナー／施設管理会社：建物そのものの管理権原者', en: 'Building owner / facility manager: holds authority over the building itself' },
            { ja: 'クライアント企業（テナント）：発注主でSite SOPの実質決定者', en: 'Client tenant: commissions the service and effectively defines the Site SOP' },
          ],
        },
        {
          h: '本講習の3つの問い', hEn: 'Three Questions for This Course',
          b: [
            { ja: '何を守っているのか。People / Asset / Reputation のどれか', en: 'What am I protecting? People, Asset, or Reputation' },
            { ja: 'どの立場で動くのか。私人か、管理権者の補助者か', en: 'In what capacity am I acting? Private citizen, or agent for the site authority' },
            { ja: 'その手段は最小限か。越えた場合、何の罪に当たるか', en: 'Is this the minimum action? If I exceed it, what offence does it become' },
            { ja: '全14コマでこの3問を使う。結論ではなく根拠を述べること', en: 'We use these in all fourteen sessions. State your reasoning, not just your conclusion' },
          ],
        },
      ],
    },

    {
      type: 'grid',
      titleJa: 'ミニTTX ― ○か×か、根拠を一言で', titleEn: 'Mini TTX — Yes or No, with one line of reasoning',
      lead: '手元に○×と根拠を書いてください。挙手は求めません。指名します。',
      leadEn: 'Write your answer and your reason. No hands needed. I will call on you.',
      cols: 2,
      items: [
        { ja: '自社の社員が自社ビルを見回るのは、警備業である。', en: "Staff patrolling their own company's building is the security industry." },
        { ja: '制服を着ているので、警察官に準じた権限がある。', en: 'Wearing the uniform gives you powers similar to a police officer.' },
        { ja: '逃げた相手を追いかけて捕まえるのは、警備員の仕事である。', en: "Chasing and catching someone who runs is a guard's job." },
        { ja: '同意がなくても、規則であればカバンを開けてよい。', en: 'If it is the rule, you may open a bag without consent.' },
        { ja: '入館の可否を判断できるのは、管理権者から委ねられているからである。', en: 'You can decide admission because the site authority delegated it.' },
        { ja: '取り押さえた相手から、警察が来るまで事情を聞いてよい。', en: 'You may question a detained person until the police arrive.' },
        { ja: '相手の在留資格を確認するのは、警備員の権限である。', en: "Checking a person's visa status is within a guard's authority." },
        { ja: 'クライアントの要望は、法令より優先される。', en: "The client's wishes take precedence over the law." },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and How to State Your Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ×　8 ×',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 No · 8 No',
      rows: [
        { ja: '設問1は「他人の需要に応じて」が要件です。自社を自社が守るのは警備業ではありません。', en: 'Item 1 turns on serving the needs of others. Guarding your own premises is not the industry.' },
        { ja: '設問2・3・6は同じ論点です。制服では権限は増えず、追跡も事情聴取もできません。', en: 'Items 2, 3 and 6 are one point: the uniform adds nothing, and you may not chase or question.' },
        { ja: '設問4は所持品検査です。同意なく開けることはできません。規則は根拠になりません。', en: 'Item 4 is the bag check. You cannot open it without consent; a rule is not a legal basis.' },
        { ja: '設問7は在留資格です。確認する権限はありません。判断するのは入管と警察です。', en: 'Item 7 is visa status. You have no authority there; that is for immigration and the police.' },
        { ja: '根拠の示し方：「〔私人／補助者〕として、〔目的〕のため、〔手段〕を取った」', en: 'State it this way: "As a [citizen / delegated agent], I took [action] for [purpose]."', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 1-A',
      titleJa: 'TTX 1-A　警察官と間違われる', titleEn: 'TTX 1-A — Mistaken for a Police Officer',
      scenarioJa: '平日の朝、オフィスビルのエントランスで立哨中。通りかかった女性が「近くで自転車を盗まれたので調書を取ってほしい」と話しかけてきた。あなたの制服を見て、警察官だと思っている様子である。周囲には出勤中の社員が多数いる。',
      scenarioEn: 'Morning, on stand at an office building entrance. A woman stops and asks you to take a report because her bicycle was stolen nearby. She appears to think your uniform means you are a police officer. Many employees are arriving around you.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: 'これは People / Asset / Reputation のどれに関わる事案か。', en: 'Which pillar does this concern: People, Asset, or Reputation?' },
        { ja: '「警察官ではない」ことを、どう伝えるか。', en: 'How do you convey that you are not a police officer?' },
        { ja: '調書を取る、被害届を預かることはできるか。', en: 'May you take a statement or accept a report?' },
        { ja: '持ち場を離れて交番まで案内してよいか。', en: 'May you leave your post to walk her to the police box?' },
      ],
      inject: '女性が「警察じゃないなら意味がない」と大きな声を出し始めた。',
      injectEn: 'She raises her voice: "If you are not the police, this is useless."',
      inject2: '出勤中の社員が足を止めて、こちらを見ている。',
      inject2En: 'Arriving employees have stopped and are watching.',
      sop: '立哨位置を離れてよいか、離れる場合の連絡先は現場ごとに定められている。',
      sopEn: 'Whether you may leave your post, and whom to notify if you do, are set per site.',
      sources: SRC.basic,
    },

    {
      type: 'caseSlide', block: 'CASE 1-B',
      titleJa: 'TTX 1-B　クライアントからの依頼', titleEn: 'TTX 1-B — A Request from the Client',
      scenarioJa: '夜間の常駐勤務中、クライアント企業の課長が警備デスクに来て言う。「今から備品確認をする。退社する社員のカバンを出口で一人ずつ開けて中を見てほしい。うちの依頼だから問題ない」。警備指令書にそのような業務は書かれていない。上長は不在である。',
      scenarioEn: 'On night duty, a client manager comes to the security desk: "We are doing an equipment check. Please open and inspect each employee\'s bag at the exit. We are the client, so it is fine." The post orders contain no such duty. Your supervisor is away.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '所持品検査を強制することはできるか。その根拠は。', en: 'Can a bag search be compelled? On what basis?' },
        { ja: '「クライアントの依頼」は業務範囲を広げる根拠になるか。', en: 'Does "the client asked" extend the scope of your duties?' },
        { ja: '判断軸のどこで、この依頼は止まるか。', en: 'At which step of the priority order does this request stop?' },
        { ja: '断る場合、何と言うか。関係を壊さずに断れるか。', en: 'If you decline, what do you say? Can you decline without damaging the relationship?' },
      ],
      inject: '課長が「では君は見ているだけでいい。私が開ける」と言い出した。',
      injectEn: 'The manager says: "Then just stand there. I will open them myself."',
      inject2: '退社しようとする社員が出口に並び始めた。',
      inject2En: 'Employees are starting to queue at the exit to leave.',
      sop: '所持品確認の運用と、指令書にない依頼を受けた場合の連絡順序は現場ごとに異なる。',
      sopEn: 'Bag-check practice, and whom to call for a request outside the post orders, differ by site.',
      sources: SRC.law,
    },

    {
      type: 'close',
      titleJa: '第1時限 まとめ', titleEn: 'Period 1 — Summary',
      rows: [
        { ja: '警備業は「他人の需要に応じて」行う民間サービス業。1号が施設警備。', en: 'Security is a private service performed for others. Type 1 is facility security.' },
        { ja: '警備業法15条 ― 特別な権限はない。警察官にある権限は警備員にはない。', en: 'Article 15 — no special authority. Police powers do not extend to guards.' },
        { ja: '触れる・拘束する・追う・カバンを開ける ― いずれも日本ではできない。', en: 'Touching, restraining, chasing, opening a bag — none of these are yours to do.' },
        { ja: '判断軸は 人命 → 法令 → Site SOP → クライアント要望。順序を崩さない。', en: 'Priority: life, law, Site SOP, client wishes. Keep that order.' },
      ],
      next: '第2時限 ― その土台の上に、警備員に求められる資質と品格を置きます。',
      nextEn: 'Period 2 — on that foundation, the qualities expected of an officer.',
    },
  ],
};
