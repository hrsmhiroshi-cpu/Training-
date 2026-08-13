'use strict';
// 第13時限｜業務別教育6 不審者又は不審な物件を発見した場合にとるべき措置
// 記録・報告・引継ぎ（C-26増補）を含む
// 内容ソース: Day2統合版 C-26、CorpSec_4h B6、前回現任講習 第5限・第9限

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = '不審者又は不審な物件を発見した場合にとるべき措置';

module.exports = {
  file: '13_13限_不審者と不審物.pptx',
  footJa: `第13時限｜業務別教育6 ${SUBJ}`,
  footEn: 'Period 13 | Task-Specific Training 6 — Suspicious Persons and Objects',
  slides: [
    {
      type: 'title',
      kicker: `第13時限　${slot(13)}　業務別教育6`,
      kickerEn: 'Period 13 — Task-Specific Training 6',
      titleJa: '不審者と不審物',
      titleEn: 'Suspicious Persons and Objects',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B13',
      titleJa: '「不審」とは何か', titleEn: 'What "Suspicious" Means',
      obj: '不審と判断する根拠を、行動で説明できる。外見を根拠にしない。',
      objEn: 'You can justify treating something as suspicious by behaviour, not by appearance.',
      sop: '声かけの基準、報告先、記録の様式は現場ごとに定められている。',
      sopEn: 'Criteria for approaching someone, reporting routes and record formats are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '根拠になるもの', hEn: 'What Can Be a Ground',
          b: [
            { ja: '場所と時間が業務と合わない。深夜に執務フロアにいる', en: 'The place and time do not fit any business: on the office floor at night' },
            { ja: '動きが目的と合わない。同じ場所を何度も往復している', en: 'The movement does not fit a purpose: passing the same point repeatedly' },
            { ja: '手続きを避けている。受付を通らずに入ろうとする', en: 'Avoiding the procedure: trying to enter without passing reception' },
          ],
        },
        {
          h: '根拠にならないもの', hEn: 'What Cannot Be a Ground',
          b: [
            { ja: '国籍・人種・年齢・性別・服装・言語', en: 'Nationality, race, age, sex, dress, language' },
            { ja: '「なんとなく怪しい」という印象', en: 'A general impression that someone seems off' },
            { ja: '過去に別人が起こした事案', en: 'Something a different person did in the past' },
          ],
        },
        {
          h: '記録の書き方', hEn: 'How to Write It',
          b: [
            { ja: '観察した行動を書く。外見の特徴は識別のためにのみ書く', en: 'Write the behaviour. Write appearance only so the person can be identified' },
            { ja: '「不審者」と断定しない。見た事実を書く', en: 'Do not label someone an intruder. Write what you saw' },
            { ja: '評価は「〜と思われます」と明示して後に置く', en: 'Mark any assessment as such, and place it after the facts' },
          ],
        },
        {
          h: '自分が誤る可能性', hEn: 'You Can Be Wrong',
          b: [
            { ja: '正当な用務の人を止めることは起こりうる', en: 'You will sometimes stop someone who has legitimate business' },
            { ja: '手続きを踏んだ結果であれば、対応は誤りではない', en: 'If you followed the procedure, the response was not a mistake' },
            { ja: '確認は手続きであって、疑いの表明ではない', en: 'Verifying is a procedure, not a declaration of suspicion' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B13',
      titleJa: '不審者への対応', titleEn: 'Dealing with a Suspicious Person',
      obj: '声のかけ方と、自分の権限の限界を踏まえた対応ができる。',
      objEn: 'You can approach appropriately, and act within the limits of your authority.',
      sop: '応援要請の方法、通報の判断者、退去要請の権限者は現場ごとに定められている。',
      sopEn: 'How to call backup, who decides on a police call, and who may require someone to leave are set per site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '声のかけ方', hEn: 'How to Approach',
          b: [
            { ja: '用件を聞くところから入る。「何かお探しですか」', en: 'Open by asking what they need: "Can I help you find something?"' },
            { ja: '詰問しない。相手の逃げ道をふさぐ位置に立たない', en: 'Do not interrogate. Do not stand where you block their way out' },
            { ja: '距離を保つ。1.5から2メートルを目安にする', en: 'Keep your distance — about 1.5 to 2 metres' },
          ],
        },
        {
          h: 'できること', hEn: 'What You May Do',
          b: [
            { ja: '声をかける。用件と所属を尋ねる', en: 'Speak to them. Ask what they need and who they are with' },
            { ja: '受付や上長へ取り次ぐ。同行をお願いする', en: 'Refer them to reception or your supervisor, and ask them to come with you' },
            { ja: '管理権者の意思に基づいて、退去をお願いする', en: 'Ask them to leave, on the basis of the site authority\'s intent' },
          ],
        },
        {
          h: 'できないこと', hEn: 'What You May Not Do',
          b: [
            { ja: '身分証の提示を強制する。氏名や在留資格を問いただす', en: 'Compel them to show ID, or demand a name or visa status' },
            { ja: '所持品を確認する。腕をつかむ。進路をふさぎ続ける', en: 'Search their belongings, take their arm, or keep blocking their path' },
            { ja: '応じない相手を追う。実力で退去させる', en: 'Chase someone who does not comply, or remove them by force' },
          ],
        },
        {
          h: '応じないとき', hEn: 'If They Do Not Comply',
          b: [
            { ja: '離脱する。距離を取り、応援を要請する', en: 'Disengage. Take distance and call for backup' },
            { ja: '人相、着衣、時刻、進行方向を記録する', en: 'Record appearance, clothing, the time and the direction they went' },
            { ja: '通報の判断は上長またはSite SOPの定める者が行う', en: 'The decision to call the police rests with your supervisor or whoever the SOP designates' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B13',
      titleJa: '不審物への対応', titleEn: 'Dealing with a Suspicious Object',
      obj: '不審物を発見したときに、触れずに人を遠ざけ、報告できる。',
      objEn: 'You can keep people away without touching it, and report.',
      sop: '不審物の取扱手順、隔離場所、連絡先は現場ごとに定められている。',
      sopEn: 'How suspicious objects are handled, where they are isolated, and who to call are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: 'してはいけないこと', hEn: 'What You Must Not Do',
          b: [
            { ja: '触らない、動かさない、開けない', en: 'Do not touch it, move it, or open it' },
            { ja: '振らない、傾けない、水に入れない', en: 'Do not shake it, tilt it, or put it in water' },
            { ja: 'そばで無線や携帯電話を使わない', en: 'Do not use a radio or a mobile phone next to it' },
          ],
        },
        {
          h: 'すること', hEn: 'What You Do',
          b: [
            { ja: '人を遠ざける。近づかないよう声をかける', en: 'Keep people away. Tell them not to approach' },
            { ja: '離れた場所から上長へ報告する', en: 'Report to your supervisor from a distance' },
            { ja: '発見時刻、場所、外形、周囲の状況を記録する', en: 'Record the time, place, what it looks like, and the surroundings' },
          ],
        },
        {
          h: '遺失物との区別', hEn: 'Telling It from Lost Property',
          b: [
            { ja: '遺失物と不審物は別の概念である', en: 'Lost property and a suspicious object are different things' },
            { ja: '区別の基準はSite SOPに定められている', en: 'The criteria for telling them apart are set out in the Site SOP' },
            { ja: '迷った場合は、不審物として扱って報告する', en: 'If you are unsure, treat it as suspicious and report it' },
          ],
        },
        {
          h: '判断は上げる', hEn: 'The Assessment Goes Up',
          b: [
            { ja: '警備員が「危険物ではない」と判定しない', en: 'You do not decide that something is not dangerous' },
            { ja: '通報と避難の判断は、上長またはSite SOPの定める者が行う', en: 'Calling and evacuating are decided by your supervisor or the SOP' },
            { ja: '自分の役割は、見て、遠ざけて、上げること', en: 'Your part is to see it, keep people away, and pass it up' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B13',
      titleJa: '記録と引継ぎ', titleEn: 'Records and Handover',
      obj: '警備日誌の書き方と、申し送りに必ず含める項目を挙げられる。',
      objEn: 'You can write the log properly, and name what must be in a handover.',
      sop: '日誌の様式、引継ぎの時刻と立会者、保存期間は現場ごとに定められている。',
      sopEn: 'Log formats, handover times and witnesses, and retention periods are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '警備日誌', hEn: 'The Security Log',
          b: [
            { ja: '時刻・場所・人・行為を書く。その場で書く', en: 'Time, place, person, action — written at the time' },
            { ja: '事実と評価を分ける。評価は「〜と思われます」と明示する', en: 'Separate fact from assessment, and mark the assessment as such' },
            { ja: '改ざんと後付けの修正はしない。訂正は訂正と分かる形で行う', en: 'No falsification or backdated edits. A correction must be visible as one' },
          ],
        },
        {
          h: '引継ぎに必ず含める', hEn: 'What a Handover Must Contain',
          b: [
            { ja: '未完了の事項。誰が、いつまでに対応するか', en: 'Anything unresolved: who is handling it, and by when' },
            { ja: '例外的に許可した事項。誰の承認によるか', en: 'Any exception that was allowed, and whose authorisation it was on' },
            { ja: '鍵・カード・備品の授受と員数の確認結果', en: 'Keys, cards and equipment handed over, and the count' },
          ],
        },
        {
          h: '引継ぎに必ず含める（続き）', hEn: 'What a Handover Must Contain (cont.)',
          b: [
            { ja: '設備の異常・工事。いつから、どの範囲、誰が対応中か', en: 'Faults and works: since when, over what area, and who is dealing with it' },
            { ja: '在館者と来訪予定。居残り、深夜作業、次直の予定', en: 'Who is still in the building, and what is expected on the next shift' },
            { ja: 'クライアント・上長からの指示。口頭なら発信者名と時刻まで', en: 'Instructions from the client or your supervisor — with the name and time if verbal' },
          ],
        },
        {
          h: '「異常なし」で終えない', hEn: 'Do Not Stop at "Nothing to Report"',
          b: [
            { ja: '何を確認したうえでの「異常なし」かを言葉にする', en: 'Say what you checked before you say there was nothing' },
            { ja: '口頭だけで終えない。口頭と記録の両方で渡す', en: 'Do not hand over verbally only. Do it verbally and in the record' },
            { ja: '受け手は内容を確認し、不明な点はその場で聞く', en: 'The incoming officer checks it, and asks about anything unclear on the spot' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B13',
      titleJa: '記録に書かないこと', titleEn: 'What Does Not Go in the Record',
      obj: '記録に含めてはいけないものを挙げ、前直の漏れの扱い方を言える。',
      objEn: 'You can name what must not go in a record, and how to handle a gap left by the previous shift.',
      sop: '記録の保存期間、閲覧権限、クライアントへの提出手続は現場ごとに異なる。',
      sopEn: 'Retention, viewing rights and how records are submitted to the client differ by site.',
      sources: SRC.info, cols: 2,
      topics: [
        {
          h: '書かないもの', hEn: 'Leave These Out',
          b: [
            { ja: '機密書類の内容そのもの。分類表示までにとどめる', en: 'The contents of a confidential document. Stop at the classification' },
            { ja: '個人への評価や人物評', en: 'Your opinion of a person' },
            { ja: '推測を、事実のように書くこと', en: 'A guess written as though it were fact' },
          ],
        },
        {
          h: '前直の引継ぎ漏れ', hEn: 'A Gap Left by the Previous Shift',
          b: [
            { ja: '責めない。事実として両方を残す', en: 'Do not put it on them. Record both facts side by side' },
            { ja: '「前直引継ぎ：異常なし／本職発見時：会議室未施錠、端末1台放置」', en: '"Previous shift: nothing reported / On my check: meeting room unlocked, one device left out"' },
            { ja: '責任追及より、次のシフトで同じことが起きない形を優先する', en: 'Preventing a repeat matters more than establishing who was at fault' },
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
        { ja: '深夜の執務フロアに人がいたので、用件を聞いた。', en: 'Someone is on the office floor at night, so you ask what they need.' },
        { ja: '外国語を話していたので、念のため身分証の提示を求めた。', en: 'They were speaking a foreign language, so you ask to see ID.' },
        { ja: '応じないので、腕をつかんで受付まで連れて行った。', en: 'They do not comply, so you take their arm and walk them to reception.' },
        { ja: '不審な箱を見つけたので、持ち上げて重さを確かめた。', en: 'You find a suspicious box and lift it to feel the weight.' },
        { ja: '不審物のそばで、無線を使って上長に報告した。', en: 'You use your radio next to the suspicious object to report it.' },
        { ja: '正当な用務の人を止めてしまったので、記録には残さなかった。', en: 'You stopped someone with legitimate business, so you leave it out of the record.' },
        { ja: '前直の引継ぎ漏れを見つけたので、両方の事実を記録した。', en: 'Finding a gap from the previous shift, you record both facts.' },
        { ja: '「異常なし」とだけ書いて申し送った。', en: 'You hand over with just "nothing to report".' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ○　2 ×　3 ×　4 ×　5 ×　6 ×　7 ○　8 ×',
      leadEn: 'Answers:  1 Yes · 2 No · 3 No · 4 No · 5 No · 6 No · 7 Yes · 8 No',
      rows: [
        { ja: '設問1 ― 場所と時間が業務と合いません。行動が根拠になっています。', en: 'Item 1: the place and time do not fit any business. Behaviour is the ground.' },
        { ja: '設問2 ― 言語は根拠になりません。身分証の提示も強制できません。', en: 'Item 2: language is not a ground, and you cannot compel ID either.' },
        { ja: '設問3 ― 腕をつかめません。離脱し、応援を呼び、記録します。', en: 'Item 3: you may not take their arm. Disengage, call backup, record.' },
        { ja: '設問4・5 ― 触らない、動かさない、そばで無線を使わない。', en: 'Items 4 and 5: do not touch, do not move, do not use a radio nearby.' },
        { ja: '設問6・8 ― 記録は残します。「異常なし」だけで終えません。', en: 'Items 6 and 8: record it. Do not stop at "nothing to report".', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 13-A',
      titleJa: 'TTX 13-A　「異常なし」の申し送り', titleEn: 'TTX 13-A — A Handover That Said "Nothing to Report"',
      scenarioJa: '夜勤に入る際、前直から口頭で「特に問題なし、いつも通り」と引き継いだ。引継ぎ票にも「異常なし」とだけある。深夜の巡回で、3階会議室のドアが施錠されておらず、テーブルにノートPCが1台、ホワイトボードに数字の書き残しがあるのを発見した。状態から、数時間前から放置されていると見える。前直はすでに退勤している。',
      scenarioEn: 'Coming on for the night shift, the previous guard handed over verbally: "Nothing in particular, business as usual." The handover form reads only "no abnormalities." On your midnight round you find the third-floor meeting room unlocked, a laptop on the table, and figures left on the whiteboard. From the state of it, this has been like this for some hours. The previous guard has gone home.',
      questionJa: 'あなたなら次の30分、何をどう動きますか。',
      questionEn: 'What do you do in the next thirty minutes?',
      points: [
        { ja: 'その場での対応は何か。端末とホワイトボードをどう扱うか。', en: 'What do you do at the scene? How do you handle the laptop and the whiteboard?' },
        { ja: '前直の引継ぎ漏れを、どう扱うか。', en: 'How do you handle the gap left by the previous shift?' },
        { ja: '「異常なし」の申し送りは、なぜ危険か。', en: 'Why is a "nothing to report" handover a problem?' },
        { ja: '翌朝、誰に何を伝えるか。', en: 'In the morning, who do you tell, and what?' },
      ],
      inject: '前直に電話したところ、「見ていない。自分の担当時間ではない」と言われた。',
      injectEn: 'You call the previous guard, who says: "I did not see it. That was not on my watch."',
      inject2: '翌朝、クライアントの社員が「あのPC、誰か動かしましたか」と聞いてきた。',
      inject2En: 'The next morning a client employee asks: "Did anyone move that laptop?"',
      sop: '機密放置物の取扱フロー、夜間連絡先、記録様式はSite SOPに定義されている。',
      sopEn: 'Procedures for abandoned confidential items, night contacts and record formats are in the Site SOP.',
      sources: SRC.info + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第13時限 まとめ', titleEn: 'Period 13 — Summary',
      rows: [
        { ja: '不審の根拠は行動。国籍・外見・言語は根拠にならない。', en: 'Behaviour is the ground. Nationality, appearance and language are not.' },
        { ja: '不審物は、触らない・動かさない・そばで無線を使わない。', en: 'A suspicious object: do not touch it, do not move it, no radio nearby.' },
        { ja: '引継ぎは口頭と記録の両方。「異常なし」だけで終えない。', en: 'Hand over verbally and in writing. Do not stop at "nothing to report".' },
        { ja: '前直の漏れは責めずに、両方の事実を並べて記録する。', en: 'Do not blame a gap from the previous shift. Record both facts side by side.' },
      ],
      next: '第14時限 ― 消防用設備と、Day 2 の確認テストを行います。',
      nextEn: 'Period 14 — fire safety equipment, and the Day 2 assessment.',
    },
  ],
};
