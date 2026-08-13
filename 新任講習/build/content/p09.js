'use strict';
// 第9時限｜業務別教育2 その他当該警備業務を適正に実施するため必要な知識及び技能 ②
// 内容ソース: CorpSec_4h B1-4 / B4 / B5、Day1統合版 A-9

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = 'その他当該警備業務を適正に実施するため必要な知識及び技能';

module.exports = {
  file: '09_9限_情報資産保護と対外対応.pptx',
  footJa: `第9時限｜業務別教育2 ${SUBJ}`,
  footEn: 'Period 9 | Task-Specific Training 2 — Protecting Information, Handling Outsiders',
  slides: [
    {
      type: 'title',
      kicker: `第9時限　${slot(9)}　業務別教育2`,
      kickerEn: 'Period 9 — Task-Specific Training 2',
      titleJa: '情報資産保護と対外対応',
      titleEn: 'Protecting Information, and Handling Approaches from Outside',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B9',
      titleJa: '守秘義務とNDA', titleEn: 'Confidentiality and the NDA',
      obj: '業務上知った情報の扱いと、違反した場合に何が起きるかを説明できる。',
      objEn: 'You can explain how to handle information learned on duty, and what happens if you breach it.',
      sop: '機密書類の取扱フロー、撮影の可否、私物端末の持込可否は現場ごとに異なる。',
      sopEn: 'Handling of confidential documents, photography, and personal devices differ by site.',
      sources: SRC.info, cols: 2,
      topics: [
        {
          h: '業務上知った情報', hEn: 'Information Learned on Duty',
          b: [
            { ja: 'フロア配置、社員の動向、来客、トラブル、設備。すべて他言禁止', en: 'Floor layout, staff movements, visitors, incidents, equipment. None of it may be discussed' },
            { ja: '家族・同僚・他現場の警備員に対しても同じ', en: 'The same applies to family, colleagues, and guards at other sites' },
            { ja: '退職後も守秘義務は継続する。時間の経過で解除されない', en: 'It continues after you leave, and time does not release it' },
          ],
        },
        {
          h: '営業秘密の3要件', hEn: 'The Three Tests for a Trade Secret',
          b: [
            { ja: '秘密管理性 ― 秘密として管理されていること', en: 'Managed as a secret' },
            { ja: '有用性 ― 事業活動に有用な情報であること', en: 'Useful to business activity' },
            { ja: '非公知性 ― 公然と知られていないこと。3つを満たすと刑事罰の対象になりうる', en: 'Not publicly known. Meeting all three can bring criminal penalties' },
          ],
        },
        {
          h: 'SNSと撮影', hEn: 'Social Media and Photography',
          b: [
            { ja: '業務中の撮影は原則禁止。制服・社章が写るものも含む', en: 'Photography on duty is prohibited, including anything showing uniform or insignia' },
            { ja: '勤務先が特定できる投稿をしない。位置情報にも注意', en: 'Do not post anything that identifies the site. Watch location metadata' },
            { ja: '内装や窓景で建物は特定される', en: 'Interiors and views identify a building' },
          ],
        },
        {
          h: '実務での境界', hEn: 'Where the Line Falls in Practice',
          b: [
            { ja: '落ちている書類は読まない。表紙の分類表示までで判断する', en: 'Do not read a document you find. Judge from the classification on the cover' },
            { ja: '会話が聞こえることは避けられない。記憶を持ち出さない', en: 'You cannot avoid overhearing. Do not carry what you heard out with you' },
            { ja: '来訪者名簿・入退室ログは、業務目的以外で見ない', en: 'Do not look at visitor lists or access logs outside their purpose' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B9',
      titleJa: '物理と情報の境界', titleEn: 'Where Physical Security Meets Information',
      obj: '物理的に入れる人が情報にも近づけることを理解し、巡回時の着眼点を挙げられる。',
      objEn: 'You understand that physical access means information access, and can name what to look for.',
      sop: '記憶媒体・撮影機器の持込制限、情報部門との連携ラインは現場ごとに異なる。',
      sopEn: 'Restrictions on storage media and cameras, and the link to the IT team, differ by site.',
      sources: SRC.info, cols: 2,
      topics: [
        {
          h: '入れる人は、情報にも近づける', hEn: 'Whoever Can Enter Can Reach the Information',
          b: [
            { ja: '物理と情報は連続している。分けて考えない', en: 'Physical and information security are continuous. Do not treat them separately' },
            { ja: '委託先・派遣・常駐業者も、入れる人である', en: 'Contractors, dispatch staff and resident vendors are all people who can enter' },
            { ja: '警備員は、物理側の最前線に立っている', en: 'You stand at the physical end of that continuum' },
          ],
        },
        {
          h: '巡回時の着眼点', hEn: 'What to Look For on Patrol',
          b: [
            { ja: '無人の席のIDカード、鍵、離席中の端末', en: 'ID cards, keys and unlocked devices at empty desks' },
            { ja: 'ホワイトボードの書き残し、複合機に残った出力物', en: 'Writing left on whiteboards, printouts left in the copier' },
            { ja: '会議室に残された配布資料、机上の書類', en: 'Handouts left in meeting rooms, documents left on desks' },
          ],
        },
        {
          h: '「いつもと違う」を言葉にする', hEn: 'Putting "Different from Usual" into Words',
          b: [
            { ja: '深夜や休日の、同一人物による長時間の単独入館', en: 'Long solo entries by the same person at night or at weekends' },
            { ja: '同じ業者の頻繁な出入り、予定にない作業', en: 'Frequent visits by the same vendor, or work that was not scheduled' },
            { ja: '業務用端末への私物デバイスの接続', en: 'A personal device connected to a work computer' },
          ],
        },
        {
          h: '警備員の役割', hEn: 'Your Part in It',
          b: [
            { ja: '見て、記録して、上げる。ここまでが役割である', en: 'See it, record it, pass it up. That is where your part ends' },
            { ja: '中身を確認しない。USBメモリを端末に接続しない', en: 'Do not check the contents. Never plug a found USB drive into a computer' },
            { ja: '判断は情報部門と上長が行う', en: 'The assessment is for the IT team and your supervisor' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B9',
      titleJa: 'カメラ画像と入退室ログ', titleEn: 'Footage and Access Logs',
      obj: '画像とログが証拠にも個人情報にもなることを踏まえ、保全と開示を区別できる。',
      objEn: 'You can separate preservation from disclosure, knowing logs are both evidence and personal data.',
      sop: '保存期間、閲覧権限、開示手続、保全依頼の宛先は現場ごとに異なる。契約による。',
      sopEn: 'Retention, viewing rights, disclosure procedure and who to ask for preservation differ by site.',
      sources: SRC.info, cols: 2,
      topics: [
        {
          h: '二重の性質', hEn: 'They Are Two Things at Once',
          b: [
            { ja: '後の調査・懲戒・訴訟で証拠になる', en: 'They become evidence in later investigation, discipline and litigation' },
            { ja: '同時に、個人を識別できれば個人情報でもある', en: 'At the same time, if a person can be identified, they are personal data' },
            { ja: '上書きされると回復できない。時間の制約がある', en: 'Once overwritten they cannot be recovered. There is a time limit' },
          ],
        },
        {
          h: '保全の依頼', hEn: 'Requesting Preservation',
          b: [
            { ja: '事案を認知したら、上書き前に保全を依頼する', en: 'On becoming aware of an incident, request preservation before overwrite' },
            { ja: '対象を特定して伝える。日時、区画、カメラ番号', en: 'Specify the target: date and time, zone, camera number' },
            { ja: '依頼した事実と時刻を記録する', en: 'Record that you asked, and when' },
          ],
        },
        {
          h: '保全と開示は別のもの', hEn: 'Preserving Is Not Disclosing',
          b: [
            { ja: '保全＝残すこと。警備員が受けられる', en: 'Preserving means keeping it. You may accept that request' },
            { ja: '開示＝渡すこと。警備員は判断しない', en: 'Disclosing means handing it over. That is not yours to decide' },
            { ja: '「見て教えて」も開示と同じ結果になる', en: '"Just look and tell me" produces the same result as disclosure' },
          ],
        },
        {
          h: '求められたときの言い方', hEn: 'What to Say When Asked',
          b: [
            { ja: '「私には開示の判断ができません。担当へお繋ぎします」', en: '"I am not able to decide on that. Let me connect you with the right person"' },
            { ja: '相手が社員でも警察官でも、その場では見せない', en: 'Do not show it on the spot, whether to an employee or a police officer' },
            { ja: '断ったこと、その理由、時刻を記録する', en: 'Record that you declined, why, and when' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B9',
      titleJa: '外部からの接触', titleEn: 'Approaches from Outside',
      obj: 'メディア・撮影者・苦情申立者への初動を、権限の範囲内で取れる。',
      objEn: 'You can take first steps with media, photographers and complainants, inside your authority.',
      sop: '広報窓口、撮影者対応フロー、苦情の報告先は現場ごとに定められている。',
      sopEn: 'PR contacts, photographer-handling flow and complaint routes are set per site.',
      sources: SRC.info, cols: 2,
      topics: [
        {
          h: 'メディア・取材者', hEn: 'Media and Reporters',
          b: [
            { ja: '警備員は会社の代表ではない。コメントを出さない', en: 'You do not represent the company. Give no comment' },
            { ja: '撮影許可も、人物の確認も出さない', en: 'Give no shooting permission, and confirm nothing about any individual' },
            { ja: '「対応窓口がございます」と案内し、上長へ取り次ぐ', en: '"There is a dedicated contact." Refer them to your supervisor' },
          ],
        },
        {
          h: '撮影している人物', hEn: 'Someone Filming',
          b: [
            { ja: '用件を聞くところから入る。撮影禁止の通告から入らない', en: 'Open by asking what they need, not with a no-photography warning' },
            { ja: '館内は中止を求められる。根拠は管理権者から委ねられた運用', en: 'Inside, you may ask them to stop, on the site authority\'s rule' },
            { ja: 'カメラを取り上げない。画像を消させない', en: 'Do not seize the camera. Do not make them delete images' },
          ],
        },
        {
          h: '苦情・迷惑行為', hEn: 'Complaints and Disruptive Behaviour',
          b: [
            { ja: '傾聴 → 事実確認 → 上長へ取り次ぐ。その場で裁定しない', en: 'Listen, establish the facts, refer upward. Do not adjudicate on the spot' },
            { ja: '感情的に応じない。声量を上げない', en: 'Do not respond emotionally, and do not raise your voice' },
            { ja: 'やり取りが記録されている前提で振る舞う', en: 'Act on the assumption that the exchange is being recorded' },
          ],
        },
        {
          h: '警察官を名乗る人物', hEn: 'A Person Presenting as Police',
          b: [
            { ja: '警察官であることは、その場の開示の根拠にならない', en: 'Being a police officer is not a basis for disclosure on the spot' },
            { ja: '所属・階級・氏名・連絡先を控える。確認は失礼ではない', en: 'Note the unit, rank, name and contact. Verifying is not discourtesy' },
            { ja: '上長とクライアントへ取り次ぐ。自分で判断しない', en: 'Refer to your supervisor and the client. Do not decide yourself' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B9',
      titleJa: '参考資料 ― 内部からの持ち出し', titleEn: 'Reference — Exfiltration from Inside',
      obj: '公表された事案から、物理側で気づける兆候を挙げられる。',
      objEn: 'From a published case, you can name the signs the physical side could have noticed.',
      sop: '記憶媒体の持込制限、情報部門への連絡ラインは現場ごとに異なる。',
      sopEn: 'Restrictions on storage media and the route to the IT team differ by site.',
      sources: '経済産業省「営業秘密管理指針」、ベネッセコーポレーション「事故の概要」（公表事案）',
      cols: 2,
      topics: [
        {
          h: '公表されている事案', hEn: 'The Published Case',
          b: [
            { ja: '2014年に公表された、国内企業の大規模な顧客情報漏洩', en: 'A large-scale customer data leak at a Japanese company, disclosed in 2014' },
            { ja: '外部からの侵入ではなく、正規のアクセス権をもつ者による持ち出し', en: 'Not an external break-in: exfiltration by someone with legitimate access' },
            { ja: '業務用PCに私物端末を接続してデータを取り出したと公表されている', en: 'It was reported that a personal device was connected to a work PC to extract data' },
          ],
        },
        {
          h: '物理側で気づける点', hEn: 'What the Physical Side Could Notice',
          b: [
            { ja: '業務用端末への私物デバイスの接続', en: 'A personal device connected to a work computer' },
            { ja: '業務時間外の単独作業、深夜や休日の長時間の入館', en: 'Solo work outside hours, long entries at night or at weekends' },
            { ja: '「いつも通り」は安全という意味ではない', en: '"The same as always" does not mean safe' },
          ],
        },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 9-A',
      titleJa: 'TTX 9-A　社外秘の書類が落ちている', titleEn: 'TTX 9-A — A Confidential Document on the Floor',
      scenarioJa: '深夜2時、クライアントのオフィスを巡回中。執務エリアの床にA4書類が1枚落ちている。表紙に「社外秘　◯◯プロジェクト 役員会議資料」。ページをめくれば中身が読める状態。周囲に人はいない。',
      scenarioEn: '02:00, patrolling the client\'s office. A single A4 document lies on the floor of the work area. The cover reads "Confidential — Board Meeting Material." Turning the page would reveal the contents. Nobody is around.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: 'これは People / Asset / Reputation のどれに関わる事案か。', en: 'Which pillar does this concern: People, Asset, or Reputation?' },
        { ja: '拾い上げてよいか。中身を読んでよいか。その理由は。', en: 'May you pick it up? May you read it? Why or why not?' },
        { ja: '誰に、いつ報告するか。深夜であることは影響するか。', en: 'Whom do you report to, and when? Does the hour change your answer?' },
        { ja: '警備日誌とインシデントレポートに、どう書くか。', en: 'How do you write it in the log and the incident report?' },
      ],
      inject: '書類を手にしたところで、清掃員が入室してきた。',
      injectEn: 'As you pick it up, a cleaner enters the room.',
      inject2: '翌朝、クライアントの社員から「昨夜あの資料を見なかったか」と聞かれた。',
      inject2En: 'The next morning a client employee asks whether you saw that document last night.',
      sop: '機密書類の取扱フローは現場ごとに異なる。Site SOPを必ず確認する。',
      sopEn: 'Procedures for handling confidential documents differ by site. Always check the Site SOP.',
      sources: SRC.info + '、架空シナリオ',
    },

    {
      type: 'caseSlide', block: 'CASE 9-B',
      titleJa: 'TTX 9-B　入退室ログの提供を求められた', titleEn: 'TTX 9-B — Asked for the Access Log',
      scenarioJa: '21時、クライアント企業の部長がセキュリティデスクに来る。「うちの部員が備品を持ち出した疑いがある。今日の入退室ログとエレベーターホールのカメラ画像を、いま見せてほしい」。相手はクライアント側の管理職で、日頃から警備に協力的である。上長は不在。',
      scenarioEn: '21:00. A department head from the client company comes to the security desk: "One of my staff may have taken equipment. I want to see today\'s access log and the lift-lobby footage now." They are a client manager who has always been cooperative. Your supervisor is away.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: 'クライアントの管理職であることは、開示の根拠になるか。', en: 'Does being a client manager justify disclosure?' },
        { ja: '警備員に開示の可否を判断する権限はあるか。', en: 'Does a guard have authority to decide on disclosure?' },
        { ja: '断る場合、何と言うか。関係を壊さずに断れるか。', en: 'If you decline, what do you say? Can you decline without damaging the relationship?' },
        { ja: '保全の依頼は受けてよいか。開示との違いは何か。', en: 'May you accept a request to preserve? How does that differ from disclosure?' },
      ],
      inject: '相手が「では、私が見るのではなく、あなたが見て教えてほしい」と述べた。',
      injectEn: 'They say: "Then do not show me. You look, and tell me what you see."',
      inject2: '相手が「では正式に依頼書を出す。それまで消さないでくれ」と述べた。',
      inject2En: 'They say: "Then I will submit a formal request. Until then, do not delete it."',
      sop: '開示の判断者、保全依頼の受付方法、記録の様式は現場ごとに異なる。契約による。',
      sopEn: 'Who decides on disclosure, how preservation requests are taken, and the record format differ by site.',
      sources: SRC.info + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第9時限 まとめ', titleEn: 'Period 9 — Summary',
      rows: [
        { ja: '守秘義務は退職後も続く。営業秘密の侵害は刑事罰の対象になりうる。', en: 'Confidentiality continues after you leave. Trade-secret breaches can carry criminal penalties.' },
        { ja: '落ちている書類は読まない。表紙の分類表示までで判断する。', en: 'Do not read a document you find. Judge from the cover classification only.' },
        { ja: '保全＝残すこと、開示＝渡すこと。受けられるのは保全だけ。', en: 'Preserving means keeping; disclosing means handing over. Only preservation is yours to accept.' },
        { ja: 'メディアにコメントしない。カメラも画像も取り上げない。', en: 'No comment to media. Do not seize a camera or delete images.' },
      ],
      next: '第10時限 ― 立哨・受付・接遇。人と最初に接する場面を扱います。',
      nextEn: 'Period 10 — standing post, reception and conduct: the first contact with people.',
    },
  ],
};
