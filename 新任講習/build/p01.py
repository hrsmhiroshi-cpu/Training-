# -*- coding: utf-8 -*-
"""第1時限｜基本教育1 警備業務実施の基本原則

内容ソース: Day1統合版 A-0a / A-0b / A-0c、前回現任講習 第1・2・5限
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


def build(prs):
    p = 1

    # 1 ----------------------------------------------------------- 表紙
    D.s_title(prs, f"第1時限　{slot(1)}　{DIV_JP}", f"Period 1 — {DIV_EN}",
              SUBJ_JP, SUBJ_EN, DATE_JP, DATE_EN)

    # 2 ----------------------------------------------------------- 警備業とは
    D.s_content(
        prs, "警備業とは", "What the Security Industry Is", "B1",
        "警備業が「他人の需要に応じて行う民間サービス業」であることを説明できる。",
        "You can explain that security is a private service performed in response to the needs of others.",
        [
            ("警備業法 第2条の定義", "The Definition in Article 2", [
                ("警備業とは、警備業務を「他人の需要に応じて」行う営業をいう",
                 "Security is the business of providing security services in response to the needs of others"),
                ("自社の社員が自社を守るのは、警備業ではない",
                 "A company's own staff guarding that same company is not the security industry"),
                ("依頼主との契約に基づいて行う。契約の範囲が仕事の範囲になる",
                 "It is done under contract. The contract sets the scope of the work"),
                ("警備業を営むには、都道府県公安委員会の認定が必要",
                 "Operating requires certification by the prefectural public safety commission"),
            ]),
            ("警備業になるもの・ならないもの", "Where the Line Falls", [
                ("A社がB警備会社に依頼し、B社の警備員が常駐する → 警備業",
                 "Company A contracts Company B, whose officers are stationed there → security industry"),
                ("C社の保安係が自社の店舗を見回る → 警備業ではない",
                 "Company C's own loss-prevention staff patrol C's store → not the security industry"),
                ("この区別は、適用される法令と教育義務の有無を分ける",
                 "This distinction decides which laws and training duties apply"),
                ("自分がどちらの立場で働いているかを、まず押さえる",
                 "Start by knowing which of the two you are working under"),
            ]),
            ("コーポレートセキュリティの位置づけ", "Where Corporate Security Sits", [
                ("1号警備（施設警備）のうち、企業オフィス常駐に特化した業務",
                 "A form of Type-1 facility security, focused on stationed duty at corporate offices"),
                ("商業施設・病院・ホテルとも違い、守る対象は企業活動そのもの",
                 "Unlike retail, hospitals or hotels, what is protected is the client's business activity itself"),
                ("接遇と情報秘匿が、警備の質そのものになる",
                 "Conduct and confidentiality are themselves the quality of the service"),
                ("詳細はDay 2で扱う。本日は全業務に共通する土台を固める",
                 "Day 2 covers this in depth. Today we build the foundation common to all duties"),
            ]),
            ("認定と教育の義務", "Certification and Training", [
                ("警備会社には、警備員に教育を行う義務がある",
                 "A security company has a legal duty to train its officers"),
                ("本講習は、その法定教育として実施している",
                 "This course is delivered as that statutory training"),
                ("新任教育を修了しないと、警備業務に従事できない",
                 "You cannot be assigned to duty until new-hire training is complete"),
                ("受講記録は警備員指導教育責任者が作成し、所定の期間保存する",
                 "The record is prepared by the instruction supervisor and retained for the prescribed period"),
            ]),
        ],
        "配属先の契約範囲と業務内容はSite SOPと警備指令書に定められている。",
        "The contracted scope and duties at your site are set out in the Site SOP and post orders.",
        SRC_LAW, F_JP, F_EN, 2)

    # 3 ----------------------------------------------------------- 4区分
    D.s_content(
        prs, "警備業務の4区分", "The Four Categories of Security Services", "B1",
        "1号から4号までの区分を挙げ、自分がどれに従事するかを言える。",
        "You can name the four categories and say which one you will be working in.",
        [
            ("1号　施設警備業務", "Type 1 — Facility Security", [
                ("事務所・住宅・興行場・駐車場・遊園地等における業務",
                 "Offices, residences, venues, car parks, amusement facilities and the like"),
                ("盗難等の事故の発生を警戒し、防止する",
                 "Watching for and preventing theft and other incidents"),
                ("常駐・巡回・出入管理・受付が中心",
                 "Stationed duty, patrol, access control and reception"),
                ("皆さんが従事するのは、この1号である",
                 "This is the category you will be working in"),
            ]),
            ("2号　交通誘導・雑踏警備業務", "Type 2 — Traffic and Crowd Control", [
                ("人・車両の通行に係る場所、または人の雑踏する場所での業務",
                 "Where people and vehicles pass, or where crowds gather"),
                ("負傷等の事故の発生を警戒し、防止する",
                 "Watching for and preventing injury and other incidents"),
                ("工事現場、イベント会場、駐車場出入口など",
                 "Construction sites, event venues, car park entrances"),
                ("交通整理の権限はない。あくまで誘導である",
                 "There is no power to direct traffic. It is guidance, not enforcement"),
            ]),
            ("3号　運搬警備業務", "Type 3 — Valuables in Transit", [
                ("運搬中の現金・貴金属・美術品・核燃料物質等に係る業務",
                 "Cash, precious metals, artworks and nuclear materials in transit"),
                ("盗難等の事故の発生を警戒し、防止する",
                 "Watching for and preventing theft and other incidents"),
                ("現金輸送車の警乗が代表例",
                 "Riding with an armoured cash-transport vehicle is the typical case"),
                ("運搬物と経路の秘匿が重要になる",
                 "Keeping the load and the route confidential is critical"),
            ]),
            ("4号　身辺警備業務", "Type 4 — Personal Protection", [
                ("人の身体に対する危害の発生を警戒し、防止する業務",
                 "Watching for and preventing harm to a person's body"),
                ("いわゆる要人警護・ボディガード",
                 "Close protection, commonly called bodyguarding"),
                ("警察の警護とは根拠法も権限も異なる",
                 "The legal basis and the powers differ from police protection"),
                ("私人としてできる範囲を超えられない点は、他の号と同じ",
                 "Like the others, it cannot exceed what a private citizen may do"),
            ]),
        ],
        "同じ1号でも、業務内容は現場ごとに大きく異なる。配属時にSite SOPを確認する。",
        "Even within Type 1, duties differ greatly by site. Check the Site SOP on assignment.",
        "警備業法第2条第1項、警備業法施行規則", F_JP, F_EN, 3)

    # 4 ----------------------------------------------------------- 沿革
    D.s_content(
        prs, "警備業の沿革", "How the Industry Developed", "B1",
        "警備業法がなぜ生まれたかを述べ、業務が法令で規律される理由を理解する。",
        "You can say why the Act came about, and why the work is regulated by law.",
        [
            ("1962年　民間警備の登場", "1962 — Private Security Appears", [
                ("日本で最初の警備保障会社が設立される",
                 "Japan's first security company is founded"),
                ("戦後の経済成長にともない、警備需要が生まれた",
                 "Postwar economic growth created the demand"),
                ("当時は業務を規律する法律がなかった",
                 "At the time there was no law regulating the work"),
                ("業者ごとに教育も装備もばらばらであった",
                 "Training and equipment varied from firm to firm"),
            ]),
            ("1964年　東京オリンピック", "1964 — The Tokyo Olympics", [
                ("大規模イベントの警備を民間が担った",
                 "Private security handled a large-scale event"),
                ("民間警備の存在が広く知られるきっかけとなった",
                 "It brought private security to public attention"),
                ("同時に、業務の質のばらつきも表面化した",
                 "It also exposed how uneven the quality of the work was"),
                ("社会の期待と実態の差が課題になった",
                 "The gap between public expectation and reality became the issue"),
            ]),
            ("1972年　警備業法の制定", "1972 — The Security Services Act", [
                ("昭和47年法律第117号として制定された",
                 "Enacted as Act No. 117 of 1972"),
                ("認定制度、警備員の制限、教育義務などを定めた",
                 "It set certification, restrictions on officers, and training duties"),
                ("第15条で「特別な権限はない」ことを明記した",
                 "Article 15 states plainly that the Act grants no special authority"),
                ("以後、改正を重ねて現在に至る",
                 "It has been amended repeatedly since"),
            ]),
            ("なぜこの経緯を学ぶのか", "Why This History Matters", [
                ("警備業法は、事故や行き過ぎへの反省から生まれた",
                 "The Act grew out of incidents and overreach"),
                ("条文の多くは「やってはいけないこと」を定めている",
                 "Much of it defines what must not be done"),
                ("禁止の理由を知ると、判断に迷ったときに使える",
                 "Knowing why a rule exists helps when you have to judge on the spot"),
                ("暗記ではなく、理由で覚える",
                 "Learn the reason, not the wording"),
            ]),
        ],
        "", "", SRC_HIST, F_JP, F_EN, 4)

    # 5 ----------------------------------------------------------- 用語
    D.s_terms(
        prs, "日本の法律用語 ①", "Japanese Legal Terms — Part 1",
        "日本国内では日本の法律が適用されます。母国の制度と同じとは限りません。",
        "Japanese law applies in Japan. It may differ from the system in your home country.",
        [
            ("警備業 keibigyō ― 他人の需要に応じて行う営業。",
             "The security industry. A business serving the needs of others."),
            ("私人 shijin ― 警備員も法的には私人。",
             "Private citizen. Your legal status, even in uniform."),
            ("管理権者 kanri-kensha ― 施設を管理する権限をもつ者。",
             "The site authority. Your powers come from them."),
            ("施設管理権 shisetsu-kanriken ― 出入りやルールを決める権利。",
             "Premises management rights. The right to set entry and rules."),
            ("認定 nintei ― 公安委員会が警備業者に与えるもの。",
             "Certification, granted to a security company by the commission."),
            ("警備指令書 keibi-shireisho ― 現場ごとの指示書。Post orders。",
             "Post orders. The written instructions for your site."),
            ("依頼主 iraiNushi ― 警備を発注する側。クライアント。",
             "The client. The party commissioning the service."),
            ("常駐 jōchū ― 現場に配置されて勤務すること。",
             "Stationed duty. Being posted at a site."),
        ],
        F_JP, F_EN, 5)

    # 6 ----------------------------------------------------------- 第15条
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
        F_JP, F_EN, 6)

    # 7 ----------------------------------------------------------- 警察との違い
    D.s_compare(
        prs, "警察官と警備員 ― 権限の違い", "Police Officers and Security Guards — Different Powers",
        "警察官には法律で与えられた権限があります。警備員にはありません。",
        "Police officers have powers granted by law. Security guards do not.",
        ("警察官にある権限", "Police powers (Police Duties Execution Act)", [
            ("職務質問（第2条）", "Stop and question a person (Art. 2)"),
            ("保護（第3条）、避難等の措置（第4条）", "Protective custody (Art. 3). Order evacuation (Art. 4)"),
            ("犯罪の予防及び制止（第5条）", "Prevent and stop a crime (Art. 5)"),
            ("立入（第6条）、武器の使用（第7条）", "Enter premises (Art. 6). Use weapons (Art. 7)"),
            ("逮捕状による逮捕、取り調べ", "Arrest by warrant. Interrogation"),
        ]),
        ("警備員にある権限", "What a security guard has", [
            ("左の権限は、いずれもありません", "None of the powers on the left"),
            ("現行犯逮捕（刑訴法213条）― 誰でもできる", "Arrest of a flagrant offender — anyone may do this"),
            ("正当防衛（刑法36条）、緊急避難（37条）― 誰でもできる", "Self-defence and necessity — anyone may do this"),
            ("管理権者から委ねられた範囲", "What the site authority has delegated"),
            ("その範囲は契約と警備指令書で決まります", "That scope is set by the contract and the post orders"),
        ]),
        "警備業法第16条 ― 警備員の服装は、警察官など公務員の制服と明確に識別できるものでなければなりません。",
        "Security Services Act Art. 16 — a guard's uniform must be clearly distinguishable from that of a police officer or other public official.",
        F_JP, F_EN, 7)

    # 8 ----------------------------------------------------------- 3本柱
    D.s_content(
        prs, "守るべき3本柱", "The Three Pillars", "B1",
        "自分の業務が People / Asset / Reputation のどれに関わるかを、その場で言える。",
        "You can say, on the spot, which of the three pillars your action concerns.",
        [
            ("People　人", "People", [
                ("クライアント社員、来訪者、そして自分自身の安全",
                 "The safety of client staff, visitors, and yourself"),
                ("自分の安全を確保することも任務のうち",
                 "Keeping yourself safe is part of the duty, not separate from it"),
                ("緊急時には警察・消防・救急隊も対象に含まれる",
                 "In an emergency this extends to police, fire and ambulance crews"),
                ("人命は、他のすべてに優先する",
                 "Life takes precedence over everything else"),
            ]),
            ("Asset　資産", "Asset", [
                ("物理資産 ― 建物・什器・端末・サーバー・現金",
                 "Physical assets: buildings, fixtures, devices, servers, cash"),
                ("情報資産 ― 書類・データ・役員の動向・施設の構造",
                 "Information assets: documents, data, executive movements, site layout"),
                ("受付・巡回・出入管理で、日常的にすべてに接する",
                 "Reception, patrol and access control put you in contact with all of it"),
                ("情報は Asset に含まれる。目に見えなくても資産である",
                 "Information is part of Asset. It is an asset even when you cannot see it"),
            ]),
            ("Reputation　社会的信頼", "Reputation", [
                ("クライアント企業のブランドと社会的評価",
                 "The client's brand and standing"),
                ("警備員は入口・受付でクライアントの「顔」として見られる",
                 "At the entrance and reception you are seen as the client's face"),
                ("物理被害がゼロでも、Reputationを毀損すれば任務は失敗",
                 "Even with zero physical loss, harming reputation is a failed job"),
                ("応対の質と情報秘匿が、ここに直接効く",
                 "Conduct and confidentiality bear on this directly"),
            ]),
            ("3つは分離できない", "The Three Are Inseparable", [
                ("1つの行動が3つを同時に守る",
                 "A single action protects all three at once"),
                ("1つの過失が3つを同時に損なう",
                 "A single lapse damages all three at once"),
                ("例：不適切な入館対応 → 来訪者の体験・情報漏洩・SNS拡散",
                 "Example: a poor entry decision → the visitor's experience, a leak, and social media"),
                ("迷ったら「いま何を守っているか」を言葉にする",
                 "When unsure, put into words what you are protecting right now"),
            ]),
        ],
        "何がAsset・People・Reputationに当たるか、その優先順位は配属先のSite SOPに具体的に定められている。",
        "What counts as each pillar, and their priority, are set out specifically in your site's SOP.",
        "警備業法、警察庁「警備員教育」、ASIS GDL CSO 06 2004", F_JP, F_EN, 8)

    # 9 ----------------------------------------------------------- 判断軸と3つの問い
    D.s_content(
        prs, "判断の軸と、本講習の3つの問い", "How to Decide, and the Three Questions", "B1",
        "要求がぶつかったときの優先順位を述べ、3つの問いで自分の行動を検証できる。",
        "You can state the priority order when demands conflict, and test your actions with the three questions.",
        [
            ("判断軸　優先する順に", "The Order of Priority", [
                ("① 人命 ― 迷ったらここに戻る",
                 "1. Life. When in doubt, come back to this"),
                ("② 法令 ― 社内規程は法令を超えられない",
                 "2. The law. Internal rules cannot override it"),
                ("③ Site SOP ― 現場の手順が一般原則に優先する",
                 "3. The Site SOP. Site procedure prevails over general principles"),
                ("④ クライアント要望 ― ①〜③に反しない範囲で",
                 "4. The client's wishes, within the limits of 1 to 3"),
            ]),
            ("ステークホルダー三層", "Three-Tier Stakeholders", [
                ("自社 ― 警備員の雇用主。教育と指揮命令の主体",
                 "Our company: your employer, responsible for training and the chain of command"),
                ("ビルオーナー／施設管理会社 ― 建物そのものの管理権原者",
                 "Building owner or facility manager: holds authority over the building itself"),
                ("クライアント企業（テナント）― 発注主でSite SOPの実質決定者",
                 "The client tenant: commissions the service and effectively defines the Site SOP"),
                ("報告は現場リーダーから自社へ。クライアント対応は上長経由",
                 "Report via the site leader to our company. Client matters go through your supervisor"),
            ]),
            ("本講習の3つの問い", "Three Questions for This Course", [
                ("何を守っているのか。People / Asset / Reputation のどれか",
                 "What am I protecting? People, Asset, or Reputation"),
                ("どの立場で動くのか。私人か、管理権者の補助者か",
                 "In what capacity am I acting? Private citizen, or agent for the site authority"),
                ("その手段は最小限か。越えた場合、何の罪に当たるか",
                 "Is this the minimum action? If I exceed it, what offence does it become"),
                ("全14コマでこの3問を使う。結論ではなく根拠を述べること",
                 "We use these in all fourteen sessions. State your reasoning, not just your conclusion"),
            ]),
            ("2日間の流れ", "The Two Days", [
                ("Day 1 ― 基本教育。全業務に共通する土台",
                 "Day 1: basic training, the foundation common to all duties"),
                ("Day 2 ― 業務別教育。施設警備の実務",
                 "Day 2: task-specific training, the practice of facility security"),
                ("各日の最後に確認テストを行う",
                 "Each day closes with a short assessment"),
                ("第5時限は通報訓練、第6時限は応急手当の実技",
                 "Period 5 is emergency-call practice; Period 6 is hands-on first aid"),
            ]),
        ],
        "報告ライン、クライアント窓口、常駐時間帯は現場ごとに異なる。Site SOPに従う。",
        "Reporting lines, client contacts and staffing hours differ by site. Follow the Site SOP.",
        SRC_LAW, F_JP, F_EN, 9)

    # 10 ---------------------------------------------------------- ミニTTX
    D.s_minittx(
        prs, "ミニTTX ― ○か×か、根拠を一言で", "Mini TTX — Yes or No, with one line of reasoning",
        "手元に○×と根拠を書いてください。挙手は求めません。指名します。",
        "Write your answer and your reason. No hands needed. I will call on you.",
        [
            ("自社の社員が自社ビルを見回るのは、警備業である。",
             "A company's own staff patrolling its own building is the security industry."),
            ("警備員は制服を着ているので、警察官に準じた権限がある。",
             "A guard in uniform has powers similar to a police officer."),
            ("現行犯逮捕は、警備員だからできることである。",
             "Citizen's arrest is something you can do because you are a guard."),
            ("警備員の服装は、警察官の制服と紛らわしくてもよい。",
             "A guard's uniform may closely resemble a police uniform."),
            ("入館の可否を判断できるのは、管理権者から委ねられているからである。",
             "You can decide on admission because the site authority delegated it."),
            ("クライアントの要望は、法令より優先される。",
             "The client's wishes take precedence over the law."),
            ("警備業を営むには、公安委員会の認定が必要である。",
             "Operating a security business requires certification by the commission."),
            ("守るのは物理資産だけで、情報は警備の対象外である。",
             "Only physical assets are protected; information is outside a guard's scope."),
        ],
        F_JP, F_EN, 10)

    # 11 ---------------------------------------------------------- ミニTTX解答
    D.s_rows(
        prs, "ミニTTX ― 解答と根拠の示し方", "Mini TTX — Answers and How to State Your Reasoning",
        "解答　1 ×　2 ×　3 ×　4 ×　5 ○　6 ×　7 ○　8 ×",
        "Answers:  1 No · 2 No · 3 No · 4 No · 5 Yes · 6 No · 7 Yes · 8 No",
        [
            ("設問1は「他人の需要に応じて」が要件です。自社を自社が守るのは警備業ではありません。",
             "Item 1 turns on serving the needs of others. Guarding your own premises is not the industry."),
            ("設問2・3は同じ論点です。制服では権限は増えず、現行犯逮捕は誰でもできることです。",
             "Items 2 and 3 are the same point. The uniform adds nothing, and anyone may make a citizen's arrest."),
            ("設問4は第16条です。公務員の制服と明確に識別できなければなりません。",
             "Item 4 is Article 16. The uniform must be clearly distinguishable from a public official's."),
            ("設問6は判断軸です。人命→法令→Site SOP→クライアント要望の順を崩しません。",
             "Item 6 is the priority order: life, law, Site SOP, then the client's wishes."),
            ("根拠の示し方：「〔私人／補助者〕として、〔目的〕のため、〔手段〕を取った」",
             "State it this way: \"As a [citizen / delegated agent], I took [action] for [purpose].\""),
        ],
        F_JP, F_EN, 11)

    # 12 ---------------------------------------------------------- TTX 1-A
    D.s_ttx(
        prs, "CASE 1-A", "TTX 1-A　警察官と間違われる", "TTX 1-A — Mistaken for a Police Officer",
        "平日の朝、オフィスビルのエントランスで立哨中。通りかかった高齢の女性が「すみません、"
        "近くで自転車を盗まれたので調書を取ってほしい」と話しかけてきた。あなたの制服を見て、"
        "警察官だと思っている様子である。周囲には出勤中の社員が多数いる。",
        "Morning, on stand at the entrance of an office building. An elderly woman stops and asks you "
        "to take a report because her bicycle was stolen nearby. She appears to think your uniform "
        "means you are a police officer. Many employees are arriving around you.",
        [
            ("これは People / Asset / Reputation のどれに関わる事案か。",
             "Which pillar does this concern: People, Asset, or Reputation?"),
            ("「警察官ではない」ことを、どう伝えるか。",
             "How do you convey that you are not a police officer?"),
            ("調書を取る、被害届を預かることはできるか。その根拠は。",
             "May you take a statement or accept a report? On what basis?"),
            ("この場を離れて交番まで案内してよいか。",
             "May you leave your post to walk her to the police box?"),
        ],
        [
            ("女性が「警察じゃないなら意味がない」と大きな声を出し始めた。",
             "She raises her voice: \"If you are not the police, this is useless.\""),
            ("出勤中の社員が足を止めて、こちらを見ている。",
             "Arriving employees have stopped and are watching."),
        ],
        "立哨位置を離れてよいか、離れる場合の連絡先は現場ごとに定められている。Site SOPに従う。",
        "Whether you may leave your post, and whom to notify if you do, are set per site.",
        SRC_LAW, F_JP, F_EN, 12)

    # 13 ---------------------------------------------------------- 1-A 解答
    D.s_debrief(
        prs, "CASE 1-A", "TTX 1-A 模範解答", "TTX 1-A — Model Answers",
        [
            ("問1 どの柱に関わるか",
             "People と Reputation。困っている人への対応であり、同時にクライアントの入口での振る舞いでもある。",
             "People and Reputation. It is help for a person in need, and it is also your conduct at the client's entrance."),
            ("問2 「警察官ではない」の伝え方",
             "先に否定せず、用件を受け止めてから伝える。「私は警備員です。交番の場所をご案内します」。",
             "Do not open with the denial. Take in what she needs first: \"I am a security guard. Let me point you to the police box.\""),
            ("問3 調書・被害届は扱えるか",
             "扱えない。警備員に捜査の権限はなく、書面を預かると相手の手続きを遅らせる。",
             "No. A guard has no investigative power, and holding a document would delay her own process."),
            ("問4 持ち場を離れてよいか",
             "原則として離れない。案内は口頭と指差しで行い、必要なら上長へ連絡する。",
             "As a rule, do not leave. Give directions verbally and by pointing; contact your supervisor if needed."),
        ],
        [
            ("「意味がない」と声が大きくなった → 反論しない。声量を下げ、できることだけを短く伝える。",
             "Do not argue back. Lower your own volume and state only what you can do."),
            ("社員が足を止めて見ている → 見られている前提で振る舞う。ここでの対応がReputationそのもの。",
             "Act as though you are being watched, because you are. This exchange is Reputation itself."),
        ],
        "案内のために持ち場を離れるか。離れないと答えた班には「では誰が対応するのか」を問う。",
        "Do you leave your post? Ask those who say no: then who does help her?",
        "立哨位置を離れる判断と連絡先はSite SOPによる。",
        "Whether to leave the post, and whom to notify, follow the Site SOP.",
        SRC_LAW, F_JP, F_EN, 13)

    # 14 ---------------------------------------------------------- TTX 1-B
    D.s_ttx(
        prs, "CASE 1-B", "TTX 1-B　クライアントからの依頼", "TTX 1-B — A Request from the Client",
        "夜間の常駐勤務中、クライアント企業の課長が警備デスクに来て言う。「今から社内の備品確認を"
        "する。悪いが、退社する社員のカバンを出口で一人ずつ開けて中を見てほしい。うちの依頼だから"
        "問題ない」。警備指令書にそのような業務は書かれていない。上長は不在である。",
        "On night duty, a client manager comes to the security desk: \"We are doing an equipment check. "
        "Please open and inspect each employee's bag at the exit. We are the client, so it is fine.\" "
        "The post orders contain no such duty. Your supervisor is away.",
        [
            ("所持品検査を強制することはできるか。その根拠は。",
             "Can a bag search be compelled? On what basis?"),
            ("「クライアントの依頼」は、業務範囲を広げる根拠になるか。",
             "Does \"the client asked\" extend the scope of your duties?"),
            ("判断軸のどこで、この依頼は止まるか。",
             "At which step of the priority order does this request stop?"),
            ("断る場合、何と言うか。関係を壊さずに断れるか。",
             "If you decline, what do you say? Can you decline without damaging the relationship?"),
        ],
        [
            ("課長が「では君は見ているだけでいい。私が開ける」と言い出した。",
             "The manager says: \"Then just stand there. I will open them myself.\""),
            ("退社しようとする社員が出口に並び始めた。",
             "Employees are starting to queue at the exit to leave."),
        ],
        "所持品確認の運用と、指令書にない依頼を受けた場合の連絡順序は現場ごとに異なる。",
        "How bag checks are handled, and whom to call for a request outside the post orders, differ by site.",
        SRC_POWER, F_JP, F_EN, 14)

    # 15 ---------------------------------------------------------- 1-B 解答
    D.s_debrief(
        prs, "CASE 1-B", "TTX 1-B 模範解答", "TTX 1-B — Model Answers",
        [
            ("問1 所持品検査を強制できるか",
             "できない。強制すれば強要罪等に当たりうる。任意の協力を求めることしかできない。",
             "No. Compelling it can amount to coercion. You may only ask for voluntary cooperation."),
            ("問2 「クライアントの依頼」は根拠になるか",
             "ならない。契約と警備指令書が業務範囲を決める。依頼で範囲は広がらない。",
             "No. The contract and post orders define the scope. A request does not widen it."),
            ("問3 判断軸のどこで止まるか",
             "②法令で止まる。クライアント要望は④であり、法令を超えられない。",
             "At step 2, the law. The client's wishes are step 4 and cannot override it."),
            ("問4 断り方",
             "「その対応は私の権限ではできません。上長に確認します」。断るのではなく、繋ぐと伝える。",
             "\"That is not within my authority. Let me check with my supervisor.\" You are routing, not refusing."),
        ],
        [
            ("「君は見ているだけでいい」 → 同席も加担になりうる。立ち会わず、その場で上長へ連絡する。",
             "Standing by can still make you a participant. Do not attend; call your supervisor there and then."),
            ("社員が出口に並び始めた → 通常どおり退館させる。止める根拠がない以上、止めない。",
             "Let them leave as normal. With no basis to stop them, you do not stop them."),
        ],
        "その場で断るか、いったん保留して上長を待つか。どちらも成り立つ。根拠を述べさせる。",
        "Decline on the spot, or hold and wait for the supervisor? Both are defensible. Make them state why.",
        "指令書にない依頼への対応順序はSite SOPと緊急連絡体制による。",
        "The order of response to a request outside the post orders follows the Site SOP and call-out list.",
        SRC_POWER, F_JP, F_EN, 15)

    # 16 ---------------------------------------------------------- まとめ
    D.s_rows(
        prs, "第1時限 まとめ", "Period 1 — Summary", "", "",
        [
            ("警備業は「他人の需要に応じて」行う民間サービス業。1号が施設警備。",
             "Security is a private service performed for others. Type 1 is facility security."),
            ("警備業法15条 ― 特別な権限はない。警察官にある権限は警備員にはない。",
             "Article 15 — no special authority. Police powers do not extend to guards."),
            ("守る対象は People / Asset / Reputation。情報は Asset に含む。",
             "People, Asset, Reputation. Information is part of Asset."),
            ("判断軸は 人命 → 法令 → Site SOP → クライアント要望。順序を崩さない。",
             "Priority: life, law, Site SOP, client wishes. Keep that order."),
        ],
        F_JP, F_EN, 16, dark=True,
        bridge=("第2時限 ― その土台の上に、警備員に求められる資質と品格を置きます。",
                "Period 2 — on that foundation, the qualities expected of an officer."))

    return 16
