'use strict';
// 第5時限｜基本教育5 事故の発生時における警察機関への連絡その他応急の措置 ①
// 講義＋通報訓練（実技）。内容ソース: Day1統合版 A-4 / A-10、前回現任講習 第9限

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '05_5限_通報と現場保存.pptx',
  footJa: '第5時限｜基本教育5 事故発生時の警察機関への連絡その他応急の措置',
  footEn: 'Period 5 | Basic Training 5 — Emergency Reporting and Scene Preservation',
  slides: [
    {
      type: 'title',
      kicker: `第5時限　${slot(5)}　基本教育5`,
      kickerEn: 'Period 5 — Basic Training 5',
      titleJa: '通報と現場保存',
      titleEn: 'Emergency Reporting and Scene Preservation',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'two',
      titleJa: '第6時限との役割分担', titleEn: 'How This Session Differs from Period 6',
      lead: '同じ法定科目を、講義と実技に分けています。内容は重複させません。',
      leadEn: 'The same statutory subject, split between classroom and practical. We do not repeat it.',
      left: {
        h: '第5時限（本コマ）', hEn: 'Period 5 — this session',
        items: [
          { ja: '報告の原則。事実と評価を分ける', en: 'Principles of reporting: separating fact from assessment' },
          { ja: '110番・119番で必ず伝える事項', en: 'What you must say on an emergency call' },
          { ja: '通報で使う日本語', en: 'The Japanese you use on the call' },
          { ja: '通報訓練（全員が声を出します）', en: 'Call practice — everyone speaks' },
          { ja: '現場保存と社内エスカレーション', en: 'Scene preservation and internal escalation' },
        ],
      },
      right: {
        h: '第6時限（実技）', hEn: 'Period 6 — practical',
        items: [
          { ja: '傷病者の観察', en: 'Assessing a casualty' },
          { ja: '胸骨圧迫', en: 'Chest compressions' },
          { ja: 'AEDの使用', en: 'Using an AED' },
          { ja: '止血、回復体位', en: 'Bleeding control and the recovery position' },
          { ja: '通報者・AED手配者との連携', en: 'Working with the caller and the person fetching the AED' },
        ],
      },
      note: '本コマでは胸骨圧迫とAEDは扱いません。第6時限で実技として行います。',
      noteEn: 'Compressions and the AED are not covered here. They are done hands-on in Period 6.',
    },

    {
      type: 'topics', block: 'B5',
      titleJa: '報告の原則', titleEn: 'Principles of Reporting',
      obj: '事実と評価を分けて報告でき、一次報告に何を入れるかを言える。',
      objEn: 'You can report with fact and assessment separated, and say what belongs in an initial report.',
      sop: '一次報告の宛先、様式、時限は現場ごとに異なる。緊急連絡体制による。',
      sopEn: 'Who receives the initial report, in what form and by when, differ by site.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '事実と評価を分ける', hEn: 'Separate Fact from Assessment',
          b: [
            { ja: '事実：「20時15分、B1東側非常口が15cmほど開いていた」', en: 'Fact: "At 20:15 the B1 east emergency door was about 15 cm open"' },
            { ja: '評価：「侵入者がいるかもしれません」と明示して後に置く', en: 'Assessment: mark it as such — "there may be an intruder" — and place it second' },
            { ja: '誤り：「不審者が非常口から入りました」。見ていないことを断定している', en: 'Wrong: "An intruder came in through the exit." You are asserting what you did not see' },
          ],
        },
        {
          h: '報告の3段階', hEn: 'Three Stages',
          b: [
            { ja: '一次報告：覚知後ただちに。完全でなくてよい', en: 'Initial: immediately on becoming aware. It need not be complete' },
            { ja: '続報：状況が変わるたびに、変化した点だけ', en: 'Updates: each time the situation changes, the change only' },
            { ja: '「変化なし」も報告する。無音は「異常なし」と読まれない', en: 'Report "no change" too. Silence is not read as "all clear"' },
          ],
        },
        {
          h: '一次報告に入れること', hEn: 'What Goes in the Initial Report',
          b: [
            { ja: '何が起きたか。いつ、どこで', en: 'What happened, when, and where' },
            { ja: 'いま安全か。負傷者はいるか', en: 'Is it safe now? Are there casualties?' },
            { ja: '自分がいまどこにいて、何を要請するか', en: 'Where you are, and what you are asking for' },
          ],
        },
        {
          h: '記録', hEn: 'Records',
          b: [
            { ja: 'その場で書く。時刻は推定でもよいが、推定と明記する', en: 'Write on the spot. An estimated time is fine if you mark it as an estimate' },
            { ja: '発言はそのまま残す。要約すると意味が変わる', en: 'Record words as spoken. Summarising changes the meaning' },
            { ja: '分からないことは「不明」と書く', en: 'Write "unknown" where you do not know' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B5',
      titleJa: '110番・119番 ― 必ず伝える事項', titleEn: 'Emergency Calls — What You Must Say',
      obj: '110番と119番で伝える事項を、見ずに言える。',
      objEn: 'You can state the required items for both emergency numbers without notes.',
      sop: '通報の前に社内へ一報を入れるか否かは現場ごとに異なる。人命に関わる場合は通報を優先する。',
      sopEn: 'Whether to notify internally before calling differs by site. Where life is at risk, call first.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '110番', hEn: 'Police — 110',
          b: [
            { ja: '冒頭で何が起きたかを伝える', en: 'Open with what has happened' },
            { ja: '場所 ― 住所、目標物、建物名、階、区画', en: 'Location: address, landmark, building, floor, zone' },
            { ja: '相手 ― 人相、着衣、逃走方向。自分 ― 氏名、折り返し番号', en: 'The person: appearance, clothing, direction. You: name and call-back number' },
          ],
        },
        {
          h: '119番', hEn: 'Fire and Ambulance — 119',
          b: [
            { ja: '冒頭で種別。「火事です」か「救急です」。場所より先に言う', en: 'Open with the type — fire, or ambulance. Before the location' },
            { ja: '場所 ― 住所、目標物、進入口、使用するエレベーター', en: 'Location: address, landmark, which entrance, which lift' },
            { ja: '状況 ― 症状、負傷者数、意識と呼吸の有無', en: 'Condition: symptoms, number of casualties, consciousness and breathing' },
          ],
        },
        {
          h: '共通の原則', hEn: 'Common Rules',
          b: [
            { ja: '相手が終話するまで切らない。質問に答え切る', en: 'Do not hang up first. Answer all their questions' },
            { ja: '推測を事実として伝えない。「〜と思われます」と言う', en: 'Do not report a guess as fact. Say "it appears that"' },
            { ja: '日本語が通じない当事者がいる場合は、その旨を伝える', en: 'If someone involved does not speak Japanese, say so on the call' },
          ],
        },
        {
          h: '通報後にすること', hEn: 'After the Call',
          b: [
            { ja: '誘導者を配置する。到着口を空けておく', en: 'Post someone to guide them. Keep the arrival point clear' },
            { ja: 'エレベーターを確保する。階段誘導が必要か確認する', en: 'Secure a lift. Check whether stair guidance is needed' },
            { ja: '社内へ報告する。外部通報とは別に行う', en: 'Report internally. This is separate from the emergency call' },
          ],
        },
      ],
    },

    {
      type: 'grid',
      titleJa: '通報で使う日本語', titleEn: 'Japanese for Emergency Calls',
      lead: 'この8つは全員が言えるようにしてください。',
      leadEn: 'Everyone must be able to say these eight lines.',
      cols: 2,
      items: [
        { ja: '火事です　kaji desu', en: 'There is a fire.' },
        { ja: '救急です　kyūkyū desu', en: 'We need an ambulance.' },
        { ja: '事件です　jiken desu', en: 'A crime has occurred.' },
        { ja: '場所は ◯◯ です　basho wa ◯◯ desu', en: 'The location is ◯◯.' },
        { ja: '人が倒れています　hito ga taorete imasu', en: 'A person has collapsed.' },
        { ja: '意識がありません　ishiki ga arimasen', en: 'They are unresponsive.' },
        { ja: '私は警備員の ◯◯ です　watashi wa keibiin no ◯◯ desu', en: 'I am ◯◯, a security officer.' },
        { ja: '折り返しは ◯◯ です　orikaeshi wa ◯◯ desu', en: 'The call-back number is ◯◯.' },
      ],
    },

    {
      type: 'topics', block: 'B5',
      titleJa: '通報訓練 ― 進め方', titleEn: 'Call Practice — How We Run It',
      obj: '通報カードを見ながら、必要事項を落とさずに声に出して言える。',
      objEn: 'Working from the call card, you can say all the required items aloud without dropping any.',
      sop: '実際の通報先、館内の呼称、進入口の指定は現場ごとに異なる。Site SOPによる。',
      sopEn: 'The actual contacts, how the building is referred to, and the designated entrance differ by site.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '形式', hEn: 'Format',
          b: [
            { ja: '2人1組。1名が通報者、1名が指令員役', en: 'In pairs. One is the caller, the other the dispatcher' },
            { ja: '役割を交代して2回行う。全員が通報者を経験する', en: 'Swap roles and run it twice. Everyone plays the caller' },
            { ja: '通報カードを見てよい。暗記は求めない', en: 'You may read from the call card. Memorising is not required' },
          ],
        },
        {
          h: '3つの想定', hEn: 'Three Scenarios',
          b: [
            { ja: '① 来訪者がロビーで倒れ、呼びかけに反応がない（119番）', en: '1. A visitor has collapsed in the lobby and does not respond (119)' },
            { ja: '② 執務フロアで発煙、火災警報が鳴動（119番）', en: '2. Smoke on the office floor and the fire alarm is sounding (119)' },
            { ja: '③ 施設内で窃盗を現認し、被疑者が逃走（110番）', en: '3. You witness a theft on site and the person leaves (110)' },
          ],
        },
        {
          h: '講評の4点', hEn: 'The Four Points We Assess',
          b: [
            { ja: '種別を最初に言えたか', en: 'Did you say the type first?' },
            { ja: '場所を、目標物を添えて言えたか', en: 'Did you give the location with a landmark?' },
            { ja: '折り返しの番号と自分の氏名を伝えたか', en: 'Did you give the call-back number and your own name?' },
          ],
        },
        {
          h: '評価しないこと', hEn: 'What We Do Not Assess',
          b: [
            { ja: '日本語の流暢さは評価しない', en: 'Fluency in Japanese is not assessed' },
            { ja: '評価するのは、必要事項を落とさずに伝えられるか', en: 'What is assessed is whether the required items all get through' },
            { ja: '通報カードの読み上げで構わない', en: 'Reading from the call card is acceptable' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B5',
      titleJa: '現場保存と社内エスカレーション', titleEn: 'Scene Preservation and Internal Escalation',
      obj: '現場を動かしてよい理由を述べ、それ以外の場合の扱いを言える。',
      objEn: 'You can state the one reason for altering a scene, and what to do otherwise.',
      sop: '保全依頼の宛先、記録の様式、夜間の連絡順序は現場ごとに定められている。',
      sopEn: 'Who to ask for preservation, the record format, and the night call-out order are set per site.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '現場を変えてよい理由', hEn: 'When You May Alter the Scene',
          b: [
            { ja: '人命のため（救助・救護）。それ以外では動かさない', en: 'To save life. Otherwise, change nothing' },
            { ja: '動かした場合は、何を・どこから・どこへ・誰が・何時に記録する', en: 'If you did move something: what, from where, to where, by whom, and when' },
            { ja: '片付けない。清掃を入れない', en: 'Do not tidy up. Do not let cleaning in' },
          ],
        },
        {
          h: '保全と開示は別のもの', hEn: 'Preserving Is Not Disclosing',
          b: [
            { ja: '保全＝上書きを防いで残すこと。警備員が受けられる', en: 'Preserving means keeping it from being overwritten. You may accept this' },
            { ja: '開示＝内容を渡すこと。警備員は判断しない', en: 'Disclosing means handing over content. That is not yours to decide' },
            { ja: '依頼した事実と時刻を記録する', en: 'Record that you asked, and when' },
          ],
        },
        {
          h: '社内エスカレーション', hEn: 'Internal Escalation',
          b: [
            { ja: '外部通報と社内報告は別に行う。どちらも省かない', en: 'The emergency call and the internal report are separate. Do neither instead of the other' },
            { ja: '上長が不在なら、緊急連絡体制の次順位者へ', en: 'If your supervisor is away, go to the next person on the call-out list' },
            { ja: '不在を理由に、自分で判断しない', en: 'Absence is not authority to decide' },
          ],
        },
        {
          h: '記録に残すこと', hEn: 'What Goes in the Record',
          b: [
            { ja: '通報した事実と時刻。誰が、どこへ', en: 'That you called, when, who called, and to whom' },
            { ja: '現場に入った人、触れた物', en: 'Who entered the scene, and what was touched' },
            { ja: '救急・警察の到着時刻と、引き継いだ内容', en: 'When the crews arrived, and what you handed over' },
          ],
        },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 5-A',
      titleJa: 'TTX 5-A　ロビーで人が倒れている', titleEn: 'TTX 5-A — A Person Is Down in the Lobby',
      scenarioJa: '18時05分、本社ビル1階ロビーの西側で、来訪者らしい男性1名が床にあおむけで倒れている。年齢は50代くらい。呼びかけに反応がない。胸は動いているように見える。顔色が青白い。周囲に社員が2名いる。あなたは警備員で、折り返しの電話番号は警備室のものである。',
      scenarioEn: '18:05. On the west side of the ground-floor lobby, a man who appears to be a visitor is lying on his back. He looks to be in his fifties. He does not respond when spoken to. His chest appears to be moving. His face is pale. Two employees are nearby. You are the guard on duty; the call-back number is the security desk.',
      questionJa: 'この状況を、119番でどの順に、どう言いますか。',
      questionEn: 'In what order, and in what words, do you say this on the emergency call?',
      points: [
        { ja: '最初の一言は何か。なぜそれが先か。', en: 'What are your first words, and why do they come first?' },
        { ja: '伝える順序を決めよ。省いてよい項目はどれか。', en: 'Put the items in order. Which of them may be left out?' },
        { ja: '「意識はありますか」と聞かれたら何と答えるか。', en: 'If they ask whether he is conscious, what do you say?' },
        { ja: '通報しながら、周囲の社員2名に何を頼むか。', en: 'While you are on the call, what do you ask the two employees to do?' },
      ],
      inject: '「呼吸はしていますか」と聞かれた。胸の動きは見えるが、確信が持てない。',
      injectEn: 'They ask whether he is breathing. You can see chest movement but you are not certain.',
      inject2: '通報中に、倒れている男性が身動きし、目を開けた。',
      inject2En: 'While you are still on the call, the man moves and opens his eyes.',
      sop: '通報の前に社内へ一報を入れるか、誘導者を誰にするかは現場ごとに異なる。',
      sopEn: 'Whether to notify internally first, and who meets the crew, differ by site.',
      sources: SRC.emg + '、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 5-B',
      titleJa: 'TTX 5-B　非常口が開いていた', titleEn: 'TTX 5-B — An Emergency Door Left Open',
      scenarioJa: '20時15分、巡回中にB1東側の非常口が15cmほど開いているのを見つけた。施錠されているはずの扉で、付近に人影はない。扉の内側の床に、濡れた足跡が数歩分ついている。同僚は無線で「不審者が非常口から入りました」と報告しようとしている。',
      scenarioEn: '20:15. On patrol you find the B1 east emergency door standing about 15 cm open. It should have been locked, and nobody is nearby. Inside the door there are a few wet footprints on the floor. Your colleague is about to radio: "An intruder came in through the emergency exit."',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '同僚の報告文の問題点はどこか。', en: 'What is wrong with your colleague\'s wording?' },
        { ja: 'あなたなら、無線で何と報告するか。', en: 'What would you say on the radio instead?' },
        { ja: '扉を閉めて施錠してよいか。足跡はどう扱うか。', en: 'May you close and lock the door? What about the footprints?' },
        { ja: '110番するか。誰が判断するか。', en: 'Do you call the police? Who decides that?' },
      ],
      inject: '同僚が「早く閉めよう、寒いから」と扉に手をかけた。',
      injectEn: 'Your colleague reaches for the door: "Let us just shut it, it is cold."',
      inject2: '無線で「カメラを確認したい。何時ごろからか分かるか」と聞かれた。',
      inject2En: 'Over the radio: "We want to check the cameras. Do you know roughly when it started?"',
      sop: '非常口の施錠確認、カメラ画像の保全依頼先は現場ごとに定められている。',
      sopEn: 'Checking emergency-door locks and who to ask for footage preservation are set per site.',
      sources: SRC.emg + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第5時限 まとめ', titleEn: 'Period 5 — Summary',
      rows: [
        { ja: '事実を先に、評価は「〜と思われます」と明示して後に置く。', en: 'Fact first. Mark assessment as assessment, and place it second.' },
        { ja: '119番は種別から。「火事です」「救急です」を場所より先に言う。', en: 'On 119, lead with the type — fire or ambulance — before the location.' },
        { ja: '相手が終話するまで切らない。推測を事実として伝えない。', en: 'Do not hang up first, and never report a guess as fact.' },
        { ja: '現場を変えてよいのは人命のためだけ。動かしたら記録する。', en: 'Alter the scene only to save life. If you moved something, record it.' },
      ],
      next: '第6時限 ― 実技です。胸骨圧迫とAEDを、全員が実際に行います。',
      nextEn: 'Period 6 — hands-on. Everyone performs compressions and uses an AED.',
    },
  ],
};
