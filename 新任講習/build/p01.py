# -*- coding: utf-8 -*-
"""第1時限｜基本教育1 警備業務実施の基本原則

レイアウトは前回現任講習の最終版に合わせる（1スライド2ブロック、日英同級）。
受講者の約7割が外国籍のため「日本ではできないこと」を3枚立てる。
"""

import deck as D
from common import DATE_JP, DATE_EN, slot

DIV_JP, DIV_EN = "基本教育1", "Basic Training 1"
SUBJ_JP = "警備業務実施の基本原則"
SUBJ_EN = "Fundamental Principles of Security Operations"
F_JP = f"第1時限｜{DIV_JP} {SUBJ_JP}"
F_EN = f"Period 1 | {DIV_EN} — Fundamental Principles"

SRC_LAW = "警備業法、警察庁「警備業法等の解釈運用基準」"
SRC_HIST = "警備業法（昭和47年法律第117号）、全国警備業協会 業界沿革資料"
SRC_POWER = "警備業法、刑法、刑事訴訟法、警察官職務執行法"
HOW_JP = "進め方：班で検討 → 4問に回答（10分）→ 班発表（10分）"
HOW_EN = "Format: discuss in your group, answer all four questions (10 min), then present (10 min)."


def build(prs):
    n = [0]

    def pg():
        n[0] += 1
        return n[0]

    # 1 --------------------------------------------------------------
    D.s_title(prs, f"第1時限　{slot(1)}　{DIV_JP}", f"Period 1 — {DIV_EN}",
              SUBJ_JP, SUBJ_EN, DATE_JP, DATE_EN)
    pg()

    # 2 --------------------------------------------------------------
    D.s_content(
        prs, "警備業とは（1/2）", "What the Security Industry Is", "B1",
        "警備業が「他人の需要に応じて行う民間サービス業」であることを説明できる。",
        "You can explain that security is a private service performed for others.",
        [
            ("警備業法 第2条の定義", "The Definition in Article 2", [
                ("警備業務を「他人の需要に応じて」行う営業をいう",
                 "A business providing security services for others"),
                ("依頼主との契約に基づく。契約の範囲が仕事の範囲",
                 "It runs on a contract, and the contract sets your scope"),
                ("営むには都道府県公安委員会の認定が必要",
                 "It requires certification by the public safety commission"),
            ]),
            ("警備業になるもの・ならないもの", "Where the Line Falls", [
                ("A社がB警備会社に依頼し、B社の警備員が常駐 → 警備業",
                 "A hires firm B, whose officers are posted there → yes"),
                ("C社の保安係が自社の店舗を見回る → 警備業ではない",
                 "C's own staff patrol C's own store → no"),
                ("この区別が、適用される法令と教育義務を分ける",
                 "This split decides which laws and training duties apply"),
            ]),
        ],
        "配属先の契約範囲と業務内容はSite SOPと警備指令書に定められている。",
        "Your site's contracted scope and duties are in the Site SOP and post orders.",
        SRC_LAW, F_JP, F_EN, pg())

    # 3 --------------------------------------------------------------
    D.s_content(
        prs, "警備業とは（2/2）", "What the Security Industry Is", "B1",
        "自分が従事するコーポレートセキュリティの位置づけを言える。",
        "You can say where corporate security sits within the industry.",
        [
            ("コーポレートセキュリティ", "Corporate Security", [
                ("1号警備のうち、企業オフィス常駐に特化した業務",
                 "Type-1 security, focused on stationed duty at offices"),
                ("守る対象は、建物ではなく企業活動そのもの",
                 "What is protected is the business itself, not the building"),
                ("接遇と情報秘匿が、警備の質そのものになる",
                 "Conduct and confidentiality are the quality of the service"),
            ]),
            ("認定と教育の義務", "Certification and Training", [
                ("警備会社には、警備員を教育する法律上の義務がある",
                 "A security company is legally required to train its officers"),
                ("本講習はその法定教育として実施している",
                 "This course is delivered as that statutory training"),
                ("修了しなければ、警備業務に従事できない",
                 "You cannot be assigned to duty until you complete it"),
            ]),
        ],
        "", "", SRC_LAW, F_JP, F_EN, pg())

    # 4 --------------------------------------------------------------
    D.s_content(
        prs, "警備業務の4区分（1/2）", "The Four Categories", "B1",
        "1号から4号までの区分を挙げ、自分がどれに従事するかを言える。",
        "You can name the four categories and say which one you work in.",
        [
            ("1号　施設警備業務", "Type 1 — Facility Security", [
                ("事務所・住宅・興行場・駐車場等における業務",
                 "Offices, residences, venues, car parks and the like"),
                ("常駐・巡回・出入管理・受付が中心になる",
                 "Stationed duty, patrol, access control and reception"),
                ("皆さんが従事するのは、この1号である",
                 "This is the category you will be working in"),
            ]),
            ("2号　交通誘導・雑踏警備業務", "Type 2 — Traffic and Crowds", [
                ("人や車両の通行する場所、雑踏する場所での業務",
                 "Where people and vehicles pass, or crowds gather"),
                ("工事現場、イベント会場、駐車場出入口など",
                 "Construction sites, events, car park entrances"),
                ("交通整理の権限はない。あくまで誘導である",
                 "There is no power to direct traffic. It is guidance"),
            ]),
        ],
        "", "", "警備業法第2条第1項、警備業法施行規則", F_JP, F_EN, pg())

    # 5 --------------------------------------------------------------
    D.s_content(
        prs, "警備業務の4区分（2/2）", "The Four Categories", "B1",
        "3号・4号の内容を述べ、いずれも私人の範囲を超えないことを理解する。",
        "You can describe Types 3 and 4, and see that none exceeds a citizen's limits.",
        [
            ("3号　運搬警備業務", "Type 3 — Valuables in Transit", [
                ("運搬中の現金・貴金属・核燃料物質等に係る業務",
                 "Cash, precious metals and nuclear materials in transit"),
                ("現金輸送車への警乗が代表例",
                 "Riding with an armoured cash-transport vehicle"),
                ("運搬物と経路の秘匿が重要になる",
                 "Keeping the load and route confidential is critical"),
            ]),
            ("4号　身辺警備業務", "Type 4 — Personal Protection", [
                ("人の身体に対する危害の発生を警戒し、防止する",
                 "Watching for and preventing harm to a person"),
                ("警察の警護とは根拠法も権限も異なる",
                 "The legal basis and powers differ from police protection"),
                ("私人の範囲を超えられない点は、他の号と同じ",
                 "Like the others, it cannot exceed a citizen's limits"),
            ]),
        ],
        "同じ1号でも業務内容は現場ごとに大きく異なる。配属時にSite SOPを確認する。",
        "Even within Type 1, duties differ greatly by site. Check the Site SOP.",
        "警備業法第2条第1項、警備業法施行規則", F_JP, F_EN, pg())

    # 6 --------------------------------------------------------------
    D.s_content(
        prs, "警備業の沿革", "How the Industry Developed", "B1",
        "警備業法がなぜ生まれたかを述べ、業務が法令で規律される理由を理解する。",
        "You can say why the Act exists, and why the work is regulated.",
        [
            ("法律ができるまで", "Before the Act", [
                ("1962年　日本で最初の警備保障会社が設立される",
                 "1962: Japan's first security company is founded"),
                ("1964年　東京オリンピックの警備を民間が担った",
                 "1964: private security handled the Tokyo Olympics"),
                ("当時は業務を規律する法律がなく、質にばらつきがあった",
                 "No law regulated the work, and quality varied widely"),
            ]),
            ("1972年　警備業法の制定", "1972 — The Act Is Enacted", [
                ("昭和47年法律第117号として制定された",
                 "Enacted as Act No. 117 of 1972"),
                ("認定制度・警備員の制限・教育義務を定めた",
                 "It set certification, restrictions and training duties"),
                ("条文の多くは「やってはいけないこと」を定めている",
                 "Much of the Act defines what must not be done"),
            ]),
        ],
        "", "", SRC_HIST, F_JP, F_EN, pg())

    # 7 --------------------------------------------------------------
    D.s_terms(
        prs, "日本の法律用語 ①", "Japanese Legal Terms — Part 1",
        "日本国内では日本の法律が適用されます。母国の制度と同じとは限りません。",
        "Japanese law applies in Japan. It may differ from the system in your home country.",
        [
            ("警備業 keibigyō ― 他人の需要に応じて行う営業。",
             "The security industry. A business serving others' needs."),
            ("私人 shijin ― 警備員も法的には私人。",
             "Private citizen. Your legal status, even in uniform."),
            ("管理権者 kanri-kensha ― 施設を管理する権限をもつ者。",
             "The site authority. Your powers come from them."),
            ("施設管理権 shisetsu-kanriken ― 出入りやルールを決める権利。",
             "Premises management rights. Deciding entry and rules."),
            ("認定 nintei ― 公安委員会が警備業者に与えるもの。",
             "Certification, granted to a security company."),
            ("警備指令書 keibi-shireisho ― 現場ごとの指示書。",
             "Post orders. The written instructions for your site."),
            ("有形力 yūkeiryoku ― 相手に触れた時点で有形力。",
             "Physical force. Touching the person is already force."),
            ("常駐 jōchū ― 現場に配置されて勤務すること。",
             "Stationed duty. Being posted at a site."),
        ],
        F_JP, F_EN, pg())

    # 8 --------------------------------------------------------------
    D.s_quote(
        prs, "警備業法 第15条", "Security Services Act, Article 15",
        "警備業者及び警備員は、警備業務を行うに当たつては、この法律により特別に権限を"
        "与えられているものでないことに留意するとともに、他人の権利及び自由を侵害し、"
        "又は個人若しくは団体の正当な活動に干渉してはならない。",
        "When carrying out security operations, security businesses and guards must remember "
        "that this Act gives them no special authority. They must not infringe the rights or "
        "freedoms of others, and must not interfere with lawful activities.",
        "警備業法 第15条 / Article 15",
        "警備員の法的な立場は私人です。制服により権限が加わることはありません。",
        "A security guard is a private citizen in law. The uniform adds no legal authority.",
        F_JP, F_EN, pg())

    # 9 --------------------------------------------------------------
    D.s_compare(
        prs, "警察官と警備員 ― 権限の違い", "Police Officers and Guards — Different Powers",
        "警察官には法律で与えられた権限があります。警備員にはありません。",
        "Police officers have powers granted by law. Security guards do not.",
        ("警察官にある権限", "Police powers (Police Duties Execution Act)", [
            ("職務質問（第2条）", "Stop and question a person (Art. 2)"),
            ("保護（第3条）、避難等の措置（第4条）", "Protective custody (3). Order evacuation (4)"),
            ("犯罪の予防及び制止（第5条）", "Prevent and stop a crime (Art. 5)"),
            ("立入（第6条）、武器の使用（第7条）", "Enter premises (6). Use weapons (7)"),
            ("逮捕状による逮捕、取り調べ", "Arrest by warrant. Interrogation"),
        ]),
        ("警備員にある権限", "What a security guard has", [
            ("左の権限は、いずれもありません", "None of the powers on the left"),
            ("現行犯逮捕 ― 誰でもできる", "Arrest of a flagrant offender — anyone may"),
            ("正当防衛・緊急避難 ― 誰でもできる", "Self-defence and necessity — anyone may"),
            ("管理権者から委ねられた範囲", "What the site authority has delegated"),
            ("その範囲は契約と警備指令書で決まる", "That scope is set by contract and post orders"),
        ]),
        "警備業法第16条 ― 警備員の服装は、警察官など公務員の制服と明確に識別できるものでなければなりません。",
        "Article 16 — a guard's uniform must be clearly distinguishable from a public official's.",
        F_JP, F_EN, pg())

    # 10 -------------------------------------------------------------
    D.s_content(
        prs, "日本ではできないこと ① 身体", "Not Permitted in Japan — 1: The Body", "B1",
        "相手の身体について、日本の法令で許されない行為を具体的に挙げられる。",
        "You can name specific acts involving a person's body that Japanese law forbids.",
        [
            ("触れる・つかむ", "Touching and Seizing", [
                ("触れた時点で有形力。声かけと立ち位置までが限界",
                 "Touching is already force. Voice and position are the limit"),
                ("許されるのは正当防衛か現行犯逮捕に伴う場合だけ",
                 "Lawful only with self-defence or a flagrant-offender arrest"),
                ("越えれば暴行罪・傷害罪に当たりうる",
                 "Beyond that it can be assault or causing injury"),
            ]),
            ("拘束する・押さえ続ける", "Restraining and Holding Down", [
                ("手錠も結束バンドも使えない。逮捕監禁罪に当たりうる",
                 "No handcuffs, no cable ties. It can be unlawful confinement"),
                ("侵害が終われば権利も終わる。倒れた相手を押さえ続けない",
                 "The right ends with the attack. Do not keep holding them down"),
                ("直ちに警察へ引き渡す（刑事訴訟法第214条）",
                 "Hand them to the police without delay (CCP Art. 214)"),
            ]),
        ],
        "応援要請の方法と、警察へ通報する判断者は現場ごとに定められている。",
        "How to call backup, and who decides on a police call, are set per site.",
        SRC_POWER, F_JP, F_EN, pg())

    # 11 -------------------------------------------------------------
    D.s_content(
        prs, "日本ではできないこと ② 追跡と取り調べ",
        "Not Permitted in Japan — 2: Pursuit and Questioning", "B1",
        "逃げる相手を追わない理由と、取り調べができない理由を説明できる。",
        "You can explain why you do not chase, and why you cannot question anyone.",
        [
            ("追跡", "Pursuit", [
                ("逃げる相手を追わない。追跡は有形力に発展しやすい",
                 "Do not chase. Pursuit escalates into force"),
                ("人違いのリスクは、追った本人が負う",
                 "If you have the wrong person, the risk is yours"),
                ("記録と通報に切り替える。それが正しい対応である",
                 "Switch to recording and reporting. That is the right move"),
            ]),
            ("取り調べ・事情聴取", "Questioning and Interrogation", [
                ("取り押さえた相手から事情を聞く権限はない",
                 "You have no power to question a person you have detained"),
                ("事務所に留め置くことも、書面へのサインを求めることもできない",
                 "You may not hold them in an office or ask them to sign anything"),
                ("写真を撮る、SNSに上げることもできない",
                 "You may not photograph them or post anything about them"),
            ]),
        ],
        "", "", SRC_POWER, F_JP, F_EN, pg())

    # 12 -------------------------------------------------------------
    D.s_content(
        prs, "日本ではできないこと ③ 持ち物・情報・装備",
        "Not Permitted in Japan — 3: Property, Information, Equipment", "B1",
        "持ち物・情報・装備について、権限外の行為を具体的に挙げられる。",
        "You can name acts involving property, information and equipment that exceed your authority.",
        [
            ("所持品・私物", "Bags and Personal Property", [
                ("所持品検査は強制できない。同意がなければ開けられない",
                 "A bag check cannot be compelled. No consent, no opening"),
                ("身分証を取り上げて返さないことはできない",
                 "You may not take an ID card and withhold it"),
                ("実力で物を取り返すこと（自救行為）も認められない",
                 "Recovering property by force is not permitted either"),
            ]),
            ("情報と装備", "Information and Equipment", [
                ("職務質問はできない。氏名や在留資格を問いただす権限はない",
                 "No stop-and-question. You cannot demand a name or visa status"),
                ("カメラ画像・入退室ログを目的外に見ない、渡さない",
                 "Do not view or hand over footage and logs outside their purpose"),
                ("銃器は持てない。携帯できるのは届け出た護身用具のみ",
                 "No firearms. Only notified protective equipment may be carried"),
            ]),
        ],
        "所持品確認の運用、護身用具の配備、撮影の可否は現場ごとに異なる。",
        "Bag-check practice, equipment issued, and photography rules differ by site.",
        "警備業法、刑法、個人情報保護法、銃砲刀剣類所持等取締法", F_JP, F_EN, pg())

    # 13 -------------------------------------------------------------
    D.s_content(
        prs, "守るべき3本柱（1/2）", "The Three Pillars", "B1",
        "自分の業務が People / Asset / Reputation のどれに関わるかを、その場で言える。",
        "You can say, on the spot, which pillar your action concerns.",
        [
            ("People　人", "People", [
                ("クライアント社員、来訪者、そして自分自身の安全",
                 "Client staff, visitors, and your own safety"),
                ("自分の安全を確保することも任務のうち",
                 "Keeping yourself safe is part of the duty"),
                ("人命は、他のすべてに優先する",
                 "Life takes precedence over everything else"),
            ]),
            ("Asset　資産", "Asset", [
                ("物理資産 ― 建物・什器・端末・サーバー・現金",
                 "Physical: buildings, fixtures, devices, servers, cash"),
                ("情報資産 ― 書類・データ・役員の動向・施設の構造",
                 "Information: documents, data, movements, site layout"),
                ("情報は Asset に含まれる。見えなくても資産である",
                 "Information is an asset even when you cannot see it"),
            ]),
        ],
        "", "", "警備業法、警察庁「警備員教育」、ASIS GDL CSO 06 2004", F_JP, F_EN, pg())

    # 14 -------------------------------------------------------------
    D.s_content(
        prs, "守るべき3本柱（2/2）", "The Three Pillars", "B1",
        "3つが分離できないことを、具体例で説明できる。",
        "You can explain with an example why the three cannot be separated.",
        [
            ("Reputation　社会的信頼", "Reputation", [
                ("クライアント企業のブランドと社会的評価",
                 "The client's brand and standing"),
                ("入口・受付で、クライアントの「顔」として見られる",
                 "At the entrance you are seen as the client's face"),
                ("物理被害がゼロでも、毀損すれば任務は失敗",
                 "Even with zero physical loss, harming it is a failure"),
            ]),
            ("3つは分離できない", "The Three Are Inseparable", [
                ("1つの行動が3つを同時に守る",
                 "A single action protects all three at once"),
                ("1つの過失が3つを同時に損なう",
                 "A single lapse damages all three at once"),
                ("迷ったら「いま何を守っているか」を言葉にする",
                 "When unsure, say aloud what you are protecting right now"),
            ]),
        ],
        "何がAsset・People・Reputationに当たるかは配属先のSite SOPに定められている。",
        "What counts as each pillar is set out in your site's SOP.",
        "警備業法、警察庁「警備員教育」、ASIS GDL CSO 06 2004", F_JP, F_EN, pg())

    # 15 -------------------------------------------------------------
    D.s_content(
        prs, "判断の軸（1/2）", "How to Decide", "B1",
        "要求がぶつかったときの優先順位を、順番どおりに言える。",
        "You can state the priority order when demands conflict.",
        [
            ("判断軸　優先する順に", "The Order of Priority", [
                ("① 人命 ― 迷ったらここに戻る",
                 "1. Life. When in doubt, come back to this"),
                ("② 法令 ― 社内規程は法令を超えられない",
                 "2. The law. Internal rules cannot override it"),
                ("③ Site SOP ― ④ クライアント要望　の順に続く",
                 "3. The Site SOP, then 4. the client's wishes"),
            ]),
            ("ステークホルダー三層", "Three-Tier Stakeholders", [
                ("自社 ― 雇用主。教育と指揮命令の主体",
                 "Our company: your employer and chain of command"),
                ("ビルオーナー／施設管理会社 ― 建物の管理権原者",
                 "Building owner or manager: authority over the building"),
                ("クライアント企業 ― 発注主でSite SOPの実質決定者",
                 "The client: commissions the service and defines the SOP"),
            ]),
        ],
        "報告ライン、クライアント窓口、常駐時間帯は現場ごとに異なる。",
        "Reporting lines, client contacts and staffing hours differ by site.",
        SRC_LAW, F_JP, F_EN, pg())

    # 16 -------------------------------------------------------------
    D.s_content(
        prs, "判断の軸（2/2）― 3つの問い", "How to Decide — The Three Questions", "B1",
        "3つの問いで自分の行動を検証できる。",
        "You can test your own actions with the three questions.",
        [
            ("本講習の3つの問い", "Three Questions for This Course", [
                ("何を守っているのか。People / Asset / Reputation のどれか",
                 "What am I protecting? People, Asset, or Reputation"),
                ("どの立場で動くのか。私人か、管理権者の補助者か",
                 "In what capacity? Private citizen, or delegated agent"),
                ("その手段は最小限か。越えれば何の罪に当たるか",
                 "Is this the minimum? If I exceed it, what offence is it"),
            ]),
            ("2日間の流れ", "The Two Days", [
                ("Day 1 ― 基本教育。全業務に共通する土台",
                 "Day 1: basic training, the common foundation"),
                ("Day 2 ― 業務別教育。施設警備の実務",
                 "Day 2: task-specific training, facility security"),
                ("第5時限は通報訓練、第6時限は応急手当の実技",
                 "Period 5 is call practice; Period 6 is hands-on first aid"),
            ]),
        ],
        "", "", SRC_LAW, F_JP, F_EN, pg())

    # 17 -------------------------------------------------------------
    D.s_minittx(
        prs, "ミニTTX ― ○か×か、根拠を一言で", "Mini TTX — Yes or No, with one line of reasoning",
        "手元に○×と根拠を書いてください。挙手は求めません。指名します。",
        "Write your answer and your reason. No hands needed. I will call on you.",
        [
            ("自社の社員が自社ビルを見回るのは、警備業である。",
             "Staff patrolling their own company's building is the security industry."),
            ("制服を着ているので、警察官に準じた権限がある。",
             "Wearing the uniform gives you powers similar to a police officer."),
            ("逃げた相手を追いかけて捕まえるのは、警備員の仕事である。",
             "Chasing and catching someone who runs is a guard's job."),
            ("同意がなくても、規則であればカバンを開けてよい。",
             "If it is the rule, you may open a bag without consent."),
            ("入館の可否を判断できるのは、管理権者から委ねられているからである。",
             "You can decide admission because the site authority delegated it."),
            ("取り押さえた相手から、警察が来るまで事情を聞いてよい。",
             "You may question a detained person until the police arrive."),
            ("相手の在留資格を確認するのは、警備員の権限である。",
             "Checking a person's visa status is within a guard's authority."),
            ("クライアントの要望は、法令より優先される。",
             "The client's wishes take precedence over the law."),
        ],
        F_JP, F_EN, pg())

    # 18 -------------------------------------------------------------
    D.s_rows(
        prs, "ミニTTX ― 解答と根拠の示し方", "Mini TTX — Answers and Reasoning",
        "解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ×　8 ×",
        "Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 No · 8 No",
        [
            ("設問1 ― 「他人の需要に応じて」が要件。自社を自社が守るのは警備業ではない。",
             "Item 1: it must serve others. Guarding your own premises is not the industry."),
            ("設問2・3・6 ― 制服では権限は増えない。追跡も事情聴取もできない。",
             "Items 2, 3, 6: the uniform adds nothing. No chasing, no questioning."),
            ("設問4・7 ― 同意なくカバンは開けられない。在留資格を問う権限もない。",
             "Items 4, 7: no bag without consent, and no authority over visa status."),
            ("根拠の示し方：「〔私人／補助者〕として、〔目的〕のため、〔手段〕を取った」",
             "State it this way: \"As a [citizen / delegated agent], I took [action] for [purpose].\""),
        ],
        F_JP, F_EN, pg())

    # 19-21 ----------------------------------------------------- TTX 1-A
    D.s_ttx(
        prs, "CASE 1-A", "TTX 1-A　警察官と間違われる", "TTX 1-A — Mistaken for a Police Officer",
        "平日の朝、オフィスビルのエントランスで立哨中。通りかかった女性が「近くで自転車を"
        "盗まれたので調書を取ってほしい」と話しかけてきた。あなたの制服を見て、警察官だと"
        "思っている様子である。周囲には出勤中の社員が多数いる。",
        "Morning, on stand at an office building entrance. A woman stops and asks you to take a "
        "report because her bicycle was stolen nearby. She appears to think your uniform means you "
        "are a police officer. Many employees are arriving around you.",
        [
            ("女性が「警察じゃないなら意味がない」と大きな声を出し始めた。",
             "She raises her voice: \"If you are not the police, this is useless.\""),
            ("出勤中の社員が足を止めて、こちらを見ている。",
             "Arriving employees have stopped and are watching."),
        ],
        "立哨位置を離れてよいか、離れる場合の連絡先は現場ごとに定められている。",
        "Whether you may leave your post, and whom to notify, are set per site.",
        SRC_LAW, F_JP, F_EN, pg())

    D.s_ttx_q(
        prs, "TTX 1-A　4つの問い", "TTX 1-A — The Four Questions", HOW_JP, HOW_EN,
        [
            ("これは People / Asset / Reputation のどれに関わるか。",
             "Which pillar does this concern: People, Asset, or Reputation?"),
            ("「警察官ではない」ことを、どう伝えるか。",
             "How do you convey that you are not a police officer?"),
            ("調書を取る、被害届を預かることはできるか。",
             "May you take a statement or accept a report?"),
            ("持ち場を離れて交番まで案内してよいか。",
             "May you leave your post to walk her to the police box?"),
        ],
        F_JP, F_EN, pg())

    D.s_debrief(
        prs, "CASE 1-A", "TTX 1-A 模範解答", "TTX 1-A — Model Answers",
        [
            ("問1 どの柱に関わるか",
             "People と Reputation。困っている人への対応であり、クライアントの入口での振る舞いでもある。",
             "People and Reputation. It is help for a person, and your conduct at the client's door."),
            ("問2 「警察官ではない」の伝え方",
             "先に否定しない。用件を受け止めてから伝える。「私は警備員です。交番をご案内します」。",
             "Do not open with the denial. Take in her problem first, then say what you are."),
            ("問3 調書・被害届は扱えるか",
             "扱えない。捜査の権限はなく、書面を預かれば相手の手続きを遅らせることになる。",
             "No. You have no investigative power, and holding a document would delay her."),
            ("問4 持ち場を離れてよいか",
             "原則として離れない。案内は口頭と指差しで行い、必要なら上長へ連絡する。",
             "As a rule, do not leave. Direct her verbally; call your supervisor if needed."),
        ],
        [
            ("「意味がない」と声が大きくなった → 反論しない。声量を下げ、できることだけを短く伝える。",
             "Do not argue back. Lower your own volume and state only what you can do."),
            ("社員が足を止めて見ている → 見られている前提で振る舞う。この対応がReputationそのもの。",
             "Act as though you are being watched. This exchange is Reputation itself."),
        ],
        "案内のために持ち場を離れるか。離れないと答えた班には「では誰が対応するのか」を問う。",
        "Do you leave your post? Ask those who say no: then who helps her?",
        SRC_LAW, F_JP, F_EN, pg())

    # 22-24 ----------------------------------------------------- TTX 1-B
    D.s_ttx(
        prs, "CASE 1-B", "TTX 1-B　クライアントからの依頼", "TTX 1-B — A Request from the Client",
        "夜間の常駐勤務中、クライアント企業の課長が警備デスクに来て言う。「今から備品確認を"
        "する。退社する社員のカバンを出口で一人ずつ開けて中を見てほしい。うちの依頼だから"
        "問題ない」。警備指令書にそのような業務は書かれていない。上長は不在である。",
        "On night duty, a client manager comes to the desk: \"We are doing an equipment check. Open "
        "and inspect each employee's bag at the exit. We are the client, so it is fine.\" The post "
        "orders contain no such duty. Your supervisor is away.",
        [
            ("課長が「では君は見ているだけでいい。私が開ける」と言い出した。",
             "The manager says: \"Then just stand there. I will open them myself.\""),
            ("退社しようとする社員が出口に並び始めた。",
             "Employees are starting to queue at the exit to leave."),
        ],
        "所持品確認の運用と、指令書にない依頼を受けた場合の連絡順序は現場ごとに異なる。",
        "Bag-check practice, and whom to call for a request outside the post orders, differ by site.",
        SRC_POWER, F_JP, F_EN, pg())

    D.s_ttx_q(
        prs, "TTX 1-B　4つの問い", "TTX 1-B — The Four Questions", HOW_JP, HOW_EN,
        [
            ("所持品検査を強制することはできるか。",
             "Can a bag search be compelled?"),
            ("「クライアントの依頼」は業務範囲を広げる根拠になるか。",
             "Does \"the client asked\" extend your scope of duty?"),
            ("判断軸のどこで、この依頼は止まるか。",
             "At which step of the priority order does this stop?"),
            ("断る場合、何と言うか。関係を壊さずに断れるか。",
             "If you decline, what do you say, without damaging the relationship?"),
        ],
        F_JP, F_EN, pg())

    D.s_debrief(
        prs, "CASE 1-B", "TTX 1-B 模範解答", "TTX 1-B — Model Answers",
        [
            ("問1 所持品検査を強制できるか",
             "できない。強制すれば強要罪等に当たりうる。求められるのは任意の協力だけである。",
             "No. Compelling it can amount to coercion. Only voluntary cooperation may be asked."),
            ("問2 「クライアントの依頼」は根拠になるか",
             "ならない。契約と警備指令書が業務範囲を決める。依頼だけで範囲は広がらない。",
             "No. The contract and post orders define the scope. A request does not widen it."),
            ("問3 判断軸のどこで止まるか",
             "②法令で止まる。クライアント要望は④であり、法令を超えることはできない。",
             "At step 2, the law. The client's wishes are step 4 and cannot override it."),
            ("問4 断り方",
             "「その対応は私の権限ではできません。上長に確認します」。断るのではなく、繋ぐと伝える。",
             "\"That is not within my authority. Let me check with my supervisor.\" You route, not refuse."),
        ],
        [
            ("「君は見ているだけでいい」 → 同席も加担になりうる。立ち会わず、その場で上長へ連絡する。",
             "Standing by can make you a participant. Do not attend; call your supervisor now."),
            ("社員が出口に並び始めた → 通常どおり退館させる。止める根拠がない以上、止めない。",
             "Let them leave as normal. With no basis to stop them, you do not stop them."),
        ],
        "その場で断るか、保留して上長を待つか。どちらも成り立つ。根拠を述べさせる。",
        "Decline now, or hold and wait for the supervisor? Both are defensible. Make them say why.",
        SRC_POWER, F_JP, F_EN, pg())

    # 25 -------------------------------------------------------------
    D.s_rows(
        prs, "第1時限 まとめ", "Period 1 — Summary", "", "",
        [
            ("警備業は「他人の需要に応じて」行う民間サービス業。1号が施設警備。",
             "Security is a private service performed for others. Type 1 is facility security."),
            ("警備業法15条 ― 特別な権限はない。警察官にある権限は警備員にはない。",
             "Article 15 — no special authority. Police powers do not extend to guards."),
            ("触れる・拘束する・追う・カバンを開ける ― いずれも日本ではできない。",
             "Touching, restraining, chasing, opening a bag — none of these are yours to do."),
            ("判断軸は 人命 → 法令 → Site SOP → クライアント要望。順序を崩さない。",
             "Priority: life, law, Site SOP, client wishes. Keep that order."),
        ],
        F_JP, F_EN, pg(), dark=True,
        bridge=("第2時限 ― その土台の上に、警備員に求められる資質と品格を置きます。",
                "Period 2 — on that foundation, the qualities expected of an officer."))

    return n[0]
