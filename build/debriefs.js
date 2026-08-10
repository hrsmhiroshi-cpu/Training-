'use strict';
// TTX 講評（模範解答）スライド。generate.js が各ケーススライドの直後に差し込む。
// Model answers for each TTX. generate.js splices these in after the matching case slide.

const SOP_STD = '模範解答は判断の型を示すものです。実際の手順は各現場のSite SOPと警備指令書が優先します。';
const SOP_STD_EN = 'These answers show a pattern of reasoning. The Site SOP and post orders always take precedence.';

const D = {

  // ── 第1時限 ───────────────────────────────────────────────────────────────
  'CASE 1-A': {
    titleJa: 'TTX 1-A 講評 ― 模範解答',
    titleEn: 'TTX 1-A Debrief — Model Answer',
    lead: '拾う行為と読む行為を分けられるか。情報資産の扱いの基本。',
    leadEn: 'Can you separate picking it up from reading it? This is the basis of handling information assets.',
    sources: '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
    sop: SOP_STD, sopEn: SOP_STD_EN,
    items: [
      { h: 'どの柱か', ja: 'Asset（情報資産）。外部に出れば Reputation にも及ぶ。', en: 'Asset (information). If it leaves, it also becomes a Reputation issue.' },
      { h: '拾ってよいか', key: true, ja: '拾ってよい。ただし読んではいけない。表紙の分類表示までで判断する。', en: 'Yes, pick it up. Do not read it. Judge from the cover classification only.' },
      { h: 'なぜ読めないか', ja: '業務上の必要がない。営業秘密に該当しうる。読んだ事実自体が問題になる。', en: 'There is no operational need. It may be a trade secret. Reading it is itself the problem.' },
      { h: '深夜であること', ja: '報告を翌朝に回さない。発見時刻が記録の価値を決める。', en: 'Do not hold the report until morning. The time of discovery is what gives the record value.' },
      { h: '記録の書き方', ja: '発見時刻、場所、分類表示、引渡し先を書く。内容は書かない。', en: 'Record time, place, classification and who you handed it to. Never the contents.' },
      { h: '清掃員が入室', ja: '面前で扱う。単独で処理しない。誰が見ていたかも記録する。', en: 'Handle it in their presence. Do not process it alone. Record who witnessed it.' },
    ],
    split: '保管するか、その場に置いて報告するか。どちらも成り立つ。根拠を述べさせる。',
    splitEn: 'Secure it, or leave it and report? Both are defensible. Make them state the reasoning.',
  },

  'CASE 1-B': {
    titleJa: 'TTX 1-B 講評 ― 模範解答',
    titleEn: 'TTX 1-B Debrief — Model Answer',
    lead: '「求められること」と「できないこと」の線引き。社員が相手でも権限は増えない。',
    leadEn: 'The line between what you may ask and what you cannot do. Being an employee changes nothing.',
    sources: '警備業法、個人情報保護法、不正競争防止法',
    sop: SOP_STD, sopEn: SOP_STD_EN,
    items: [
      { h: '社員証の意味', ja: '入館の資格を示すだけ。撮影の可否とは別の問題。', en: 'It shows a right of entry only. Whether they may photograph is a separate question.' },
      { h: '中止を求められるか', ja: '求められる。根拠は管理権者から委ねられた撮影禁止の運用。', en: 'Yes. The basis is the no-photography rule delegated by the site authority.' },
      { h: '削除を求められるか', key: true, ja: '求められない。端末の中身は相手の管理下。有形力も使えない。', en: 'No. The device is under their control, and you cannot use force.' },
      { h: '応じない場合', ja: '引き止めない。記録して報告する。判断は上長とクライアントが行う。', en: 'Do not detain. Record and report. The supervisor and client decide.' },
      { h: '離れようとしたら', ja: '追わない。氏名と所属を確認できていれば足りる。', en: 'Do not follow. Having their name and department is enough.' },
      { h: '社員だと判明したら', ja: '対応は誤りではない。確認は手続きであり、疑いではない。', en: 'Your response was not wrong. Verifying is a procedure, not an accusation.' },
    ],
  },

  // ── 第2時限 ───────────────────────────────────────────────────────────────
  'CASE 2-A': {
    titleJa: 'TTX 2-A 講評 ― 模範解答',
    titleEn: 'TTX 2-A Debrief — Model Answer',
    lead: '上位者の指示でも、警備員の権限は増えない。断り方までが答え。',
    leadEn: 'An order from above does not expand your powers. How you decline is part of the answer.',
    sources: '警備業法、刑法、刑事訴訟法',
    sop: SOP_STD, sopEn: SOP_STD_EN,
    items: [
      { h: '犯罪か', ja: '社員が会社備品を持つこと自体は犯罪ではない。明白性は満たしにくい。', en: 'An employee holding company property is not itself a crime. The obviousness test is rarely met.' },
      { h: '情報の欠落', ja: '様式を知らないことを判断の根拠にしない。確認できる者に確認する。', en: 'Not knowing the form is not a basis for a decision. Ask someone who can confirm.' },
      { h: 'できること', ja: '確認の依頼、記録、報告。強制はできない。', en: 'Request, record, report. You cannot compel.' },
      { h: '追うか', ja: '追わない判断も成り立つ。有形力への発展と信用への影響を考える。', en: 'Not following is defensible. Weigh escalation to force, and the effect on reputation.' },
      { h: '「出口で止めろ」', key: true, ja: '実力での制止はできない。指示に従っても権限は生じない。', en: 'You cannot physically stop them. Obeying the order does not create authority.' },
      { h: '断り方', key: true, ja: '「実力での制止はできません。記録と報告を行います」と代替案を返す。', en: '"I cannot physically stop them. I will record and report." Offer the alternative.' },
    ],
    split: '指示に従うか。従うと答えた班には「何をもって止めるのか」を問う。無言で従わないのが最も悪い。',
    splitEn: 'Do you obey? Ask those who say yes: by what means would you stop them? Silent non-compliance is the worst outcome.',
  },

  'CASE 2-B': {
    titleJa: 'TTX 2-B 講評 ― 模範解答',
    titleEn: 'TTX 2-B Debrief — Model Answer',
    lead: '「警察には協力すべき」という感覚と、情報の管理権が衝突する。',
    leadEn: 'The instinct to help the police collides with who actually controls the information.',
    sources: '個人情報保護法、刑事訴訟法、警察官職務執行法',
    sop: SOP_STD, sopEn: SOP_STD_EN,
    items: [
      { h: '警察官であること', key: true, ja: '開示の根拠にならない。情報の管理権はクライアントにある。', en: 'Not a basis for disclosure. The client controls the information.' },
      { h: '警備員の権限', ja: '開示の可否を判断する立場にない。取り次ぐところまで。', en: 'You are not in a position to decide. Your role ends at referral.' },
      { h: '身分確認', ja: '求めてよい。所属、階級、氏名、連絡先を控える。失礼ではない。', en: 'Ask. Note the unit, rank, name and contact. It is not rude.' },
      { h: '上長不在', ja: '緊急連絡体制の次順位者へ。不在を理由に自分で判断しない。', en: 'Go to the next person on the call-out list. Absence is not authority to decide.' },
      { h: '「任意で協力を」', ja: '任意であるからこそ、応じるか否かはクライアントが決める。', en: 'Precisely because it is voluntary, the client decides whether to comply.' },
      { h: '有無だけ教えて', key: true, ja: '有無を答えるのも開示。第10時限10-Bと同じ構造。', en: 'Confirming yes or no is still disclosure. Same structure as case 10-B.' },
    ],
  },

  // ── 第4時限 ───────────────────────────────────────────────────────────────
  'CASE 4-A': {
    titleJa: 'TTX 4-A 講評 ― 模範解答',
    titleEn: 'TTX 4-A Debrief — Model Answer',
    lead: '6場面に共通するのは、情報が足りないこと。足りないと書けるかを見る。',
    leadEn: 'All six scenes share one thing: incomplete information. Can you write that it was incomplete?',
    sources: '警備業法、警察庁「警備員教育」、消防法',
    sop: '巡回記録の様式、立寄点、報告先は現場ごとに異なる。Site SOPと警備指令書による。',
    sopEn: 'Record formats, checkpoints and reporting lines differ by site.',
    items: [
      { h: 'A ID カード', ja: '預かるか、残して報告か。触れた場合は必ず記録する。', en: 'Secure it or leave and report. If you touched it, record that you did.' },
      { h: 'B ホワイトボード', ja: '消してよいかは現場による。消す前に記録が必要な場合がある。', en: 'Whether to erase depends on the site. It may need recording first.' },
      { h: 'C 非常口の段ボール', key: true, ja: '避難障害。その場で除去してよい数少ない例。作業者への声かけが要る。', en: 'It blocks escape. One of the few cases you may clear on the spot — after speaking to the workers.' },
      { h: 'D サーバ室の扉', ja: '中に人がいる可能性がある。単独で入らない。', en: 'Someone may be inside. Do not enter alone.' },
      { h: 'E バッジ未着用', ja: '断定しない。手続きに戻す。第5時限の対応につながる。', en: 'Do not conclude. Return them to the procedure. This links to Period 5.' },
      { h: 'F フェンス破損', key: true, ja: '記憶が不確かなことを報告に書く。写真と時刻が価値をもつ。', en: 'Write that you were unsure. The photograph and the time are what carry value.' },
    ],
    split: '③「次の巡回で何を変えるか」まで届いた班は少ない。設計の変更に踏み込めたかを評価する。',
    splitEn: 'Few groups reach question 3. Credit those who changed the design of the next patrol.',
  },

  'CASE 4-B': {
    titleJa: 'TTX 4-B 講評 ― 模範解答',
    titleEn: 'TTX 4-B Debrief — Model Answer',
    lead: '安全（People）と保全（Asset）が衝突する。順序を言えるかを見る。',
    leadEn: 'Safety and preservation collide. Can you state the order?',
    sources: '警備業法、警察庁「警備員教育」',
    sop: '単独行動の可否、応援要請の基準、通信不良時の代替手段は現場ごとに定められている。',
    sopEn: 'Whether to act alone, when to call backup, and comms fallbacks are set per site.',
    items: [
      { h: '扉を閉めるか', key: true, ja: 'すぐには閉めない。中に人がいる場合、退路を塞ぐことになる。', en: 'Not immediately. If someone is inside, you would be cutting off their exit.' },
      { h: '単独で外へ', ja: '行かない。応援を待つ。行く場合は所在を伝えてから。', en: 'Do not go. Wait for backup. If you must, tell someone where you are.' },
      { h: '残業者の存在', ja: 'People が最優先。所在確認を先に行う。', en: 'People come first. Confirm where they are before anything else.' },
      { h: '足跡', ja: '現場保存の対象。踏まない。写真と時刻を残す。', en: 'It is evidence. Do not step on it. Photograph it with the time.' },
      { h: '無線が通じない', ja: '代替手段を決めていたか。戻って報告することも選択肢。', en: 'Had you agreed a fallback? Returning to report in person is a valid option.' },
      { h: '一次報告', ja: '事実（開いていた、幅、時刻）と評価（侵入の可能性）を分ける。', en: 'Separate fact (open, width, time) from assessment (possible intrusion).' },
    ],
  },

  // ── 第5時限 ───────────────────────────────────────────────────────────────
  'CASE 5-A': {
    titleJa: 'TTX 5-A 講評 ― 模範解答',
    titleEn: 'TTX 5-A Debrief — Model Answer',
    lead: '最良は B のあと D。受け止めてから具体化する。',
    leadEn: 'The best sequence is B then D: acknowledge first, then make it concrete.',
    sources: '警備業法、刑法、警察庁「警備員教育」',
    sop: '来訪者の確認方法、例外を認められる者、応援要請の方法は現場ごとに異なる。',
    sopEn: 'Verification, who may approve exceptions, and how to call backup differ by site.',
    items: [
      { h: 'A「規則ですので」', ja: '拒否のみで、相手が引き下がれる形が残らない。', en: 'A refusal with no way for the person to step back.' },
      { h: 'B と D', key: true, ja: 'B で受け止め、D で具体化する。手続きへの誘導になっている。', en: 'B acknowledges, D makes it concrete. Both route into the procedure.' },
      { h: 'C「落ち着いて」', ja: '相手の状態を否定している。ほぼ確実に悪化する。', en: 'It denies how they feel, and almost always makes things worse.' },
      { h: '予定表の同姓', ja: '通す根拠にならない。同姓の別人がありうる。断定しない。', en: 'Not a basis to admit them. It could be a different person with the same name.' },
      { h: '撮影が始まったら', key: true, ja: '対応を変えない。変えたこと自体が後で問題になる。', en: 'Do not change your response. Changing it is what becomes the problem later.' },
      { h: '第三者が割って入る', ja: '応答しない。会社の見解を作らない。対応相手を増やさない。', en: 'Do not respond. Do not invent a company position. Do not add parties.' },
    ],
    split: 'ゲートへ向かった場合。追わない。応援要請と通報に切り替える。物理的に止めない。',
    splitEn: 'If they head for the gate: do not follow. Switch to backup and a police call. Do not stop them physically.',
  },

  'CASE 5-B': {
    titleJa: 'TTX 5-B 講評 ― 模範解答',
    titleEn: 'TTX 5-B Debrief — Model Answer',
    lead: '座り込みに有形力は使えない。使えない中で何ができるかが答え。',
    leadEn: 'You cannot use force against someone sitting down. The answer is what you can do without it.',
    sources: '警備業法、刑法（130条後段）',
    sop: '退去要請の判断者、人事の緊急連絡先、通報の基準は現場ごとに異なる。',
    sopEn: 'Who authorises a removal request, HR emergency contacts, and when to call police differ by site.',
    items: [
      { h: '退去要請の根拠', key: true, ja: '管理権者の意思に基づく。自分の判断で命じるものではない。', en: 'It rests on the site authority\'s intent, not your own judgement.' },
      { h: '有形力', key: true, ja: '使えない。引き起こす、腕をつかむは暴行になりうる。', en: 'Not available. Pulling them up or grabbing an arm can be assault.' },
      { h: '見ている社員', ja: 'People（安全）と Reputation（対応の質）が同時に問われる。', en: 'Both People and Reputation are in play at once.' },
      { h: '経緯への対応', ja: '退職理由に立ち入らない。話を聞く相手にならない。', en: 'Do not engage with why they left. Do not become their audience.' },
      { h: '「不当解雇だ」', ja: '内容に応答しない。「お答えできる立場にありません」で足りる。', en: 'Do not engage. "I am not in a position to comment" is enough.' },
      { h: '社員が仲裁に入る', ja: '止める。善意でも当事者が増えると収拾がつかない。', en: 'Stop them. Even well meant, more parties makes it unmanageable.' },
    ],
    split: 'どの時点で通報するか。退去要請が明確に拒否され、不退去が続いた時点。その前に上長へ一報。',
    splitEn: 'When do you call the police? Once a clear request to leave has been refused and they remain. Notify your supervisor before that.',
  },

  // ── 第9時限 ───────────────────────────────────────────────────────────────
  'CASE 9-A': {
    titleJa: 'TTX 9-A 講評 ― 模範解答',
    titleEn: 'TTX 9-A Debrief — Model Answer',
    lead: '救護のための身元確認と、所持品検査は目的が異なる。ここが最大の論点。',
    leadEn: 'Identifying someone for their care, and searching their belongings, have different purposes. This is the crux.',
    sources: '消防法、刑法、警察庁「警備員教育」',
    sop: '救急要請の判断者、身元不明者の扱い、クライアントへの通知は現場ごとに異なる。',
    sopEn: 'Who calls the ambulance, how unidentified persons are handled, and client notification differ by site.',
    items: [
      { h: '最初の30秒', key: true, ja: '①周囲の安全 ②反応の確認 ③人を指名して119番と応援を依頼。', en: '1) Make the area safe 2) check responsiveness 3) name a person to call and to fetch help.' },
      { h: '「誰か」では動かない', ja: '「そこの青い服の方、119番をお願いします」と指名する。', en: 'Point and name: "You, in the blue shirt — call an ambulance."' },
      { h: '110か119か', ja: 'まず119。人命が先。事件性の判断は後からできる。', en: 'Ambulance first. Life comes first; the criminal question can wait.' },
      { h: '所持品を見てよいか', key: true, ja: '単独で開けない。救急隊・警察の面前で行うのが安全。', en: 'Not alone. Do it in the presence of the ambulance crew or police.' },
      { h: '実施した場合', ja: '誰の面前で、何を、何時に確認したかを必ず記録する。', en: 'Record in whose presence, what, and at what time.' },
      { h: '日本語が通じない', ja: '119番通報時にその旨を伝える。通訳対応につながる。', en: 'Say so when you call. It brings in interpretation support.' },
    ],
    split: '所持品を見てよいか。「見てよい」派には根拠を、「見ない」派には救急隊への答え方を問う。',
    splitEn: 'May you search? Ask the "yes" group for their basis, and the "no" group what they tell the ambulance crew.',
  },

  'CASE 9-B': {
    titleJa: 'TTX 9-B 講評 ― 模範解答',
    titleEn: 'TTX 9-B Debrief — Model Answer',
    lead: '1名でできることには限界がある。何を諦めるかが答え。',
    leadEn: 'One person can only do so much. What you give up is the answer.',
    sources: '消防法、総務省消防庁、警察庁「警備員教育」',
    sop: '初期消火の実施可否、自衛消防組織での役割、通報の判断者は現場ごとに定められている。',
    sopEn: 'Whether guards fight fires, their role in the fire brigade, and who calls are set per site.',
    items: [
      { h: '扉を開けるか', key: true, ja: '開けない。まず扉に触れて熱を確認する。開けると燃焼が拡大する。', en: 'Do not open it. Feel the door for heat first. Opening it feeds the fire.' },
      { h: '何で判断するか', ja: '扉の熱、煙の色と量、臭気、音。目視できなくても材料はある。', en: 'Heat, smoke colour and volume, smell, sound. You can judge without seeing inside.' },
      { h: '初期消火か避難誘導か', key: true, ja: '1名なら避難誘導。初期消火は複数名と退路の確保が前提。', en: 'Alone, guide the evacuation. Firefighting needs numbers and a secured exit.' },
      { h: '発報前の通報', ja: 'してよい。発報を待つ理由はない。人が煙を確認している。', en: 'Call now. There is no reason to wait for the alarm — a person has seen smoke.' },
      { h: '消火器を取りに走る社員', ja: '追わない。避難誘導が止まる方が損失は大きい。', en: 'Do not chase them. Stopping the evacuation costs more.' },
      { h: '第2区画が発報', ja: '火災の可能性が上がる。全館避難の判断へ切り替える。', en: 'A fire is now more likely. Switch to a building-wide evacuation.' },
    ],
    split: '諦めるもの ― 初期消火、原因の特定、私物の持ち出し。諦める判断を言えるか。',
    splitEn: 'What you give up: firefighting, finding the cause, retrieving belongings. Can they say it out loud?',
  },

  // ── 第10時限 ──────────────────────────────────────────────────────────────
  'CASE 10-A': {
    titleJa: 'TTX 10-A 講評 ― 模範解答',
    titleEn: 'TTX 10-A Debrief — Model Answer',
    lead: '2つの事象が重なり、人員が足りない。全部はできない。',
    leadEn: 'Two events overlap and you are short-staffed. You cannot do everything.',
    sources: '消防法、警備業法、個人情報保護法',
    sop: '人員配置、通報の判断者、保全依頼の宛先は現場ごとに異なる。緊急連絡体制表による。',
    sopEn: 'Deployment, who calls, and who to ask for preservation differ by site.',
    items: [
      { h: '最初の60秒', key: true, ja: '地区表示を読む → 一報を入れる → 現場確認。動く前に一報。', en: 'Read the zone, send the first report, then verify. Report before you move.' },
      { h: '2名の配置', key: true, ja: '単独で行かないことと受信機を無人にしないことは両立しない。', en: 'Not going alone and not leaving the panel unmanned cannot both hold.' },
      { h: '「煙は見えない」', ja: '火災を否定する根拠にならない。感知器と人の位置は違う。判断を変えない。', en: 'It does not rule out a fire. The detector is not where the people are.' },
      { h: '第2報（4階西）', ja: '2区画同時発報。非火災報の可能性が下がる。通報判断を切り替える。', en: 'Two zones at once. A false alarm is less likely. Change your call decision.' },
      { h: 'ログと画像', key: true, ja: '退職者カードの解錠記録は保全対象。上書き前に依頼する。', en: 'The leaver-card unlock must be preserved. Request it before it is overwritten.' },
      { h: '管理権者不在', ja: '緊急連絡体制の次順位者へ。不在を理由に何もしないのが最も悪い。', en: 'Go to the next contact. Doing nothing because they are away is the worst outcome.' },
    ],
    split: '何を後回しにするか。不正解錠の追跡は後回しになる。捨てる判断とその根拠を言えるか。',
    splitEn: 'What waits? Pursuing the unauthorised entry does. Can they state what they dropped, and why?',
  },

  'CASE 10-B': {
    titleJa: 'TTX 10-B 講評 ― 模範解答',
    titleEn: 'TTX 10-B Debrief — Model Answer',
    lead: '保全と開示は別の行為。保全は受けてよく、開示は受けられない。',
    leadEn: 'Preservation and disclosure are different acts. You may accept the first, never the second.',
    sources: '個人情報保護法、不正競争防止法、経済産業省「営業秘密管理指針」',
    sop: '開示の判断者、保全依頼の受付方法、記録の様式は現場ごとに異なる。Site SOPと契約による。',
    sopEn: 'Who decides on disclosure, how preservation requests are taken, and the record format differ by site.',
    items: [
      { h: '管理職であること', ja: '開示の根拠にならない。可否は契約とクライアントの規程で決まる。', en: 'Not a basis. The contract and the client\'s rules decide.' },
      { h: '警備員の権限', ja: '判断する立場にない。取り次ぐところまで。', en: 'You are not the decision-maker. Your role ends at referral.' },
      { h: '断り方', ja: '「私には開示の判断ができません。担当へお繋ぎします」。', en: '"I am not able to decide that. Let me connect you with the right person."' },
      { h: '「あなたが見て教えて」', key: true, ja: '同じこと。自分が見て伝えるのは開示と同じ結果になる。応じられない。', en: 'The same thing. Looking and telling produces the same result as showing. Decline.' },
      { h: '「消さないでくれ」', key: true, ja: 'これは受けてよい。保全は上書きを防ぐ行為で、内容を渡す行為ではない。', en: 'This you may accept. Preserving prevents overwrite; it does not hand over content.' },
      { h: '記録', ja: '求められた内容、断ったこと、その理由、保全依頼の事実、時刻。', en: 'What was asked, that you declined, why, the preservation request, and the time.' },
    ],
    split: '保全＝残す／開示＝渡す。警備員が受けられるのは前者だけ。言い換えを見抜けるかが要点。',
    splitEn: 'Preserve means keep; disclose means hand over. Only the first is yours to accept. The test is spotting the rephrasing.',
  },
};

module.exports = D;
