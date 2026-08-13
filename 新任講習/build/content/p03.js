'use strict';
// 第3時限｜基本教育3 警備業法その他警備業務の適正な実施に必要な法令 ①
// 内容ソース: Day1統合版 A-3 / A-7

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = '警備業法その他警備業務の適正な実施に必要な法令';

module.exports = {
  file: '03_3限_警備業法.pptx',
  footJa: `第3時限｜基本教育3 ${SUBJ} ①`,
  footEn: 'Period 3 | Basic Training 3 — The Security Services Act',
  slides: [
    {
      type: 'title',
      kicker: `第3時限　${slot(3)}　基本教育3`,
      kickerEn: 'Period 3 — Basic Training 3',
      titleJa: '警備業法',
      titleEn: 'The Security Services Act',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'two',
      titleJa: '法令の学習は3コマに分かれます', titleEn: 'The Law Is Covered in Three Sessions',
      lead: '同じ法定科目を分けています。内容は重複させません。',
      leadEn: 'The same statutory subject, split across sessions. We do not repeat material.',
      left: {
        h: '第3時限（本コマ）', hEn: 'Period 3 — this session',
        items: [
          { ja: '警備業法の目的と構成', en: 'The purpose and structure of the Act' },
          { ja: '認定、警備員の制限', en: 'Certification, and restrictions on officers' },
          { ja: '第15条・第16条・第17条', en: 'Articles 15, 16 and 17' },
          { ja: '教育と書類の義務', en: 'Training and record-keeping duties' },
          { ja: '人権の尊重と差別の回避', en: 'Respect for rights, and avoiding discrimination' },
        ],
      },
      right: {
        h: '第4時限', hEn: 'Period 4',
        items: [
          { ja: '刑法・刑事訴訟法', en: 'The Penal Code and the Code of Criminal Procedure' },
          { ja: '現行犯逮捕と引渡し', en: 'Citizen\'s arrest and handover' },
          { ja: '正当防衛・緊急避難・自救行為', en: 'Self-defence, necessity, self-help' },
          { ja: '有形力の段階と、越えた場合の罪名', en: 'The steps of force, and the offences beyond them' },
          { ja: '個人情報保護法などは第9時限', en: 'Data protection law comes in Period 9' },
        ],
      },
      note: '本コマでは刑法・刑事訴訟法は扱いません。第4時限で扱います。',
      noteEn: 'The Penal Code and Code of Criminal Procedure are not covered here. They come in Period 4.',
    },

    {
      type: 'topics', block: 'B3',
      titleJa: '警備業法は何を定めているか', titleEn: 'What the Act Regulates',
      obj: '警備業法が規律している対象を挙げ、自分に直接かかる部分を言える。',
      objEn: 'You can name what the Act regulates, and which parts apply to you directly.',
      sop: '会社の規程と現場の手順は、この法律の枠内で作られている。',
      sopEn: 'Company rules and site procedures are written inside the frame this Act sets.',
      sources: '警備業法第1条、第2条、第4条、第14条、第15条、第16条、第17条', cols: 2,
      topics: [
        {
          h: '目的（第1条）', hEn: 'Purpose (Article 1)',
          b: [
            { ja: '警備業務の実施の適正を図ることを目的とする', en: 'Its purpose is to ensure security services are carried out properly' },
            { ja: '警備業者と警備員の双方を規律する', en: 'It regulates both the security company and the individual officer' },
            { ja: '違反には行政処分と罰則が定められている', en: 'Breaches carry administrative measures and penalties' },
          ],
        },
        {
          h: '会社にかかる規律', hEn: 'What Applies to the Company',
          b: [
            { ja: '認定を受けなければ警備業を営めない', en: 'A company may not operate without certification' },
            { ja: '警備員に対する教育を行う義務がある', en: 'It has a duty to train its officers' },
            { ja: '警備員指導教育責任者を選任する', en: 'It must appoint an instruction supervisor for officers' },
          ],
        },
        {
          h: '警備員にかかる規律', hEn: 'What Applies to You',
          b: [
            { ja: '第14条 ― 警備員になれない場合が定められている', en: 'Article 14 — who may not serve as an officer' },
            { ja: '第15条 ― 特別な権限はなく、他人の権利を侵害しない', en: 'Article 15 — no special authority, and no infringing others\' rights' },
            { ja: '第16条 ― 服装。第17条 ― 護身用具', en: 'Article 16 — uniform. Article 17 — protective equipment' },
          ],
        },
        {
          h: '記録に関する義務', hEn: 'Records',
          b: [
            { ja: '教育の実施記録を作成し、所定の期間保存する', en: 'Training records are made and kept for the prescribed period' },
            { ja: '警備員名簿を備える', en: 'A register of officers is maintained' },
            { ja: '本講習の受講記録も、この義務に基づいて作成される', en: 'Your record for this course is made under that same duty' },
          ],
        },
      ],
    },

    {
      type: 'quote',
      titleJa: '警備業法 第15条', titleEn: 'Security Services Act, Article 15',
      quoteJa: '警備業者及び警備員は、警備業務を行うに当たつては、この法律により特別に権限を与えられているものでないことに留意するとともに、他人の権利及び自由を侵害し、又は個人若しくは団体の正当な活動に干渉してはならない。',
      quoteEn: 'When carrying out security operations, security businesses and guards must remember that this Act gives them no special authority. They must not infringe the rights or freedoms of others, and must not interfere with lawful activities.',
      quoteSize: 15, quoteEnSize: 13.5,
      source: '警備業法 第15条 / Article 15',
      note: 'この条文が、本講習のすべての判断の出発点です。',
      noteEn: 'This provision is the starting point for every judgement in this course.',
    },

    {
      type: 'topics', block: 'B3',
      titleJa: '服装と護身用具', titleEn: 'Uniform and Protective Equipment',
      obj: '服装と護身用具に法律上の制限があることを述べ、現場での扱いを言える。',
      objEn: 'You can state that uniform and equipment are limited by law, and how that works on site.',
      sop: '護身用具の配備の有無、種類、携帯の可否は現場ごとに定められている。配備がなければ使用を前提としない。',
      sopEn: 'Whether equipment is issued, of what type, and whether it may be carried are set per site.',
      sources: '警備業法第16条、第17条、警備業法施行規則', cols: 2,
      topics: [
        {
          h: '服装（第16条）', hEn: 'Uniform (Article 16)',
          b: [
            { ja: '警察官など公務員の制服と明確に識別できるものであること', en: 'It must be clearly distinguishable from a public official\'s uniform' },
            { ja: '使用する服装は、あらかじめ公安委員会へ届け出る', en: 'The uniform in use is notified to the public safety commission in advance' },
            { ja: '自分の判断で変更したり、記章を足したりしない', en: 'Do not alter it or add insignia on your own judgement' },
          ],
        },
        {
          h: '護身用具（第17条）', hEn: 'Protective Equipment (Article 17)',
          b: [
            { ja: '携帯できる護身用具は、種類と規格が定められている', en: 'The type and specification of what may be carried are prescribed' },
            { ja: '使用する護身用具も、あらかじめ届け出る', en: 'The equipment in use is also notified in advance' },
            { ja: '銃器は携帯できない', en: 'Firearms may not be carried' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B3',
      titleJa: '人権の尊重と差別の回避', titleEn: 'Respect for Rights, and Avoiding Discrimination',
      obj: '第15条の「他人の権利及び自由」が現場で何を意味するかを説明できる。',
      objEn: 'You can explain what "the rights and freedoms of others" means on site.',
      sop: '声かけの基準、記録の様式、苦情を受けた場合の報告先は現場ごとに定められている。',
      sopEn: 'Criteria for approaching someone, record formats and complaint routes are set per site.',
      sources: '警備業法第15条、日本国憲法第14条', cols: 2,
      topics: [
        {
          h: '「不審」を外見で決めない', hEn: 'Do Not Decide "Suspicious" by Appearance',
          b: [
            { ja: '国籍・人種・年齢・性別・服装は、声をかける根拠にならない', en: 'Nationality, race, age, sex and clothing are not grounds to approach someone' },
            { ja: '根拠になるのは、その場で観察した行動である', en: 'What can be a ground is the behaviour you actually observed' },
            { ja: '記録には、外見ではなく行動を書く', en: 'Record the behaviour, not the appearance' },
          ],
        },
        {
          h: '同じ扱いをする', hEn: 'Treat People the Same',
          b: [
            { ja: '入館の手続は、相手が誰であっても同じ手順で行う', en: 'Run the same entry procedure whoever the person is' },
            { ja: '例外を作った場合は、誰の承認によるかを記録する', en: 'If you make an exception, record whose authorisation it was on' },
            { ja: '手続を行うことは、相手を疑うことではない', en: 'Following a procedure is not an accusation' },
          ],
        },
        {
          h: '言葉の扱い', hEn: 'How You Speak',
          b: [
            { ja: '相手の出身や属性に触れる発言をしない', en: 'Do not comment on where someone is from or who they are' },
            { ja: '日本語が通じない相手にも、同じ丁寧さで対応する', en: 'Keep the same courtesy with someone who does not speak Japanese' },
            { ja: '通じないときは、速度を落とし、短く言い直す', en: 'When you are not understood, slow down and say it again, shorter' },
          ],
        },
        {
          h: '苦情を受けたとき', hEn: 'If Someone Complains',
          b: [
            { ja: 'その場で反論しない。事実を確認して記録する', en: 'Do not argue on the spot. Establish the facts and record them' },
            { ja: '上長へ報告する。自分で判断して収めない', en: 'Report to your supervisor. Do not settle it on your own judgement' },
            { ja: '発言は、要約せずそのまま記録する', en: 'Record what was said as it was said, without summarising' },
          ],
        },
      ],
    },

    {
      type: 'grid',
      titleJa: 'ミニTTX ― ○か×か、根拠を一言で', titleEn: 'Mini TTX — Yes or No, with one line of reasoning',
      lead: '手元に○×と根拠を書いてください。指名します。',
      leadEn: 'Write your answer and your reason. I will call on you.',
      cols: 2,
      items: [
        { ja: '警備員の制服は、警察官の制服に似ているほうが抑止になる。', en: 'A uniform closer to a police uniform gives a stronger deterrent.' },
        { ja: '護身用具は、自分で選んで持ち込んでよい。', en: 'You may choose your own protective equipment and bring it in.' },
        { ja: '外国人だという理由で、入館時に追加の確認をしてよい。', en: 'You may add extra checks at entry because a person is foreign.' },
        { ja: '入館手続を行うことは、相手を疑っていることになる。', en: 'Running the entry procedure means you are accusing the person.' },
        { ja: '教育の実施記録は、会社が作成し保存する。', en: 'Training records are made and kept by the company.' },
        { ja: '苦情を受けたら、その場で誤解を解いておくのがよい。', en: 'If someone complains, it is best to clear it up on the spot yourself.' },
        { ja: '記録には、相手の外見の特徴を中心に書く。', en: 'A record should focus on what the person looked like.' },
        { ja: '警備業を営むには、公安委員会の認定が必要である。', en: 'Operating a security business requires certification by the commission.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ×　8 ○',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 No · 8 Yes',
      rows: [
        { ja: '設問1は第16条です。公務員の制服と明確に識別できることが要件です。', en: 'Item 1 is Article 16: it must be clearly distinguishable from a public official\'s uniform.' },
        { ja: '設問2は第17条です。種類・規格が定められ、届け出たものだけを携帯します。', en: 'Item 2 is Article 17: type and specification are prescribed, and only notified items are carried.' },
        { ja: '設問3・7は同じ論点です。根拠になるのは行動であって、属性や外見ではありません。', en: 'Items 3 and 7 are one point: behaviour is a ground; attributes and appearance are not.' },
        { ja: '設問4は手続の意味です。手続を踏むことは疑いではありません。', en: 'Item 4: following a procedure is not an accusation.' },
        { ja: '設問6は、その場で収めないこと。事実を記録し、上長へ報告します。', en: 'Item 6: do not settle it yourself. Record the facts and report.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 3-A',
      titleJa: 'TTX 3-A　「警察を呼ぶぞ」と言われた', titleEn: 'TTX 3-A — "I Will Call the Police"',
      scenarioJa: '来訪者が入館証を持たずにゲートを通ろうとしたため、受付での手続きをお願いした。相手は強い口調で「自分は何度も来ている。前は通してもらえた。差別ではないのか。警察を呼ぶぞ」と言い、スマートフォンで撮影を始めた。周囲に社員が数名いる。',
      scenarioEn: 'A visitor without a pass tried to walk through the gate, so you asked them to complete the reception procedure. They say sharply: "I come here all the time. They let me through before. Is this discrimination? I will call the police," and start filming on their phone.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '手続きを求めたことは、差別に当たるか。根拠は何か。', en: 'Was asking for the procedure discriminatory? On what basis do you answer?' },
        { ja: '「前は通してもらえた」にどう答えるか。', en: 'How do you answer "they let me through before"?' },
        { ja: '撮影をやめるよう求められるか。画像を消させられるか。', en: 'May you ask them to stop filming? May you have the images deleted?' },
        { ja: '警察が来た場合、あなたは何を説明するか。', en: 'If the police come, what do you explain?' },
      ],
      inject: '相手が「責任者を出せ」と言い、その場を動かなくなった。',
      injectEn: 'They demand to see whoever is in charge, and refuse to move.',
      inject2: '社員の一人が「その人は知っています、通してあげて」と言った。',
      inject2En: 'One of the employees says: "I know them, just let them through."',
      sop: '入館手続の例外を認める権限者と、その記録方法は現場ごとに定められている。',
      sopEn: 'Who may authorise an exception to entry procedure, and how it is recorded, are set per site.',
      sources: '警備業法第15条、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 3-B',
      titleJa: 'TTX 3-B　届け出のない装備', titleEn: 'TTX 3-B — Equipment That Was Never Notified',
      scenarioJa: '同じ班の先輩が、勤務中に私物の防犯スプレーをポケットに入れていることが分かった。「夜勤は危ないから、自分の身は自分で守る。会社には言っていない」と言う。あなたは新任で、その先輩から日々の指導を受けている。',
      scenarioEn: 'You find that a senior colleague on your shift carries a personal defence spray in his pocket while on duty. "Nights are dangerous, so I look after myself. I have not told the company." You are new, and he is the person who trains you day to day.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '護身用具は、自分の判断で持ち込めるか。根拠は何か。', en: 'May equipment be brought in on your own judgement? On what basis?' },
        { ja: '先輩に、その場で何と言うか。', en: 'What do you say to him at the time?' },
        { ja: '報告するか。しない場合、何が起きうるか。', en: 'Do you report it? If not, what can follow?' },
        { ja: '新任である自分が報告することの難しさをどう扱うか。', en: 'How do you handle the difficulty of reporting as the new person?' },
      ],
      inject: '先輩が「新人が余計なことを言うな」と言った。',
      injectEn: 'He says: "Do not make trouble, you have just started."',
      inject2: '同じ班の別の隊員も、同じものを持っていることが分かった。',
      inject2En: 'You learn that another officer on the shift carries the same thing.',
      sop: '護身用具の配備と携帯の可否、届出の手続は会社の規程による。',
      sopEn: 'What equipment is issued, whether it may be carried, and how it is notified follow company rules.',
      sources: '警備業法第17条、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第3時限 まとめ', titleEn: 'Period 3 — Summary',
      rows: [
        { ja: '警備業法は会社と警備員の双方を規律する。違反には罰則がある。', en: 'The Act regulates both company and officer, and breaches carry penalties.' },
        { ja: '第15条 ― 特別な権限はない。他人の権利と自由を侵害しない。', en: 'Article 15 — no special authority, and no infringing the rights of others.' },
        { ja: '服装は第16条、護身用具は第17条。いずれも届け出たものだけを使う。', en: 'Uniform under Art. 16, equipment under Art. 17 — only notified items are used.' },
        { ja: '声をかける根拠は行動である。国籍・外見は根拠にならない。', en: 'Behaviour is a ground for approaching someone. Nationality and appearance are not.' },
      ],
      next: '第4時限 ― 刑法と刑事訴訟法で、権限の限界を条文と罪名で確認します。',
      nextEn: 'Period 4 — the limits of your authority, in statutes and offence names.',
    },
  ],
};
