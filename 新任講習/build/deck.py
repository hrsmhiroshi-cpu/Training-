"""
VRM 新任講習 pptx ビルダー

前回現任講習（2026-08-11 実施）の 6 ファイルから抽出したデザイン仕様を再現する。
仕様の出所: 01_1限_基本原則.pptx を展開し、全スライドの座標・配色・書体を実測。

  スライド      13.333 x 7.5 in (16:9)
  日本語書体    Yu Gothic / 英語書体 Calibri
  本文          日本語1行の直後に英語1行（対訳配置）
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn
import copy

# ---------------------------------------------------------------- palette

NAVY      = RGBColor(0x09, 0x32, 0x59)   # 見出し・バッジ・暗背景
NAVY_DEEP = RGBColor(0x06, 0x22, 0x3D)   # まとめスライドの行カード
TEAL      = RGBColor(0x12, 0xB1, 0x98)   # アクセント・英字副題
TEAL_DK   = RGBColor(0x0D, 0x8A, 0x76)   # 身につくこと・Site SOP
INK       = RGBColor(0x1B, 0x27, 0x33)   # 本文（日）
MUTED     = RGBColor(0x5F, 0x71, 0x83)   # フッター・ソース
INK_EN    = RGBColor(0x2E, 0x3D, 0x4C)   # 本文（英）— 日本語と対等な濃度
MINT_EN   = RGBColor(0xCB, 0xE8, 0xE0)   # 暗背景上の英文（本文級）
CARD_A    = RGBColor(0xEF, 0xF4, 0xF8)   # カード（左列）
CARD_B    = RGBColor(0xF7, 0xFA, 0xFC)   # カード（右列）
LEARN_BG  = RGBColor(0xE4, 0xF4, 0xF0)   # 身につくこと帯・追加付与帯
RULE      = RGBColor(0xD6, 0xE0, 0xE9)   # ソース行
WHITE     = RGBColor(0xFF, 0xFF, 0xFF)
MINT      = RGBColor(0x9F, 0xD8, 0xCD)   # 暗背景上の英字
STEEL     = RGBColor(0xC9, 0xD6, 0xE2)   # 暗背景上の日付行

JP = "Yu Gothic"
EN = "Calibri"

LOGO = None  # build_deck() で差し込む

# ---------------------------------------------------------------- helpers


def _set_font(run, name, size, color, bold=False):
    f = run.font
    f.name = name
    f.size = Pt(size)
    f.bold = bold
    f.color.rgb = color
    # python-pptx は latin しか設定しないので東アジア字形も明示する
    rPr = run._r.get_or_add_rPr()
    for tag in ("a:ea", "a:cs"):
        el = rPr.find(qn(tag))
        if el is None:
            el = rPr.makeelement(qn(tag), {})
            rPr.append(el)
        el.set("typeface", name)


def _tf(shape):
    tf = shape.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    return tf


def text_box(slide, L, T, W, H, lines, anchor=MSO_ANCHOR.TOP, align=PP_ALIGN.LEFT,
             line_spacing=None):
    """lines: [(text, font, size, color, bold, space_before_pt)] """
    box = slide.shapes.add_textbox(Inches(L), Inches(T), Inches(W), Inches(H))
    tf = _tf(box)
    tf.vertical_anchor = anchor
    first = True
    for item in lines:
        text, font, size, color, bold = item[:5]
        sb = item[5] if len(item) > 5 else 0
        p = tf.paragraphs[0] if first else tf.add_paragraph()
        first = False
        p.alignment = align
        if sb:
            p.space_before = Pt(sb)
        if line_spacing:
            p.line_spacing = line_spacing
        r = p.add_run()
        r.text = text
        _set_font(r, font, size, color, bold)
    return box


def round_rect(slide, L, T, W, H, fill, adj=None):
    sh = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
                                Inches(L), Inches(T), Inches(W), Inches(H))
    sh.fill.solid()
    sh.fill.fore_color.rgb = fill
    sh.line.fill.background()
    sh.shadow.inherit = False
    if adj is not None:
        sh.adjustments[0] = adj
    return sh


def circle(slide, L, T, D, fill, label, size=11, color=WHITE):
    sh = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(L), Inches(T),
                                Inches(D), Inches(D))
    sh.fill.solid()
    sh.fill.fore_color.rgb = fill
    sh.line.fill.background()
    sh.shadow.inherit = False
    tf = _tf(sh)
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = str(label)
    _set_font(r, EN, size, color, True)
    return sh


def blank(prs, bg=WHITE, logo=True):
    s = prs.slides.add_slide(prs.slide_layouts[6])
    # 背景
    bgPr = s._element.makeelement(qn("p:bg"), {})
    pr = s._element.makeelement(qn("p:bgPr"), {})
    fill = s._element.makeelement(qn("a:solidFill"), {})
    clr = s._element.makeelement(qn("a:srgbClr"), {"val": "%02X%02X%02X" % (bg[0], bg[1], bg[2])})
    fill.append(clr)
    pr.append(fill)
    eff = s._element.makeelement(qn("a:effectLst"), {})
    pr.append(eff)
    bgPr = pr
    bgEl = s._element.makeelement(qn("p:bg"), {})
    bgEl.append(bgPr)
    cSld = s._element.find(qn("p:cSld"))
    cSld.insert(0, bgEl)
    if logo and LOGO:
        if bg != WHITE:
            round_rect(s, 11.63, 0.24, 1.14, 1.06, WHITE, 0.10)
        s.shapes.add_picture(LOGO, Inches(11.77), Inches(0.36),
                             Inches(0.86), Inches(0.81))
    return s


def footer(slide, foot_jp, foot_en, page):
    text_box(slide, 0.70, 6.98, 9.60, 0.32,
             [(f"{foot_jp}  {foot_en}", JP, 9.0, MUTED, False)])
    text_box(slide, 11.63, 6.98, 1.00, 0.32,
             [(str(page), EN, 10.0, MUTED, False)], align=PP_ALIGN.RIGHT)


def heading(slide, jp, en, big=False):
    """スライド見出し。big=True は帯・引用系（27pt）、既定は内容系（23pt）。"""
    if big:
        text_box(slide, 0.70, 0.52, 10.72, 1.05,
                 [(jp, JP, 27.0, NAVY, True), (en, EN, 16.0, TEAL, False, 3)])
    else:
        text_box(slide, 0.70, 0.42, 9.82, 0.84,
                 [(jp, JP, 23.0, NAVY, True), (en, EN, 14.0, TEAL, False, 2)])


def badge(slide, label):
    round_rect(slide, 10.59, 0.48, 1.02, 0.34, NAVY, 0.147)
    b = text_box(slide, 10.59, 0.48, 1.02, 0.34,
                 [(label, EN, 11.0, WHITE, True)], anchor=MSO_ANCHOR.MIDDLE,
                 align=PP_ALIGN.CENTER)
    return b


def learn_bar(slide, jp, en):
    round_rect(slide, 0.70, 1.30, 11.93, 0.58, LEARN_BG, 0.069)
    text_box(slide, 0.96, 1.35, 11.41, 0.48,
             [(f"身につくこと / What You'll Learn　{jp}", JP, 10.0, TEAL_DK, True),
              (en, EN, 9.5, TEAL_DK, False)])


def sop_and_source(slide, sop_jp, sop_en, source):
    if sop_jp:
        text_box(slide, 0.70, 6.46, 11.93, 0.34,
                 [(f"Site SOP優先 / Follow the Site SOP　{sop_jp}", JP, 9.0, TEAL_DK, True),
                  (sop_en, EN, 8.5, TEAL_DK, False)])
    if source:
        text_box(slide, 0.70, 6.78, 10.83, 0.26,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])


# ---------------------------------------------------------------- slides


def s_title(prs, period_line_jp, period_line_en, title_jp, title_en,
            date_jp, date_en):
    s = blank(prs, NAVY)
    text_box(s, 0.70, 1.55, 10.60, 0.70,
             [(period_line_jp, JP, 13.0, TEAL, True),
              (period_line_en, EN, 12.0, MINT, False, 2)])
    text_box(s, 0.70, 2.42, 10.90, 0.98,
             [(title_jp, JP, 36.0, WHITE, True)])
    text_box(s, 0.70, 3.54, 10.90, 0.85,
             [(title_en, EN, 20.0, MINT, False)])
    bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.70), Inches(5.28),
                             Inches(1.50), Inches(0.04))
    bar.fill.solid(); bar.fill.fore_color.rgb = TEAL
    bar.line.fill.background(); bar.shadow.inherit = False
    text_box(s, 0.70, 5.60, 10.90, 0.90,
             [(date_jp, JP, 12.0, STEEL, False),
              (date_en, EN, 11.5, STEEL, False, 2)])
    return s


def s_content(prs, title_jp, title_en, badge_label, learn_jp, learn_en,
              blocks, sop_jp, sop_en, source, foot_jp, foot_en, page):
    """blocks: 4件の (見出し日, 見出し英, [(日, 英) x3])

    外国籍受講者が多数を占めるため、1ブロック3項目・1行1行に抑える。
    日本語は概ね34字以内、英語は72字以内で折り返さない長さにすること。
    """
    s = blank(prs)
    heading(s, title_jp, title_en)
    badge(s, badge_label)
    learn_bar(s, learn_jp, learn_en)
    pos = [(0.70, 1.98, CARD_A), (6.81, 1.98, CARD_B),
           (0.70, 4.30, CARD_A), (6.81, 4.30, CARD_B)]
    for i, (blk, (L, T, fill)) in enumerate(zip(blocks, pos), start=1):
        h_jp, h_en, items = blk
        round_rect(s, L, T, 5.83, 2.10, fill, 0.019)
        circle(s, L + 0.20, T + 0.18, 0.34, NAVY, i)
        text_box(s, L + 0.62, T + 0.14, 4.99, 0.56,
                 [(h_jp, JP, 12.0, NAVY, True), (h_en, EN, 10.5, TEAL, False)])
        lines = []
        for j, (a, b) in enumerate(items):
            lines.append((f"・{a}", JP, 9.5, INK, False, 3 if j else 0))
            lines.append((f"　{b}", EN, 9.0, INK_EN, False))
        text_box(s, L + 0.24, T + 0.72, 5.40, 1.34, lines)
    sop_and_source(s, sop_jp, sop_en, source)
    footer(s, foot_jp, foot_en, page)
    return s


def s_quote(prs, title_jp, title_en, quote_jp, quote_en, cite,
            note_jp, note_en, foot_jp, foot_en, page):
    """条文を正文で示すスライド（前回第4限＝警備業法第15条と同形式）"""
    s = blank(prs)
    heading(s, title_jp, title_en, big=True)
    round_rect(s, 0.70, 1.78, 11.93, 2.62, NAVY, 0.019)
    text_box(s, 1.20, 2.12, 10.93, 1.11, [(quote_jp, JP, 14.5, WHITE, False)])
    text_box(s, 1.20, 3.25, 10.93, 0.87, [(quote_en, EN, 13.0, MINT_EN, False)])
    text_box(s, 1.20, 3.98, 10.93, 0.30, [(cite, EN, 11.0, TEAL, False)])
    round_rect(s, 0.70, 5.40, 11.93, 1.42, LEARN_BG, 0.019)
    circle(s, 1.00, 5.91, 0.40, TEAL, "!", size=14)
    text_box(s, 1.64, 5.52, 10.63, 1.18,
             [(note_jp, JP, 14.5, NAVY, True), (note_en, EN, 13.0, NAVY, False, 4)],
             anchor=MSO_ANCHOR.MIDDLE)
    footer(s, foot_jp, foot_en, page)
    return s


def s_compare(prs, title_jp, title_en, lead_jp, lead_en,
              left, right, note_jp, note_en, foot_jp, foot_en, page):
    """2列比較（前回第5限＝警察官と警備員と同形式）
    left/right: (見出し日, 見出し英, [(日, 英) x n])"""
    s = blank(prs)
    heading(s, title_jp, title_en, big=True)
    text_box(s, 0.70, 1.66, 11.93, 0.58,
             [(lead_jp, JP, 13.0, NAVY, True), (lead_en, EN, 12.0, INK_EN, False)])
    for (L, fill, col, hcol) in ((0.70, CARD_A, left, NAVY),
                                 (6.84, LEARN_BG, right, TEAL_DK)):
        h_jp, h_en, items = col
        round_rect(s, L, 2.44, 5.80, 3.46, fill, 0.019)
        text_box(s, L + 0.30, 2.68, 5.20, 0.74,
                 [(h_jp, JP, 16.0, hcol, True), (h_en, EN, 12.5, hcol, False)])
        lines = []
        for j, (a, b) in enumerate(items):
            lines.append((f"・{a}", JP, 12.0, INK, False, 4 if j else 0))
            lines.append((f"　{b}", EN, 11.0, INK_EN, False))
        text_box(s, L + 0.30, 3.52, 5.20, 2.12, lines)
    text_box(s, 0.70, 6.14, 11.93, 0.68,
             [(note_jp, JP, 13.0, TEAL_DK, True), (note_en, EN, 11.5, TEAL_DK, False)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_terms(prs, title_jp, title_en, lead_jp, lead_en, terms,
            foot_jp, foot_en, page):
    """用語解説（前回第2限＝日本の法律用語と同形式）。terms: [(日, 英)] 最大8"""
    s = blank(prs)
    heading(s, title_jp, title_en, big=True)
    text_box(s, 0.70, 1.64, 11.93, 0.56,
             [(lead_jp, JP, 13.0, NAVY, True), (lead_en, EN, 12.0, INK_EN, False)])
    tops = [2.40, 3.54, 4.69, 5.83]
    for i, (a, b) in enumerate(terms[:8]):
        col, row = i % 2, i // 2
        L = 0.70 if col == 0 else 6.82
        T = tops[row]
        round_rect(s, L, T, 5.82, 0.98, CARD_A, 0.019)
        circle(s, L + 0.20, T + 0.31, 0.36, NAVY, i + 1)
        text_box(s, L + 0.66, T + 0.08, 4.90, 0.82,
                 [(a, JP, 11.5, INK, False), (b, EN, 10.5, INK_EN, False)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_minittx(prs, title_jp, title_en, lead_jp, lead_en, items,
              foot_jp, foot_en, page):
    """ミニTTX 設問（○×8問）。items: [(日, 英)]"""
    return s_terms(prs, title_jp, title_en, lead_jp, lead_en, items,
                   foot_jp, foot_en, page)


def s_rows(prs, title_jp, title_en, lead_jp, lead_en, rows,
           foot_jp, foot_en, page, dark=False, bridge=None):
    """番号付き横長行のスライド（ミニTTX解答／まとめ／確認テスト解説）"""
    s = blank(prs, NAVY if dark else WHITE)
    if dark:
        text_box(s, 0.70, 0.72, 10.60, 1.30,
                 [(title_jp, JP, 30.0, WHITE, True),
                  (title_en, EN, 17.0, MINT, False, 4)])
    else:
        heading(s, title_jp, title_en, big=True)
        if lead_jp:
            text_box(s, 0.70, 1.68, 11.93, 0.62,
                     [(lead_jp, JP, 13.0, NAVY, True),
                      (lead_en, EN, 12.0, INK_EN, False)])
    top = 2.28 if dark else 2.50
    step = 0.96 if dark else 0.89
    h = 0.74 if dark else 0.77
    for i, (a, b) in enumerate(rows):
        T = top + step * i
        round_rect(s, 0.70, T, 11.93, h, NAVY_DEEP if dark else (CARD_A if i % 2 == 0 else CARD_B), 0.019)
        circle(s, 1.00 if dark else 0.98, T + 0.16, 0.42, TEAL, i + 1, size=14)
        text_box(s, 1.66 if dark else 1.64, T + 0.10, 10.63 if dark else 10.69, 0.57,
                 [(a, JP, 14.5 if dark else 14.0, WHITE if dark else INK, False),
                  (b, EN, 13.0, MINT_EN if dark else INK_EN, False)])
    if bridge:
        text_box(s, 0.70, 6.12, 11.93, 0.66,
                 [(bridge[0], JP, 12.0, TEAL, True),
                  (bridge[1], EN, 11.0, MINT_EN if dark else INK_EN, False)])
    if not dark:
        footer(s, foot_jp, foot_en, page)
    return s


def s_ttx(prs, case_id, title_jp, title_en, sc_jp, sc_en, questions,
          injects, sop_jp, sop_en, source, foot_jp, foot_en, page):
    """TTX 出題（シナリオ／問い4／追加付与2）"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    badge(s, case_id)
    round_rect(s, 0.70, 1.30, 11.93, 1.23, NAVY, 0.019)
    text_box(s, 1.04, 1.44, 11.25, 0.95,
             [("シナリオ / SCENARIO", JP, 9.5, TEAL, True),
              (sc_jp, JP, 11.0, WHITE, False, 3),
              (sc_en, EN, 10.5, MINT_EN, False, 3)])
    text_box(s, 0.70, 2.69, 11.93, 0.62,
             [("問い　あなたなら次の60秒、何をどう動きますか。", JP, 10.5, TEAL_DK, True),
              ("What do you do in the next sixty seconds?", EN, 10.0, TEAL_DK, False)])
    pos = [(0.70, 3.37), (6.81, 3.37), (0.70, 4.41), (6.81, 4.41)]
    for i, ((a, b), (L, T)) in enumerate(zip(questions, pos), start=1):
        round_rect(s, L, T, 5.83, 0.92, CARD_A, 0.019)
        circle(s, L + 0.18, T + 0.30, 0.32, TEAL, i)
        text_box(s, L + 0.60, T + 0.06, 5.03, 0.80,
                 [(a, JP, 10.0, INK, False), (b, EN, 9.5, INK_EN, False)])
    for i, (a, b) in enumerate(injects[:2]):
        T = 5.38 + 0.52 * i
        round_rect(s, 0.70, T, 11.93, 0.46, LEARN_BG, 0.019)
        text_box(s, 0.96, T + 0.03, 11.41, 0.40,
                 [(f"追加付与{'①②'[i]} / Inject {i+1}　{a}", JP, 8.5, TEAL_DK, True),
                  (b, EN, 8.0, TEAL_DK, False)])
    sop_and_source(s, sop_jp, sop_en, source)
    footer(s, foot_jp, foot_en, page)
    return s


