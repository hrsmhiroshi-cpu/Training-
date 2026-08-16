'use strict';
// 第10時限｜業務別教育3 立哨・受付・接遇
// 内容ソース: Day2統合版 B-3 / C-5 / C-6、CorpSec_4h B2

const { META_JA, META_EN, SRC, slot } = require('./common');

const SUBJ = 'その他当該警備業務を適正に実施するため必要な知識及び技能';

module.exports = {
  file: '10_10限_立哨受付接遇.pptx',
  footJa: `第10時限｜業務別教育3 ${SUBJ}`,
  footEn: 'Period 10 | Task-Specific Training 3 — Standing Post, Reception and Conduct',
  slides: [
    {
      type: 'title',
      kicker: `第10時限　${slot(10)}　業務別教育3`,
      kickerEn: 'Period 10 — Task-Specific Training 3',
      titleJa: '立哨・受付・接遇',
      titleEn: 'Standing Post, Reception and Conduct',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'topics', block: 'B10',
      titleJa: '立哨', titleEn: 'Standing Post',
      obj: '立哨の目的を述べ、立ち位置と姿勢を自分で説明できる。',
      objEn: 'You can state what standing post is for, and justify your position and bearing.',
      sop: '立哨位置、時間帯、交代の方法、離れてよい場合は現場ごとに定められている。',
      sopEn: 'Where you stand, when, how you change over, and when you may leave are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '目的', hEn: 'What It Is For',
          b: [
            { ja: '見えることで、外部に警備の存在を示す', en: 'Being visible shows that the site is guarded' },
            { ja: '出入りする人を見て、異常に気づく', en: 'Watching who comes and goes is how you notice something wrong' },
            { ja: '来訪者が最初に接する相手になる', en: 'You are the first person a visitor deals with' },
          ],
        },
        {
          h: '立ち位置', hEn: 'Where You Stand',
          b: [
            { ja: '指定された位置に立つ。見やすく、見られる位置である', en: 'Stand where you are told. It is chosen to see and to be seen' },
            { ja: '出入口と動線の両方が視野に入るように向く', en: 'Face so that both the entrance and the flow of people are in view' },
            { ja: '通行の妨げにならない位置を保つ', en: 'Keep out of the way of people passing' },
          ],
        },
        {
          h: '姿勢', hEn: 'Bearing',
          b: [
            { ja: '壁にもたれない。腕を組まない。手を後ろで組まない', en: 'Do not lean on walls, fold your arms, or clasp your hands behind you' },
            { ja: '私語をしない。私物端末を操作しない', en: 'No chatting on post. Do not use a personal device' },
            { ja: '見られている場所と、そうでない場所を分けない', en: 'Do not behave differently where you think no one is watching' },
          ],
        },
        {
          h: '持ち場を離れるとき', hEn: 'Leaving Your Post',
          b: [
            { ja: '無断で離れない。離れる場合は連絡して交代を得る', en: 'Do not leave without authorisation. Notify and be relieved' },
            { ja: '離れた時刻と理由、戻った時刻を記録する', en: 'Record when you left, why, and when you returned' },
            { ja: '人命に関わる場合は、離れることが正しい判断になる', en: 'Where life is at stake, leaving is the correct decision' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B10',
      titleJa: '受付の4ステップ', titleEn: 'Reception — Four Steps',
      obj: '来訪者対応の順序を、迷わず同じ手順で行える。',
      objEn: 'You can run the same sequence for every visitor, without hesitating.',
      sop: '来訪者の区分、受付台帳の様式、バッジの運用は現場ごとに異なる。',
      sopEn: 'Visitor categories, the reception log format and badge practice differ by site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '① アポイントを確認する', hEn: '1. Confirm the Appointment',
          b: [
            { ja: '訪問先、担当者名、予定時刻を聞く', en: 'Ask who they are visiting, the name of the host, and the time' },
            { ja: '受付台帳が一次情報。来訪者の自己申告は二次情報', en: 'The reception log is primary. What the visitor says is secondary' },
            { ja: '飛び込み訪問は、ホストの同意なしに通さない', en: 'No walk-in is admitted without the host\'s agreement' },
          ],
        },
        {
          h: '② ホストに連絡する', hEn: '2. Contact the Host',
          b: [
            { ja: '内線などで在席と受入を確認する', en: 'Confirm the host is there and is expecting them' },
            { ja: '不在の場合は、別の連絡手段を試す', en: 'If they are not there, try another channel' },
            { ja: '確認が取れない間は、待っていただく', en: 'Until it is confirmed, ask the visitor to wait' },
          ],
        },
        {
          h: '③ 本人確認を行う', hEn: '3. Verify Identity',
          b: [
            { ja: '氏名と会社名を確認する。手順は相手によって変えない', en: 'Confirm name and company. The procedure does not change with the person' },
            { ja: '確認は手続きであって、疑いではない', en: 'Verifying is a procedure, not an accusation' },
            { ja: 'バッジを渡し、退館時に回収する', en: 'Issue a badge, and collect it when they leave' },
          ],
        },
        {
          h: '④ 記録する', hEn: '4. Record',
          b: [
            { ja: '来訪時刻、氏名、会社名、訪問先、退館時刻', en: 'Time in, name, company, who they visited, time out' },
            { ja: '例外を認めた場合は、誰の承認によるかを書く', en: 'If an exception was made, write whose authorisation it was on' },
            { ja: '「誰が来ているか」自体が機密になりうる。他言しない', en: 'Who is visiting can itself be confidential. Do not pass it on' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B10',
      titleJa: '業者・VIPへの対応', titleEn: 'Contractors and Senior Visitors',
      obj: '業者とVIPの受入で、通常と変える点と変えない点を区別できる。',
      objEn: 'You can separate what changes for contractors and senior visitors, and what does not.',
      sop: '業者用の動線、作業届の確認方法、VIP対応の指定は現場ごとに定められている。',
      sopEn: 'Vendor routes, how work permits are checked, and senior-visitor handling are set per site.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '配送業者・工事業者', hEn: 'Couriers and Contractors',
          b: [
            { ja: '業者用の受付や動線がある場合は、必ずそちらへ誘導する', en: 'Where there is a separate vendor reception or route, always use it' },
            { ja: '工事は、事前の申請と作業届を確認する', en: 'For works, check the prior application and the work permit' },
            { ja: '名札や作業服があっても、確認は省略しない', en: 'A name tag or work uniform does not let you skip the check' },
          ],
        },
        {
          h: 'VIP・役員', hEn: 'Executives and Senior Visitors',
          b: [
            { ja: '露骨な特別扱いをしない。動線とプライバシーを確保する', en: 'No conspicuous special treatment. Secure the route and their privacy' },
            { ja: '「誰が来ているか」自体が機密情報になりうる', en: 'The fact of who is visiting can itself be confidential' },
            { ja: '撮影とSNS投稿を防ぐ。館内での撮影に注意する', en: 'Prevent photography and posting. Watch for filming inside' },
          ],
        },
        {
          h: '変えないこと', hEn: 'What Does Not Change',
          b: [
            { ja: '本人確認と記録は、相手が誰であっても行う', en: 'Identity checks and records happen whoever the person is' },
            { ja: '例外を認めるのは、権限のある者の承認があるときだけ', en: 'An exception needs authorisation from someone who has the authority' },
            { ja: '承認を得た場合も、誰の承認かを記録する', en: 'Even with authorisation, record whose it was' },
          ],
        },
        {
          h: '急いでいる相手への対応', hEn: 'When Someone Is in a Hurry',
          b: [
            { ja: '「お急ぎのところ申し訳ありません」と受け止めてから手続きに入る', en: 'Acknowledge it first, then start the procedure' },
            { ja: '待たせることは失礼ではない。手順を飛ばすことが問題になる', en: 'Asking someone to wait is not rude. Skipping steps is the problem' },
            { ja: '押し問答になったら、受付か上長へ取り次ぐ', en: 'If it becomes a standoff, refer to reception or your supervisor' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B10',
      titleJa: '異文化への対応と倫理', titleEn: 'Working Across Cultures, and Ethics',
      obj: '相手の背景にかかわらず同じ手続きを行い、贈答や便宜の申し出を断れる。',
      objEn: 'You can run the same procedure regardless of background, and decline gifts and favours.',
      sop: '対応可能な言語の申告、贈答品の受領可否と届出先は会社とクライアントの規程による。',
      sopEn: 'Declaring languages, and whether gifts may be accepted and where to declare them, follow company and client rules.',
      sources: SRC.fac, cols: 2,
      topics: [
        {
          h: '手続きは変えない', hEn: 'The Procedure Does Not Change',
          b: [
            { ja: '国籍・言語・服装で手続きを変えない', en: 'Do not vary the procedure by nationality, language or dress' },
            { ja: '通じないときは、速度を落として短く言い直す', en: 'When you are not understood, slow down and say it again, shorter' },
            { ja: '推測で通さない。確認できるまで待っていただく', en: 'Do not admit someone on a guess. Ask them to wait until it is confirmed' },
          ],
        },
        {
          h: '配慮する点', hEn: 'Where to Take Care',
          b: [
            { ja: '宗教上の慣習や、身体接触を避けたい事情がありうる', en: 'There may be religious practice, or a wish to avoid physical contact' },
            { ja: '荷物や身体に不用意に触れない', en: 'Do not touch a person or their belongings without thought' },
            { ja: '配慮は手続きの省略とは別のものである', en: 'Consideration is not the same as skipping a step' },
          ],
        },
        {
          h: '贈答・便宜の申し出', hEn: 'Gifts and Favours',
          b: [
            { ja: '受け取らない。判断は会社とクライアントの規程による', en: 'Do not accept. The company\'s and client\'s rules decide' },
            { ja: '金額の大小は判断を変えない', en: 'The value of the gift does not change the decision' },
            { ja: '受け取ってしまった場合は、隠さず上長へ申し出る', en: 'If you have taken something, do not conceal it — tell your supervisor' },
          ],
        },
        {
          h: '断り方', hEn: 'How to Decline',
          b: [
            { ja: '「規則で受け取れないことになっております」と規則を主語にする', en: 'Put the rule in the subject: "our rules do not allow us to accept it"' },
            { ja: '相手を責めない。断ることと関係を壊すことは別である', en: 'Do not put it on them. Declining and damaging the relationship are different things' },
            { ja: '代わりにできることがあれば示す', en: 'If there is something you can do instead, say so' },
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
        { ja: '受付台帳に記録がなくても、本人が「アポがある」と言えば通してよい。', en: 'With no record in the log, you may admit someone who says they have an appointment.' },
        { ja: '作業服と名札があれば、工事業者の確認は省略してよい。', en: 'With a work uniform and name tag, you may skip checking a contractor.' },
        { ja: '役員には、手続きを簡略にするのが適切な配慮である。', en: 'For executives, simplifying the procedure is appropriate consideration.' },
        { ja: '「誰が来ているか」は、機密情報になりうる。', en: 'Who is visiting can itself be confidential information.' },
        { ja: '急いでいる相手を待たせるのは、失礼にあたる。', en: 'Asking someone in a hurry to wait is discourteous.' },
        { ja: '相手の宗教的な事情に配慮して、本人確認を省略した。', en: 'Out of respect for religious practice, you skip the identity check.' },
        { ja: '少額の菓子折りであれば、受け取ってよい。', en: 'A small box of sweets may be accepted.' },
        { ja: '立哨中に、来訪者から道を聞かれたので答えた。', en: 'On post, a visitor asks for directions and you answer.' },
      ],
    },

    {
      type: 'rows',
      titleJa: 'ミニTTX ― 解答と根拠の示し方', titleEn: 'Mini TTX — Answers and Reasoning',
      lead: '解答　1 ×　2 ×　3 ×　4 ○　5 ×　6 ×　7 ×　8 ○',
      leadEn: 'Answers:  1 No · 2 No · 3 No · 4 Yes · 5 No · 6 No · 7 No · 8 Yes',
      rows: [
        { ja: '設問1 ― 台帳が一次情報。自己申告では通しません。ホストに確認します。', en: 'Item 1: the log is primary. A self-declaration is not enough; confirm with the host.' },
        { ja: '設問2・6 ― 見た目や配慮は、確認を省く理由になりません。', en: 'Items 2 and 6: appearance and consideration are not reasons to skip a check.' },
        { ja: '設問3 ― 手続きは相手によって変えません。例外は承認が要ります。', en: 'Item 3: the procedure does not vary. An exception needs authorisation.' },
        { ja: '設問5 ― 待たせることは失礼ではありません。飛ばすことが問題です。', en: 'Item 5: asking someone to wait is not rude. Skipping steps is.' },
        { ja: '設問7 ― 金額の大小は判断を変えません。規則が決めます。', en: 'Item 7: value does not change the decision. The rule decides.', small: true },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 10-A',
      titleJa: 'TTX 10-A　アポなし来訪者', titleEn: 'TTX 10-A — A Visitor Without an Appointment',
      scenarioJa: '午後3時、スーツ姿の男性が受付に来る。「◯◯部の田中さんとアポがあります」。受付台帳に該当のアポがない。男性は「直前にメールでやり取りしたので、記録漏れだと思います」と説明。部署の代表番号に内線したが、田中さんは外出中で連絡がつかない。相手は「会議に遅れる」と少し苛立っている。',
      scenarioEn: '15:00. A man in a suit arrives at reception: "I have an appointment with Mr Tanaka in the ◯◯ Department." There is no matching appointment in the log. He explains they exchanged emails just before, so it is probably a logging miss. You call the department line, but Mr Tanaka is out and unreachable. He is growing irritated: "I am late for the meeting."',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '台帳と自己申告が食い違うとき、どちらを優先するか。', en: 'When the log and the visitor\'s account differ, which takes priority?' },
        { ja: 'ホスト不在の場合、次にどこへ確認するか。', en: 'With the host unavailable, where do you check next?' },
        { ja: '待たせる、帰っていただく、別の担当につなぐ。判断軸は何か。', en: 'Hold, turn away, or find another contact — on what criterion?' },
        { ja: '相手の苛立ちに、どう対応するか。', en: 'How do you handle the irritation?' },
      ],
      inject: '相手が「もう時間がない。とりあえず上まで行かせてくれ」と言った。',
      injectEn: 'He says: "There is no time. Just let me go up for now."',
      inject2: '同じ部署の別の社員が通りかかり、「その人なら知っています」と言った。',
      inject2En: 'Another employee from the department passes and says: "I know him."',
      sop: 'アポなし来訪者の対応フローと、ホスト不在時の最終判断者はSite SOPに定義されている。',
      sopEn: 'The walk-in flow and who decides when the host is unavailable are defined in the Site SOP.',
      sources: SRC.fac + '、架空シナリオ',
    },

    {
      type: 'close',
      titleJa: '第10時限 まとめ', titleEn: 'Period 10 — Summary',
      rows: [
        { ja: '立哨は、見て、見られる仕事。持ち場を無断で離れない。', en: 'Standing post is about seeing and being seen. Do not leave without authorisation.' },
        { ja: '受付は4ステップ。台帳が一次情報、自己申告は二次情報。', en: 'Reception is four steps. The log is primary; what the visitor says is secondary.' },
        { ja: '手続きは相手によって変えない。例外には承認と記録が要る。', en: 'The procedure does not vary by person. An exception needs authorisation and a record.' },
        { ja: '贈答は受け取らない。金額の大小は判断を変えない。', en: 'Do not accept gifts. The value does not change the decision.' },
      ],
      next: '第11時限 ― 出入管理。人と物と車両を、どう通し、どう止めるか。',
      nextEn: 'Period 11 — access control: how people, goods and vehicles are let through, or not.',
    },
  ],
};
