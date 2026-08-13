'use strict';
// 第6時限｜基本教育6 事故の発生時における警察機関への連絡その他応急の措置 ②（実技）
// 内容ソース: Day1統合版 A-11
// 実技コマ。スライドは手順の確認に用い、実際の手技は指導者の実演に従う。

const { META_JA, META_EN, slot } = require('./common');

const SRC_AID = '総務省消防庁「救急蘇生法の指針（市民用）」、日本蘇生協議会';

module.exports = {
  file: '06_6限_応急手当.pptx',
  footJa: '第6時限｜基本教育6 応急の措置（実技）',
  footEn: 'Period 6 | Basic Training 6 — First Aid (Practical)',
  slides: [
    {
      type: 'title',
      kicker: `第6時限　${slot(6)}　基本教育6（実技）`,
      kickerEn: 'Period 6 — Basic Training 6 (Practical)',
      titleJa: '応急手当',
      titleEn: 'First Aid',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B6',
      titleJa: 'このコマの進め方', titleEn: 'How This Session Runs',
      obj: '実技の流れを把握し、全員が胸骨圧迫とAEDを実際に行う。',
      objEn: 'You know how the session runs, and everyone performs compressions and uses an AED.',
      sop: '配属先のAED設置場所と、救急要請時の誘導手順はSite SOPに定められている。',
      sopEn: 'Where the AED is on your site, and how you meet the crew, are set out in the Site SOP.',
      sources: SRC_AID, cols: 2,
      topics: [
        {
          h: '進め方', hEn: 'Format',
          b: [
            { ja: '手順の確認（10分）→ 実技（40分）→ 質疑（10分）', en: 'Walk through the steps (10 min), practise (40 min), questions (10 min)' },
            { ja: '3人1組。傷病者役・実施者・通報者を交代する', en: 'In threes. Rotate: casualty, responder, caller' },
            { ja: '全員が胸骨圧迫とAEDを1回以上行う', en: 'Everyone performs compressions and uses the AED at least once' },
          ],
        },
        {
          h: 'スライドと実技の関係', hEn: 'Slides and Practice',
          b: [
            { ja: 'スライドは手順の確認に使う', en: 'The slides are here to check the sequence' },
            { ja: '実際の手技は、指導者の実演に従う', en: 'For the technique itself, follow the instructor\'s demonstration' },
            { ja: '分からないまま進めない。その場で止めて聞く', en: 'Do not carry on unsure. Stop and ask at the time' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B6',
      titleJa: '倒れている人を見つけたら', titleEn: 'When You Find Someone Down',
      obj: '反応と呼吸の確認までの順序を、迷わずに行える。',
      objEn: 'You can run the sequence up to checking response and breathing without hesitating.',
      sop: '応援の呼び方、AEDの設置場所、誘導者の配置は現場ごとに定められている。',
      sopEn: 'How to call for help, where the AED is, and who meets the crew are set per site.',
      sources: SRC_AID, cols: 2,
      topics: [
        {
          h: '① 周囲の安全を確認する', hEn: '1. Check It Is Safe',
          b: [
            { ja: '自分が危険な場所に入らない。二次災害を起こさない', en: 'Do not step into danger yourself. Do not create a second casualty' },
            { ja: '車両、電気、煙、落下物、こぼれた液体を見る', en: 'Look for vehicles, electricity, smoke, falling objects, spilled liquids' },
            { ja: '危険があれば、近づかずに通報と応援要請を先に行う', en: 'If it is not safe, do not approach: call for help and for the emergency services first' },
          ],
        },
        {
          h: '② 反応を確認する', hEn: '2. Check for a Response',
          b: [
            { ja: '肩を軽くたたきながら、大きな声で呼びかける', en: 'Tap the shoulders firmly and call out loudly' },
            { ja: '揺さぶらない。頭や首を動かさない', en: 'Do not shake them. Do not move the head or neck' },
            { ja: '反応がなければ、次へ進む', en: 'If there is no response, move on' },
          ],
        },
        {
          h: '③ 応援を呼ぶ', hEn: '3. Get Help',
          b: [
            { ja: '周囲の人を指差して特定し、役割を割り当てる', en: 'Point at specific people and give each of them a task' },
            { ja: '「あなたは119番。あなたはAEDを持ってきてください」', en: '"You — call 119. You — bring the AED."' },
            { ja: '「誰か」と言わない。誰も動かないことになる', en: 'Do not say "somebody". Then nobody moves' },
          ],
        },
        {
          h: '④ 呼吸を確認する', hEn: '4. Check Breathing',
          b: [
            { ja: '胸と腹の動きを10秒以内で見る', en: 'Watch the chest and abdomen for no more than ten seconds' },
            { ja: 'しゃくり上げるような不規則な呼吸は、正常な呼吸ではない', en: 'Irregular, gasping breathing is not normal breathing' },
            { ja: '迷ったら、心停止として胸骨圧迫を開始する', en: 'If you are unsure, treat it as cardiac arrest and start compressions' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B6',
      titleJa: '胸骨圧迫', titleEn: 'Chest Compressions',
      obj: '正しい位置・深さ・テンポで胸骨圧迫を行い、交代の合図ができる。',
      objEn: 'You can give compressions at the right place, depth and rate, and call for a changeover.',
      sop: '交代の人数と、記録の取り方は現場の体制による。',
      sopEn: 'How many of you rotate, and how it is recorded, depend on the site\'s staffing.',
      sources: SRC_AID, cols: 2,
      topics: [
        {
          h: '位置と姿勢', hEn: 'Position',
          b: [
            { ja: '胸の真ん中（胸骨の下半分）に手のひらの付け根を置く', en: 'Heel of the hand on the centre of the chest, the lower half of the breastbone' },
            { ja: 'もう一方の手を重ね、指を組む', en: 'Place the other hand on top and interlock the fingers' },
            { ja: 'ひじを伸ばし、真上から垂直に体重をかける', en: 'Keep your elbows straight and press straight down, using your body weight' },
          ],
        },
        {
          h: '深さとテンポ', hEn: 'Depth and Rate',
          b: [
            { ja: '深さは約5cm。6cmを超えない', en: 'About 5 cm deep. Do not exceed 6 cm' },
            { ja: 'テンポは1分あたり100〜120回', en: 'A rate of 100 to 120 per minute' },
            { ja: '毎回、胸を完全に元の高さまで戻す', en: 'Let the chest come all the way back up between compressions' },
          ],
        },
        {
          h: '止めない', hEn: 'Do Not Stop',
          b: [
            { ja: '中断を最小にする。AEDの解析中と指示中を除く', en: 'Keep interruptions to a minimum, except while the AED analyses or instructs' },
            { ja: '救急隊に引き継ぐまで、または相手が動き出すまで続ける', en: 'Continue until the crew takes over, or the person starts to move' },
            { ja: '疲れると質が落ちる。1〜2分ごとに交代する', en: 'Quality drops as you tire. Change over every one to two minutes' },
          ],
        },
        {
          h: '交代のしかた', hEn: 'Changing Over',
          b: [
            { ja: '交代する人は、実施者の反対側に構えて待つ', en: 'The next person kneels ready on the opposite side' },
            { ja: '「交代します」と声をかけ、中断を最小にして入れ替わる', en: 'Say "changing over" and swap with the shortest possible break' },
            { ja: '数を数えながら行うと、テンポと交代が合わせやすい', en: 'Counting aloud keeps the rate steady and makes the swap easier' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B6',
      titleJa: 'AEDの使用', titleEn: 'Using an AED',
      obj: '電源を入れてから音声指示に従い、安全にショックまで行える。',
      objEn: 'You can switch it on, follow the voice prompts, and deliver a shock safely.',
      sop: 'AEDの設置場所と機種は現場ごとに異なる。配属時に必ず場所を確認する。',
      sopEn: 'AED locations and models differ by site. Confirm the location when you are assigned.',
      sources: SRC_AID, cols: 2,
      topics: [
        {
          h: '基本の流れ', hEn: 'The Sequence',
          b: [
            { ja: '電源を入れる。あとは音声指示に従う', en: 'Switch it on, then follow the voice prompts' },
            { ja: '電極パッドを、袋の絵のとおりに素肌に貼る', en: 'Put the pads on bare skin, exactly as shown on the packet' },
            { ja: '解析中とショック時は、誰も傷病者に触れない', en: 'Nobody touches the casualty while it analyses or delivers a shock' },
          ],
        },
        {
          h: '声を出して安全を確保する', hEn: 'Call the Area Clear',
          b: [
            { ja: '「離れてください」と声に出し、周囲を見て確認する', en: 'Say "stand clear" out loud, and look around to confirm' },
            { ja: '自分も傷病者から手を離す', en: 'Take your own hands off the casualty as well' },
            { ja: 'ショック後は、指示に従って直ちに胸骨圧迫を再開する', en: 'After the shock, resume compressions immediately as instructed' },
          ],
        },
        {
          h: '貼る前に確認すること', hEn: 'Before You Place the Pads',
          b: [
            { ja: '胸が濡れていれば拭き取る', en: 'If the chest is wet, wipe it dry' },
            { ja: '貼り薬があればはがし、その部分を拭く', en: 'Remove any medication patch and wipe the area' },
            { ja: '金属やペースメーカーの膨らみを避けて貼る', en: 'Avoid metal, and any lump from an implanted device' },
          ],
        },
        {
          h: 'パッドを外さない', hEn: 'Leave the Pads On',
          b: [
            { ja: '相手が動き出しても、パッドは貼ったままにする', en: 'Even if the person starts to move, leave the pads in place' },
            { ja: '電源も切らない。救急隊が引き継ぐまでそのまま', en: 'Do not switch it off either. Leave it until the crew takes over' },
            { ja: '使用した機種と時刻を記録する', en: 'Record which unit was used, and when' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B6',
      titleJa: '出血・回復体位・引き継ぎ', titleEn: 'Bleeding, Recovery Position, Handover',
      obj: '出血への対応と、呼吸がある場合の体位を判断でき、救急隊に引き継げる。',
      objEn: 'You can control bleeding, position a breathing casualty, and hand over to the crew.',
      sop: '救急セットの内容と設置場所、記録の様式は現場ごとに異なる。',
      sopEn: 'The contents and location of the first-aid kit, and the record format, differ by site.',
      sources: SRC_AID, cols: 2,
      topics: [
        {
          h: '出血への対応', hEn: 'Controlling Bleeding',
          b: [
            { ja: '清潔な布やガーゼを傷口に当て、直接強く押さえる', en: 'Press a clean cloth or dressing firmly onto the wound' },
            { ja: '可能であれば手袋を着ける。血液に直接触れない', en: 'Wear gloves if you can. Do not touch blood directly' },
            { ja: '布が血で満たされても外さない。上から重ねる', en: 'If the dressing soaks through, do not remove it — add another on top' },
          ],
        },
        {
          h: '回復体位', hEn: 'The Recovery Position',
          b: [
            { ja: '反応はないが、正常な呼吸がある場合に用いる', en: 'Use it when there is no response but breathing is normal' },
            { ja: '横向きにして、気道を確保する', en: 'Turn them onto their side and keep the airway open' },
            { ja: '嘔吐や状態の変化に備え、そばを離れない', en: 'Stay with them, ready for vomiting or a change in condition' },
          ],
        },
        {
          h: '救急隊への引き継ぎ', hEn: 'Handing Over to the Crew',
          b: [
            { ja: '倒れていた時刻、行ったこと、AEDの使用回数を伝える', en: 'Give the time they collapsed, what you did, and how many shocks were given' },
            { ja: '見た事実を伝える。推測は推測と明示する', en: 'Report what you saw. Mark any guess as a guess' },
            { ja: '所持品や身元に関する情報は、分かる範囲で伝える', en: 'Pass on what you know of their belongings and identity' },
          ],
        },
        {
          h: '終わったあと', hEn: 'Afterwards',
          b: [
            { ja: '使用した資器材を補充・報告する', en: 'Replace and report what you used' },
            { ja: '時系列を記録に残す。記憶が新しいうちに書く', en: 'Write the timeline while it is still fresh' },
            { ja: '対応した本人の負担にも配慮する。上長へ申し出てよい', en: 'The responder is affected too. It is fine to tell your supervisor' },
          ],
        },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 6-A',
      titleJa: 'TTX 6-A　夜間、警備員は2名', titleEn: 'TTX 6-A — Night Duty, Two Guards on Site',
      scenarioJa: '23時40分、地下1階の休憩室で清掃員が倒れているのを発見した。反応がない。呼吸は、しゃくり上げるように不規則である。館内に残っているのは、あなたともう1名の警備員だけ。AEDは1階の受付脇にある。地下から1階までは階段で1分ほどかかる。',
      scenarioEn: '23:40. You find a cleaner collapsed in the basement break room. There is no response. Their breathing is irregular and gasping. The only people left in the building are you and one other guard. The AED is beside reception on the ground floor, about a minute away by stairs.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: 'しゃくり上げる呼吸を、どう判断するか。', en: 'How do you read the gasping breathing?' },
        { ja: '2名をどう配置するか。誰が何をするか。', en: 'How do you deploy two people? Who does what?' },
        { ja: '119番とAED、どちらを先に手配するか。', en: 'Which comes first: the 119 call, or fetching the AED?' },
        { ja: '救急隊の到着口まで、誰がどう誘導するか。', en: 'Who meets the crew, and how do they get them in?' },
      ],
      inject: '119番の指令員から「胸骨圧迫をしてください」と指示された。',
      injectEn: 'The dispatcher tells you to start chest compressions.',
      inject2: '3分ほど続けたところで、腕が上がらなくなってきた。',
      inject2En: 'After about three minutes, your arms are giving out.',
      sop: 'AEDの設置場所、夜間の解錠手順、到着口の指定は現場ごとに定められている。',
      sopEn: 'AED location, night unlocking procedure and the designated entrance are set per site.',
      sources: SRC_AID + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第6時限 まとめ', titleEn: 'Period 6 — Summary',
      rows: [
        { ja: '安全確認が先。自分が二次災害の当事者にならない。', en: 'Safety first. Do not become the second casualty yourself.' },
        { ja: '応援は指差して特定する。「誰か」と言えば誰も動かない。', en: 'Point at specific people. Say "somebody" and nobody moves.' },
        { ja: '迷ったら心停止として胸骨圧迫を始める。約5cm、100〜120回／分。', en: 'If unsure, start compressions: about 5 cm deep, 100 to 120 per minute.' },
        { ja: 'AEDは電源を入れて音声指示に従う。解析中は誰も触れない。', en: 'Switch the AED on and follow the prompts. Nobody touches during analysis.' },
      ],
      next: '第7時限 ― 自分の身を守る方法と、Day 1 の確認テストを行います。',
      nextEn: 'Period 7 — protecting yourself, and the Day 1 assessment.',
    },
  ],
};