def s_debrief(prs, case_id, title_jp, title_en, answers, injects,
              split_jp, split_en, sop_jp, sop_en, source,
              foot_jp, foot_en, page, note=True):
    """TTX 模範解答。answers: [(見出し, 日, 英)] x4 / injects: [(日, 英)] x2"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    badge(s, "DEBRIEF")
    for i, (h, a, b) in enumerate(answers[:4]):
        T = 1.30 + 1.02 * i
        round_rect(s, 0.70, T, 11.93, 0.94, CARD_A if i % 2 == 0 else CARD_B, 0.019)
        circle(s, 0.98, T + 0.26, 0.42, TEAL, i + 1, size=14)
        text_box(s, 1.64, T + 0.08, 10.69, 0.80,
                 [(h, JP, 9.5, TEAL_DK, True),
                  (a, JP, 11.0, INK, False, 2),
                  (b, EN, 10.5, INK_EN, False)])
    for i, (a, b) in enumerate(injects[:2]):
        T = 5.42 + 0.44 * i
        round_rect(s, 0.70, T, 11.93, 0.40, LEARN_BG, 0.019)
        text_box(s, 0.96, T + 0.02, 11.41, 0.36,
                 [(f"追加付与{'①②'[i]} / Inject {i+1}　{a}", JP, 8.5, TEAL_DK, True),
                  (b, EN, 8.0, TEAL_DK, False)])
    if split_jp:
        text_box(s, 0.70, 6.26, 11.93, 0.30,
                 [(f"割れる論点 / Where Groups Split　{split_jp}", JP, 8.5, NAVY, True),
                  (split_en, EN, 8.0, INK_EN, False)])
    if note:
        text_box(s, 0.70, 6.60, 11.93, 0.20,
                 [("注記　模範解答は判断の型を示すものです。実際の手順は各現場のSite SOPと警備指令書が優先します。",
                   JP, 7.5, MUTED, False)])
    if source:
        text_box(s, 0.70, 6.80, 10.83, 0.20,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_figure(prs, title_jp, title_en, image, lead_jp, lead_en,
             caption_jp, caption_en, source, foot_jp, foot_en, page,
             img_box=(1.60, 2.10, 10.13, 3.90), extra=None):
    """作図・QRを載せるスライド"""
    s = blank(prs)
    heading(s, title_jp, title_en, big=True)
    if lead_jp:
        text_box(s, 0.70, 1.64, 11.93, 0.40,
                 [(lead_jp, JP, 13.0, NAVY, True), (lead_en, EN, 12.0, INK_EN, False)])
    L, T, W, H = img_box
    s.shapes.add_picture(image, Inches(L), Inches(T), Inches(W), Inches(H))
    if extra:
        for (ex, ey, ew, eh, path) in extra:
            s.shapes.add_picture(path, Inches(ex), Inches(ey), Inches(ew), Inches(eh))
    if caption_jp:
        text_box(s, 0.70, 6.20, 11.93, 0.56,
                 [(caption_jp, JP, 9.5, TEAL_DK, True),
                  (caption_en, EN, 9.0, TEAL_DK, False)])
    if source:
        text_box(s, 0.70, 6.78, 10.83, 0.26,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])
    footer(s, foot_jp, foot_en, page)
    return s


# ---------------------------------------------------------------- driver


def new_deck():
    prs = Presentation()
    prs.slide_width = Emu(12192000)
    prs.slide_height = Emu(6858000)
    return prs
