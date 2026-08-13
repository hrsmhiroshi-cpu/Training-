'use strict';
// 第4時限｜基本教育4 警備業法その他警備業務の適正な実施に必要な法令 ②
// 内容ソース: Day1統合版 A-8 / A-9、前回現任講習 第2・5限

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '04_4限_刑法刑訴法と権限の限界.pptx',
  footJa: '第4時限｜基本教育4 刑法・刑事訴訟法と権限の限界',
  footEn: 'Period 4 | Basic Training 4 — Criminal Law and the Limits of Your Authority',
  slides: [
    {
      type: 'title',
      kicker: `第4時限　${slot(4)}　基本教育4`,
      kickerEn: 'Period 4 — Basic Training 4',
      titleJa: '刑法・刑事訴訟法と権限の限界',
      titleEn: 'Criminal Law and the Limits of Your Authority',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'grid',
      titleJa: '日本の法律用語', titleEn: 'Japanese Legal Terms',
      lead: '日本国内では日本の法律が適用されます。母国の制度と同じとは限りません。',
      leadEn: 'Japanese law applies in Japan. It may differ from the system in your home country.',
      cols: 2,
      items: [
        { ja: '現行犯逮捕 genkōhan-taiho ― 明白かつ直後であること。', en: 'Flagrant-offender arrest. It must be obvious, and immediate.' },
        { ja: '準現行犯 jun-genkōhan ― 犯行直後と明らかに認められる者。', en: 'Quasi-flagrant. A person clearly recognised as just after the act.' },
        { ja: '正当防衛 seitō-bōei ― 侵害が終われば終わる。', en: 'Self-defence. It ends when the attack ends.' },
        { ja: '緊急避難 kinkyū-hinan ― 害の釣り合いが必要。', en: 'Necessity. Harm caused must not exceed harm avoided.' },
        { ja: '自救行為 jikyū-kōi ― 日本では原則認められない。', en: 'Self-help. As a rule, not permitted in Japan.' },
        { ja: '有形力 yūkeiryoku ― 相手に触れた時点で有形力。', en: 'Physical force. Touching the person is already force.' },
        { ja: '不退去 futaikyo ― 退去要請は管理権者の意思による。', en: 'Refusing to leave. The request must come from the site authority.' },
        { ja: '引渡し hikiwatashi ― 逮捕後、直ちに警察へ渡すこと。', en: 'Handover. Passing the person to the police without delay.' },
      ],
    },

    {
      type: 'topics', block: 'B4',
      titleJa: '現行犯逮捕と、逮捕後の措置', titleEn: 'Citizen\'s Arrest, and What Follows',
      obj: '現行犯逮捕の要件を述べ、逮捕後にしてよいこととしてはいけないことを区別できる。',
      objEn: 'You can state the tests for a citizen\'s arrest, and separate what you may and may not do afterwards.',
      sop: '逮捕に至った場合の社内連絡順序と、クライアントへの報告方法は現場ごとに異なる。',
      sopEn: 'Internal notification order and client reporting after an arrest differ by site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '現行犯逮捕の要件', hEn: 'The Tests for a Citizen\'s Arrest',
          b: [
            { ja: '刑訴法第213条。現行犯人は、何人でも逮捕状なしに逮捕できる', en: 'CCP Art. 213. Any person may arrest a flagrant offender without a warrant' },
            { ja: '犯罪が明白であること。「疑い」では足りない', en: 'The offence must be obvious. Suspicion is not enough' },
            { ja: '犯人が明白で、時間的に接着していること', en: 'The offender must be obvious, and it must be immediate' },
          ],
        },
        {
          h: '準現行犯', hEn: 'Quasi-Flagrant Offenders',
          b: [
            { ja: '刑訴法第212条第2項。犯行直後と明らかに認められる者', en: 'CCP Art. 212(2). A person clearly recognised as being just after the act' },
            { ja: '「さっき出て行った人」を後から追うことには当たらない', en: 'Chasing "the person who left earlier" does not qualify' },
            { ja: '判断に迷う場合は逮捕しない。追跡もしない', en: 'If you are unsure, do not arrest. Do not pursue either' },
          ],
        },
        {
          h: '逮捕後にすること', hEn: 'What You Must Do After',
          b: [
            { ja: '刑訴法第214条。直ちに警察へ引き渡す', en: 'CCP Art. 214. Hand the person to the police without delay' },
            { ja: '相手と自分の安全を確保する。第三者を近づけない', en: 'Secure the safety of both parties. Keep third parties away' },
            { ja: '時刻・場所・行為・発言を、その場で記録する', en: 'Record time, place, actions and words spoken, at the time' },
          ],
        },
        {
          h: '逮捕後にしてはいけないこと', hEn: 'What You Must Not Do After',
          b: [
            { ja: '事務所に留め置いて事情を聞く。取り調べる権限はない', en: 'Holding the person to question them. You have no power to interrogate' },
            { ja: '書面へのサインを求める。同意なく私物を確認する', en: 'Asking them to sign a statement, or examining belongings without consent' },
            { ja: '写真を撮る、SNSに上げる', en: 'Photographing them, or posting anything' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B4',
      titleJa: '正当防衛・緊急避難・自救行為', titleEn: 'Self-Defence, Necessity, and Self-Help',
      obj: '自分の行為がどこまで許され、どこから罪になるかの境界を説明できる。',
      objEn: 'You can explain how far your action is permitted, and where it becomes an offence.',
      sop: '護身用具の有無と使用基準は現場ごとに異なる。配備がない現場では使用を前提としない。',
      sopEn: 'Whether protective equipment is issued, and the rules for it, differ by site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '正当防衛（刑法第36条）', hEn: 'Self-Defence (Penal Code Art. 36)',
          b: [
            { ja: '急迫不正の侵害に対し、やむを得ずした行為', en: 'An unavoidable act against an imminent and unlawful attack' },
            { ja: '侵害が終われば権利も終わる。倒れた相手を押さえ続けない', en: 'The right ends with the attack. Do not keep holding someone already down' },
            { ja: '越えた場合は過剰防衛（第36条第2項）', en: 'Beyond that it is excessive defence (Art. 36(2))' },
          ],
        },
        {
          h: '緊急避難（刑法第37条）', hEn: 'Necessity (Penal Code Art. 37)',
          b: [
            { ja: '現在の危難を避けるため、やむを得ずした行為', en: 'An unavoidable act to escape a present danger' },
            { ja: '生じた害が、避けようとした害を超えないこと', en: 'The harm caused must not exceed the harm avoided' },
            { ja: '越えた場合は過剰避難', en: 'Beyond that it is excessive necessity' },
          ],
        },
        {
          h: '自救行為', hEn: 'Self-Help',
          b: [
            { ja: '明文の規定がなく、原則として認められない', en: 'There is no statutory basis, and it is not permitted as a rule' },
            { ja: '盗まれた物を実力で取り返さない', en: 'Do not recover stolen property by force' },
            { ja: '取り返すのではなく、記録して警察に渡す', en: 'Do not recover it. Record it and hand the matter to the police' },
          ],
        },
        {
          h: '逃げることは正しい選択', hEn: 'Withdrawing Is the Correct Choice',
          b: [
            { ja: '逃げられる場合に逃げることは、弱さではない', en: 'Withdrawing when you can is not weakness' },
            { ja: '自分の安全を確保することも任務のうち', en: 'Keeping yourself safe is part of the duty' },
            { ja: '離脱してから、応援を呼び、通報する', en: 'Disengage first, then call backup, then call the police' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B4',
      titleJa: '有形力の段階と、越えた場合', titleEn: 'The Steps of Force, and What Lies Beyond',
      obj: '自分の行為が有形力に当たる地点を言い、越えた場合の罪名を挙げられる。',
      objEn: 'You can say at which point your action becomes force, and name the offences beyond it.',
      sop: '応援要請の方法と、対応を交代する基準は現場ごとに異なる。',
      sopEn: 'How to call for backup, and when to hand over, differ by site.',
      sources: SRC.law, cols: 2,
      topics: [
        {
          h: '有形力の段階', hEn: 'The Steps of Physical Force',
          b: [
            { ja: '声をかける。有形力ではない', en: 'Speaking to someone. Not force' },
            { ja: '立ち位置で示す。まだ有形力ではない', en: 'Positioning yourself. Still not force' },
            { ja: '進路に立ちふさがる。ここが境界。目的と必要性を説明できるか', en: 'Blocking the path. This is the boundary. Can you justify it?' },
          ],
        },
        {
          h: '権限の根拠は2つだけ', hEn: 'Only Two Sources of Authority',
          b: [
            { ja: '誰でもできること ― 現行犯逮捕、正当防衛、緊急避難', en: 'What anyone may do: citizen\'s arrest, self-defence, necessity' },
            { ja: '委ねられたこと ― 入館の可否、退去の要請、立入制限、記録', en: 'What is delegated: admission, requests to leave, access limits, records' },
            { ja: '範囲は契約と警備指令書で決まる。自分で広げられない', en: 'The scope is set by contract and post orders. You cannot widen it' },
          ],
        },
        {
          h: '越えた場合の罪名', hEn: 'The Offences If You Exceed It',
          b: [
            { ja: '逮捕監禁罪、暴行罪、傷害罪、強要罪', en: 'Unlawful capture and confinement, assault, injury, coercion' },
            { ja: '本人は刑事責任と、民事の損害賠償を負いうる', en: 'You may face criminal liability and civil damages' },
            { ja: '会社は契約を失いうる', en: 'The company can lose the contract' },
          ],
        },
        {
          h: '退去を求めるとき', hEn: 'When You Ask Someone to Leave',
          b: [
            { ja: '退去の要請は、管理権者の意思に基づいて行う', en: 'A request to leave rests on the site authority\'s intent' },
            { ja: '自分の判断で命じるものではない', en: 'It is not something you order on your own judgement' },
            { ja: '応じない場合、実力で退去させることはできない', en: 'If they refuse, you cannot remove them by force' },
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
        { ja: '目の前で商品を隠して出口を通過した者を取り押さえた。', en: 'You detain someone who hid goods and walked out in front of you.' },
        { ja: '「さっき出て行った人が怪しい」と言われ、追いかけた。', en: 'Told "the person who just left looked suspicious", you go after them.' },
        { ja: '殴りかかってきた相手の腕を押さえて止めた。', en: 'You stop an incoming punch by holding the arm.' },
        { ja: '相手が倒れた後も、念のため押さえ続けた。', en: 'You keep holding the person down after they are down.' },
        { ja: '逮捕した相手から、事務所で30分間、事情を聞いた。', en: 'You question a detained person in the office for 30 minutes.' },
        { ja: '盗まれた備品を見つけたので、その場で取り返した。', en: 'Finding stolen equipment, you take it back on the spot.' },
        { ja: '退去に応じない相手を、腕を引いて外に出した。', en: 'You pull someone by the arm to put them outside.' },
        { ja: '逃げられる状況だったので、離脱して応援を呼んだ。', en: 'You could withdraw, so you disengaged and called for backup.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ○　2 ×　3 ○　4 ×　5 ×　6 ×　7 ×　8 ○',
      leadEn: 'Answers:  1 Yes · 2 No · 3 Yes · 4 No · 5 No · 6 No · 7 No · 8 Yes',
      rows: [
        { ja: '設問1は明白性と時間的接着性を満たします。設問2は満たしません。', en: 'Item 1 meets the tests of obviousness and immediacy. Item 2 does not.' },
        { ja: '設問4は終期の問題です。侵害が終われば、正当防衛も終わります。', en: 'Item 4 is about when it ends. When the attack stops, the right to defend stops.' },
        { ja: '設問5は取り調べです。逮捕した相手からの聴取も含めて権限がありません。', en: 'Item 5 is interrogation. You have no power to question, including after an arrest.' },
        { ja: '設問6は自救行為、設問7は実力での退去。いずれも認められません。', en: 'Item 6 is self-help and item 7 is removal by force. Neither is permitted.' },
        { ja: '設問8が正解の型です。離脱 → 応援要請 → 通報の順に切り替えます。', en: 'Item 8 is the pattern to follow: disengage, call backup, then call the police.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 4-A',
      titleJa: 'TTX 4-A　目の前で持ち出しを現認した', titleEn: 'TTX 4-A — Witnessing a Removal',
      scenarioJa: '20時。退社しようとする社員のバッグから、会社備品のノートPCが見えている。声をかけると「部長の許可は取ってある」と言い、立ち止まらない。持ち出し許可証の運用は先月変更されたばかりで、あなたは新しい様式を見たことがない。',
      scenarioEn: '20:00. A company laptop is visible in the bag of an employee who is leaving. They say "I have the director\'s permission" and keep walking. The removal-permit procedure changed last month and you have not seen the new form.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: 'これは犯罪か、確認が必要な事象か。判断の根拠は何か。', en: 'Is this a crime, or something that needs checking? On what basis?' },
        { ja: '許可証の様式を知らないことは、判断にどう影響するか。', en: 'You do not know the new form. How does that affect your decision?' },
        { ja: 'その場でできる最小限の手段は何か。できないことは何か。', en: 'What is the minimum action available, and what is off-limits?' },
        { ja: '誰に、何分以内に、何を報告するか。', en: 'Who do you report to, within what time, and with what content?' },
      ],
      inject: '無線が入る。「こちら警備長。出口で止めろ。行かせるな。」',
      injectEn: 'Radio: "Security chief here. Stop them at the exit. Do not let them leave."',
      inject2: '相手はそのまま出口へ向かった。追うか、追わないか。',
      inject2En: 'They head straight for the exit. Do you follow, or not?',
      sop: '持ち出し許可の運用と、確認を求める相手は現場ごとに異なる。',
      sopEn: 'Removal-permit procedures and who to verify with differ by site.',
      sources: SRC.law + '、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 4-B',
      titleJa: 'TTX 4-B　殴りかかられた', titleEn: 'TTX 4-B — Someone Swings at You',
      scenarioJa: '深夜、酒に酔った人物がエントランスに入ってきた。退去をお願いすると、突然あなたの胸ぐらをつかみ、拳を振り上げた。あなたは腕を押さえて止めた。相手はバランスを崩して床に倒れ、動かなくなった。周囲に人はいない。',
      scenarioEn: 'Late at night, an intoxicated person comes into the entrance. When you ask them to leave, they grab you by the front of your uniform and raise a fist. You stop it by holding the arm. They lose their balance, fall to the floor, and stop moving. Nobody else is around.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '腕を押さえた行為は、どの根拠で許されるか。', en: 'On what basis was holding the arm permitted?' },
        { ja: '相手が倒れた時点で、あなたの権利はどうなるか。', en: 'Once they are on the floor, what happens to your right to act?' },
        { ja: '倒れて動かない相手に、まず何をするか。', en: 'What do you do first for someone on the floor who is not moving?' },
        { ja: '通報は110番か119番か、両方か。順序と根拠は。', en: 'Police, ambulance, or both? In what order, and why?' },
      ],
      inject: '相手が起き上がり、「暴行された」と言い始めた。',
      injectEn: 'They get up and start saying that you assaulted them.',
      inject2: '相手が出口へ向かって歩き出した。',
      inject2En: 'They start walking towards the exit.',
      sop: '深夜の連絡先、通報の判断者、報告の様式は現場ごとに定められている。',
      sopEn: 'Night-time contacts, who decides on a call, and the report format are set per site.',
      sources: SRC.law + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第4時限 まとめ', titleEn: 'Period 4 — Summary',
      rows: [
        { ja: '現行犯逮捕は誰でもできる。要件は明白性と時間的接着性。', en: 'Anyone may arrest a flagrant offender. The tests are obviousness and immediacy.' },
        { ja: '逮捕したら直ちに警察へ引き渡す。取り調べる権限はない。', en: 'Hand the person to the police without delay. You have no power to interrogate.' },
        { ja: '正当防衛は侵害が終われば終わる。自救行為は認められない。', en: 'Self-defence ends when the attack ends. Self-help is not permitted.' },
        { ja: '触れた時点で有形力。越えれば逮捕監禁・暴行・傷害・強要となる。', en: 'Touching is force. Beyond it lie confinement, assault, injury and coercion.' },
      ],
      next: '第5時限 ― 事故が起きたときの通報を、実際に声に出して練習します。',
      nextEn: 'Period 5 — emergency calls, practised aloud.',
    },
  ],
};
