'use strict';
// 第11時限｜業務別教育4 警備業務対象施設における人又は車両等の出入の管理の方法
// 内容ソース: Day2統合版 B-6 / C-13 / C-15、CorpSec_4h B2

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = '警備業務対象施設における人又は車両等の出入の管理の方法';

module.exports = {
  file: '11_11限_出入管理.pptx',
  footJa: `第11時限｜業務別教育4 ${SUBJ}`,
  footEn: 'Period 11 | Task-Specific Training 4 — Access Control',
  slides: [
    {
      type: 'title',
      kicker: `第11時限　${slot(11)}　業務別教育4`,
      kickerEn: 'Period 11 — Task-Specific Training 4',
      titleJa: '出入管理',
      titleEn: 'Access Control',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B11',
      titleJa: '出入管理の原則', titleEn: 'The Principles of Access Control',
      obj: '出入管理が何を確認する業務かを述べ、判断の順序を言える。',
      objEn: 'You can say what access control verifies, and state the order in which you decide.',
      sop: '認証の方式、入館証の種類、有効範囲は現場ごとに定められている。',
      sopEn: 'The authentication method, badge types and their scope are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '3つの確認', hEn: 'Three Things You Verify',
          b: [
            { ja: '誰か ― 本人であることを確認する', en: 'Who: confirm they are who they say they are' },
            { ja: '入ってよいか ― 権限があることを確認する', en: 'Whether: confirm they are authorised to enter' },
            { ja: 'どこまでか ― 立ち入れる範囲を確認する', en: 'How far: confirm which areas that covers' },
          ],
        },
        {
          h: '1認証で1人', hEn: 'One Authentication, One Person',
          b: [
            { ja: 'カードを1回かざして通れるのは1人だけ', en: 'One card read admits one person' },
            { ja: '社員相手でも例外を作らない', en: 'No exceptions, including for employees' },
            { ja: '例外を作ると、次からそれが基準になる', en: 'Once you make an exception, that becomes the standard' },
          ],
        },
        {
          h: '入館証の運用', hEn: 'Badges',
          b: [
            { ja: '来訪者は、受付通過 → バッジ装着 → ホスト引取が原則', en: 'Visitors: through reception, badge on, collected by the host' },
            { ja: '退館時にバッジを回収する。回収漏れは記録する', en: 'Collect the badge on exit. Record any that are not returned' },
            { ja: 'バッジの貸し借りとなりすましは認めない', en: 'Badges are not shared, and impersonation is never accepted' },
          ],
        },
        {
          h: '判断できないとき', hEn: 'When You Cannot Decide',
          b: [
            { ja: '通さない。確認できるまで待っていただく', en: 'Do not admit. Ask them to wait until it can be confirmed' },
            { ja: '「社員かどうか」を現場で判定する権限も手段もない', en: 'You have neither the authority nor the means to decide who is an employee' },
            { ja: '受付と所属部署が確認する。警備員は取り次ぐ', en: 'Reception and the department confirm it. You refer' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B11',
      titleJa: '共連れ（テールゲート）', titleEn: 'Tailgating',
      obj: '共連れを見つけたときの声かけと、応じない場合の対応を言える。',
      objEn: 'You can say how you address tailgating, and what you do if they do not comply.',
      sop: '仮入館証の発行権限とフローは現場ごとに異なる。Site SOPに従う。',
      sopEn: 'Who may issue a temporary pass, and how, differ by site. Follow the Site SOP.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '何が起きているか', hEn: 'What Is Happening',
          b: [
            { ja: '認証した人の後ろについて、認証せずに入ること', en: 'Following an authorised person through without authenticating' },
            { ja: '入った記録が残らない。誰が館内にいるか分からなくなる', en: 'No entry record is made, so who is in the building becomes unknown' },
            { ja: '火災や地震のときに、人数が合わなくなる', en: 'In a fire or an earthquake, the headcount will not match' },
          ],
        },
        {
          h: '声のかけ方', hEn: 'How to Address It',
          b: [
            { ja: '「すみません、お一人ずつカードをタッチお願いします」', en: '"Excuse me — could each of you tap your card, please"' },
            { ja: '相手を責めない。手続きの案内として伝える', en: 'Do not put it on them. Frame it as guidance on the procedure' },
            { ja: '急いでいる相手にも、同じ言い方で伝える', en: 'Use the same wording with someone in a hurry' },
          ],
        },
        {
          h: '応じない場合', hEn: 'If They Do Not Comply',
          b: [
            { ja: '追わない。物理的に止めない', en: 'Do not chase. Do not physically stop them' },
            { ja: '人相、着衣、時刻、通過の有無を記録する', en: 'Record appearance, clothing, the time, and whether they passed' },
            { ja: '上長へ報告し、カメラ確認を依頼する', en: 'Report to your supervisor and ask for the footage to be checked' },
          ],
        },
        {
          h: '通してしまったとき', hEn: 'If Someone Got Through',
          b: [
            { ja: '隠さない。通過した事実をそのまま記録する', en: 'Do not conceal it. Record that they passed, as it happened' },
            { ja: '後から確認して補正できる。隠すと補正できなくなる', en: 'It can be checked and corrected later. Concealing it removes that chance' },
            { ja: '自分の判断で追跡や捜索をしない', en: 'Do not go looking for them on your own judgement' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B11',
      titleJa: '権威を使った突破', titleEn: 'People Who Use Authority to Get Through',
      obj: '役職や急ぎを理由に手続きを飛ばそうとする相手に、手順どおり対応できる。',
      objEn: 'You can hold to the procedure with someone using rank or urgency to skip it.',
      sop: '例外を認める権限者と、その記録方法は現場ごとに定められている。',
      sopEn: 'Who may authorise an exception, and how it is recorded, are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: 'よくある持ちかけ方', hEn: 'How It Usually Comes',
          b: [
            { ja: '「役員だ。急いでいる」「いつも通してもらっている」', en: '"I am an executive, and I am in a hurry." "They always let me through"' },
            { ja: '「上の許可は取ってある」「あとで書類を出す」', en: '"I have approval from above." "I will do the paperwork later"' },
            { ja: '大きな声、強い口調、周囲の目を使う', en: 'A raised voice, a firm tone, and the presence of onlookers' },
          ],
        },
        {
          h: '判断を変えないもの', hEn: 'What Does Not Change the Decision',
          b: [
            { ja: '役職。手続きは相手の地位で変わらない', en: 'Rank. The procedure does not change with a person\'s position' },
            { ja: '急いでいること。待たせることは失礼ではない', en: 'Urgency. Asking someone to wait is not discourtesy' },
            { ja: '前回の運用。「前は通れた」は根拠にならない', en: 'What happened last time. "They let me through before" is not a basis' },
          ],
        },
        {
          h: '言い方', hEn: 'What You Say',
          b: [
            { ja: '「確認させていただきますので、少々お待ちください」', en: '"Let me confirm that — please bear with me a moment"' },
            { ja: '断るのではなく、確認すると伝える', en: 'You are not refusing. You are confirming' },
            { ja: '押し問答になったら、受付か上長へ取り次ぐ', en: 'If it becomes a standoff, refer to reception or your supervisor' },
          ],
        },
        {
          h: '例外を認める場合', hEn: 'If an Exception Is Made',
          b: [
            { ja: '権限のある者の承認が要る。自分では認めない', en: 'It needs authorisation from someone who has that authority, not you' },
            { ja: '誰の承認か、いつ得たかを記録する', en: 'Record whose authorisation it was, and when you got it' },
            { ja: '口頭の承認も、発信者名と時刻まで書く', en: 'For a verbal authorisation, write the name and the time as well' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B11',
      titleJa: '物と車両の出入', titleEn: 'Goods and Vehicles',
      obj: '持込・持出と郵便物の扱いを述べ、開封できない理由を説明できる。',
      objEn: 'You can describe how goods and mail are handled, and say why you do not open them.',
      sop: '持込持出の許可様式、郵便物の受渡場所、車両の入構手続は現場ごとに異なる。',
      sopEn: 'Permit forms, where mail is received, and vehicle entry procedures differ by site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '持込・持出', hEn: 'Bringing In and Taking Out',
          b: [
            { ja: '許可の要否と様式はSite SOPによる。様式を覚えておく', en: 'Whether a permit is needed, and its form, follow the Site SOP. Know the form' },
            { ja: '所持品確認は任意の協力。強制はできない', en: 'A bag check is voluntary cooperation. It cannot be compelled' },
            { ja: '応じない場合は、記録と報告に切り替える', en: 'If they decline, switch to recording and reporting' },
          ],
        },
        {
          h: '郵便物・荷物', hEn: 'Mail and Packages',
          b: [
            { ja: '受渡場所と受領者は定められている。勝手に預からない', en: 'Where mail is received and by whom is set. Do not take it in on your own' },
            { ja: '独断で開封しない。宛先の確認までが警備員の範囲', en: 'Do not open anything. Checking the addressee is where your part ends' },
            { ja: '差出人不明、宛先不備、不自然な重さや臭いは報告する', en: 'Report unknown senders, wrong addressees, odd weight or smell' },
          ],
        },
        {
          h: '車両', hEn: 'Vehicles',
          b: [
            { ja: '入構の可否、駐車位置、時間帯はSite SOPによる', en: 'Whether a vehicle may enter, where it parks and when follow the Site SOP' },
            { ja: '車両番号、入構・出構時刻、運転者名を記録する', en: 'Record the plate, the times in and out, and the driver\'s name' },
            { ja: '荷台や車内を勝手に確認しない', en: 'Do not inspect a load or the inside of a vehicle on your own' },
          ],
        },
        {
          h: '覗き見の防止', hEn: 'Preventing Visual Exposure',
          b: [
            { ja: '受付や警備室の画面が、外から見えていないか確認する', en: 'Check that screens at reception or in the guard room are not visible from outside' },
            { ja: '来訪者名簿や記録を、カウンターに開いたまま置かない', en: 'Do not leave visitor lists or records open on the counter' },
            { ja: '自分の端末の画面も、同じ扱いをする', en: 'Treat your own screen the same way' },
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
        { ja: '社員だと名乗る人には、共連れを黙認してよい。', en: 'You may let tailgating pass for someone who says they are an employee.' },
        { ja: '共連れを強行突破されたので、追いかけて止めた。', en: 'Someone pushed through, so you chased and stopped them.' },
        { ja: '「前は通してもらえた」は、通す根拠になる。', en: '"They let me through before" is a basis for admitting someone.' },
        { ja: '通してしまった事実は、記録に残す。', en: 'The fact that someone got through should be recorded.' },
        { ja: '差出人不明の荷物を、中身を確認するために開けた。', en: 'You open a package from an unknown sender to check the contents.' },
        { ja: '所持品確認は、来訪者の同意がなければできない。', en: 'A bag check cannot be done without the visitor\'s consent.' },
        { ja: '役員であれば、入館手続を省略してよい。', en: 'An executive may skip the entry procedure.' },
        { ja: '受付の画面が外から見える位置にあったので、向きを変えた。', en: 'The reception screen was visible from outside, so you turned it.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ○　5 ×　6 ○　7 ×　8 ○',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 Yes · 5 No · 6 Yes · 7 No · 8 Yes',
      rows: [
        { ja: '設問1・7 ― 1認証で1人。手続きは相手の地位で変わりません。', en: 'Items 1 and 7: one authentication, one person. Rank does not change the procedure.' },
        { ja: '設問2 ― 追わない。記録とカメラ確認の依頼に切り替えます。', en: 'Item 2: do not chase. Switch to recording and asking for the footage.' },
        { ja: '設問3 ― 前回の運用は根拠になりません。いま確認できるかどうかです。', en: 'Item 3: what happened before is not a basis. What matters is what you can confirm now.' },
        { ja: '設問5 ― 独断で開封しません。宛先の確認までが範囲です。', en: 'Item 5: do not open it. Checking the addressee is where your part ends.' },
        { ja: '設問4・6・8 ― 記録する、強制しない、見えないようにする。いずれも基本動作です。', en: 'Items 4, 6, 8: record it, do not compel, keep it out of sight. All basic practice.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 11-A',
      titleJa: 'TTX 11-A　共連れ', titleEn: 'TTX 11-A — Tailgating',
      scenarioJa: '朝の出社ラッシュ、入館ゲートに人が次々通過している。あなたはゲート脇に立哨。一人の男性がカードをタッチして入り、その後ろに別の男性がカードをタッチせずに続こうとしている。声をかけると「社員です。カードを家に忘れました。すぐ会議なので」と笑顔で答え、そのまま進もうとする。',
      scenarioEn: 'Morning rush. People are streaming through the entrance gate and you are posted beside it. One man taps his card and goes through; right behind him, another tries to follow without tapping. When you speak to him he smiles: "I am an employee. I left my card at home. I have a meeting right now," and keeps walking.',
      questionJa: 'あなたなら次の30秒、何をどう動きますか。',
      questionEn: 'What do you do in the next thirty seconds?',
      points: [
        { ja: '「社員かどうか」を、あなたはその場で判定できるか。', en: 'Can you determine on the spot whether he is an employee?' },
        { ja: '急いでいる相手に、どう伝えるか。', en: 'What do you say to someone in a hurry?' },
        { ja: 'ゲート前で押し問答になった場合の落とし所は。', en: 'If it becomes a standoff at the gate, where does it land?' },
        { ja: '通してしまった場合、その後どうするか。', en: 'If he does get through, what do you do afterwards?' },
      ],
      inject: '相手が「後ろがつかえている。早くしてくれ」と言い、実際に列ができ始めた。',
      injectEn: 'He says "you are holding everyone up" — and a queue really is forming behind him.',
      inject2: '後ろに並んでいた社員が「その人、うちの部署です」と言った。',
      inject2En: 'An employee in the queue says: "He is in my department."',
      sop: '仮入館証の発行権限とフロー、ラッシュ時の運用は現場ごとに異なる。',
      sopEn: 'Who may issue a temporary pass, how, and how rush hour is run differ by site.',
      sources: SRC.fac + '、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 11-B',
      titleJa: 'TTX 11-B　差出人不明の荷物', titleEn: 'TTX 11-B — A Package with No Sender',
      scenarioJa: '午後、宅配業者が段ボール箱を1つ届けた。宛名は「総務部御中」とだけあり、担当者名がない。差出人欄は空白。伝票の電話番号は市外局番から始まる番号だが、かけると使われていない。箱は同じ大きさの他の荷物より明らかに重い。総務部に問い合わせたが、心当たりがないという。',
      scenarioEn: 'Afternoon. A courier delivers a cardboard box. It is addressed only to "General Affairs" with no individual name, and the sender field is blank. The number on the docket is unobtainable. The box is noticeably heavier than others of the same size. General Affairs say they are not expecting anything.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '箱を開けて中身を確認してよいか。根拠は何か。', en: 'May you open it to check? On what basis?' },
        { ja: '箱をどこに置くか。動かしてよいか。', en: 'Where do you put it? May you move it?' },
        { ja: '誰に、どの順で連絡するか。', en: 'Who do you contact, and in what order?' },
        { ja: '宅配業者にその場で確認できることは何か。', en: 'What can you check with the courier while they are still there?' },
      ],
      inject: '宅配業者が「伝票どおりに届けただけです」と言い、帰ろうとしている。',
      injectEn: 'The courier says "I just delivered what was on the docket" and starts to leave.',
      inject2: '総務部の社員が来て、「開けて中を見てみましょうか」と言った。',
      inject2En: 'Someone from General Affairs arrives and says: "Shall we just open it and look?"',
      sop: '不審な荷物の取扱手順、隔離場所、連絡先は現場ごとに定められている。',
      sopEn: 'How suspicious packages are handled, where they are isolated, and who to call are set per site.',
      sources: SRC.fac + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第11時限 まとめ', titleEn: 'Period 11 — Summary',
      rows: [
        { ja: '出入管理は、誰か・入ってよいか・どこまでかの3つを確認する。', en: 'Access control verifies three things: who, whether, and how far.' },
        { ja: '1認証で1人。社員相手でも例外を作らない。', en: 'One authentication, one person. No exceptions, including for employees.' },
        { ja: '応じない相手を追わない。記録と報告に切り替える。', en: 'Do not chase someone who does not comply. Switch to recording and reporting.' },
        { ja: '所持品確認は任意。荷物は独断で開封しない。', en: 'Bag checks are voluntary. Never open a package on your own judgement.' },
      ],
      next: '第12時限 ― 巡回。施設の構造を知り、決められた経路を回ります。',
      nextEn: 'Period 12 — patrol: knowing the building, and walking the route.',
    },
  ],
};
