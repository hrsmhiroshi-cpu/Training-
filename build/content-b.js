'use strict';
// 第4時限・第5時限
const { COMMON_META_JA, COMMON_META_EN, SRC } = require('./content-a');

const SRC_PATROL = '警備業法、警察庁「警備員教育」、消防法';
const SRC_PEOPLE = '警備業法、刑法、警察庁「警備員教育」';

// ── 第4時限 業務別教育1「巡回の方法」 ────────────────────────────────────
const p4 = {
  file: '03_4限_巡回.pptx',
  footJa: '第4時限｜業務別教育1 巡回の方法に関すること',
  footEn: 'Period 4 | Task-Specific Training 1 — Patrol Methods',
  slides: [
    {
      type: 'title',
      kicker: '第4時限　10:25 – 11:25　業務別教育1',
      kickerEn: 'Period 4 — Task-Specific Training 1',
      titleJa: '巡回の方法に関すること',
      titleEn: 'Patrol Methods',
      metaJa: COMMON_META_JA,
      metaEn: COMMON_META_EN,
    },
    {
      type: 'topics',
      block: 'B3',
      titleJa: '巡回の目的と種類',
      titleEn: 'Purpose and Types of Patrol',
      obj: '巡回が何のために行われるかを述べ、定時と不定時を使い分ける理由を説明できる。',
      objEn: 'You can state why patrols are carried out, and why fixed and variable timing are used differently.',
      sop: '巡回の回数、時間帯、経路は現場ごとに指定される。Site SOPと警備指令書に従う。',
      sopEn: 'Frequency, timing and route are specified per site. Follow the Site SOP and post orders.',
      sources: SRC_PATROL,
      cols: 2,
      topics: [
        {
          h: '3つの目的', hEn: 'Three Purposes',
          b: [
            { ja: '発見：異常を、被害が生じる前に確認する', en: 'Detect: find a problem before it becomes a loss' },
            { ja: '抑止：警備員が巡回していることを外部に示す', en: 'Deter: show that guards are patrolling' },
            { ja: '記録：実施した事実を残す。証明できる形で残す', en: 'Document: leave evidence of what was done, in a form that can be shown' },
            { ja: '3つのうち、記録が最も忘れられやすい', en: 'Of the three, documentation is the one most often forgotten' },
          ],
        },
        {
          h: '定時巡回', hEn: 'Fixed-Time Patrol',
          b: [
            { ja: '時刻を定めて実施する。実施漏れが起きにくい', en: 'Carried out at set times. Less likely to be skipped' },
            { ja: '記録が揃いやすく、契約上の履行を示しやすい', en: 'Records are consistent, and easy to show as contract performance' },
            { ja: '弱点：時刻を外部から把握される', en: 'Weakness: the timing can be learned from outside' },
            { ja: '毎日同じ時刻・同じ順路だと、巡回のない時間帯が固定される', en: 'Same time and route every day fixes the gaps in coverage' },
          ],
        },
        {
          h: '不定時巡回', hEn: 'Variable-Time Patrol',
          b: [
            { ja: '時刻と順路を変えて実施する', en: 'Timing and route are varied' },
            { ja: '外部から予測されにくく、抑止の効果が高い', en: 'Harder to predict, so the deterrent effect is stronger' },
            { ja: '弱点：確認の抜けが生じやすい。設計が必要', en: 'Weakness: gaps in checking appear. It has to be designed' },
            { ja: '「気まぐれに歩く」ことではない。順路の組み替えである', en: 'It does not mean wandering. It means recombining a defined route' },
          ],
        },
        {
          h: 'コーポレートの現場での特徴', hEn: 'In a Corporate Office',
          b: [
            { ja: '執務時間帯は人がいる。声をかけられる前提で歩く', en: 'During working hours people are present. Expect to be spoken to' },
            { ja: '深夜は無人。異常の発見が巡回だけに依存する', en: 'At night the floor is empty. Detection depends on the patrol alone' },
            { ja: '在館者がいる場合は、その所在を把握しておく', en: 'If anyone remains in the building, know where they are' },
            { ja: '執務の妨げにならない動線と時間帯を選ぶ', en: 'Choose routes and times that do not disturb the client\'s work' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B3',
      titleJa: '巡回の設計 ― 経路・立寄点・警戒点・死角',
      titleEn: 'Designing a Patrol',
      obj: '自分の現場の死角がどこにあるかを言え、経路の変え方を説明できる。',
      objEn: 'You can name the blind spots on your own site, and explain how to vary the route.',
      sop: '立寄点の数と位置、チェック方法（キー・QR・端末）は現場ごとに異なる。Site SOPによる。',
      sopEn: 'The number and location of checkpoints, and the check method, differ by site.',
      sources: SRC_PATROL,
      cols: 2,
      topics: [
        {
          h: '経路', hEn: 'Route',
          b: [
            { ja: '巡回する順路。逆順、分割、開始点の変更で組み替える', en: 'The order you walk. Reverse it, split it, or change the start point' },
            { ja: '上から下か、下から上か。同じ方向を続けない', en: 'Top-down or bottom-up. Do not always use the same direction' },
            { ja: 'エレベーターと階段のどちらを使うかも変数になる', en: 'Whether you use the lift or the stairs is also a variable' },
            { ja: '経路を変えても、立寄点はすべて通る', en: 'However you vary it, every checkpoint must still be visited' },
          ],
        },
        {
          h: '立寄点', hEn: 'Checkpoints',
          b: [
            { ja: '必ず立ち寄り、確認した記録を残せる地点', en: 'Points you must visit, where the visit can be recorded' },
            { ja: '通過ではなく、確認して初めて立ち寄ったことになる', en: 'Passing by is not visiting. You must actually check' },
            { ja: '記録の方法は現場による。方法よりも確実性を優先する', en: 'The method varies by site. Reliability matters more than the method' },
            { ja: '立寄点を飛ばした場合は、飛ばしたことを記録する', en: 'If you skip one, record that you skipped it' },
          ],
        },
        {
          h: '警戒点', hEn: 'Critical Points',
          b: [
            { ja: '事故が生じやすい、または被害が大きい箇所', en: 'Where incidents are likely, or where the loss would be large' },
            { ja: '受電設備、サーバ室、書庫、金庫室、危険物保管場所', en: 'Power rooms, server rooms, archives, safes, hazardous-material stores' },
            { ja: '非常口、防火戸、消火設備、避難経路', en: 'Emergency exits, fire doors, firefighting equipment, escape routes' },
            { ja: '外周、搬入口、駐車場、喫煙所も含める', en: 'Include the perimeter, loading bays, car parks and smoking areas' },
          ],
        },
        {
          h: '死角', hEn: 'Blind Spots',
          b: [
            { ja: '目視できない範囲。カメラの死角と、巡回の死角は別', en: 'What cannot be seen. Camera blind spots and patrol blind spots are different' },
            { ja: '時間帯によって変わる。消灯後に増える', en: 'They change with the time of day, and increase after lights-out' },
            { ja: '設備や什器の移動で新しく生じる', en: 'New ones appear when equipment or furniture is moved' },
            { ja: '巡回の設計とは、死角をどこまで減らすかの検討である', en: 'Designing a patrol means deciding how far to reduce the blind spots' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B3',
      titleJa: '巡回で確認する対象',
      titleEn: 'What to Check on Patrol',
      obj: '人と物だけでなく、情報資産と防災設備を確認対象として挙げられる。',
      objEn: 'You can name information assets and fire-safety equipment as things to check, not only people and property.',
      sop: '確認項目のチェックリストは現場ごとに定められている。Site SOPの項目を優先する。',
      sopEn: 'The checklist is defined per site. The Site SOP items take priority.',
      sources: SRC_PATROL,
      cols: 2,
      topics: [
        {
          h: '情報資産', hEn: 'Information Assets',
          b: [
            { ja: '無人の席のIDカード、鍵、離席中の端末', en: 'ID cards, keys, and unlocked devices at empty desks' },
            { ja: 'ホワイトボードの書き残し、複合機に残った出力物', en: 'Writing left on whiteboards, printouts left in the copier' },
            { ja: '会議室に残された配布資料、机上の書類', en: 'Handouts left in meeting rooms, documents left on desks' },
            { ja: '内容は読まない。分類表示と所在だけを記録する', en: 'Do not read them. Record only the classification and the location' },
          ],
        },
        {
          h: '物的資産と施錠', hEn: 'Physical Assets and Locks',
          b: [
            { ja: 'サーバ室、書庫、金庫室の施錠状態', en: 'Lock status of server rooms, archives and safes' },
            { ja: '窓、外周扉、搬入口の閉鎖状態', en: 'Windows, perimeter doors and loading bays' },
            { ja: '共連れの痕跡、扉の固定（開放したままの状態）', en: 'Signs of tailgating, and doors propped open' },
            { ja: '外周フェンス、駐車場の車両、不審な放置物', en: 'Perimeter fence, vehicles, and unattended items' },
          ],
        },
        {
          h: '人', hEn: 'People',
          b: [
            { ja: '在館者の有無と所在。深夜の残業者を把握する', en: 'Who remains in the building and where. Know who is working late' },
            { ja: 'バッジ未着用者。断定せず、手続きに戻す', en: 'People without badges. Do not conclude; return them to the process' },
            { ja: '体調不良者。声をかけ、無理に立たせない', en: 'Anyone unwell. Speak to them, and do not make them stand' },
            { ja: '清掃・工事など、契約外の作業者の出入り', en: 'Cleaners and contractors entering and leaving' },
          ],
        },
        {
          h: '防災・設備', hEn: 'Fire Safety and Equipment',
          b: [
            { ja: '非常口の前に物が置かれていないか', en: 'Whether anything blocks an emergency exit' },
            { ja: '防火戸の閉鎖障害。ストッパーや荷物', en: 'Obstructions to fire doors, such as stoppers or boxes' },
            { ja: '消火器の所在と期限表示、屋内消火栓の周囲', en: 'Extinguishers, their inspection labels, and the area around hydrants' },
            { ja: '漏水、異臭、異音、温度の異常', en: 'Leaks, unusual smells, unusual sounds, unusual temperature' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B3',
      titleJa: '巡回記録と引継ぎ ― 一般原則',
      titleEn: 'Patrol Records and Handover — General Principles',
      obj: '記録が何のために存在するかを述べ、引継ぎで何を渡すべきかを説明できる。',
      objEn: 'You can state why records exist, and what must be passed on at handover.',
      sop: '様式、頻度、保存期間、電子か紙かは現場ごとに大きく異なる。必ずSite SOPと警備指令書による。',
      sopEn: 'Format, frequency, retention and medium differ greatly by site. Always follow the Site SOP and post orders.',
      sources: SRC_PATROL,
      cols: 2,
      topics: [
        {
          h: '記録の目的', hEn: 'Why Records Exist',
          b: [
            { ja: '実施の証跡。記録がなければ、実施を証明できない', en: 'Evidence of performance. Without it you cannot show the patrol happened' },
            { ja: '「異常なし」も記録すべき結果である', en: '"Nothing to report" is also a result, and must be recorded' },
            { ja: '後の調査や訴訟で、当時の状況を示す資料になる', en: 'It becomes the account of what was happening, for later investigation' },
            { ja: '契約履行の証明として、クライアントに示す資料になる', en: 'It is what shows the client that the contract was performed' },
          ],
        },
        {
          h: '書き方の原則', hEn: 'How to Write It',
          b: [
            { ja: '事実を先に、評価を後に。混ぜない', en: 'Fact first, assessment second. Do not mix them' },
            { ja: '時刻、場所、対象、状態を具体的に書く', en: 'Write the time, place, object and condition specifically' },
            { ja: '「異常なし」で済ませず、確認した対象を残す', en: 'Do not stop at "nothing to report". Record what you checked' },
            { ja: '分からなかったことは「不明」と書く。推測で埋めない', en: 'Write "unknown" where you did not know. Do not fill gaps with guesses' },
          ],
        },
        {
          h: '引継ぎ', hEn: 'Handover',
          b: [
            { ja: '未解決の事項を渡す。終わったことより、続いていること', en: 'Pass on what is unresolved, not what is finished' },
            { ja: '継続監視が必要な箇所と、その理由', en: 'Points needing continued watch, and why' },
            { ja: '在館者、工事、来客予定など、次の時間帯に影響すること', en: 'Anyone still in the building, works in progress, expected visitors' },
            { ja: '口頭だけで渡さない。記録に残して渡す', en: 'Do not hand over verbally only. Put it in the record' },
          ],
        },
        {
          h: 'やってはいけないこと', hEn: 'What Not to Do',
          b: [
            { ja: '実施していない巡回を記録する', en: 'Recording a patrol you did not carry out' },
            { ja: 'まとめて後から書く。時間が経つと正確性が下がる', en: 'Writing it all up later. Accuracy drops with time' },
            { ja: '書類の内容を記録に書き写す', en: 'Copying the contents of a document into your record' },
            { ja: '個人の評価や推測を、事実のように書く', en: 'Writing your opinion or guess as though it were fact' },
          ],
        },
      ],
    },
    {
      type: 'grid',
      titleJa: 'TTX 4-A　巡回中、この場面に出会ったら',
      titleEn: 'TTX 4-A — You Encounter This on Patrol',
      lead: '班で3つ選んでください。次のスライドの4つの問いに答えます。情報は不足しています。',
      leadEn: 'Pick three as a group, then answer the four questions on the next slide. Information is incomplete.',
      cols: 2,
      items: [
        { n: 'A', ja: '無人の席にIDカードがある。離席中かどうかは分からない。', en: 'An ID card is on an empty desk. You cannot tell if the person stepped away.' },
        { n: 'B', ja: 'ホワイトボードに案件名と金額が残っている。会議は終了している。', en: 'A whiteboard shows a project name and a figure. The meeting has ended.' },
        { n: 'C', ja: '非常口の前に段ボールが3箱。搬入作業は続いている様子。', en: 'Three boxes block an emergency exit. A delivery appears to be in progress.' },
        { n: 'D', ja: 'サーバ室の扉が半開き。中に人がいるかどうかは見えない。', en: 'The server room door is half open. You cannot see if anyone is inside.' },
        { n: 'E', ja: 'バッジ未着用の人物が執務フロアにいる。「役員だ」と名乗る。', en: 'A person without a badge is on the office floor. They say they are an executive.' },
        { n: 'F', ja: '外周フェンスが破損。前回の巡回時にあったか記憶が定かでない。', en: 'The perimeter fence is damaged. You cannot recall if it was there last round.' },
      ],
    },
    {
      type: 'rows',
      titleJa: 'TTX 4-A　4つの問い',
      titleEn: 'TTX 4-A — The Four Questions',
      debriefAfter: 'CASE 4-A',
      lead: '進め方：班で3場面を選ぶ → 4問に回答（15分） → 班発表（10分）',
      leadEn: 'Format: pick three scenes, answer all four questions (15 min), then present (10 min).',
      rows: [
        { ja: '何に注意するか ― People / Asset / Reputation のどのリスクか。', en: 'What is at stake? Is it a People, Asset, or Reputation risk?' },
        { ja: 'どこを見るか ― ほかに確認すべき点はどこか。', en: 'Where do you look? What else should you check?' },
        { ja: 'どう巡回するか ― 次の巡回で何を変えるか。', en: 'How do you patrol? What changes on your next round?' },
        { ja: 'どう報告するか ― 報告するか、誰に、何を。事実と評価を分けて。', en: 'How do you report? Whether, to whom, and what. Keep fact and assessment separate.' },
      ],
    },
    {
      type: 'caseSlide',
      block: 'CASE 4-B',
      titleJa: 'TTX 4-B　深夜、非常口が開放されている',
      titleEn: 'TTX 4-B — An Emergency Door Standing Open at Night',
      scenarioJa: '深夜1時40分、B1の巡回中。通常は施錠されている東側非常口が、15cmほど開いている。扉の外は搬入用の通路。開放を示す記録も、工事の予定も引き継がれていない。館内には残業中の社員が1名いるとの引継ぎがある。',
      scenarioEn: '01:40, patrolling B1. The east emergency door, normally locked, stands about 15 cm open. Outside is a delivery corridor. Nothing in the handover mentions it being opened, and no works are scheduled. The handover notes one employee still working late.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '扉を閉めるか、そのままにするか。それぞれの理由は。', en: 'Do you close the door or leave it? What is the reasoning either way?' },
        { ja: '単独で外の通路を確認しに行くか。', en: 'Do you go out and check the corridor alone?' },
        { ja: '残業中の社員の存在は、判断をどう変えるか。', en: 'How does the employee working late change your decision?' },
        { ja: '一次報告に何を入れるか。事実と評価をどう分けるか。', en: 'What goes in your initial report? How do you separate fact from assessment?' },
      ],
      inject: '扉のそばの床に、館内のものではない足跡が見える。',
      injectEn: 'On the floor near the door you see footprints that did not come from inside.',
      inject2: '地下のため無線が通じない。',
      inject2En: 'You are in the basement and the radio does not reach.',
      sop: '非常口の開放時の対応、単独行動の可否、応援要請の基準は現場ごとに異なる。Site SOPによる。',
      sopEn: 'Response to an open emergency door, whether to act alone, and when to call backup differ by site.',
      sources: SRC_PATROL,
    },
  ],
};

// ── 第5時限 業務別教育2「その他必要な知識及び技能」De-escalation ─────────
const p5 = {
  file: '04_5限_De-escalation.pptx',
  footJa: '第5時限｜業務別教育2 その他当該警備業務を適正に実施するため必要な知識及び技能',
  footEn: 'Period 5 | Task-Specific Training 2 — De-escalation',
  slides: [
    {
      type: 'title',
      kicker: '第5時限　11:30 – 12:30　業務別教育2',
      kickerEn: 'Period 5 — Task-Specific Training 2',
      titleJa: 'De-escalation\n― 対人対応の知識及び技能',
      titleEn: 'De-escalation — Interpersonal Response Skills',
      metaJa: COMMON_META_JA,
      metaEn: COMMON_META_EN,
    },
    {
      type: 'topics',
      block: 'B4',
      titleJa: '前提 ― 警備員の権限と、警察との違い',
      titleEn: 'Foundation — A Guard\'s Authority, and How It Differs from the Police',
      obj: '有形力を使えない理由を法令で説明でき、だから対話で収める必要があることを理解する。',
      objEn: 'You can explain in law why you cannot use force, and therefore why the situation must be settled by talking.',
      sop: '護身用具の有無、応援要請の方法、通報の判断者は現場ごとに異なる。Site SOPに従う。',
      sopEn: 'Protective equipment, how to call backup, and who decides on a police call differ by site.',
      sources: '警備業法、刑法、刑事訴訟法、警察官職務執行法',
      cols: 2,
      topics: [
        {
          h: '警備業法 第15条', hEn: 'Security Services Act, Article 15',
          b: [
            { ja: 'この法律により特別に権限を与えられているものではない', en: 'This Act confers no special authority on you' },
            { ja: '他人の権利及び自由を侵害してはならない', en: 'You must not infringe the rights or freedoms of others' },
            { ja: '警備員の法的な立場は私人。制服により権限は加わらない', en: 'A guard is a private citizen in law. The uniform adds no authority' },
            { ja: '第16条 ― 服装は警察官など公務員の制服と明確に識別できること', en: 'Art. 16 — the uniform must be clearly distinguishable from a public official\'s' },
          ],
        },
        {
          h: '警察官にあって、警備員にない権限', hEn: 'Powers the Police Have and You Do Not',
          b: [
            { ja: '職務質問（警職法2条）、保護（3条）', en: 'Stop and question (Art. 2), protective custody (Art. 3)' },
            { ja: '避難等の措置（4条）、犯罪の予防及び制止（5条）', en: 'Order evacuation (Art. 4), prevent and stop a crime (Art. 5)' },
            { ja: '立入（6条）、武器の使用（7条）', en: 'Enter premises (Art. 6), use weapons (Art. 7)' },
            { ja: '逮捕状による逮捕、取り調べ。いずれも警備員にはない', en: 'Arrest by warrant, and interrogation. A guard has none of these' },
          ],
        },
        {
          h: '権限の根拠は2つだけ', hEn: 'Only Two Sources of Authority',
          b: [
            { ja: '誰でもできること ― 現行犯逮捕、正当防衛、緊急避難', en: 'What anyone may do: citizen\'s arrest, self-defence, necessity' },
            { ja: '委ねられたこと ― 入館の可否、退去の要請、立入制限、記録', en: 'What is delegated: admission, requests to leave, access limits, records' },
            { ja: 'できないこと ― 所持品検査の強制、取り調べ、実力での取戻し', en: 'Not available: forced bag checks, interrogation, recovery by force' },
            { ja: '越えた場合 ― 逮捕監禁罪、暴行罪、傷害罪、強要罪', en: 'If you exceed it: unlawful confinement, assault, injury, coercion' },
          ],
        },
        {
          h: '有形力の段階', hEn: 'The Steps of Physical Force',
          b: [
            { ja: '声をかける。有形力ではない', en: 'Speaking to someone. Not force' },
            { ja: '立ち位置で示す。まだ有形力ではない', en: 'Positioning yourself. Still not force' },
            { ja: '進路に立ちふさがる。ここが境界', en: 'Blocking the path. This is the boundary' },
            { ja: '触れる、つかむ。正当防衛か現行犯逮捕に伴う場合に限る', en: 'Touching or seizing. Only incidental to self-defence or a lawful arrest' },
          ],
        },
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
      type: 'topics',
      block: 'B4',
      titleJa: 'De-escalation の基本',
      titleEn: 'The Basics of De-escalation',
      obj: 'De-escalationの目的を述べ、距離・姿勢・声の3点を実演できる。',
      objEn: 'You can state the aim of de-escalation, and demonstrate space, stance and voice.',
      sop: '応援要請の方法と、対応を交代する基準は現場ごとに異なる。Site SOPを確認する。',
      sopEn: 'How to call for backup, and when to hand over, differ by site. Check the Site SOP.',
      sources: SRC_PEOPLE,
      cols: 2,
      topics: [
        {
          h: '目的', hEn: 'The Aim',
          b: [
            { ja: '有形力を使わずに、緊張を下げる技術である', en: 'A method of lowering tension without using physical force' },
            { ja: '目的は、その場を安全に終えること', en: 'The aim is to end the situation safely' },
            { ja: '相手を言い負かすことではない', en: 'It is not to win the exchange' },
            { ja: '警備員の権限が限られているからこそ、技術が必要になる', en: 'Precisely because a guard\'s powers are limited, the skill is necessary' },
          ],
        },
        {
          h: '距離', hEn: 'Space',
          b: [
            { ja: '手が届かない距離を保つ。目安は1.5から2メートル', en: 'Stay beyond arm\'s reach. About 1.5 to 2 metres' },
            { ja: '相手の背後や、逃げ道をふさぐ位置に立たない', en: 'Do not stand behind them, or where you block their exit' },
            { ja: '自分の退路を確保しておく', en: 'Keep your own way out clear' },
            { ja: '複数人で対応する場合も、囲まない', en: 'Even with several guards, do not surround the person' },
          ],
        },
        {
          h: '姿勢', hEn: 'Stance',
          b: [
            { ja: '正対しない。半身で立つ', en: 'Do not stand square on. Stand at an angle' },
            { ja: '手は相手から見える位置に置く。腕を組まない', en: 'Keep your hands visible. Do not fold your arms' },
            { ja: '指を差さない。物を持ったまま話さない', en: 'Do not point. Do not talk while holding an object' },
            { ja: '相手が座っている場合は、目線を近づける', en: 'If they are seated, bring your eye level closer to theirs' },
          ],
        },
        {
          h: '声', hEn: 'Voice',
          b: [
            { ja: 'トーン、速度、音量を下げる', en: 'Lower your tone, speed and volume' },
            { ja: '相手より大きな声を出さない', en: 'Do not speak louder than the other person' },
            { ja: '沈黙があってよい。間を埋めようとしない', en: 'Silence is acceptable. Do not rush to fill it' },
            { ja: '外国語で話す場合も、速度を落とせば伝わる', en: 'If you speak in another language, slowing down carries more than fluency' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B4',
      titleJa: '聞き方、選択肢、離脱',
      titleEn: 'Listening, Choices, and Disengaging',
      obj: '相手が引き下がれる形をつくれる。効果がない場合に離脱を判断できる。',
      objEn: 'You can create a way for the person to step back, and decide when to disengage.',
      sop: '離脱後の通報基準と、クライアントへの報告方法は現場ごとに異なる。Site SOPによる。',
      sopEn: 'When to call police after disengaging, and how to inform the client, differ by site.',
      sources: SRC_PEOPLE,
      cols: 2,
      topics: [
        {
          h: '聞き方', hEn: 'How to Listen',
          b: [
            { ja: '遮らずに最後まで聞く', en: 'Listen to the end without interrupting' },
            { ja: '内容を要約して返す。「◯◯ということですね」', en: 'Summarise it back: "So the issue is X"' },
            { ja: '承認は同意ではない。理解したことだけを伝える', en: 'Acknowledging is not agreeing. Say only that you understood' },
            { ja: '「規則ですから」で会話を打ち切らない', en: 'Do not end the conversation with "those are the rules"' },
          ],
        },
        {
          h: '選択肢の示し方', hEn: 'Offering Choices',
          b: [
            { ja: '引き下がれる形を残す。追い詰めない', en: 'Leave a way to step back. Do not corner them' },
            { ja: '選択肢を2つ示す。どちらも手続きの範囲内であること', en: 'Offer two options. Both must be inside the procedure' },
            { ja: '拒否ではなく、手続きへの誘導として伝える', en: 'Frame it as a route into the process, not as a refusal' },
            { ja: '急がない。時間をかけてよい', en: 'Do not rush. You may take time' },
          ],
        },
        {
          h: 'やってはいけないこと', hEn: 'What Not to Do',
          b: [
            { ja: '命令口調。「下がってください」を繰り返す', en: 'A commanding tone. Repeating "step back"' },
            { ja: '「落ち着いてください」と言う', en: 'Saying "please calm down"' },
            { ja: '指差し、腕組み、ため息、笑う', en: 'Pointing, folded arms, sighing, laughing' },
            { ja: '自分の意見や会社の見解を述べる', en: 'Giving your own opinion or the company\'s position' },
          ],
        },
        {
          h: '離脱の判断', hEn: 'When to Disengage',
          b: [
            { ja: '声が大きくなり続ける。同じ言葉を繰り返す', en: 'The volume keeps rising. The same phrase repeats' },
            { ja: '距離を詰めてくる。持ち物を握りしめる。視線を外さない', en: 'They close the distance, grip an object, or stare fixedly' },
            { ja: '順序は、離脱する、応援を要請する、通報する', en: 'The order is: disengage, call for backup, report to police' },
            { ja: '効果が見られない場合は離脱する', en: 'If it is not working, disengage' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B4',
      titleJa: 'ソーシャルエンジニアリング',
      titleEn: 'Social Engineering',
      obj: '手続きを省略させようとする働きかけを見分け、手続きに戻す言い方ができる。',
      objEn: 'You can recognise attempts to make you skip a procedure, and phrase a return to it.',
      sop: '来訪者の確認方法、例外の承認者、緊急時の入館手順は現場ごとに異なる。Site SOPによる。',
      sopEn: 'Visitor verification, who may approve exceptions, and emergency entry differ by site.',
      sources: SRC.info,
      cols: 2,
      topics: [
        {
          h: '典型的な手口', hEn: 'Common Approaches',
          b: [
            { ja: '権威 ―「役員に呼ばれている」「上の許可は取ってある」', en: 'Authority: "the director is expecting me", "it is already approved"' },
            { ja: '緊急 ―「今すぐ通さないと損害が出る」', en: 'Urgency: "if you delay me it will cost the company"' },
            { ja: '親近感 ―「前も通してもらった」「◯◯さんの知り合いだ」', en: 'Familiarity: "they let me through last time", "I know Mr X"' },
            { ja: '同情 ―「雨で困っている」「体調が悪い」', en: 'Sympathy: "I am soaked", "I am unwell"' },
          ],
        },
        {
          h: '物理的な手口', hEn: 'Physical Methods',
          b: [
            { ja: '共連れ。荷物を抱えて後ろにつく', en: 'Tailgating: following behind with full hands' },
            { ja: '業者を装う。作業着、台車、工具箱', en: 'Posing as a contractor: workwear, trolley, toolbox' },
            { ja: '交代時間や混雑時間を狙う', en: 'Timing the approach for shift change or peak flow' },
            { ja: '喫煙所や搬入口など、正面以外から入る', en: 'Entering by smoking areas or loading bays rather than the front' },
          ],
        },
        {
          h: '対応', hEn: 'How to Respond',
          b: [
            { ja: '手続きに戻す。これが唯一の対応である', en: 'Return to the procedure. That is the single answer' },
            { ja: '確認を求めることは失礼ではない', en: 'Asking to verify is not rude' },
            { ja: '例外を作らない。一度作ると前例になる', en: 'Make no exception. One exception becomes a precedent' },
            { ja: '判断できない場合は、通さずに上長へ確認する', en: 'If you cannot decide, do not admit them. Check with your supervisor' },
          ],
        },
        {
          h: '言い方の例', hEn: 'Phrases to Use',
          b: [
            { ja: '「確認いたしますので、こちらでお待ちいただけますか」', en: '"Let me check. Could you wait here?"' },
            { ja: '「どちらの部署の方でしょうか。お名前を伺えますか」', en: '"Which department are you visiting? May I have the name?"' },
            { ja: '「規則です」ではなく「確認が必要です」', en: 'Not "it is the rule", but "this needs to be verified"' },
            { ja: '断る場合も、代わりにできることを示す', en: 'When you refuse, say what you can do instead' },
          ],
        },
      ],
    },
    {
      type: 'topics',
      block: 'B4',
      titleJa: '特定の相手への対応',
      titleEn: 'Specific Types of Encounter',
      obj: '元従業員、報道関係者、クレーム、体調不良者への対応を分けて説明できる。',
      objEn: 'You can distinguish how to handle former employees, press, complaints, and people who are unwell.',
      sop: '広報窓口、人事窓口、救急対応の連絡先は現場ごとに異なる。Site SOPを確認する。',
      sopEn: 'Contacts for communications, HR and medical response differ by site.',
      sources: SRC_PEOPLE,
      cols: 2,
      topics: [
        {
          h: '元従業員', hEn: 'Former Employees',
          b: [
            { ja: '退職した時点で来訪者である', en: 'Once they have left, they are a visitor' },
            { ja: '入館手続きに戻す。顔を知っていても例外を作らない', en: 'Return them to the visitor process. Knowing them is not an exception' },
            { ja: '退職の経緯には立ち入らない。話を聞く相手にならない', en: 'Do not engage with why they left. Do not become their audience' },
            { ja: '人事へ取り次ぐ。感情的な発言には応答しない', en: 'Refer to HR. Do not respond to emotional statements' },
          ],
        },
        {
          h: '報道関係者', hEn: 'Press and Media',
          b: [
            { ja: '敷地内では取材に応じない', en: 'No interviews on company property' },
            { ja: '広報へ取り次ぐ。窓口を一本化する', en: 'Refer to Communications. Keep a single channel' },
            { ja: '「お答えできる立場にありません」で足りる', en: '"I am not in a position to comment" is enough' },
            { ja: '撮影されている前提で行動する', en: 'Act on the assumption that you are being filmed' },
          ],
        },
        {
          h: 'クレーム', hEn: 'Complaints',
          b: [
            { ja: '最後まで聞く。途中で結論を出さない', en: 'Listen to the end. Do not conclude midway' },
            { ja: '会社の見解をその場で作らない', en: 'Do not invent the company\'s position on the spot' },
            { ja: '約束をしない。「確認して回答します」に留める', en: 'Make no promises. Say only that you will check and reply' },
            { ja: '発言内容を記録する。時刻と言葉をそのまま残す', en: 'Record what was said, with the time and the actual words' },
          ],
        },
        {
          h: '体調不良・不穏な様子', hEn: 'Unwell or Agitated',
          b: [
            { ja: '無理に立たせない、歩かせない', en: 'Do not make them stand or walk' },
            { ja: '意識と呼吸を確認する。判断に迷えば救急要請', en: 'Check consciousness and breathing. If unsure, call for an ambulance' },
            { ja: '飲食物を与えない。薬を渡さない', en: 'Do not give food, drink or medication' },
            { ja: '人を指名して応援と通報を依頼する', en: 'Name a specific person to call for help and for the ambulance' },
          ],
        },
      ],
    },
    {
      type: 'caseSlide',
      block: 'CASE 5-A',
      titleJa: 'TTX 5-A　入館手続きを拒む来訪者',
      titleEn: 'TTX 5-A — A Visitor Refusing to Sign In',
      scenarioJa: '来訪者が「役員に呼ばれている、急いでいる」と述べ、入館手続きを拒んでいる。来訪予定表に同姓の記載はあるが、当該役員に電話がつながらない。声はやや大きく、周囲の来訪者が振り返っている。',
      scenarioEn: 'A visitor says an executive is expecting them and refuses to sign in. The visitor list shows the same family name, but the executive is not answering. Their voice is raised and other visitors are looking.',
      questionJa: '次の台詞のうちどれを選び、なぜ他は選ばないですか。',
      questionEn: 'Which of these would you say, and why not the others?',
      points: [
        { ja: 'A「規則ですので通せません」　B「すぐ確認いたしますので、こちらでお待ちいただけますか」', en: 'A: "Rules are rules." B: "I will check right away. Could you wait here?"' },
        { ja: 'C「落ち着いてください」　D「どちらの役員でしょうか。お名前を伺えれば、お繋ぎします」', en: 'C: "Please calm down." D: "Which executive? Give me the name and I will connect you."' },
        { ja: '予定表に同姓の記載があることは、通す根拠になるか。', en: 'Does the same family name on the list justify admitting them?' },
        { ja: '周囲に来訪者がいることは、対応をどう変えるか。', en: 'How does the presence of other visitors change your response?' },
      ],
      inject: '相手がスマートフォンを向け、撮影を始めた。',
      injectEn: 'They point a smartphone at you and start filming.',
      inject2: '別の来訪者が横から「その対応はおかしいんじゃないの」と割って入った。',
      inject2En: 'Another visitor cuts in: \"Isn\'t that the wrong way to handle it?\"',
      sop: '来訪者の確認方法と、例外を認められる者は現場ごとに異なる。Site SOPによる。',
      sopEn: 'Verification methods and who may approve an exception differ by site.',
      sources: SRC_PEOPLE,
    },
    {
      type: 'caseSlide',
      block: 'CASE 5-B',
      titleJa: 'TTX 5-B　退去に応じない元従業員',
      titleEn: 'TTX 5-B — A Former Employee Who Will Not Leave',
      scenarioJa: '17時、エントランス。3か月前に退職した元社員が「私物を取りに来た。上司とは話がついている」と述べ、ゲート前に座り込んでいる。人事に連絡したが担当者が不在。退勤する社員が次々に通り、足を止めて見ている。相手は落ち着いているが、動く意思はない。',
      scenarioEn: '17:00, entrance hall. A former employee who left three months ago says they have come for personal belongings and that it is agreed with their old manager. They have sat down in front of the gate. HR is unreachable. Departing employees are stopping to watch. The person is calm but will not move.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '退去を求める根拠は何か。誰の意思に基づくか。', en: 'On what basis do you ask them to leave? Whose intent does it rest on?' },
        { ja: '座り込んでいる相手に、有形力を用いてよいか。', en: 'May you use physical force on someone who has sat down?' },
        { ja: '見ている社員がいることは、People と Reputation にどう関わるか。', en: 'How do the watching employees bear on People and Reputation?' },
        { ja: '通報するとすれば、どの時点で、何を伝えるか。', en: 'If you call the police, at what point, and what do you say?' },
      ],
      inject: '元社員が「不当解雇だ」と大きな声で話し始めた。',
      injectEn: 'They begin loudly saying they were unfairly dismissed.',
      inject2: '通りかかった社員の一人が「私が話しますよ」と間に入ろうとした。',
      inject2En: 'A passing employee offers: \"Let me talk to them.\"',
      sop: '退去要請の判断者、人事の緊急連絡先、通報の基準は現場ごとに異なる。Site SOPによる。',
      sopEn: 'Who decides on a removal request, HR emergency contacts, and when to call police differ by site.',
      sources: SRC_PEOPLE,
    },
  ],
};

module.exports = { p4, p5 };
