'use strict';
// 第12時限｜業務別教育5 巡回の方法に関すること
// 内容ソース: Day2統合版 B-5 / B-2 / B-8 / B-9、CorpSec_4h B3、前回現任講習 第4限

const { META_JA, META_EN, SRC, slot } = require('./common');

module.exports = {
  file: '12_12限_巡回.pptx',
  footJa: '第12時限｜業務別教育5 巡回の方法に関すること',
  footEn: 'Period 12 | Task-Specific Training 5 — Patrol Methods',
  slides: [
    {
      type: 'title',
      kicker: `第12時限　${slot(12)}　業務別教育5`,
      kickerEn: 'Period 12 — Task-Specific Training 5',
      titleJa: '巡回の方法',
      titleEn: 'Patrol Methods',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B12',
      titleJa: '巡回の目的と種類', titleEn: 'Purpose and Types of Patrol',
      obj: '巡回が何のために行われるかを述べ、定時と不定時を使い分ける理由を説明できる。',
      objEn: 'You can state why patrols are carried out, and why fixed and variable timing are used differently.',
      sop: '巡回の回数、時間帯、経路は現場ごとに指定される。Site SOPと警備指令書に従う。',
      sopEn: 'Frequency, timing and route are specified per site. Follow the Site SOP and post orders.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '3つの目的', hEn: 'Three Purposes',
          b: [
            { ja: '発見：異常を、被害が生じる前に確認する', en: 'Detect: find a problem before it becomes a loss' },
            { ja: '抑止：警備員が巡回していることを外部に示す', en: 'Deter: show that guards are patrolling' },
            { ja: '記録：実施した事実を、証明できる形で残す', en: 'Document: leave evidence of what was done, in a form that can be shown' },
          ],
        },
        {
          h: '定時巡回', hEn: 'Fixed-Time Patrol',
          b: [
            { ja: '時刻を定めて実施する。実施漏れが起きにくい', en: 'Carried out at set times. Less likely to be skipped' },
            { ja: '記録が揃いやすく、契約上の履行を示しやすい', en: 'Records are consistent, and easy to show as contract performance' },
            { ja: '毎日同じ時刻・同じ順路だと、巡回のない時間帯が固定される', en: 'The same time and route every day fixes the gaps in coverage' },
          ],
        },
        {
          h: '不定時巡回', hEn: 'Variable-Time Patrol',
          b: [
            { ja: '時刻と順路を変えて実施する', en: 'Timing and route are varied' },
            { ja: '「気まぐれに歩く」ことではない。順路の組み替えである', en: 'It does not mean wandering. It means recombining a defined route' },
            { ja: '経路を変えても、立寄点はすべて通る', en: 'However you vary it, every checkpoint must still be visited' },
          ],
        },
        {
          h: 'コーポレートの現場での特徴', hEn: 'In a Corporate Office',
          b: [
            { ja: '執務時間帯は人がいる。声をかけられる前提で歩く', en: 'During working hours people are present. Expect to be spoken to' },
            { ja: '深夜は無人。異常の発見が巡回だけに依存する', en: 'At night the floor is empty. Detection depends on the patrol alone' },
            { ja: '執務の妨げにならない動線と時間帯を選ぶ', en: 'Choose routes and times that do not disturb the client\'s work' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B12',
      titleJa: '施設の構造を知る', titleEn: 'Knowing the Building',
      obj: '施設をゾーンで捉え、図面から警戒点と死角を読み取れる。',
      objEn: 'You can think of the site in zones, and read critical points and blind spots from a plan.',
      sop: '図面の保管場所、区画の呼称、立入制限区域は現場ごとに定められている。',
      sopEn: 'Where plans are kept, how zones are named, and which areas are restricted are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: 'セキュリティゾーン', hEn: 'Security Zones',
          b: [
            { ja: '外周部 ― 敷地の境界。フェンス、門、駐車場', en: 'The perimeter: the site boundary, fences, gates, car parks' },
            { ja: '建物外殻 ― 出入口、窓、非常口、搬入口', en: 'The building envelope: entrances, windows, emergency exits, loading bays' },
            { ja: '内部区画 ― 執務エリア、会議室、サーバ室、書庫、役員室', en: 'Interior zones: work areas, meeting rooms, server rooms, archives, executive areas' },
          ],
        },
        {
          h: '警戒点', hEn: 'Critical Points',
          b: [
            { ja: '事故が生じやすい、または被害が大きい箇所', en: 'Where incidents are likely, or where the loss would be large' },
            { ja: '受電設備、サーバ室、書庫、金庫室、危険物保管場所', en: 'Power rooms, server rooms, archives, safes, hazardous-material stores' },
            { ja: '非常口、防火戸、消火設備、避難経路', en: 'Emergency exits, fire doors, firefighting equipment, escape routes' },
          ],
        },
        {
          h: '死角', hEn: 'Blind Spots',
          b: [
            { ja: '目視できない範囲。カメラの死角と巡回の死角は別', en: 'What cannot be seen. Camera blind spots and patrol blind spots differ' },
            { ja: '時間帯によって変わる。消灯後に増える', en: 'They change with the time of day, and increase after lights-out' },
            { ja: '設備や什器の移動で新しく生じる', en: 'New ones appear when equipment or furniture is moved' },
          ],
        },
        {
          h: '図面の読み方', hEn: 'Reading a Plan',
          b: [
            { ja: '配属初日に、経路と立寄点を図面上で確認する', en: 'On your first day, trace the route and checkpoints on the plan' },
            { ja: '非常口と避難経路の位置を、先に覚える', en: 'Learn the emergency exits and escape routes first' },
            { ja: '図面と現物が違う場合は、現物を報告する', en: 'Where the plan and the building differ, report what is actually there' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B12',
      titleJa: '巡回で確認する対象', titleEn: 'What to Check on Patrol',
      obj: '人と物だけでなく、情報資産と防災設備を確認対象として挙げられる。',
      objEn: 'You can name information assets and fire-safety equipment as things to check, not only people and property.',
      sop: '立寄点の数と位置、チェック方法（キー・QR・端末）は現場ごとに異なる。',
      sopEn: 'The number and location of checkpoints, and the check method, differ by site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '施錠と閉鎖', hEn: 'Locks and Closures',
          b: [
            { ja: 'サーバ室、書庫、金庫室の施錠状態', en: 'Lock status of server rooms, archives and safes' },
            { ja: '窓、外周扉、搬入口の閉鎖状態', en: 'Windows, perimeter doors and loading bays' },
            { ja: '共連れの痕跡、開放したまま固定された扉', en: 'Signs of tailgating, and doors propped open' },
          ],
        },
        {
          h: '情報資産', hEn: 'Information Assets',
          b: [
            { ja: '無人の席のIDカード、鍵、離席中の端末', en: 'ID cards, keys and unlocked devices at empty desks' },
            { ja: 'ホワイトボードの書き残し、複合機に残った出力物', en: 'Writing left on whiteboards, printouts left in the copier' },
            { ja: '内容は読まない。分類表示と所在だけを記録する', en: 'Do not read them. Record only the classification and the location' },
          ],
        },
        {
          h: '防災と設備', hEn: 'Fire Safety and Plant',
          b: [
            { ja: '消火器と屋内消火栓の前に、物が置かれていないか', en: 'Nothing stored in front of extinguishers or hydrants' },
            { ja: '避難経路と非常口の障害物、誘導灯の点灯', en: 'Obstructions on escape routes, and exit signs lit' },
            { ja: '漏水、異臭、異音、温度の異常', en: 'Leaks, unusual smells, unusual sounds, temperature' },
          ],
        },
        {
          h: '特別管理エリア', hEn: 'Restricted Areas',
          b: [
            { ja: '役員室は、在室時は外から確認するにとどめる', en: 'Executive rooms: when occupied, check from outside only' },
            { ja: 'サーバ室は入室記録と業者の立会いを確認する', en: 'Server rooms: check the entry log and that vendors are escorted' },
            { ja: '会議室は、使用後の書類・端末・書き残しを確認する', en: 'Meeting rooms: check for documents, devices and writing left behind after use' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B12',
      titleJa: '鍵の管理', titleEn: 'Key Management',
      obj: '鍵の受渡しと保管の基本を述べ、紛失時の対応を言える。',
      objEn: 'You can state the basics of handing over and storing keys, and what to do if one is lost.',
      sop: '鍵の種類、保管場所、受渡記録の様式、持出可否は現場ごとに定められている。',
      sopEn: 'Key types, storage, handover record formats and whether they may leave the site are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '鍵の種類', hEn: 'Types of Key',
          b: [
            { ja: 'マスターキー、個別キー、カードキー、電気錠', en: 'Master keys, individual keys, card keys, electric locks' },
            { ja: 'マスターキーは原則として携帯せず、個別キーを使う', en: 'As a rule you do not carry a master key; you use the individual key' },
            { ja: 'プレートに施錠箇所の名称を書かない', en: 'Do not write the name of the door on the key tag' },
          ],
        },
        {
          h: '受渡しと記録', hEn: 'Handover and Records',
          b: [
            { ja: '交代時に員数を確認し、受渡記録に残す', en: 'Count them at changeover and record the handover' },
            { ja: '持ち出す場合は、誰が・いつ・どの鍵かを記録する', en: 'If a key is taken out, record who, when, and which key' },
            { ja: '記録は後から書かない。その場で書く', en: 'Do not write the record later. Write it at the time' },
          ],
        },
        {
          h: '紛失・破損', hEn: 'Loss or Damage',
          b: [
            { ja: '直ちに報告する。隠さない、探してから報告しない', en: 'Report it immediately. Do not conceal it, and do not search first' },
            { ja: '最後に使用した時刻と場所を、分かる範囲で伝える', en: 'Give the time and place you last used it, as far as you know' },
            { ja: '対応の判断は上長が行う', en: 'What happens next is your supervisor\'s decision' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B12',
      titleJa: '遺失物の扱い', titleEn: 'Lost Property',
      obj: '拾得物を発見したときの基本的な対応を述べられる。',
      objEn: 'You can state the basic response when you find lost property.',
      sop: '遺失物の保管場所、記録様式、警察への届出手続は現場ごとに定められている。',
      sopEn: 'Where lost property is kept, the record format, and reporting to the police are set per site.',
      sources: '遺失物法（平成18年法律第73号）、全国警備業協会 教育教材', cols: 2,
      topics: [
        {
          h: '発見したとき', hEn: 'When You Find Something',
          b: [
            { ja: '発見時刻、場所、品名、状態を記録する', en: 'Record the time, place, what it is, and its condition' },
            { ja: '中身を開けて確認しない。外形と分類表示までにとどめる', en: 'Do not open it to check. Stop at the exterior and any classification label' },
            { ja: 'Site SOPに定められた場所へ引き渡す', en: 'Hand it over to the place set out in the Site SOP' },
          ],
        },
        {
          h: '不審物との区別', hEn: 'Telling It from a Suspicious Item',
          b: [
            { ja: '遺失物と不審物は別の概念である', en: 'Lost property and a suspicious item are different things' },
            { ja: '区別の基準はSite SOPに定められている', en: 'The criteria for telling them apart are set out in the Site SOP' },
            { ja: '判断に迷う場合は触れず、上長に確認する', en: 'If you are unsure, do not touch it — check with your supervisor' },
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
        { ja: '不定時巡回とは、気の向くままに歩くことである。', en: 'A variable-time patrol means walking wherever you feel like.' },
        { ja: '経路を変えたので、立寄点をいくつか飛ばした。', en: 'Having varied the route, you skip a few checkpoints.' },
        { ja: '机の上にあった書類の内容を読んで、重要度を判断した。', en: 'You read a document on a desk to judge how important it is.' },
        { ja: '在室中の役員室は、外から確認するにとどめた。', en: 'With the executive room occupied, you check it from outside only.' },
        { ja: '鍵のプレートに、分かりやすく「サーバ室」と書いた。', en: 'You label the key tag clearly: "server room".' },
        { ja: '鍵が見当たらないので、しばらく探してから報告した。', en: 'A key is missing, so you search for a while before reporting it.' },
        { ja: '消火器の前に段ボールが積まれていたので記録した。', en: 'Boxes were stacked in front of an extinguisher, so you recorded it.' },
        { ja: '拾得した鞄の中身を確認して、持ち主を特定しようとした。', en: 'You look inside a found bag to identify the owner.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ○　5 ×　6 ×　7 ○　8 ×',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 Yes · 5 No · 6 No · 7 Yes · 8 No',
      rows: [
        { ja: '設問1・2 ― 順路の組み替えです。立寄点はすべて通ります。', en: 'Items 1 and 2: it is recombining the route. Every checkpoint is still visited.' },
        { ja: '設問3・8 ― 内容は読まない、中身は開けない。外形と分類表示までです。', en: 'Items 3 and 8: do not read, do not open. Stop at the exterior and the classification.' },
        { ja: '設問5 ― プレートに施錠箇所を書きません。紛失したときに使われます。', en: 'Item 5: do not name the door on the tag. It is usable by whoever finds it.' },
        { ja: '設問6 ― 直ちに報告します。探してから報告すると、その分だけ遅れます。', en: 'Item 6: report immediately. Searching first only delays it.' },
        { ja: '設問4・7 ― 在室中は外から。避難と消火の障害は記録する。基本動作です。', en: 'Items 4 and 7: check occupied rooms from outside; record obstructions. Basic practice.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 12-A',
      titleJa: 'TTX 12-A　サーバ室の違和感', titleEn: 'TTX 12-A — Something Off at the Server Room',
      scenarioJa: '深夜1時、巡回でサーバ室の前を通過する。入室記録はないはずだが、ドアが完全に閉まりきっておらず、内部からかすかに話し声が聞こえる。覗き窓から見ると、見覚えのない作業着の男性が2名、機器の前で作業している。事前の作業届の連絡は受けていない。',
      scenarioEn: '01:00. On patrol you pass the server room. There should be no entry on record, yet the door is not fully shut and you can hear voices inside. Through the window you see two men in work uniforms, unfamiliar to you, working at the racks. You received no prior work notification.',
      questionJa: 'あなたなら次の3分、何をどう動きますか。',
      questionEn: 'What do you do in the next three minutes?',
      points: [
        { ja: '即座に入室して本人確認するか、離れて確認するか。', en: 'Do you go in and check identity, or step back first?' },
        { ja: '報告は誰に、何を伝えるか。', en: 'Whom do you report to, and what do you say?' },
        { ja: '「正規の緊急対応かもしれない」可能性をどう扱うか。', en: 'How do you handle the possibility that this is legitimate emergency work?' },
        { ja: '自分の身の安全をどう確保するか。', en: 'How do you keep yourself safe?' },
      ],
      inject: '2名のうち1名がこちらに気づき、ドアを開けて「どうしました」と声をかけてきた。',
      injectEn: 'One of them notices you, opens the door and says: "Can I help you?"',
      inject2: '「先ほど御社の担当の方に許可をもらっています」と言われた。',
      inject2En: 'They say: "We were cleared by your contact earlier."',
      sop: 'サーバ室の入退室権限と、緊急時のクライアント連絡先はSite SOPに定義されている。',
      sopEn: 'Server-room access authority and emergency client contacts are defined in the Site SOP.',
      sources: SRC.fac + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第12時限 まとめ', titleEn: 'Period 12 — Summary',
      rows: [
        { ja: '巡回の目的は発見・抑止・記録。忘れられやすいのは記録。', en: 'Patrol is for detection, deterrence and documentation. The last is the one forgotten.' },
        { ja: '経路を変えても、立寄点はすべて通る。', en: 'However you vary the route, every checkpoint is still visited.' },
        { ja: '書類は読まない。分類表示と所在だけを記録する。', en: 'Do not read documents. Record only the classification and where they were.' },
        { ja: '鍵の紛失は直ちに報告する。探してから報告しない。', en: 'Report a lost key immediately. Do not search first and report later.' },
      ],
      next: '第13時限 ― 不審者と不審物。声をかける前に、何を根拠にするか。',
      nextEn: 'Period 13 — suspicious persons and objects: what you base it on before you speak.',
    },
  ],
};
