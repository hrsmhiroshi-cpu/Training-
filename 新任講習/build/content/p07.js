'use strict';
// 第7時限｜基本教育7 護身用具の使用方法その他の護身の方法／Day 1 総括
// 内容ソース: Day1統合版 D-1、前回現任講習 第5限（De-escalation）

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '07_7限_護身の方法.pptx',
  footJa: '第7時限｜基本教育7 護身の方法／Day 1 総括',
  footEn: 'Period 7 | Basic Training 7 — Self-Protection and Day 1 Review',
  slides: [
    {
      type: 'title',
      kicker: `第7時限　${slot(7)}　基本教育7`,
      kickerEn: 'Period 7 — Basic Training 7',
      titleJa: '護身の方法',
      titleEn: 'Protecting Yourself',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B7',
      titleJa: '護身の目的', titleEn: 'What Self-Protection Is For',
      obj: '護身の目的が制圧ではなく離脱であることを述べ、判断の基準を言える。',
      objEn: 'You can say that the aim is to get away, not to overpower, and state how you judge it.',
      sop: '応援要請の方法、退避場所、通報の判断者は現場ごとに定められている。',
      sopEn: 'How to call backup, where to withdraw to, and who decides on a call are set per site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '目的', hEn: 'The Aim',
          b: [
            { ja: '相手を制圧することではない。その場を安全に終えること', en: 'Not to overpower anyone. To end the situation safely' },
            { ja: '勝ち負けの問題ではない。怪我をしないことが成果である', en: 'It is not about winning. Not being injured is the result you want' },
            { ja: '離脱できるなら離脱する。それが最も確実な護身である', en: 'If you can get away, get away. That is the surest protection there is' },
          ],
        },
        {
          h: '権限との関係', hEn: 'How It Relates to Your Authority',
          b: [
            { ja: '有形力を使えないからこそ、距離と姿勢と声で対応する', en: 'Because force is not available, you work with space, stance and voice' },
            { ja: '触れてよいのは正当防衛か現行犯逮捕に伴う場合だけ', en: 'You may touch only with self-defence or a flagrant-offender arrest' },
            { ja: '侵害が終われば、正当防衛の根拠も終わる', en: 'When the attack ends, the basis for self-defence ends with it' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B7',
      titleJa: '距離・姿勢・声', titleEn: 'Space, Stance and Voice',
      obj: '距離・姿勢・声の3点を実演でき、自分の退路を確保できる。',
      objEn: 'You can demonstrate space, stance and voice, and keep your own way out clear.',
      sop: '対応を交代する基準と、複数名で当たる場面は現場ごとに異なる。',
      sopEn: 'When to hand over, and which situations take more than one officer, differ by site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '距離', hEn: 'Space',
          b: [
            { ja: '手が届かない距離を保つ。目安は1.5から2メートル', en: 'Stay beyond arm\'s reach. About 1.5 to 2 metres' },
            { ja: '相手の背後や、逃げ道をふさぐ位置に立たない', en: 'Do not stand behind them, or where you block their exit' },
            { ja: '自分の退路を確保しておく。複数名でも囲まない', en: 'Keep your own way out clear. Even with several officers, do not surround' },
          ],
        },
        {
          h: '姿勢', hEn: 'Stance',
          b: [
            { ja: '正対しない。半身で立つ', en: 'Do not stand square on. Stand at an angle' },
            { ja: '手は相手から見える位置に置く。腕を組まない', en: 'Keep your hands visible. Do not fold your arms' },
            { ja: '指を差さない。物を持ったまま話さない', en: 'Do not point. Do not talk while holding an object' },
          ],
        },
        {
          h: '声', hEn: 'Voice',
          b: [
            { ja: 'トーン、速度、音量を下げる', en: 'Lower your tone, your speed and your volume' },
            { ja: '相手より大きな声を出さない', en: 'Do not speak louder than the other person' },
            { ja: '沈黙があってよい。間を埋めようとしない', en: 'Silence is acceptable. Do not rush to fill it' },
          ],
        },
        {
          h: '外国語で対応するとき', hEn: 'Working in Another Language',
          b: [
            { ja: '速度を落とせば伝わる。流暢さは必要ない', en: 'Slowing down carries more than fluency does' },
            { ja: '短い文で言う。一度に1つのことだけ伝える', en: 'Use short sentences. One thing at a time' },
            { ja: '同じ言葉を繰り返す。言い換えると混乱する', en: 'Repeat the same words. Rephrasing adds confusion' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B7',
      titleJa: '対話が効いていない兆候と、離脱', titleEn: 'When Talking Is Not Working, and Getting Out',
      obj: '対話が効いていない兆候を2つ挙げ、そのとき取る行動を順に述べられる。',
      objEn: 'You can name two signs that talking is not working, and state your actions in order.',
      sop: '応援の呼び方、退避場所、通報の判断者は現場ごとに定められている。',
      sopEn: 'How to call backup, where to withdraw to, and who decides on a call are set per site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '兆候', hEn: 'The Signs',
          b: [
            { ja: '声が大きくなり続ける。同じ言葉を繰り返す', en: 'The volume keeps rising. They repeat the same phrase' },
            { ja: '距離を詰めてくる。持ち物を握りしめる', en: 'They close the distance. They grip an object' },
            { ja: '視線が自分の身体や周囲の物に向く', en: 'Their eyes go to your body, or to objects around them' },
          ],
        },
        {
          h: '行動の順序', hEn: 'What You Do, in Order',
          b: [
            { ja: '① 離脱する。距離を取り、退路の側へ移動する', en: '1. Disengage. Take distance and move towards your way out' },
            { ja: '② 応援を要請する。人数を増やすことが抑止になる', en: '2. Call for backup. More people present changes the situation' },
            { ja: '③ 通報する。判断者はSite SOPによる', en: '3. Call the police. Who decides that follows the Site SOP' },
          ],
        },
        {
          h: '護身用具（法第17条）', hEn: 'Protective Equipment (Art. 17)',
          b: [
            { ja: '携帯できる護身用具は、種類と規格が定められている', en: 'The type and specification of what may be carried are prescribed' },
            { ja: '届け出たものだけを、定められた基準で使用する', en: 'Only notified items are used, under the prescribed rules' },
            { ja: '配備がない現場では、使用を前提としない', en: 'Where none is issued, do not plan around using it' },
          ],
        },
        {
          h: '終わったあと', hEn: 'Afterwards',
          b: [
            { ja: '時刻・場所・行為・発言を、その場で記録する', en: 'Record time, place, actions and words spoken, at the time' },
            { ja: '怪我がなくても報告する。次直への申し送りに入れる', en: 'Report it even without injury, and put it in the handover' },
            { ja: '自分が受けた影響も申し出てよい', en: 'It is fine to say how it affected you' },
          ],
        },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 7-A',
      titleJa: 'TTX 7-A　距離を詰められた', titleEn: 'TTX 7-A — Someone Closes the Distance',
      scenarioJa: '19時、エントランスで入館を断られた人物が、声を荒らげて同じ言葉を繰り返している。あなたが説明を続けるうちに、相手は一歩ずつ距離を詰めてきた。いまの距離は1メートルほど。相手の右手は上着のポケットに入っている。あなたの背後は行き止まりの壁で、出口は相手の後方にある。',
      scenarioEn: '19:00. A person refused entry at the door is raising their voice and repeating the same phrase. As you keep explaining, they step closer, one pace at a time. They are now about a metre away. Their right hand is in a jacket pocket. Behind you is a dead-end wall, and the exit is behind them.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '対話が効いていない兆候は、どれとどれか。', en: 'Which of the signs that talking is not working do you see here?' },
        { ja: '自分の立ち位置の問題は何か。どう直すか。', en: 'What is wrong with where you are standing, and how do you fix it?' },
        { ja: '相手のポケットの手を、どう扱うか。', en: 'How do you handle the hand in the pocket?' },
        { ja: '離脱・応援・通報の順序をどう決めるか。', en: 'How do you order disengaging, backup, and calling the police?' },
      ],
      inject: '相手が「話にならない、責任者を呼べ」と言い、さらに半歩詰めてきた。',
      injectEn: 'They say "this is pointless, get me the manager" and take another half-step in.',
      inject2: '同僚が近づいてきて、相手の背後に立った。',
      inject2En: 'A colleague comes over and stops behind the person.',
      sop: '応援の呼び方、退避場所、通報の判断者は現場ごとに定められている。',
      sopEn: 'How to call backup, where to withdraw to, and who decides on a call are set per site.',
      sources: SRC.law + '、架空シナリオ',
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問1〜問5', titleEn: 'Assessment — Questions 1 to 5',
      lead: '15分。回答は日本語・英語どちらでも構いません。記述は一言で結構です。',
      leadEn: '15 minutes. Answer in Japanese or English. Short answers are fine.',
      rows: [
        { ja: '警備員の法的な立場は何か。警察官にあって警備員にない権限を1つ挙げよ。', en: 'What is a guard\'s legal status? Name one power the police have and you do not.' },
        { ja: '判断軸を、優先する順に4つ挙げよ。', en: 'List the four steps of the priority order, in order.' },
        { ja: '現行犯逮捕の要件を2つ挙げよ。逮捕後、直ちに何をするか。', en: 'Name two tests for a citizen\'s arrest. What must you do immediately after?' },
        { ja: '所持品検査を強制できない理由を述べよ。', en: 'Explain why a bag check cannot be compelled.' },
        { ja: '「不審」と判断する根拠にしてよいのは何か。してはいけないのは何か。', en: 'What may be a ground for treating someone as suspicious, and what may not?' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問6〜問10', titleEn: 'Assessment — Questions 6 to 10',
      rows: [
        { ja: '119番で最初に伝えることは何か。なぜそれが先か。', en: 'What do you say first on a 119 call, and why does it come first?' },
        { ja: '20時15分、B1東側非常口が15cm開いていた。報告文を書け。', en: 'At 20:15 the B1 east exit stood 15 cm open. Write your report.' },
        { ja: '現場を変えてよい理由は何か。それ以外の場合はどうするか。', en: 'For what reason may you alter a scene? And otherwise?' },
        { ja: '反応がなく、呼吸が不規則な人を見つけた。最初に何をするか。', en: 'You find someone unresponsive with irregular breathing. What do you do first?' },
        { ja: '対話が効いていない兆候を2つ挙げ、そのとき取る行動を順に述べよ。', en: 'Name two signs that talking is not working, and state your actions in order.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問1〜問5', titleEn: 'Assessment — Answers 1 to 5',
      lead: '表現が異なっても、要点が含まれていれば正解とします。',
      leadEn: 'Different wording is fine if the point is there.',
      rows: [
        { ja: '問1　私人。制服により権限は加わらない。／ 職務質問、保護、制止、立入、武器の使用のいずれか1つ。', en: 'Q1 A private citizen; the uniform adds nothing. Any one of: stop and question, protective custody, stopping a crime, entry, weapons.' },
        { ja: '問2　人命 → 法令 → Site SOP → クライアント要望。', en: 'Q2 Life, then the law, then the Site SOP, then the client\'s wishes.' },
        { ja: '問3　犯罪と犯人が明白で、時間的に接着していること。／ 直ちに警察へ引き渡す。', en: 'Q3 Offence and offender obvious, and immediate. Hand them to the police without delay.' },
        { ja: '問4　強制する権限がないため。規則は根拠にならない。', en: 'Q4 You have no power to compel it. A rule is not a legal basis.' },
        { ja: '問5　根拠にしてよいのは観察した行動。国籍・人種・年齢・性別・服装は根拠にならない。', en: 'Q5 Observed behaviour may be a ground. Nationality, race, age, sex and clothing may not.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問6〜問10', titleEn: 'Assessment — Answers 6 to 10',
      lead: '問7と問10は重点問題です。落とした受講者には個別に確認してください。',
      leadEn: 'Questions 7 and 10 are the key items. Follow up individually with anyone who missed them.',
      rows: [
        { ja: '問6　種別。「火事です」か「救急です」。相手が隊を選べるよう、場所より先に言う。', en: 'Q6 The type — fire or ambulance — before the location, so they can choose the response.' },
        { ja: '問7　「20時15分、B1東側非常口が15cm開いていた。付近に人影はない」。侵入とは書かない。', en: 'Q7 "At 20:15 the B1 east exit stood 15 cm open, nobody nearby." Do not write "intrusion".' },
        { ja: '問8　人命のため（救助・救護）。それ以外では動かさない。動かした場合は記録する。', en: 'Q8 To save life. Otherwise change nothing; if you did, record it.' },
        { ja: '問9　安全確認 → 反応確認 → 応援を指差して割り当てる。迷えば胸骨圧迫を始める。', en: 'Q9 Check it is safe, check response, assign help by pointing. If unsure, start compressions.' },
        { ja: '問10　兆候：声が大きくなる／同じ言葉の繰り返し／距離を詰める。行動は 離脱 → 応援 → 通報。', en: 'Q10 Signs: rising volume, a repeated phrase, closing distance. Then: disengage, backup, police.' },
      ],
    },

    {
      type: 'close',
      titleJa: 'Day 1 総括', titleEn: 'Day 1 — Review',
      rows: [
        { ja: '警備員は私人である。制服により権限は加わらない（法第15条）。', en: 'A guard is a private citizen. The uniform adds no authority (Art. 15).' },
        { ja: '判断軸は 人命 → 法令 → Site SOP → クライアント要望。', en: 'Priority: life, then law, then Site SOP, then the client\'s wishes.' },
        { ja: '触れる・拘束する・追う・カバンを開ける ― いずれも日本ではできない。', en: 'Touching, restraining, chasing, opening a bag — none of these are yours to do.' },
        { ja: '事実と評価を分けて報告する。見ていないことを断定しない。', en: 'Report fact separately from assessment. Never assert what you did not see.' },
      ],
      next: 'Day 2 ― 施設警備の実務に入ります。本日の判断軸をそのまま使います。',
      nextEn: 'Day 2 — the practice of facility security. The same priority order carries over.',
    },
  ],
};
