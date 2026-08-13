'use strict';
// 第14時限｜業務別教育7 警報装置その他当該警備業務を実施するために使用する機器の使用方法
// Day 2 総括・確認テストを含む
// 内容ソース: HRSM指定の2記事（消火器・屋内消火栓）、前回現任講習 第10限

const path = require('path');
const { META_JA, META_EN, SRC, slot } = require('./common');

const ASSETS = path.resolve(__dirname, '..', '..', 'assets');
const SUBJ = '警報装置その他当該警備業務を実施するために使用する機器の使用方法';

const SRC_FIRE = '消防法、総務省消防庁、株式会社初田製作所「防災ナビ」、全国消防点検.com';

module.exports = {
  file: '14_14限_消防用設備.pptx',
  footJa: `第14時限｜業務別教育7 ${SUBJ}`,
  footEn: 'Period 14 | Task-Specific Training 7 — Security and Fire Safety Equipment',
  slides: [
    {
      type: 'title',
      kicker: `第14時限　${slot(14)}　業務別教育7`,
      kickerEn: 'Period 14 — Task-Specific Training 7',
      titleJa: '消防用設備と機器の使用方法',
      titleEn: 'Fire Safety Equipment and How It Is Used',
      metaJa: META_JA, metaEn: META_EN,
    },

    {
      type: 'links',
      block: 'B14',
      titleJa: '本コマの参照先', titleEn: 'Reference Sites for This Session',
      lead: '写真はスライドに載せていません。下のQRから、それぞれの解説ページで確認してください。',
      leadEn: 'The photographs are not on the slides. Use the QR codes to view them on each site.',
      items: [
        {
          ja: '消火器の種類と設置基準', en: 'Types of Extinguisher, and Where They Go',
          url: 'https://bosai-navit.hatsuta.co.jp/issues/fire-extinguisher-type/',
          qr: path.join(ASSETS, 'qr_shokaki.png'),
        },
        {
          ja: '屋内消火栓とはどんなもの', en: 'What an Indoor Fire Hydrant Is',
          url: 'https://shobotenken.com/news/2770',
          qr: path.join(ASSETS, 'qr_shokasen.png'),
        },
      ],
      note: '本スライドの内容は、上記2記事の要約です。実際の設備は現場のものと異なる場合があるため、配属先で必ず実機を確認してください。',
      noteEn: 'These slides summarise the two articles above. Actual equipment differs by site — always check the real thing where you are posted.',
      sources: SRC_FIRE,
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '消火器の種類と適応火災', titleEn: 'Types of Extinguisher, and What They Work On',
      obj: '消火器の種類と適応火災を述べ、自分の現場にあるものを見分けられる。',
      objEn: 'You can name the types and what they work on, and identify the ones on your own site.',
      sop: '設置場所、種類、本数は現場ごとに異なる。配属時に必ず自分の目で確認する。',
      sopEn: 'Location, type and number differ by site. Check them yourself when you are assigned.',
      sources: SRC_FIRE, cols: 2,
      topics: [
        {
          h: '火災の3区分', hEn: 'The Three Classes of Fire',
          b: [
            { ja: 'A 普通火災 ― 木材、紙、繊維、ふとん、合成樹脂', en: 'Class A: wood, paper, textiles, bedding, plastics' },
            { ja: 'B 油火災 ― ガソリン、天ぷら油、灯油、アルコール', en: 'Class B: petrol, cooking oil, kerosene, alcohol' },
            { ja: 'C 電気火災 ― 通電中の電線被覆など', en: 'Class C: live electrical equipment and cabling' },
          ],
        },
        {
          h: '粉末（ABC）消火器', hEn: 'ABC Dry Powder',
          b: [
            { ja: 'A・B・C すべてに使える。最も普及している', en: 'Works on A, B and C. The most widely installed type' },
            { ja: '薬剤は第一リン酸アンモニウムの微粉末', en: 'The agent is a fine powder of monoammonium phosphate' },
            { ja: '事務所・工場・店舗・学校など、広く置かれている', en: 'Found in offices, factories, shops and schools' },
          ],
        },
        {
          h: '強化液・泡', hEn: 'Loaded Stream and Foam',
          b: [
            { ja: '強化液は A・B・C。放射時間が長く、天ぷら油火災に適する', en: 'Loaded stream covers A, B and C. Long discharge; suited to cooking-oil fires' },
            { ja: '泡は A・B。油面に膜を作り、再着火を防ぐ', en: 'Foam covers A and B. It films over the oil surface and prevents re-ignition' },
            { ja: '泡は危険物取扱所・化学薬品工場・給油所に置かれる', en: 'Foam is used at hazardous-materials sites, chemical plants and filling stations' },
          ],
        },
        {
          h: 'ピュアウォーター・二酸化炭素', hEn: 'Pure Water and Carbon Dioxide',
          b: [
            { ja: 'ピュアウォーターは A・C。残留物がほとんどない', en: 'Pure water covers A and C, and leaves almost no residue' },
            { ja: 'サーバ室・通信設備室・精密機械工場に置かれる', en: 'Used in server rooms, comms rooms and precision-equipment plants' },
            { ja: '二酸化炭素は B・C。電気室・変電室・精密機器室に置かれる', en: 'CO2 covers B and C, and is used in electrical and switch rooms' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '屋内消火栓の4種類', titleEn: 'The Four Types of Indoor Hydrant',
      obj: '4種類の違いを述べ、自分の現場のものが何号かを言える。',
      objEn: 'You can state the differences, and say which type is installed on your site.',
      sop: '設置されている種類、起動方法、使用の可否は現場ごとに定められている。',
      sopEn: 'Which type is installed, how it starts, and whether you may use it are set per site.',
      sources: SRC_FIRE, cols: 2,
      topics: [
        {
          h: '1号消火栓', hEn: 'Type 1',
          b: [
            { ja: '操作には訓練を積んだ人が2名以上必要', en: 'It takes two or more trained people to operate' },
            { ja: '放水量は毎分130リットル以上、警戒半径25メートル', en: '130 litres per minute or more, with a 25-metre coverage radius' },
            { ja: 'ホースは平型で折りたたみ式。取り回しが難しい', en: 'The hose is flat and folded, and is hard to handle' },
          ],
        },
        {
          h: '易操作性1号消火栓', hEn: 'Easy-Operation Type 1',
          b: [
            { ja: '1名で操作できる。放水量と放水圧力は1号と同じ', en: 'One person can operate it. Flow and pressure are the same as Type 1' },
            { ja: 'ホースは筒状の保形ホース。取り回しが容易', en: 'The hose keeps its shape, and is easier to handle' },
            { ja: 'ノズルの先端に放水を調整できるバルブが付いている', en: 'There is a valve at the nozzle to control the discharge' },
          ],
        },
        {
          h: '2号型消火栓', hEn: 'Type 2',
          b: [
            { ja: '1名で操作できる。小規模火災を主な対象とする', en: 'One person can operate it. Intended for smaller fires' },
            { ja: '放水量は毎分60リットル以上、警戒半径15メートル', en: '60 litres per minute or more, with a 15-metre coverage radius' },
            { ja: 'ホースは保形ホースで全長20メートル', en: 'A shape-retaining hose, 20 metres long' },
          ],
        },
        {
          h: '広範囲型2号消火栓', hEn: 'Wide-Area Type 2',
          b: [
            { ja: '1名で操作でき、放水量は毎分80リットル以上', en: 'One person can operate it, at 80 litres per minute or more' },
            { ja: '放水圧力は1号と同じ。2号より消火性能が高い', en: 'Pressure matches Type 1, and it outperforms Type 2' },
            { ja: 'ホースは全長30メートル。2号との違いはホースの長さで見分ける', en: 'A 30-metre hose. Hose length is how you tell it from Type 2' },
          ],
        },
      ],
    },

    {
      type: 'two',
      titleJa: '現場での見分け方', titleEn: 'Telling Them Apart on Site',
      lead: '見分けの手がかりは、ホースの形状と長さです。',
      leadEn: 'What you go by is the shape and the length of the hose.',
      left: {
        h: '1号か、それ以外か', hEn: 'Type 1, or the Rest',
        items: [
          { ja: '1号のホースは「平型」。折りたたんで収納されている', en: 'Type 1 uses a flat hose, stored folded' },
            { ja: 'それ以外は「保形ホース」。筒状のまま巻かれている', en: 'The others use a shape-retaining hose, coiled as a tube' },
          { ja: '1号は2名以上。単独では扱わない', en: 'Type 1 needs two or more people. Never handle it alone' },
        ],
      },
      right: {
        h: '2号か、広範囲型2号か', hEn: 'Type 2, or Wide-Area Type 2',
        items: [
          { ja: 'ホースの長さで見分ける。2号は20m、広範囲型は30m', en: 'Go by hose length: 20 m for Type 2, 30 m for wide-area' },
          { ja: '見た目はほぼ同じ。並べないと分からない程度の差', en: 'They look almost identical; the difference shows only side by side' },
          { ja: '易操作性1号との区別は、ホースの太さや呼称で判断する', en: 'To separate it from Easy-Operation Type 1, go by hose diameter and the marking' },
        ],
      },
      note: '自分の現場の消火栓が何号かを、配属時に必ず確認してください。1号であれば、単独では使えません。',
      noteEn: 'Find out which type your site has when you are assigned. If it is Type 1, you cannot use it alone.',
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '屋内消火栓の構成と放水までの流れ', titleEn: 'What It Is Made Of, and How Water Gets There',
      obj: '構成設備を挙げ、起動から放水までの流れを順に言える。',
      objEn: 'You can name the components, and walk through from activation to discharge.',
      sop: '起動装置の位置、非常用電源、水源の場所は現場ごとに異なる。',
      sopEn: 'Where the starter, the emergency power supply and the water source are differ by site.',
      sources: SRC_FIRE, cols: 2,
      topics: [
        {
          h: '構成する設備', hEn: 'The Components',
          b: [
            { ja: 'ノズル、ホース、開閉弁、消火栓格納箱', en: 'Nozzle, hose, valve, and the cabinet they are kept in' },
            { ja: '送水用配管、加圧送水装置（消火栓ポンプ）、起動装置', en: 'Supply piping, the pressurised pump, and the starter' },
            { ja: '非常用電源、水源。水源は建物の最下部と屋上に設けられる', en: 'Emergency power and a water source, usually at the lowest level and on the roof' },
          ],
        },
        {
          h: '放水までの6段階', hEn: 'Six Steps to Discharge',
          b: [
            { ja: '① 自動火災報知設備の作動、または起動装置を作動させる', en: '1. The fire alarm operates, or you operate the starter' },
            { ja: '② 水源から加圧送水装置へ → ③ 配管を通って格納箱まで', en: '2. Water goes from the source to the pump. 3. Through the piping to the cabinet' },
            { ja: '④ ホースとノズルを取り出す → ⑤ 開閉弁を操作 → ⑥ 放水', en: '4. Take out hose and nozzle. 5. Operate the valve. 6. Discharge' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '（参考）消火器の設置基準', titleEn: '(Reference) How Extinguisher Requirements Are Set',
      obj: '設置基準の考え方を知る。判定と算定は防火管理者と消防設備士の領域である。',
      objEn: 'You get the idea of how requirements are set. Assessing and calculating them is not your job.',
      sop: '自分の現場に何が、どこに、何本あるかを把握することが目的である。',
      sopEn: 'The point is to know what is on your site, where, and how many.',
      sources: SRC_FIRE, cols: 2,
      topics: [
        {
          h: '判定の考え方', hEn: 'How It Is Decided',
          b: [
            { ja: '防火対象物を用途で区分し、延べ面積と構造で判定する', en: 'Buildings are grouped by use, then judged on floor area and construction' },
            { ja: '劇場・遊技場・地下街などは、面積によらず設置義務がある', en: 'Theatres, amusement facilities and underground malls are covered regardless of area' },
            { ja: '事務所などは延べ面積300㎡以上が判定の目安になる', en: 'For offices, the threshold is a total floor area of 300 m² or more' },
          ],
        },
        {
          h: '本数の求め方', hEn: 'How the Number Is Worked Out',
          b: [
            { ja: '必要な能力単位 ＝ 延べ面積 ÷ 1単位あたりの面積', en: 'Required rating units = total floor area ÷ area covered per unit' },
            { ja: '機種ごとに能力単位が異なるため、必要な本数が変わる', en: 'Each model has a different rating, so the number needed changes' },
            { ja: '**この算定は防火管理者と消防設備士が行う。警備員は行わない**', en: 'This calculation is for the fire manager and the licensed engineer, not for you' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '警報設備と、発報時の確認', titleEn: 'Alarm Systems, and What to Do When One Activates',
      obj: '発報が火災の確定ではないことを述べ、確認の順序を言える。',
      objEn: 'You can say that an activation is not a confirmed fire, and state the order of checks.',
      sop: '受信機の位置、現場確認の人数、非常放送の操作権限は現場ごとに定められている。',
      sopEn: 'Panel location, how many go to verify, and who may operate the PA are set per site.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '自動火災報知設備', hEn: 'The Fire Alarm System',
          b: [
            { ja: '受信機、感知器、発信機で構成される', en: 'A panel, detectors, and manual call points' },
            { ja: '感知器には熱を見るものと、煙を見るものがある', en: 'Detectors sense either heat or smoke' },
            { ja: '受信機の地区表示で、どこが鳴っているかが分かる', en: 'The zone display on the panel tells you where it is' },
          ],
        },
        {
          h: '発報は火災の確定ではない', hEn: 'An Activation Is Not a Confirmed Fire',
          b: [
            { ja: '発報は、感知器が作動したという事実にすぎない', en: 'It only means a detector operated' },
            { ja: '蒸気、埃、調理、工事、殺虫剤でも作動する', en: 'Steam, dust, cooking, building work and insecticide will also set it off' },
            { ja: '確認前に「火事です」と言わない。判断が固定される', en: 'Do not say "fire" before verifying. It locks in a conclusion' },
          ],
        },
        {
          h: '確認の順序', hEn: 'The Order of Checks',
          b: [
            { ja: '地区表示を読む。何階、どの区画か', en: 'Read the zone display: which floor, which zone' },
            { ja: '一報を入れてから動く。動いてからでは遅い', en: 'Report before you move, not after' },
            { ja: '扉に触れて熱を確認する。熱ければ開けない', en: 'Touch the door to check for heat. If it is hot, do not open it' },
          ],
        },
        {
          h: '判断が変わる情報', hEn: 'Information That Changes the Picture',
          b: [
            { ja: '「煙は見えない」は火災を否定する根拠にならない', en: '"No smoke visible" does not rule out a fire' },
            { ja: '感知器の位置と、人がいる位置は異なる', en: 'The detector is not where the people are' },
            { ja: '複数区画の発報は、非火災報の可能性が下がる', en: 'Activations in several zones make a non-fire cause less likely' },
          ],
        },
      ],
    },

    {
      type: 'topics', block: 'B14',
      titleJa: '警備員としての線引き', titleEn: 'Where Your Part Begins and Ends',
      obj: 'どこまで自分で行い、どこから避難と通報に切り替えるかを言える。',
      objEn: 'You can say how far you go yourself, and when you switch to evacuation and calling.',
      sop: '初期消火の可否、避難誘導の担当区分、通報の判断者は現場ごとに定められている。',
      sopEn: 'Whether you attempt first-response firefighting, evacuation areas and who calls are set per site.',
      sources: SRC.emg, cols: 2,
      topics: [
        {
          h: '初期消火の限界', hEn: 'The Limit of First-Response Firefighting',
          b: [
            { ja: '炎が天井に達する前までが目安。それ以降は避難と通報を優先する', en: 'Up to the point flames reach the ceiling. After that, evacuation and calling come first' },
            { ja: '背中を出口側に置く。消火のために奥へ入らない', en: 'Keep the exit at your back. Do not move deeper in to fight the fire' },
            { ja: '一人で消そうとしない。応援と通報を先に手配する', en: 'Do not try to put it out alone. Arrange backup and the call first' },
          ],
        },
        {
          h: '触らない設備', hEn: 'Equipment You Do Not Touch',
          b: [
            { ja: '操作方法を知らない設備には触れない', en: 'Do not touch equipment you have not been trained on' },
            { ja: '音を止めることは目的ではない', en: 'Silencing an alarm is not the objective' },
            { ja: '1号消火栓は、単独では扱わない', en: 'A Type 1 hydrant is never handled alone' },
          ],
        },
        {
          h: '専用の消火器がある場所', hEn: 'Where a Specific Extinguisher Is Placed',
          b: [
            { ja: 'サーバ室・電気室には専用の消火器が置かれていることがある', en: 'Server rooms and electrical rooms may have a specific type placed there' },
            { ja: '持ち出さない。他の場所のものと入れ替えない', en: 'Do not take it away, and do not swap it with one from elsewhere' },
            { ja: '二酸化炭素消火器は、密閉された狭い空間での使用は危険である', en: 'A CO2 extinguisher is dangerous to use in a small enclosed space' },
          ],
        },
        {
          h: '避難と連動', hEn: 'Evacuation and Linked Systems',
          b: [
            { ja: '防火戸やシャッターが閉鎖すると、通行できる経路が変わる', en: 'When fire doors and shutters close, the usable routes change' },
            { ja: '階段誘導が前提。エレベーターは使わせない', en: 'Assume stairs. Do not let people use the lifts' },
            { ja: '外国語の来訪者には「This way, please」と方向を手で示す', en: 'For non-Japanese visitors, "this way, please" with a gesture is enough' },
          ],
        },
      ],
    },

    {
      type: 'caseSlide', block: 'CASE 14-A',
      titleJa: 'TTX 14-A　3階東区画で発報', titleEn: 'TTX 14-A — Activation, Third Floor East',
      scenarioJa: '18時40分、受信機が3階東区画で発報した。防火戸が閉鎖している。あなたが現場へ向かうと、給湯室の付近で焦げたような臭いがするが、炎も煙も見えない。近くにいた社員は「電子レンジを使っていた」と言う。館内にはまだ多数の社員が残っている。上長は不在で電話がつながらない。',
      scenarioEn: '18:40. The panel activates for the third-floor east zone, and the fire doors have closed. You go up and find a burnt smell near the pantry, but no flames and no smoke. An employee nearby says they were using the microwave. Many staff are still in the building. Your supervisor is away and not answering.',
      questionJa: 'あなたなら次の60秒、何をどう動きますか。',
      questionEn: 'What do you do in the next sixty seconds?',
      points: [
        { ja: '「電子レンジを使っていた」は、火災を否定する根拠になるか。', en: 'Does "we were using the microwave" rule out a fire?' },
        { ja: '最初に確認するものは何か。無線で何と伝えるか。', en: 'What do you check first, and what do you say on the radio?' },
        { ja: '通報するか。誰が判断するか。上長不在の場合はどうするか。', en: 'Do you call? Who decides? What if your supervisor is unreachable?' },
        { ja: '防火戸が閉鎖していることは、誘導にどう影響するか。', en: 'How do the closed fire doors affect how you guide people?' },
      ],
      inject: '受信機が、4階西区画で第2報を表示した。',
      injectEn: 'The panel shows a second activation, fourth-floor west zone.',
      inject2: '社員の一人が「うるさいからベルを止めてほしい」と言ってきた。',
      inject2En: 'An employee asks you to silence the bell because of the noise.',
      sop: '通報の判断者、現場確認の人数、非常放送の操作権限は現場ごとに定められている。',
      sopEn: 'Who decides on the call, how many go to verify, and who may operate the PA are set per site.',
      sources: SRC.emg + '、架空シナリオ',
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問1〜問5', titleEn: 'Assessment — Questions 1 to 5',
      lead: '15分。回答は日本語・英語どちらでも構いません。記述は一言で結構です。',
      leadEn: '15 minutes. Answer in Japanese or English. Short answers are fine.',
      rows: [
        { ja: '出入管理で確認する3つのことを挙げよ。', en: 'Name the three things access control verifies.' },
        { ja: '共連れを強行突破された。あなたは何をするか。', en: 'Someone tailgates and pushes through. What do you do?' },
        { ja: '巡回の3つの目的を挙げよ。最も忘れられやすいのはどれか。', en: 'Name the three purposes of patrol. Which is most often forgotten?' },
        { ja: '「不審」と判断する根拠にしてよいものと、してはいけないものは何か。', en: 'What may and may not be a ground for treating someone as suspicious?' },
        { ja: '保全と開示の違いは何か。警備員が受けられるのはどちらか。', en: 'What is the difference between preserving and disclosing? Which may you accept?' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　問6〜問10', titleEn: 'Assessment — Questions 6 to 10',
      rows: [
        { ja: '不審な物件を発見した。してはいけないことを3つ挙げよ。', en: 'You find a suspicious object. Name three things you must not do.' },
        { ja: '引継ぎに必ず含める項目を4つ挙げよ。', en: 'Name four things a handover must contain.' },
        { ja: '受信機が発報した。最初に確認するものは何か。', en: 'The fire panel activates. What do you check first?' },
        { ja: '1号消火栓を、あなた1人で使ってよいか。理由も述べよ。', en: 'May you use a Type 1 hydrant on your own? Give your reason.' },
        { ja: '消火器による初期消火をやめる目安はどこか。', en: 'At what point do you stop trying to put a fire out with an extinguisher?' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問1〜問5', titleEn: 'Assessment — Answers 1 to 5',
      lead: '表現が異なっても、要点が含まれていれば正解とします。',
      leadEn: 'Different wording is fine if the point is there.',
      rows: [
        { ja: '問1　誰か、入ってよいか、どこまでか。', en: 'Q1 Who they are, whether they may enter, and how far that goes.' },
        { ja: '問2　追わない。人相・着衣・時刻を記録し、上長へ報告してカメラ確認を依頼する。', en: 'Q2 Do not chase. Record appearance, clothing and time; report and ask for the footage.' },
        { ja: '問3　発見・抑止・記録。忘れられやすいのは記録。', en: 'Q3 Detection, deterrence, documentation. Documentation is the one forgotten.' },
        { ja: '問4　してよいのは観察した行動。国籍・人種・年齢・性別・服装は根拠にならない。', en: 'Q4 Observed behaviour may be a ground. Nationality, race, age, sex and dress may not.' },
        { ja: '問5　保全は残すこと、開示は渡すこと。受けられるのは保全のみ。', en: 'Q5 Preserving keeps it; disclosing hands it over. Only preservation is yours to accept.' },
      ],
    },

    {
      type: 'rows',
      titleJa: '確認テスト　解答　問6〜問10', titleEn: 'Assessment — Answers 6 to 10',
      lead: '問9と問10は重点問題です。落とした受講者には個別に確認してください。',
      leadEn: 'Questions 9 and 10 are the key items. Follow up individually with anyone who missed them.',
      rows: [
        { ja: '問6　触らない、動かさない、開けない。そばで無線を使わないも可。', en: 'Q6 Do not touch, move or open it. "No radio nearby" is also accepted.' },
        { ja: '問7　未完了事項／例外的に許可した事項／鍵・備品の授受／設備の異常／在館者／指示 から4つ。', en: 'Q7 Any four of: unresolved matters, exceptions allowed, keys and equipment, faults, who is still in, instructions.' },
        { ja: '問8　地区表示。どこが鳴っているか。確認前に「火事です」とは言わない。', en: 'Q8 The zone display — where it is. Do not say "fire" before verifying.' },
        { ja: '問9　使えない。1号は訓練を積んだ人が2名以上必要。反動が強く、平型ホースの取り回しも難しい。', en: 'Q9 No. Type 1 needs two or more trained people: strong reaction force and a hard-to-handle flat hose.' },
        { ja: '問10　炎が天井に達する前まで。それ以降は避難と通報を優先する。', en: 'Q10 Up to the point flames reach the ceiling. After that, evacuation and calling come first.' },
      ],
    },

    {
      type: 'close',
      titleJa: 'Day 2 総括', titleEn: 'Day 2 — Review',
      rows: [
        { ja: '出入管理は1認証で1人。応じない相手は追わず、記録に切り替える。', en: 'One authentication, one person. Do not chase; switch to recording.' },
        { ja: '不審の根拠は行動。外見・国籍・言語は根拠にならない。', en: 'Behaviour is the ground. Appearance, nationality and language are not.' },
        { ja: '引継ぎは口頭と記録の両方。「異常なし」だけで終えない。', en: 'Hand over verbally and in writing. Do not stop at "nothing to report".' },
        { ja: '発報は火災の確定ではない。1号消火栓は単独で扱わない。', en: 'An activation is not a confirmed fire, and a Type 1 hydrant is never handled alone.' },
      ],
      next: '2日間で扱ったのは一般原則です。配属先では、必ずSite SOPと警備指令書を確認してください。',
      nextEn: 'These two days covered general principles. On site, always check the Site SOP and post orders.',
    },
  ],
};
