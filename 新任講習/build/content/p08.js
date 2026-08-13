'use strict';
// 第8時限｜業務別教育1 その他当該警備業務を適正に実施するため必要な知識及び技能 ①
// 内容ソース: Day2統合版 C-1 / C-3 / C-7 / C-2 / B-1、CorpSec_4h B1

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = 'その他当該警備業務を適正に実施するため必要な知識及び技能';

module.exports = {
  file: '08_8限_コーポレートセキュリティ理解.pptx',
  footJa: `第8時限｜業務別教育1 ${SUBJ}`,
  footEn: 'Period 8 | Task-Specific Training 1 — Understanding Corporate Security',
  slides: [
    {
      type: 'title',
      kicker: `第8時限　${slot(8)}　業務別教育1`,
      kickerEn: 'Period 8 — Task-Specific Training 1',
      titleJa: 'コーポレートセキュリティ理解',
      titleEn: 'Understanding Corporate Security',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B8',
      titleJa: 'コーポレートセキュリティとは', titleEn: 'What Corporate Security Is',
      obj: 'コーポレートセキュリティの位置づけと自分の任務、誰のために何を守るのかを言語化できる。',
      objEn: 'You can articulate where corporate security fits, your own duties, and who and what you protect.',
      sop: '報告ライン、クライアント窓口、常駐時間帯は現場ごとに異なる。Site SOPに従う。',
      sopEn: 'Reporting lines, client contacts and staffing hours differ by site. Follow the Site SOP.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '他の現場との違い', hEn: 'How It Differs from Other Sites',
          b: [
            { ja: '1号警備のうち、企業オフィス常駐に特化した業務', en: 'A form of Type-1 facility security, focused on stationed duty at corporate offices' },
            { ja: '商業施設・病院・ホテルとも違い、守る対象は企業活動そのもの', en: 'Unlike retail, hospitals or hotels, what is protected is the business activity itself' },
            { ja: '接遇と情報秘匿が、警備の質そのものになる', en: 'Conduct and confidentiality are themselves the quality of the service' },
          ],
        },
        {
          h: '守るべき3本柱', hEn: 'The Three Pillars',
          b: [
            { ja: 'People：クライアント社員、来訪者、そして自分自身の安全', en: 'People: the safety of client staff, visitors, and yourself' },
            { ja: 'Asset：物理資産と情報資産。情報は見えなくても資産である', en: 'Asset: physical and information assets. Information is an asset even unseen' },
            { ja: 'Reputation：物理被害がゼロでも、毀損すれば任務は失敗', en: 'Reputation: even with zero physical loss, harming it is a failed job' },
          ],
        },
        {
          h: 'ステークホルダー三層構造', hEn: 'Three-Tier Stakeholder Structure',
          b: [
            { ja: '自社：警備員の雇用主。教育と指揮命令の主体', en: 'Our company: your employer, responsible for training and the chain of command' },
            { ja: 'ビルオーナー／施設管理会社：建物そのものの管理権原者', en: 'Building owner / facility manager: holds authority over the building itself' },
            { ja: 'クライアント企業（テナント）：発注主でSite SOPの実質決定者', en: 'Client tenant: commissions the service and effectively defines the Site SOP' },
          ],
        },
        {
          h: '報告の流れ', hEn: 'How Reporting Flows',
          b: [
            { ja: '報告は現場リーダーから自社へ', en: 'Report via the site leader to our company' },
            { ja: 'クライアントへの対応は上長経由で行う', en: 'Anything for the client goes through your supervisor' },
            { ja: '三者に直接ばらばらに報告しない', en: 'Do not report separately to all three parties' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B8',
      titleJa: '出身背景をどう活かすか', titleEn: 'Building on Where You Come From',
      obj: '自分の経歴と語学が、この現場でどう働くかを説明できる。',
      objEn: 'You can explain how your background and languages work on this site.',
      sop: '対応可能な言語の申告先と、通訳が必要な場合の手順は現場ごとに異なる。',
      sopEn: 'Where to declare the languages you speak, and what to do when interpretation is needed, differ by site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '語学は業務の一部である', hEn: 'Language Is Part of the Job',
          b: [
            { ja: '来訪者に外国籍の方がいる現場では、対応できることが直接役に立つ', en: 'Where visitors include non-Japanese speakers, being able to respond is directly useful' },
            { ja: '話せる言語を会社に申告しておく', en: 'Tell the company which languages you speak' },
            { ja: '通訳として扱われる場面と、警備員として対応する場面を分ける', en: 'Separate acting as an interpreter from acting as a guard' },
          ],
        },
        {
          h: '前職の経験の扱い', hEn: 'Experience from Previous Work',
          b: [
            { ja: '接客・運転・整備などの経験は、そのまま現場で使える', en: 'Experience in service, driving or maintenance carries over directly' },
            { ja: '母国での警備・警察・軍の経験は、権限の前提が異なる', en: 'Security, police or military experience abroad rests on different powers' },
            { ja: '日本での権限は本日と昨日の内容がすべてである', en: 'In Japan, your authority is what we covered yesterday and today, and no more' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B8',
      titleJa: '警備指令書（Post Orders）', titleEn: 'Post Orders',
      obj: '警備指令書が何を定めるものかを述べ、書かれていない事態での動き方を言える。',
      objEn: 'You can say what post orders cover, and what you do when a situation is not in them.',
      sop: '警備指令書の保管場所、改訂の周知方法、確認の記録は現場ごとに定められている。',
      sopEn: 'Where the post orders are kept, how revisions are notified, and how you record reading them are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '何が書かれているか', hEn: 'What Is in Them',
          b: [
            { ja: '勤務時間、配置、巡回の回数と経路、鍵の扱い', en: 'Hours, posts, patrol frequency and route, key handling' },
            { ja: '入退館の基準、来訪者の扱い、記録の様式', en: 'Entry criteria, how visitors are handled, record formats' },
            { ja: '緊急連絡体制。誰に、どの順で連絡するか', en: 'The call-out list: who you contact, and in what order' },
          ],
        },
        {
          h: '読み方', hEn: 'How to Read Them',
          b: [
            { ja: '配属初日に通読する。分からない箇所はその日に聞く', en: 'Read them through on your first day. Ask about anything unclear that day' },
            { ja: '改訂されたら差分を確認する。前の版で動かない', en: 'When they are revised, check what changed. Do not work from the old version' },
            { ja: '記憶ではなく、その場で確認する習慣をつける', en: 'Check the document rather than relying on memory' },
          ],
        },
        {
          h: '書かれていない事態', hEn: 'When It Is Not in Them',
          b: [
            { ja: '指令書にない事態は必ず起きる。それ自体は異常ではない', en: 'Situations outside the orders will occur. That in itself is not abnormal' },
            { ja: '一般原則に戻る。人命 → 法令 → Site SOP → クライアント要望', en: 'Fall back on the general order: life, law, Site SOP, client wishes' },
            { ja: '自分で新しい運用を作らない。上長へ確認する', en: 'Do not invent a new practice yourself. Check with your supervisor' },
          ],
        },
        {
          h: '指令書が法令を超えることはない', hEn: 'Orders Never Outrank the Law',
          b: [
            { ja: '指令書は、警備員に新しい権限を与えるものではない', en: 'Post orders cannot create new legal authority for you' },
            { ja: '法令と矛盾する記載に気づいたら、実行せずに報告する', en: 'If you notice a conflict with the law, report it rather than acting on it' },
            { ja: '「指令書に書いてあった」は、権限外の行為の根拠にならない', en: '"It was in the post orders" is not a basis for acting beyond your authority' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B8',
      titleJa: '施設警備業務の基本原則と1日の流れ', titleEn: 'The Basic Principles, and the Shape of a Day',
      obj: '施設警備の基本原則を述べ、1日の業務の流れを順に言える。',
      objEn: 'You can state the basic principles, and walk through the shape of a working day.',
      sop: '勤務時間帯、交代時刻、巡回の回数は現場ごとに指定される。',
      sopEn: 'Hours, changeover times and patrol frequency are specified per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '2つの基本原則', hEn: 'Two Basic Principles',
          b: [
            { ja: '警戒 ― 異常を早期に発見すること', en: 'Alerting: finding a problem early' },
            { ja: '防止 ― 事故や犯罪を未然に防ぐこと', en: 'Prevention: stopping incidents and crime before they happen' },
            { ja: '起きてから対処するのではなく、起きる前に気づく', en: 'The work is noticing before it happens, not responding after' },
          ],
        },
        {
          h: '1日の流れ', hEn: 'The Shape of a Day',
          b: [
            { ja: '出勤 → 身だしなみ確認 → 前直からの申し送り → 鍵・備品の受領', en: 'Arrive, check your appearance, take the handover, receive keys and equipment' },
            { ja: '立哨・受付・出入管理・巡回を、指定された時間帯で行う', en: 'Stand post, reception, access control and patrol, in the specified periods' },
            { ja: '記録 → 次直への申し送り → 鍵・備品の返納 → 退勤', en: 'Record, hand over to the next shift, return keys and equipment, go off duty' },
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
        { ja: '警備指令書に書いてあれば、権限を超える対応もしてよい。', en: 'If it is in the post orders, you may act beyond your authority.' },
        { ja: '指令書にない事態が起きるのは、異常なことである。', en: 'A situation outside the post orders is itself abnormal.' },
        { ja: '母国で警備の経験があれば、日本でも同じ対応でよい。', en: 'With security experience abroad, you may act the same way in Japan.' },
        { ja: 'クライアントへの報告は、直接行うのが早くてよい。', en: 'It is better to report to the client directly, because it is faster.' },
        { ja: '施設警備の基本原則は、警戒と防止である。', en: 'The basic principles of facility security are alerting and prevention.' },
        { ja: '物理的な被害がなければ、任務は成功と言える。', en: 'With no physical loss, the job can be called a success.' },
        { ja: '指令書が改訂されても、覚えている前の版で動いてよい。', en: 'After a revision, it is fine to work from the version you remember.' },
        { ja: '話せる言語は、会社に申告しておく。', en: 'You should tell the company which languages you speak.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ×　8 ○',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 No · 8 Yes',
      rows: [
        { ja: '設問1 ― 指令書は新しい権限を与えません。法令が上にあります。', en: 'Item 1: post orders create no new authority. The law sits above them.' },
        { ja: '設問2 ― 書かれていない事態は必ず起きます。一般原則に戻ります。', en: 'Item 2: situations outside the orders will occur. Fall back on the general order.' },
        { ja: '設問3 ― 母国と日本では権限の前提が異なります。', en: 'Item 3: the powers behind the work are different in Japan.' },
        { ja: '設問6 ― Reputation を毀損すれば、物理被害がなくても失敗です。', en: 'Item 6: harm to reputation is a failure, even with no physical loss.' },
        { ja: '設問4・7 ― 報告は上長経由。改訂後は差分を確認してから動きます。', en: 'Items 4 and 7: report through your supervisor, and check what changed after a revision.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 8-A',
      titleJa: 'TTX 8-A　指令書にない事態', titleEn: 'TTX 8-A — Not in the Post Orders',
      scenarioJa: '土曜日の午後、無人のはずのフロアで電気が点いている。警備指令書には土曜の在館者に関する記載がない。入退室ログを見ると、金曜の23時に入室した記録があり、退室の記録がない。当該社員の氏名は分かるが、連絡先は分からない。上長は電話に出ない。',
      scenarioEn: 'Saturday afternoon. The lights are on in a floor that should be empty. The post orders say nothing about Saturday occupancy. The access log shows an entry at 23:00 on Friday with no matching exit. You have the employee\'s name but no contact details. Your supervisor is not answering.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '指令書に記載がないとき、何を判断の拠り所にするか。', en: 'With nothing in the post orders, what do you fall back on?' },
        { ja: 'これは People / Asset / Reputation のどれに関わるか。', en: 'Which pillar does this concern: People, Asset, or Reputation?' },
        { ja: 'フロアに立ち入って確認してよいか。根拠は何か。', en: 'May you enter the floor to check? On what basis?' },
        { ja: '上長に連絡がつかない場合、次に誰へ連絡するか。', en: 'With your supervisor unreachable, who do you contact next?' },
      ],
      inject: 'フロアに入ると、机に伏せて動かない人物が1名いる。',
      injectEn: 'On the floor you find one person slumped over a desk, not moving.',
      inject2: '声をかけると顔を上げ、「徹夜で作業していた」と言った。',
      inject2En: 'You speak to them; they look up and say they have been working through the night.',
      sop: '休日の在館者確認、立入の可否、緊急連絡体制の順位は現場ごとに定められている。',
      sopEn: 'Weekend occupancy checks, whether you may enter, and the call-out order are set per site.',
      sources: SRC.fac + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第8時限 まとめ', titleEn: 'Period 8 — Summary',
      rows: [
        { ja: '守るのは People / Asset / Reputation。情報は Asset に含む。', en: 'You protect People, Asset and Reputation. Information is part of Asset.' },
        { ja: '報告は現場リーダーから自社へ。クライアント対応は上長経由。', en: 'Report via the site leader to our company. Client matters go through your supervisor.' },
        { ja: '警備指令書は権限を与えない。法令を超える記載には従わない。', en: 'Post orders create no authority. Do not follow an entry that exceeds the law.' },
        { ja: '施設警備の基本原則は、警戒と防止。起きる前に気づく。', en: 'The principles are alerting and prevention: notice it before it happens.' },
      ],
      next: '第9時限 ― 情報をどう守るか、外部からの接触にどう応じるかを扱います。',
      nextEn: 'Period 9 — protecting information, and handling approaches from outside.',
    },
  ],
};
