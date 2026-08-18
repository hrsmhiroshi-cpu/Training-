'use strict';
// 第15時限｜業務別教育8 警報装置その他当該警備業務を実施するために使用する機器の使用方法
// 第14限が消防用設備を扱うのに対し、本コマは警備員が日々操作する警備用機器を扱う。
// Day 2 確認テストと総括を含む。

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = '警報装置その他当該警備業務を実施するために使用する機器の使用方法';

const SRC_EQ  = '警備業法施行規則第38条第3項、警察庁「警備員教育」、全国警備業協会 教育教材';
const SRC_CAM = '個人情報保護法、個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン（通則編）」';
const SRC_RAD = '電波法、総務省 電波利用ホームページ';
const SRC_MEC = '警備業法（機械警備業務に関する規定）、警察庁「警備員教育」';

module.exports = {
  file: '15_15限_警備用機器の取扱い.pptx',
  footJa: `第15時限｜業務別教育8 ${SUBJ}`,
  footEn: 'Period 15 | Task-Specific Training 8 — Security Equipment',
  slides: [
    {
      type: 'title',
      kicker: `第15時限　${slot(15)}　業務別教育8`,
      kickerEn: 'Period 15 — Task-Specific Training 8',
      titleJa: '警備用機器の取扱い',
      titleEn: 'Operating Security Equipment',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'two',
      titleJa: '第14時限との役割分担', titleEn: 'How This Session Differs from Period 14',
      lead: '同じ法定科目を、消防用設備と警備用機器に分けています。内容は重複させません。',
      leadEn: 'The same statutory subject, split between fire-safety equipment and security equipment. We do not repeat it.',
      left: {
        h: '第14時限', hEn: 'Period 14',
        items: [
          { ja: '消火器の種類と適応火災', en: 'Extinguisher types and the fires they fight' },
          { ja: '屋内消火栓の4種類', en: 'The four types of indoor hydrant' },
          { ja: '自動火災報知設備と発報時の確認', en: 'The fire alarm, and checks on activation' },
          { ja: '初期消火の限界', en: 'The limit of first-response firefighting' },
        ],
      },
      right: {
        h: '第15時限（本コマ）', hEn: 'Period 15 — this session',
        items: [
          { ja: '防犯カメラとモニター監視', en: 'CCTV and monitor watching' },
          { ja: '入退室管理システム', en: 'Access control systems' },
          { ja: '業務用無線機', en: 'Two-way radios' },
          { ja: '非常通報装置と機械警備の受信機', en: 'Panic alarms and alarm receivers' },
          { ja: '機器が使えないときの手順', en: 'When the equipment is down' },
        ],
      },
      note: '機種ごとの操作手順はスライドに書いていません。現場ごとに異なるため、警備指令書と機器取扱要領で確認してください。',
      noteEn: 'Model-specific operating steps are not on these slides. They differ by site — check the post orders and the equipment instructions where you are posted.',
    },

    {
      type: 'topics', block: 'B15',
      titleJa: '防犯カメラとモニター監視', titleEn: 'CCTV and Monitor Watching',
      obj: 'カメラで確認できることと確認できないことを区別し、モニター監視の限界を説明できる。',
      objEn: 'You can separate what a camera can establish from what it cannot, and explain the limits of monitor watching.',
      sop: 'カメラの台数、画角、記録の保存期間、モニター室への入室権限は現場ごとに定められている。',
      sopEn: 'Camera count, coverage, retention period and who may enter the monitor room are set per site.',
      sources: SRC_CAM, cols: 2,
      topics: [
        {
          h: '映るもの', hEn: 'What It Captures',
          b: [
            { ja: '人の動き、通過した時刻、おおよその方向', en: 'Movement, the time someone passed, roughly which way they went' },
            { ja: '扉の開閉、物の有無、車両の出入', en: 'Doors opening and closing, objects present or gone, vehicles in and out' },
            { ja: '記録は後から確認できる。その場の判断より正確である', en: 'The recording can be checked later, and is more accurate than a judgement made on the spot' },
          ],
        },
        {
          h: '映らないもの', hEn: 'What It Does Not Capture',
          b: [
            { ja: '画角の外。カメラが向いていない方向は記録されない', en: 'Anything outside the frame. A direction the camera does not face is not recorded' },
            { ja: '逆光と夜間の暗部。顔が判別できないことがある', en: 'Backlit and dark areas. A face may not be identifiable' },
            { ja: '音声。多くの防犯カメラは映像だけを記録する', en: 'Sound. Most CCTV records image only' },
          ],
        },
        {
          h: 'モニター監視の限界', hEn: 'The Limits of Monitor Watching',
          b: [
            { ja: '複数画面を同時に、長時間見続けることはできない', en: 'No one can watch many screens at once for long stretches' },
            { ja: '見落としは起こる前提で、巡回と組み合わせて設計されている', en: 'The system assumes some things are missed, and pairs monitoring with patrol' },
            { ja: '「カメラがあるから大丈夫」とは言わない', en: 'Never say a place is covered simply because there is a camera' },
          ],
        },
        {
          h: '画像の取扱い', hEn: 'Handling the Images',
          b: [
            { ja: 'カメラ画像は個人情報である。私的に見ない、持ち出さない', en: 'Footage is personal data. Do not view it privately, do not take it out' },
            { ja: '撮影・複製・SNSへの投稿はしない。画面の撮影も同じ', en: 'Do not photograph, copy or post it. Photographing the screen is the same act' },
            { ja: '提供を求められたら、その場で判断せず上長に上げる', en: 'If asked to hand it over, do not decide on the spot — pass it up' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B15',
      titleJa: '入退室管理システム', titleEn: 'Access Control Systems',
      obj: 'カードリーダーとログの仕組みを説明し、遠隔開錠の依頼を受けたときの確認事項を挙げられる。',
      objEn: 'You can explain how readers and logs work, and name what you verify when asked to unlock a door remotely.',
      sop: 'カードの種別、権限の範囲、一時カードの発行手続きはSite SOPに定義されている。',
      sopEn: 'Card types, the scope of each permission and the temporary-card procedure are defined in the Site SOP.',
      sources: SRC_EQ, cols: 2,
      topics: [
        {
          h: 'カードリーダーとログ', hEn: 'Readers and Logs',
          b: [
            { ja: 'カードをかざした事実と時刻が記録される', en: 'The system records that a card was presented, and when' },
            { ja: '記録されるのはカードであって、人ではない', en: 'What is recorded is the card, not the person' },
            { ja: '貸与・共用があれば、ログと実際の人物は一致しない', en: 'If cards are lent or shared, the log and the actual person do not match' },
          ],
        },
        {
          h: '共連れ検知とアンチパスバック', hEn: 'Tailgate Detection and Anti-Passback',
          b: [
            { ja: '入室記録のない人が退室しようとすると、警告が出る仕組みがある', en: 'Some systems flag an exit by someone with no matching entry' },
            { ja: '警告が出たら、機器の不具合と決めつけない', en: 'When it flags, do not assume the equipment is faulty' },
            { ja: '第11時限の共連れと同じ事象を、機器側から見たものである', en: 'It is the tailgating of Period 11, seen from the system side' },
          ],
        },
        {
          h: '一時カード', hEn: 'Temporary Cards',
          b: [
            { ja: '発行時に、誰に、いつ、どの権限で渡したかを記録する', en: 'On issue, record who received it, when, and with what permissions' },
            { ja: '回収まで責任が続く。未回収は当日中に報告する', en: 'Your responsibility runs until it is returned. Report any card not returned that day' },
            { ja: '返却されたカードは、権限を解除して保管する', en: 'Deactivate returned cards before storing them' },
          ],
        },
        {
          h: '遠隔開錠の依頼', hEn: 'Requests to Unlock Remotely',
          b: [
            { ja: '電話1本では開けない。誰の依頼か、権限があるかを確認する', en: 'A phone call alone is not enough. Establish who is asking, and whether they may' },
            { ja: '開けた場合は、時刻・扉・依頼者・確認方法を記録する', en: 'If you do open it, record the time, the door, who asked, and how you verified' },
            { ja: '確認できないときは開けない。上長に上げる', en: 'If you cannot verify, do not open it. Pass it up' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B15',
      titleJa: '業務用無線機', titleEn: 'Two-Way Radios',
      obj: '無線機の基本操作と交話の型を述べ、無線で扱わない情報を挙げられる。',
      objEn: 'You can state the basic operation and the calling format, and name what is not said over the radio.',
      sop: 'チャンネル、呼出符号、通話ルールは現場ごとに定められている。',
      sopEn: 'Channels, call signs and voice procedure are set per site.',
      sources: SRC_RAD, cols: 2,
      topics: [
        {
          h: '基本操作', hEn: 'Basic Operation',
          b: [
            { ja: '上番時に、電源・チャンネル・音量・電池残量を確認する', en: 'At the start of your shift, check power, channel, volume and battery' },
            { ja: '送信ボタンを押し、一拍おいてから話す。頭が切れる', en: 'Press the transmit button, pause, then speak. Otherwise the first word is cut off' },
            { ja: '同時には1人しか送信できない。相手の送信中は待つ', en: 'Only one person transmits at a time. Wait while someone else is speaking' },
          ],
        },
        {
          h: '交話の型', hEn: 'The Calling Format',
          b: [
            { ja: '相手→自分→用件の順で言う。「本部、正面、報告します」', en: 'Their call sign, yours, then the message: "Control, Main Entrance, report."' },
            { ja: '数字と固有名詞は復唱する。相手にも復唱してもらう', en: 'Repeat numbers and names back, and have the other side repeat them too' },
            { ja: '短く区切る。長く話すと、割り込みができない', en: 'Keep transmissions short. A long one blocks anyone who needs to break in' },
          ],
        },
        {
          h: '無線で扱わない情報', hEn: 'What Does Not Go Over the Radio',
          b: [
            { ja: '個人名、病名、金額、暗証番号、鍵の所在', en: 'Personal names, medical conditions, sums of money, PINs, where keys are kept' },
            { ja: '推測。見たことだけを送る', en: 'Speculation. Transmit what you saw' },
            { ja: '業務用無線は電波法に基づく設備であり、私語には使わない', en: 'A business radio is licensed equipment under the Radio Act. It is not for chat' },
          ],
        },
        {
          h: '通じないとき', hEn: 'When It Does Not Get Through',
          b: [
            { ja: '地下、階段室、エレベーター内は届きにくい。場所を変える', en: 'Basements, stairwells and lifts are weak spots. Move and try again' },
            { ja: '2回試して通じなければ、電話など別の手段に切り替える', en: 'After two attempts, switch to another means such as the telephone' },
            { ja: '故障・電池切れは、その勤務のうちに報告する', en: 'Report a fault or a flat battery within the same shift' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B15',
      titleJa: '非常通報装置と機械警備の受信機', titleEn: 'Panic Alarms and Alarm Receivers',
      obj: '非常通報装置が作動したときの確認順序を述べ、誤報の扱いを説明できる。',
      objEn: 'You can state the order of checks when an alarm activates, and explain how false alarms are handled.',
      sop: '通報先が監視センターか警察かは現場ごとに異なる。押しボタンの位置も同様である。',
      sopEn: 'Whether the alarm goes to a monitoring centre or to the police differs by site, as does where the buttons are.',
      sources: SRC_MEC, cols: 2,
      topics: [
        {
          h: '非常通報装置', hEn: 'Panic Alarms',
          b: [
            { ja: '受付や執務室に押しボタンが置かれていることがある', en: 'Buttons are often placed at reception desks and in offices' },
            { ja: '通報先は現場によって違う。監視センターの場合と警察の場合がある', en: 'Where it goes differs by site: a monitoring centre, or the police' },
            { ja: '配属初日に、位置と通報先を確認する', en: 'On your first day, confirm where they are and where they report to' },
          ],
        },
        {
          h: '機械警備の受信機', hEn: 'The Alarm Receiver',
          b: [
            { ja: '扉、窓、センサーの状態が表示される', en: 'It shows the state of doors, windows and sensors' },
            { ja: 'セット（警戒）と解除は、権限のある者が定められた手順で行う', en: 'Arming and disarming are done by authorised people, by a set procedure' },
            { ja: '機械警備業務は、法令上、施設警備とは別の届出が必要な業務である', en: 'Alarm-monitoring is a separate regulated activity from facility guarding' },
          ],
        },
        {
          h: '作動したときの順序', hEn: 'The Order of Checks',
          b: [
            { ja: '① どこが、何時に、どの種類の警報かを画面で確認する', en: '1. Read off the screen: where, at what time, and what kind of alarm' },
            { ja: '② 上長または警備本部へ第一報を入れる', en: '2. Give the initial report to your supervisor or the guard office' },
            { ja: '③ 現場を確認する。単独で立ち入らない指定区域がある', en: '3. Check the location. Some areas are designated as never-alone' },
          ],
        },
        {
          h: '誤報の扱い', hEn: 'False Alarms',
          b: [
            { ja: '誤報でも記録する。時刻・箇所・原因・復旧までを残す', en: 'Record it even so: time, location, cause, and when it was restored' },
            { ja: '同じ箇所で繰り返す誤報は、設備の異常として報告する', en: 'Repeated false alarms at the same point are reported as an equipment fault' },
            { ja: '「どうせ誤報」で確認を省かない。省いた分だけ記録も残らない', en: 'Never skip the check as "probably false". Skipping it also leaves no record' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B15',
      titleJa: '機器が使えないとき', titleEn: 'When the Equipment Is Down',
      obj: '機器が停止した場合に、人による確認へ切り替える手順を述べられる。',
      objEn: 'You can state how the work switches to human checks when equipment stops.',
      sop: '代替手順、連絡先、復旧の判断者はSite SOPに定義されている。',
      sopEn: 'Fallback procedures, contacts and who decides on restoration are defined in the Site SOP.',
      sources: SRC_EQ, cols: 2,
      topics: [
        {
          h: '停止したときにすること', hEn: 'What You Do',
          b: [
            { ja: '停止した機器と範囲、停止時刻を確認して報告する', en: 'Establish which equipment, how much of it, and from when — then report' },
            { ja: '機器が止まっても、警備業務は止まらない', en: 'The equipment stopping does not stop the guarding' },
            { ja: 'カメラが止まれば巡回回数を、電気錠が止まれば立哨を増やす', en: 'If cameras stop, patrol more often; if electric locks stop, staff the door' },
          ],
        },
        {
          h: '記録に残すこと', hEn: 'What Goes in the Record',
          b: [
            { ja: '停止時刻、復旧時刻、その間にとった代替措置', en: 'When it stopped, when it was restored, and what you did in between' },
            { ja: '機器操作を行った場合は、誰の指示で行ったかも書く', en: 'If you operated anything, write down on whose instruction' },
            { ja: '停止中の時間帯は、後から検証できない。記録がすべてになる', en: 'The downtime cannot be reviewed afterwards. The record is all there is' },
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
        { ja: 'カメラが設置されている区画なので、巡回を省略した。', en: 'The area has cameras, so you skip the patrol.' },
        { ja: '入退室ログに記録があるので、本人が入ったと結論づけた。', en: 'The access log shows an entry, so you conclude that person went in.' },
        { ja: '面白い映像だったので、休憩中に同僚に見せた。', en: 'The footage was amusing, so you show it to a colleague on your break.' },
        { ja: '無線で「3階で○○さんが倒れています」と流した。', en: 'You transmit: "Mr X has collapsed on the third floor."' },
        { ja: '送信ボタンを押して、一拍おいてから話し始めた。', en: 'You press the transmit button, pause, and then start speaking.' },
        { ja: '一時カードが返却されなかったが、翌日の日勤に伝えることにした。', en: 'A temporary card was not returned, so you leave it for the day shift tomorrow.' },
        { ja: '警報が鳴ったが、この箇所はいつも誤報なので確認しなかった。', en: 'An alarm sounds at a point that is always a false alarm, so you do not check.' },
        { ja: 'カメラが1系統停止したので、その区画の巡回回数を増やした。', en: 'One camera circuit is down, so you increase patrols in that area.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ×　8 ○',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 No · 8 Yes',
      rows: [
        { ja: '設問1 ― カメラは画角の外を映しません。巡回の代わりにはなりません。', en: 'Item 1: a camera does not see outside its frame. It does not replace a patrol.' },
        { ja: '設問2 ― 記録されるのはカードです。人と一致するとは限りません。', en: 'Item 2: the log records the card, not necessarily the person.' },
        { ja: '設問3 ― カメラ画像は個人情報です。業務以外で見せません。', en: 'Item 3: footage is personal data. It is not shown outside the work.' },
        { ja: '設問4 ― 無線に個人名と病状は乗せません。場所と状況だけを送ります。', en: 'Item 4: no names, no medical detail on the radio. Location and situation only.' },
        { ja: '設問6 ― 未回収は当日中に報告します。翌日では権限が生きたままです。', en: 'Item 6: report it the same day. Left overnight, the permissions stay live.' },
        { ja: '設問7 ― 誤報でも確認し、記録します。省けば記録も残りません。', en: 'Item 7: check and record it even so. Skip it and there is no record either.' },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 15-A',
      titleJa: 'TTX 15-A　カメラ停止中のログ不一致', titleEn: 'TTX 15-A — A Log Mismatch While the Cameras Were Down',
      scenarioJa: '土曜21時。防災センターで、4階を映す4台のカメラが同時に停止した。受信機とカードリーダーは動いている。停止から40分後、4階の退室記録が3件出たが、同じ時間帯の入室記録は2件しかない。館内には工事業者が入っており、入館時の人数は4名と記録されている。',
      scenarioEn: 'Saturday, 21:00. In the control room, four cameras covering the fourth floor go down at once. The alarm receiver and the card readers are still running. Forty minutes later, three exits are logged from the fourth floor, but only two entries in the same window. A contractor crew is in the building, logged in at four people.',
      questionJa: 'あなたなら次の10分、何をどう動きますか。',
      questionEn: 'What do you do in the next ten minutes?',
      points: [
        { ja: 'カメラ停止と記録の不一致は、別々に扱うか一緒に扱うか。', en: 'Do you treat the camera outage and the log mismatch as one matter or two?' },
        { ja: '4階へ確認に行くか、先に報告するか。', en: 'Do you go up to the fourth floor, or report first?' },
        { ja: '工事業者にどう確認するか。', en: 'How do you check with the contractor crew?' },
        { ja: '記録には何を書くか。', en: 'What do you write in the record?' },
      ],
      inject: '工事業者の責任者から「作業は終わった。全員出た」と連絡が入った。',
      injectEn: 'The contractor supervisor calls: "We are done. Everyone is out."',
      inject2: '40分後、カメラが復旧した。停止中の映像は記録されていなかった。',
      inject2En: 'Forty minutes on, the cameras come back. Nothing was recorded during the outage.',
      sop: 'カメラ停止時の代替措置と、館内滞在者の確認手順はSite SOPに定義されている。',
      sopEn: 'Fallback measures during a camera outage, and how occupancy is confirmed, are defined in the Site SOP.',
      sources: SRC_EQ + '、架空シナリオ',
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問1〜問6', titleEn: 'Assessment — Questions 1 to 6',
      lead: '15分。回答は日本語・英語どちらでも構いません。記述は一言で結構です。',
      leadEn: '15 minutes. Answer in Japanese or English. Short answers are fine.',
      rows: [
        { ja: '出入管理で確認する3つのことを挙げよ。', en: 'Name the three things access control verifies.' },
        { ja: '共連れを強行突破された。あなたは何をするか。', en: 'Someone tailgates and pushes through. What do you do?' },
        { ja: '巡回の3つの目的を挙げよ。最も忘れられやすいのはどれか。', en: 'Name the three purposes of patrol. Which is most often forgotten?' },
        { ja: '「不審」と判断する根拠にしてよいものと、してはいけないものは何か。', en: 'What may and may not be a ground for treating someone as suspicious?' },
        { ja: '保全と開示の違いは何か。警備員が受けられるのはどちらか。', en: 'What is the difference between preserving and disclosing? Which may you accept?' },
        { ja: '不審な物件を発見した。してはいけないことを3つ挙げよ。', en: 'You find a suspicious object. Name three things you must not do.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問7〜問12', titleEn: 'Assessment — Questions 7 to 12',
      rows: [
        { ja: '引継ぎに必ず含める項目を4つ挙げよ。', en: 'Name four things a handover must contain.' },
        { ja: '受信機が発報した。最初に確認するものは何か。', en: 'The fire panel activates. What do you check first?' },
        { ja: '1号消火栓を、あなた1人で使ってよいか。理由も述べよ。', en: 'May you use a Type 1 hydrant on your own? Give your reason.' },
        { ja: '消火器による初期消火をやめる目安はどこか。', en: 'At what point do you stop trying to put a fire out with an extinguisher?' },
        { ja: '入退室ログに記録が残っていた。「その人が入った」と言えるか。', en: 'An entry appears in the access log. Can you say that person went in?' },
        { ja: '無線で送ってはいけない情報を3つ挙げよ。', en: 'Name three things that must not be sent over the radio.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問1〜問6', titleEn: 'Assessment — Answers 1 to 6',
      lead: '表現が異なっても、要点が含まれていれば正解とします。',
      leadEn: 'Different wording is fine if the point is there.',
      rows: [
        { ja: '問1　誰か、入ってよいか、どこまでか。', en: 'Q1 Who they are, whether they may enter, and how far that goes.' },
        { ja: '問2　追わない。人相・着衣・時刻を記録し、上長へ報告してカメラ確認を依頼する。', en: 'Q2 Do not chase. Record appearance, clothing and time; report and ask for the footage.' },
        { ja: '問3　発見・抑止・記録。忘れられやすいのは記録。', en: 'Q3 Detection, deterrence, documentation. Documentation is the one forgotten.' },
        { ja: '問4　してよいのは観察した行動。国籍・人種・年齢・性別・服装は根拠にならない。', en: 'Q4 Observed behaviour may be a ground. Nationality, race, age, sex and dress may not.' },
        { ja: '問5　保全は残すこと、開示は渡すこと。受けられるのは保全のみ。', en: 'Q5 Preserving keeps it; disclosing hands it over. Only preservation is yours to accept.' },
        { ja: '問6　触らない、動かさない、開けない。そばで無線を使わないも可。', en: 'Q6 Do not touch, move or open it. "No radio nearby" is also accepted.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問7〜問12', titleEn: 'Assessment — Answers 7 to 12',
      lead: '問9と問11は重点問題です。落とした受講者には個別に確認してください。',
      leadEn: 'Questions 9 and 11 are the key items. Follow up individually with anyone who missed them.',
      rows: [
        { ja: '問7　未完了事項／例外的に許可した事項／鍵・備品の授受／設備の異常／在館者／指示 から4つ。', en: 'Q7 Any four of: unresolved matters, exceptions allowed, keys and equipment, faults, who is still in, instructions.' },
        { ja: '問8　地区表示。どこが鳴っているか。確認前に「火事です」とは言わない。', en: 'Q8 The zone display — where it is. Do not say "fire" before verifying.' },
        { ja: '問9　使えない。1号は訓練を積んだ人が2名以上必要。反動が強く、平型ホースの取り回しも難しい。', en: 'Q9 No. Type 1 needs two or more trained people: strong reaction force and a hard-to-handle flat hose.' },
        { ja: '問10　炎が天井に達する前まで。それ以降は避難と通報を優先する。', en: 'Q10 Up to the point flames reach the ceiling. After that, evacuation and calling come first.' },
        { ja: '問11　言えない。記録されるのはカードである。貸与・共用があれば人と一致しない。', en: 'Q11 No. The log records the card. If cards are lent or shared, it does not match the person.' },
        { ja: '問12　個人名／病名／金額／暗証番号／鍵の所在／推測 から3つ。', en: 'Q12 Any three of: personal names, medical conditions, sums of money, PINs, where keys are kept, speculation.' },
      ],
    },

    {
      type: 'close',
      titleJa: 'Day 2 総括', titleEn: 'Day 2 — Review',
      rows: [
        { ja: '出入管理は1認証で1人。応じない相手は追わず、記録に切り替える。', en: 'One authentication, one person. Do not chase; switch to recording.' },
        { ja: '不審の根拠は行動。外見・国籍・言語は根拠にならない。', en: 'Behaviour is the ground. Appearance, nationality and language are not.' },
        { ja: '引継ぎは口頭と記録の両方。「異常なし」だけで終えない。', en: 'Hand over verbally and in writing. Do not stop at "nothing to report".' },
        { ja: '機器は判断を助けるだけで、判断を代わりに行わない。', en: 'Equipment supports the judgement. It does not make it for you.' },
      ],
      next: '2日間で扱ったのは一般原則です。配属先では、必ずSite SOPと警備指令書を確認してください。',
      nextEn: 'These two days covered general principles. On site, always check the Site SOP and post orders.',
    },
  ],
};
