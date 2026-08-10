'use strict';
// TTX 講評（模範解答）。設問①〜④とスライドの番号が一致するように書く。
// Model answers, numbered to match the questions on the case slide.

const SOP_LABEL = '注記';
const SOP = '模範解答は判断の型を示すものです。実際の手順は各現場のSite SOPと警備指令書が優先します。';
const SOP_EN = 'These answers show a pattern of reasoning. The Site SOP and post orders always take precedence.';

const D = {

  // ── 第1時限 ───────────────────────────────────────────────────────────────
  'CASE 1-A': {
    titleJa: 'TTX 1-A 模範解答', titleEn: 'TTX 1-A — Model Answers',
    sources: '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: 'どの柱に関わるか', a: 'Asset（情報資産）。外部に出れば Reputation にも及ぶ。', aEn: 'Asset — information. If it leaves the building it becomes Reputation as well.' },
      { q: '拾ってよいか。読んでよいか', key: true, a: '拾ってよい。読んではいけない。表紙の分類表示までで判断する。', aEn: 'Pick it up, yes. Do not read it. Judge from the cover classification only.' },
      { q: '誰にいつ報告するか', a: '警備責任者へその場で。深夜でも翌朝に回さない。発見時刻が記録の価値を決める。', aEn: 'The security supervisor, immediately. Do not wait for morning — the time of discovery is what gives the record value.' },
      { q: '日誌にどう書くか', a: '発見時刻、場所、分類表示、引渡し先を書く。中身は書かない。', aEn: 'Time, place, classification, and who you handed it to. Never the contents.' },
    ],
    inject1: { q: '清掃員が入室', a: '面前で扱う。単独で処理しない。誰が見ていたかも記録する。', aEn: 'Handle it in their presence. Do not process it alone. Record who saw it.' },
    inject2: { q: '翌朝「あの資料見なかった？」', a: '事実のみ答える。「拾って◯◯へ引き渡しました」。中身には触れない。', aEn: 'Answer with fact only: you picked it up and handed it over. Say nothing of the contents.' },
    split: '保管するか、その場に置いて報告するか。どちらも成り立つ。根拠を述べさせる。',
    splitEn: 'Secure it, or leave it and report? Both are defensible. Make them state the reasoning.',
  },

  'CASE 1-B': {
    titleJa: 'TTX 1-B 模範解答', titleEn: 'TTX 1-B — Model Answers',
    sources: '警備業法、個人情報保護法、不正競争防止法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '社員証は撮影の根拠になるか', a: 'ならない。社員証は入館の資格を示すだけで、撮影の可否とは別の問題。', aEn: 'No. A badge shows a right of entry. Whether they may photograph is separate.' },
      { q: '中止を求められるか', a: '求められる。根拠は管理権者から委ねられた撮影禁止の運用。', aEn: 'Yes. The basis is the no-photography rule delegated by the site authority.' },
      { q: '削除を求めてよいか', key: true, a: '求められない。端末の中身は相手の管理下。応じない場合も引き止めない。', aEn: 'No. The device is theirs. If they refuse, do not detain them.' },
      { q: '報告するか。何を書くか', a: '報告する。時刻、場所、撮影対象、社員証の氏名、発言をそのまま記録する。', aEn: 'Yes. Record the time, place, what was photographed, the name on the badge, and their words verbatim.' },
    ],
    inject1: { q: '「上司に確認してくれ」と離脱', a: '追わない。氏名と所属を確認できていれば足りる。', aEn: 'Do not follow. Having the name and department is enough.' },
    inject2: { q: '翌日、本当に当該部署の社員と判明', a: '対応は誤りではない。確認は手続きであり、疑いではない。', aEn: 'Your response was not wrong. Verifying is a procedure, not an accusation.' },
  },

  // ── 第2時限 ───────────────────────────────────────────────────────────────
  'CASE 2-A': {
    titleJa: 'TTX 2-A 模範解答', titleEn: 'TTX 2-A — Model Answers',
    sources: '警備業法、刑法、刑事訴訟法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '犯罪か、確認事項か', a: '確認が必要な事象。社員が会社備品を持つこと自体は犯罪ではなく、明白性を満たさない。', aEn: 'A matter to verify. An employee holding company property is not itself a crime, and the obviousness test is not met.' },
      { q: '様式を知らないことの影響', a: '判断の根拠にしない。知らないなら確認できる者に確認する。', aEn: 'It is not a basis for a decision. If you do not know, ask someone who can confirm.' },
      { q: 'できること／できないこと', key: true, a: 'できるのは確認の依頼、記録、報告。強制、取り上げ、進路をふさぐことはできない。', aEn: 'You may request, record and report. You may not compel, seize, or block their path.' },
      { q: '誰に何分以内に報告するか', a: '警備責任者へ即時。品目、型番、時刻、会話をそのまま伝える。', aEn: 'The security supervisor, immediately: item, model, time, and what was said.' },
    ],
    inject1: { q: '無線「出口で止めろ」', key: true, a: '上位者の指示でも権限は増えない。「実力での制止はできません。記録と報告を行います」と代替案を返す。', aEn: 'An order from above does not expand your powers. Reply: "I cannot physically stop them. I will record and report."' },
    inject2: { q: 'そのまま出口へ向かった', a: '追わない。追跡は有形力に発展しやすく、安全と信用を同時に損なう。', aEn: 'Do not follow. Pursuit escalates into force, and risks both safety and reputation.' },
    split: '指示に従うか。従うと答えた班には「何をもって止めるのか」を問う。無言で従わないのが最も悪い。',
    splitEn: 'Do you obey? Ask those who say yes: by what means? Silent non-compliance is the worst outcome.',
  },

  'CASE 2-B': {
    titleJa: 'TTX 2-B 模範解答', titleEn: 'TTX 2-B — Model Answers',
    sources: '個人情報保護法、刑事訴訟法、警察官職務執行法',
    sopLabel: SOP_LABEL, sop: SOP, sopEn: SOP_EN,
    answers: [
      { q: '警察官であることは根拠になるか', key: true, a: 'ならない。情報の管理権はクライアントにある。警察官であることは開示の根拠ではない。', aEn: 'No. The client controls the information. Being a police officer is not a basis for disclosure.' },
      { q: '警備員に判断する権限はあるか', a: 'ない。取り次ぐところまでが役割。開示の可否は契約とクライアントが決める。', aEn: 'No. Your role ends at referral. The contract and the client decide.' },
      { q: '上長に連絡がつかない場合', a: '緊急連絡体制の次順位者へ。不在を理由に自分で判断しない。待たせることは失礼ではない。', aEn: 'Go to the next person on the call-out list. Absence is not authority to decide. Asking them to wait is not rude.' },
      { q: '身分をどう確認するか', a: '求めてよい。所属、階級、氏名、連絡先を控える。確認は手続きであり失礼ではない。', aEn: 'Ask. Note the unit, rank, name and contact. Verifying is procedure, not discourtesy.' },
    ],
    inject1: { q: '「令状がなくても任意で」', a: '任意であるからこそ、応じるか否かはクライアントが決める。警備員は応じられない。', aEn: 'Precisely because it is voluntary, the client decides. A guard cannot agree on their behalf.' },
    inject2: { q: '「名前があったかだけ教えて」', key: true, a: '同じこと。有無を答えるのも開示。第10時限10-Bと同じ構造。', aEn: 'The same thing. Confirming yes or no is still disclosure — the same structure as case 10-B.' },
  },

  // ── 第4時限 ───────────────────────────────────────────────────────────────
  'CASE 4-A': {
    titleJa: 'TTX 4-A 模範解答', titleEn: 'TTX 4-A — Model Answers',
    sources: '警備業法、警察庁「警備員教育」、消防法',
    sop: '巡回記録の様式、立寄点、報告先は現場ごとに異なる。Site SOPと警備指令書による。',
    sopEn: 'Record formats, checkpoints and reporting lines differ by site.',
    answers: [
      { q: '何に注意するか', a: 'A・B・D は Asset（情報）、C・E は People、F は Asset（物的）。分類してから動く。', aEn: 'A, B and D are Asset (information); C and E are People; F is Asset (physical). Classify before acting.' },
      { q: 'どこを見るか', a: '周囲と時系列。誰の席か、会議は終わったか、作業は継続中か、前回はどうだったか。', aEn: 'The surroundings and the timeline: whose desk, is the meeting over, is work ongoing, how was it last round.' },
      { q: 'どう巡回するか', key: true, a: '次の巡回で立寄点を増やす、時刻をずらす、経路を逆順にする。設計を変えるところまで踏み込む。', aEn: 'Add a checkpoint, shift the timing, reverse the route. Go as far as changing the design.' },
      { q: 'どう報告するか', a: '事実を先に、評価を後に。分からないことは「不明」と書く。C は避難障害として即時報告。', aEn: 'Fact first, assessment second. Write "unknown" where you did not know. Report C immediately as an escape obstruction.' },
    ],
    split: 'C は避難障害で、その場で除去してよい数少ない例。F は「不確か」と報告に書けるかが要点。',
    splitEn: 'C may be cleared on the spot — one of the few. For F, the point is writing that you were unsure.',
  },

  'CASE 4-B': {
    titleJa: 'TTX 4-B 模範解答', titleEn: 'TTX 4-B — Model Answers',
    sources: '警備業法、警察庁「警備員教育」',
    sop: '単独行動の可否、応援要請の基準、通信不良時の代替手段は現場ごとに定められている。',
    sopEn: 'Whether to act alone, when to call backup, and comms fallbacks are set per site.',
    answers: [
      { q: '扉を閉めるか', key: true, a: 'すぐには閉めない。中に人がいる場合、退路を塞ぐことになる。まず状況を把握する。', aEn: 'Not immediately. If someone is inside you would cut off their exit. Establish the situation first.' },
      { q: '単独で外を確認するか', a: '行かない。応援を待つ。やむを得ず行く場合は所在を伝えてから行く。', aEn: 'No. Wait for backup. If you must go, tell someone where you are first.' },
      { q: '残業中の社員の存在', a: 'People が最優先。所在確認を扉の処置より先に行う。', aEn: 'People come first. Confirm where they are before you deal with the door.' },
      { q: '一次報告に何を入れるか', a: '事実（施錠されているはずの扉が15cm開いていた、1時40分）と評価（侵入の可能性）を分ける。', aEn: 'Separate fact (a door that should be locked stood 15 cm open at 01:40) from assessment (possible intrusion).' },
    ],
    inject1: { q: '館内のものでない足跡', a: '現場保存の対象。踏まない。写真と時刻を残し、範囲を広めに取る。', aEn: 'It is evidence. Do not step on it. Photograph it with the time, and cordon wide.' },
    inject2: { q: '地下で無線が通じない', a: '代替手段を決めていたか。戻って報告することも選択肢。単独で奥へ進まない。', aEn: 'Had you agreed a fallback? Returning to report in person is valid. Do not push further in alone.' },
  },

  // ── 第5時限 ───────────────────────────────────────────────────────────────
  'CASE 5-A': {
    titleJa: 'TTX 5-A 模範解答', titleEn: 'TTX 5-A — Model Answers',
    sources: '警備業法、刑法、警察庁「警備員教育」',
    sop: '来訪者の確認方法、例外を認められる者、応援要請の方法は現場ごとに異なる。',
    sopEn: 'Verification, who may approve exceptions, and how to call backup differ by site.',
    answers: [
      { q: 'A と B、どちらを選ぶか', key: true, a: 'B を選ぶ。A は拒否のみで、相手が引き下がれる形が残らない。', aEn: 'Choose B. A is a bare refusal that leaves the person no way to step back.' },
      { q: 'C と D、どちらを選ぶか', key: true, a: 'D を選ぶ。C は相手の状態を否定している。最良は B のあと D。', aEn: 'Choose D. C denies how they feel. The best sequence is B, then D.' },
      { q: '予定表の同姓は根拠になるか', a: 'ならない。同姓の別人がありうる。断定せず、役員名を聞いて確認に回す。', aEn: 'No. It could be a different person with the same name. Do not conclude — ask the name and verify.' },
      { q: '周囲に来訪者がいることは', a: 'Reputation の問題。声を下げるのはこちら側から。別室や待機場所へ誘導する。', aEn: 'A Reputation issue. You lower your voice first, and move them to a waiting area.' },
    ],
    inject1: { q: 'スマートフォンで撮影開始', key: true, a: '対応を変えない。変えたこと自体が後で問題になる。撮影の中止は求めなくてよい。', aEn: 'Do not change your response — changing it is what becomes the problem. You need not ask them to stop.' },
    inject2: { q: '別の来訪者が割って入る', a: '応答しない。会社の見解を作らない。対応相手を増やさない。', aEn: 'Do not respond. Do not invent a company position. Do not add parties to the exchange.' },
    split: 'ゲートへ向かった場合。追わない。応援要請と通報に切り替える。物理的に止めない。',
    splitEn: 'If they head for the gate: do not follow. Switch to backup and a police call. Never stop them physically.',
  },

  'CASE 5-B': {
    titleJa: 'TTX 5-B 模範解答', titleEn: 'TTX 5-B — Model Answers',
    sources: '警備業法、刑法（130条後段）',
    sop: '退去要請の判断者、人事の緊急連絡先、通報の基準は現場ごとに異なる。',
    sopEn: 'Who authorises a removal request, HR emergency contacts, and when to call police differ by site.',
    answers: [
      { q: '退去を求める根拠、誰の意思か', key: true, a: '管理権者の意思に基づく。警備員が自分の判断で命じるものではない。', aEn: 'It rests on the site authority\'s intent. A guard does not order it on their own judgement.' },
      { q: '有形力を用いてよいか', key: true, a: '用いてはいけない。引き起こす、腕をつかむは暴行になりうる。座り込みには使えない。', aEn: 'No. Pulling them up or grabbing an arm can be assault. Force is not available here.' },
      { q: '見ている社員がいることは', a: 'People（安全）と Reputation（対応の質）が同時に問われる。滞留させない。', aEn: 'Both People and Reputation are in play. Do not let a crowd form.' },
      { q: 'いつ通報するか、何を伝えるか', a: '退去要請が明確に拒否され、不退去が続いた時点。その前に上長へ一報を入れておく。', aEn: 'Once a clear request to leave has been refused and they remain. Notify your supervisor before that point.' },
    ],
    inject1: { q: '「不当解雇だ」と大声', a: '内容に応答しない。「お答えできる立場にありません」で足りる。人事へ取り次ぐ。', aEn: 'Do not engage with the content. "I am not in a position to comment" is enough. Refer to HR.' },
    inject2: { q: '社員が「私が話します」と仲裁', a: '止める。善意でも当事者が増えると収拾がつかない。社員の安全も守る対象。', aEn: 'Stop them. Even well meant, more parties makes it unmanageable — and that employee is also yours to protect.' },
  },

  // ── 第9時限 ───────────────────────────────────────────────────────────────
  'CASE 9-A': {
    titleJa: 'TTX 9-A 模範解答', titleEn: 'TTX 9-A — Model Answers',
    sources: '消防法、刑法、警察庁「警備員教育」',
    sop: '救急要請の判断者、身元不明者の扱い、クライアントへの通知は現場ごとに異なる。',
    sopEn: 'Who calls the ambulance, how unidentified persons are handled, and client notification differ by site.',
    answers: [
      { q: '最初の30秒に何をするか', key: true, a: '①周囲の安全 ②反応の確認 ③人を指名して119番と応援を依頼。「誰か」では動かない。', aEn: '1) Make the area safe 2) check responsiveness 3) name a person to call and to fetch help. "Someone" does not move.' },
      { q: '110番か119番か', a: 'まず119番。人命が先。事件性の判断は後からできるが、命は戻らない。', aEn: 'Ambulance first. Life comes first — the criminal question can wait, a life cannot.' },
      { q: '所持品を見てよいか', key: true, a: '単独では見ない。救急隊または警察の面前で行う。実施したら面前者・時刻・対象を記録。', aEn: 'Not alone. Do it in front of the ambulance crew or the police, and record who was present, when, and what.' },
      { q: '保存範囲と社内報告', a: 'ガラスとキャビネットに触れない。範囲は広めに。警備責任者へ即時、人身事故のため三次まで想定。', aEn: 'Do not touch the glass or cabinet. Cordon wide. Supervisor immediately; with an injury, expect it to reach executives.' },
    ],
    inject1: { q: '社員がガラスを拾い始めた', a: '止める。「そのままにしてください」と理由を添える。善意なので責める言い方をしない。', aEn: 'Stop them: "please leave it as it is," with the reason. It was well meant — do not phrase it as blame.' },
    inject2: { q: '救急隊「名前と生年月日は？」', a: '「分かりません」と答える。推測で答えない。日本語が通じないことも併せて伝える。', aEn: 'Say you do not know. Never guess. Also tell them the person does not speak Japanese.' },
    split: '所持品を見てよいか。「見てよい」派には根拠を、「見ない」派には救急隊への答え方を問う。',
    splitEn: 'May you search? Ask the "yes" group for their basis, and the "no" group what they tell the crew.',
  },

  'CASE 9-B': {
    titleJa: 'TTX 9-B 模範解答', titleEn: 'TTX 9-B — Model Answers',
    sources: '消防法、総務省消防庁、警察庁「警備員教育」',
    sop: '初期消火の実施可否、自衛消防組織での役割、通報の判断者は現場ごとに定められている。',
    sopEn: 'Whether guards fight fires, their role in the fire brigade, and who calls are set per site.',
    answers: [
      { q: '扉を開けるか。何で判断するか', key: true, a: '開けない。扉に触れて熱を確認する。煙の色と量、臭気、音でも判断できる。', aEn: 'Do not open it. Feel the door for heat. Smoke colour and volume, smell and sound also tell you.' },
      { q: '初期消火か避難誘導か', key: true, a: '1名なら避難誘導。初期消火は複数名と退路の確保が前提。', aEn: 'Alone, guide the evacuation. Firefighting needs numbers and a secured way out.' },
      { q: '1名の限界。何を諦めるか', a: '初期消火、原因の特定、私物の持ち出しを諦める。20名の避難を優先する。', aEn: 'Give up firefighting, finding the cause, and retrieving belongings. Twenty people come first.' },
      { q: '発報前に通報してよいか', a: 'してよい。発報を待つ理由はない。人が煙を確認している事実で足りる。', aEn: 'Yes. There is no reason to wait for the alarm — a person has seen smoke, and that is enough.' },
    ],
    inject1: { q: '社員が消火器を取りに走る', a: '追わない。止めに行くと避難誘導が止まる。損失が大きいのはそちら。', aEn: 'Do not chase them. Going after them halts the evacuation, and that costs more.' },
    inject2: { q: '同じ5階の別区画が発報', a: '火災の可能性が上がる。全館避難の判断へ切り替える。通報済みなら続報を入れる。', aEn: 'A fire is now more likely. Switch to a building-wide evacuation, and update the fire service.' },
  },

  // ── 第10時限 ──────────────────────────────────────────────────────────────
  'CASE 10-A': {
    titleJa: 'TTX 10-A 模範解答', titleEn: 'TTX 10-A — Model Answers',
    sources: '消防法、警備業法、個人情報保護法',
    sop: '人員配置、通報の判断者、保全依頼の宛先は現場ごとに異なる。緊急連絡体制表による。',
    sopEn: 'Deployment, who calls, and who to ask for preservation differ by site.',
    answers: [
      { q: '最初の60秒。2名の配置', key: true, a: '地区表示を読む→一報→現場確認。単独行動の回避と受信機の常駐は両立しない。選んだ方を説明する。', aEn: 'Read the zone, report, then verify. Not going alone and manning the panel cannot both hold — justify which you chose.' },
      { q: '通報するか。110か119か', a: '119番。発報は火災の確定ではないが、防火戸閉鎖まで進んでいる。不正解錠は後から110番。', aEn: 'Call the fire service. The alarm is not proof of fire, but the doors have closed. The unauthorised entry goes to police later.' },
      { q: '保全すべきもの。誰に依頼するか', key: true, a: '退職者カードの解錠ログと3階カメラ画像。管理権者不在なら緊急連絡体制の次順位者へ。', aEn: 'The leaver-card unlock log and the third-floor footage. With the authority away, go to the next contact.' },
      { q: '何を後回しにするか', a: '不正解錠の追跡。人命と火災対応が先。捨てた判断と理由を記録に残す。', aEn: 'Pursuing the unauthorised entry. Life and fire come first — and record what you dropped, and why.' },
    ],
    inject1: { q: '「煙は見えない」と無線', a: '判断を変えない。感知器の位置と人がいる位置は違う。火災を否定する根拠にならない。', aEn: 'Do not change your assessment. The detector is not where the people are, and this does not rule out a fire.' },
    inject2: { q: '4階西区画で第2報', key: true, a: '2区画同時発報。非火災報の可能性が下がる。全館避難と通報の判断へ切り替える。', aEn: 'Two zones at once makes a false alarm unlikely. Switch to full evacuation and call.' },
    split: '全部はできない。何を捨てたかを言えるか。捨てる判断ができない班が必ず出る。',
    splitEn: 'You cannot do everything. Can they say what they dropped? Some groups will not be able to drop anything.',
  },

  'CASE 10-B': {
    titleJa: 'TTX 10-B 模範解答', titleEn: 'TTX 10-B — Model Answers',
    sources: '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
    sop: '開示の判断者、保全依頼の受付方法、記録の様式は現場ごとに異なる。Site SOPと契約による。',
    sopEn: 'Who decides on disclosure, how preservation requests are taken, and the record format differ by site.',
    answers: [
      { q: '管理職であることは根拠になるか', a: 'ならない。開示の可否は契約とクライアントの規程で決まる。役職では決まらない。', aEn: 'No. The contract and the client\'s rules decide, not the person\'s rank.' },
      { q: '警備員に判断する権限はあるか', a: 'ない。取り次ぐところまで。日頃の協力関係は判断を変える理由にならない。', aEn: 'No. Your role ends at referral. A good working relationship does not change that.' },
      { q: '断り方。関係を壊さずに断れるか', key: true, a: '「私には開示の判断ができません。担当へお繋ぎします」。断るのではなく、繋ぐと伝える。', aEn: '"I am not able to decide that. Let me connect you with the right person." You are not refusing — you are routing.' },
      { q: '保全の依頼は受けてよいか', key: true, a: '受けてよい。保全＝残す、開示＝渡す。警備員が受けられるのは前者だけ。', aEn: 'Yes. Preserving means keeping; disclosing means handing over. Only the first is yours to accept.' },
    ],
    inject1: { q: '「あなたが見て教えて」', key: true, a: '応じられない。自分が見て伝えるのは開示と同じ結果になる。言い換えを見抜く。', aEn: 'Decline. Looking and telling produces the same result as showing. Spot the rephrasing.' },
    inject2: { q: '「依頼書を出す。消さないで」', a: 'これは受けてよい。上書きを防ぐ依頼であり、内容を渡す依頼ではない。時刻とともに記録する。', aEn: 'This you may accept. It prevents overwrite; it does not hand over content. Record it with the time.' },
    split: 'インジェクト①に気づけるか。「見せない」から「見て教える」への言い換えが本問の核。',
    splitEn: 'Can they spot inject 1? The shift from "show me" to "look and tell me" is the heart of this case.',
  },
};

module.exports = D;
