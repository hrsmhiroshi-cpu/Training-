"""
VRM 新任講習 pptx ビルダー

前回現任講習の **最終版**（03_4限 巡回 PDF）から実測した仕様を再現する。
8/10 時点の pptx は中間版であり、最終版では次の点が変わっている。

  ・英文が日本語と同級（本文は日英とも 14pt）。イタリックを使わない
  ・1スライド2ブロック。内容が多い場合は表題に (1/2) (2/2) を付けて分割
  ・TTX はシナリオと設問をスライドで分け、設問は全幅の行組みにする

  スライド      13.333 x 7.5 in (16:9)
  日本語書体    Yu Gothic / 英語書体 Calibri
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn

# ---------------------------------------------------------------- palette

NAVY      = RGBColor(0x09, 0x32, 0x59)
NAVY_DEEP = RGBColor(0x06, 0x22, 0x3D)
TEAL      = RGBColor(0x12, 0xB1, 0x98)
TEAL_DK   = RGBColor(0x0D, 0x8A, 0x76)
INK       = RGBColor(0x1B, 0x27, 0x33)   # 本文（日）
INK_EN    = RGBColor(0x2E, 0x3D, 0x4C)   # 本文（英）— 日本語と対等
MUTED     = RGBColor(0x5F, 0x71, 0x83)   # フッター
CARD_A    = RGBColor(0xEF, 0xF4, 0xF8)
CARD_B    = RGBColor(0xF7, 0xFA, 0xFC)
LEARN_BG  = RGBColor(0xE4, 0xF4, 0xF0)
RULE      = RGBColor(0xD6, 0xE0, 0xE9)
WHITE     = RGBColor(0xFF, 0xFF, 0xFF)
MINT      = RGBColor(0x9F, 0xD8, 0xCD)
MINT_EN   = RGBColor(0xD5, 0xEC, 0xE6)
STEEL     = RGBColor(0xC9, 0xD6, 0xE2)

JP = "Yu Gothic"
EN = "Calibri"

LOGO = None

# ---------------------------------------------------------------- 実測値
# 本文は日英とも 14pt。ブロック見出しは 17 / 15。
BODY_JP, BODY_EN = 14.0, 14.0
HEAD_JP, HEAD_EN = 17.0, 15.0
TITLE_JP, TITLE_EN = 27.0, 14.0
ROW_JP, ROW_EN = 17.0, 16.0

Y_SOP, Y_SRC, Y_FOOT = 6.50, 6.86, 7.16

# ---------------------------------------------------------------- helpers


def _set_font(run, name, size, color, bold=False):
    f = run.font
    f.name, f.size, f.bold = name, Pt(size), bold
    f.color.rgb = color
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


def text_box(slide, L, T, W, H, lines, anchor=MSO_ANCHOR.TOP, align=PP_ALIGN.LEFT):
    """lines: [(text, font, size, color, bold[, space_before_pt])]"""
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
        r = p.add_run()
        r.text = text
        _set_font(r, font, size, color, bold)
    return box


def runs_box(slide, L, T, W, H, runs, anchor=MSO_ANCHOR.TOP):
    """1段落に複数書式の run を並べる（身につくこと帯など）"""
    box = slide.shapes.add_textbox(Inches(L), Inches(T), Inches(W), Inches(H))
    tf = _tf(box)
    tf.vertical_anchor = anchor
    p = tf.paragraphs[0]
    for text, font, size, color, bold in runs:
        r = p.add_run()
        r.text = text
        _set_font(r, font, size, color, bold)
    return box


def round_rect(slide, L, T, W, H, fill, adj=None):
    sh = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
                                Inches(L), Inches(T), Inches(W), Inches(H))
    sh.fill.solid(); sh.fill.fore_color.rgb = fill
    sh.line.fill.background(); sh.shadow.inherit = False
    if adj is not None:
        sh.adjustments[0] = adj
    return sh


def circle(slide, L, T, D, fill, label, size=12, color=WHITE):
    sh = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(L), Inches(T),
                                Inches(D), Inches(D))
    sh.fill.solid(); sh.fill.fore_color.rgb = fill
    sh.line.fill.background(); sh.shadow.inherit = False
    tf = _tf(sh)
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = str(label)
    _set_font(r, EN, size, color, True)
    return sh


def blank(prs, bg=WHITE, logo=True):
    s = prs.slides.add_slide(prs.slide_layouts[6])
    pr = s._element.makeelement(qn("p:bgPr"), {})
    fill = s._element.makeelement(qn("a:solidFill"), {})
    fill.append(s._element.makeelement(
        qn("a:srgbClr"), {"val": "%02X%02X%02X" % (bg[0], bg[1], bg[2])}))
    pr.append(fill)
    pr.append(s._element.makeelement(qn("a:effectLst"), {}))
    bgEl = s._element.makeelement(qn("p:bg"), {})
    bgEl.append(pr)
    s._element.find(qn("p:cSld")).insert(0, bgEl)
    if logo and LOGO:
        if bg != WHITE:
            round_rect(s, 11.63, 0.24, 1.14, 1.06, WHITE, 0.10)
        s.shapes.add_picture(LOGO, Inches(11.77), Inches(0.36),
                             Inches(0.86), Inches(0.81))
    return s


def footer(slide, foot_jp, foot_en, page):
    runs_box(slide, 0.70, Y_FOOT, 10.60, 0.28,
             [(foot_jp + "　", JP, 9.0, MUTED, False),
              (foot_en, EN, 8.5, MUTED, False)])
    text_box(slide, 11.63, Y_FOOT, 1.00, 0.28,
             [(str(page), EN, 10.0, MUTED, False)], align=PP_ALIGN.RIGHT)


def heading(slide, jp, en):
    text_box(slide, 0.70, 0.42, 10.72, 1.00,
             [(jp, JP, TITLE_JP, NAVY, True), (en, EN, TITLE_EN, TEAL, False, 4)])


def badge(slide, label):
    round_rect(slide, 10.59, 0.48, 1.02, 0.34, NAVY, 0.147)
    text_box(slide, 10.59, 0.48, 1.02, 0.34, [(label, EN, 11.0, WHITE, True)],
             anchor=MSO_ANCHOR.MIDDLE, align=PP_ALIGN.CENTER)


def learn_bar(slide, jp, en):
    """身につくこと帯。日英とも 13pt（最終版の実測値）。"""
    round_rect(slide, 0.70, 1.24, 11.93, 0.62, LEARN_BG, 0.069)
    runs_box(slide, 0.98, 1.29, 11.37, 0.30,
             [("身につくこと　", JP, 13.0, TEAL_DK, True),
              ("What You'll Learn　", EN, 11.0, TEAL_DK, False),
              (jp, JP, 13.0, TEAL_DK, True)])
    text_box(slide, 0.98, 1.53, 11.37, 0.28, [(en, EN, 13.0, TEAL_DK, False)])


def sop_and_source(slide, sop_jp, sop_en, source):
    if sop_jp:
        runs_box(slide, 0.70, Y_SOP, 11.93, 0.28,
                 [("Site SOP優先　", JP, 10.0, TEAL_DK, True),
                  (sop_jp, JP, 10.0, TEAL_DK, False)])
        text_box(slide, 0.70, Y_SOP + 0.20, 11.93, 0.26,
                 [(sop_en, EN, 9.0, TEAL_DK, False)])
    if source:
        text_box(slide, 0.70, Y_SRC, 10.83, 0.22,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])


def _bullets(items):
    lines = []
    for j, (a, b) in enumerate(items):
        lines.append((f"・{a}", JP, BODY_JP, INK, False, 7 if j else 0))
        lines.append((b, EN, BODY_EN, INK_EN, False, 1))
    return lines


# ---------------------------------------------------------------- slides


def s_title(prs, period_line_jp, period_line_en, title_jp, title_en,
            date_jp, date_en):
    s = blank(prs, NAVY)
    text_box(s, 0.70, 1.55, 10.60, 0.70,
             [(period_line_jp, JP, 14.0, TEAL, True),
              (period_line_en, EN, 13.0, MINT, False, 3)])
    text_box(s, 0.70, 2.42, 10.90, 0.98, [(title_jp, JP, 36.0, WHITE, True)])
    text_box(s, 0.70, 3.54, 10.90, 0.85, [(title_en, EN, 22.0, MINT, False)])
    bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.70), Inches(5.28),
                             Inches(1.50), Inches(0.04))
    bar.fill.solid(); bar.fill.fore_color.rgb = TEAL
    bar.line.fill.background(); bar.shadow.inherit = False
    text_box(s, 0.70, 5.60, 10.90, 0.90,
             [(date_jp, JP, 13.0, STEEL, False),
              (date_en, EN, 12.0, STEEL, False, 3)])
    return s


def s_content(prs, title_jp, title_en, badge_label, learn_jp, learn_en,
              blocks, sop_jp, sop_en, source, foot_jp, foot_en, page):
    """1スライド2ブロック。blocks: 2件の (見出し日, 見出し英, [(日, 英) x3-4])

    本文は日英とも14ptのため、1ブロックの項目は3〜4件までとする。
    入らない場合は表題に (1/2) (2/2) を付けて2枚に割ること。
    """
    s = blank(prs)
    heading(s, title_jp, title_en)
    if badge_label:
        badge(s, badge_label)
    if learn_jp:
        learn_bar(s, learn_jp, learn_en)
        top, h = 1.96, 4.44
    else:
        top, h = 1.42, 4.98
    for i, (blk, (L, fill)) in enumerate(
            zip(blocks, [(0.70, CARD_A), (6.81, CARD_B)]), start=1):
        h_jp, h_en, items = blk
        round_rect(s, L, top, 5.83, h, fill, 0.019)
        circle(s, L + 0.20, top + 0.20, 0.30, NAVY, i, size=11)
        text_box(s, L + 0.62, top + 0.13, 4.99, 0.62,
                 [(h_jp, JP, HEAD_JP, NAVY, True),
                  (h_en, EN, HEAD_EN, TEAL, False, 2)])
        text_box(s, L + 0.30, top + 0.90, 5.28, h - 1.00, _bullets(items))
    sop_and_source(s, sop_jp, sop_en, source)
    footer(s, foot_jp, foot_en, page)
    return s


def s_quote(prs, title_jp, title_en, quote_jp, quote_en, cite,
            note_jp, note_en, foot_jp, foot_en, page):
    s = blank(prs)
    heading(s, title_jp, title_en)
    round_rect(s, 0.70, 1.66, 11.93, 2.86, NAVY, 0.019)
    text_box(s, 1.20, 2.00, 10.93, 1.20, [(quote_jp, JP, 15.5, WHITE, False)])
    text_box(s, 1.20, 3.24, 10.93, 0.90, [(quote_en, EN, 14.5, MINT_EN, False)])
    text_box(s, 1.20, 4.12, 10.93, 0.30, [(cite, EN, 11.0, TEAL, False)])
    round_rect(s, 0.70, 5.10, 11.93, 1.20, LEARN_BG, 0.019)
    circle(s, 1.00, 5.55, 0.40, TEAL, "!", size=14)
    text_box(s, 1.64, 5.24, 10.63, 0.96,
             [(note_jp, JP, 15.0, NAVY, True),
              (note_en, EN, 14.0, NAVY, False, 4)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_compare(prs, title_jp, title_en, lead_jp, lead_en,
              left, right, note_jp, note_en, foot_jp, foot_en, page):
    s = blank(prs)
    heading(s, title_jp, title_en)
    text_box(s, 0.70, 1.46, 11.93, 0.56,
             [(lead_jp, JP, 13.0, NAVY, True), (lead_en, EN, 12.5, INK_EN, False, 2)])
    for L, fill, col, hcol in ((0.70, CARD_A, left, NAVY),
                               (6.84, LEARN_BG, right, TEAL_DK)):
        h_jp, h_en, items = col
        round_rect(s, L, 2.14, 5.79, 4.20, fill, 0.019)
        text_box(s, L + 0.30, 2.34, 5.19, 0.70,
                 [(h_jp, JP, HEAD_JP, hcol, True), (h_en, EN, 12.5, hcol, False, 2)])
        lines = []
        for j, (a, b) in enumerate(items):
            lines.append((f"・{a}", JP, 12.5, INK, False, 6 if j else 0))
            lines.append((b, EN, 12.0, INK_EN, False, 1))
        text_box(s, L + 0.30, 3.14, 5.19, 3.10, lines)
    text_box(s, 0.70, 6.44, 11.93, 0.60,
             [(note_jp, JP, 11.0, TEAL_DK, True), (note_en, EN, 10.0, TEAL_DK, False, 1)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_terms(prs, title_jp, title_en, lead_jp, lead_en, terms,
            foot_jp, foot_en, page):
    """用語解説・ミニTTX設問。2列 x 4行。日英とも本文級。"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    text_box(s, 0.70, 1.46, 11.93, 0.56,
             [(lead_jp, JP, 13.0, NAVY, True), (lead_en, EN, 12.5, INK_EN, False, 2)])
    tops = [2.16, 3.30, 4.44, 5.58]
    for i, (a, b) in enumerate(terms[:8]):
        col, row = i % 2, i // 2
        L = 0.70 if col == 0 else 6.82
        T = tops[row]
        round_rect(s, L, T, 5.82, 1.02, CARD_A if row % 2 == 0 else CARD_B, 0.019)
        circle(s, L + 0.20, T + 0.33, 0.36, NAVY, i + 1, size=11)
        text_box(s, L + 0.66, T + 0.12, 4.96, 0.84,
                 [(a, JP, 13.0, INK, False), (b, EN, 12.5, INK_EN, False, 2)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_minittx(prs, title_jp, title_en, lead_jp, lead_en, items,
              foot_jp, foot_en, page):
    return s_terms(prs, title_jp, title_en, lead_jp, lead_en, items,
                   foot_jp, foot_en, page)


def s_rows(prs, title_jp, title_en, lead_jp, lead_en, rows,
           foot_jp, foot_en, page, dark=False, bridge=None):
    """全幅の番号付き行。ミニTTX解答・まとめに使う。"""
    s = blank(prs, NAVY if dark else WHITE)
    if dark:
        text_box(s, 0.70, 0.72, 10.60, 1.30,
                 [(title_jp, JP, 30.0, WHITE, True),
                  (title_en, EN, 18.0, MINT, False, 5)])
        top, step, h = 2.30, 0.98, 0.84
    else:
        heading(s, title_jp, title_en)
        if lead_jp:
            text_box(s, 0.70, 1.50, 11.93, 0.58,
                     [(lead_jp, JP, 13.0, NAVY, True),
                      (lead_en, EN, 12.0, INK_EN, False, 2)])
            top = 2.28
        else:
            top = 1.70
        step = 0.98 if len(rows) <= 4 else 0.86
        h = step - 0.12
    for i, (a, b) in enumerate(rows):
        T = top + step * i
        round_rect(s, 0.70, T, 11.93, h, NAVY_DEEP if dark else
                   (CARD_A if i % 2 == 0 else CARD_B), 0.019)
        circle(s, 1.00, T + (h - 0.40) / 2, 0.40, TEAL, i + 1, size=13)
        text_box(s, 1.66, T + 0.10, 10.55, h - 0.16,
                 [(a, JP, 16.0 if dark else 14.5, WHITE if dark else INK, True),
                  (b, EN, 15.0 if dark else 13.5,
                   MINT_EN if dark else INK_EN, False, 2)])
    if bridge:
        text_box(s, 0.70, 6.44, 11.93, 0.66,
                 [(bridge[0], JP, 13.0, TEAL, True),
                  (bridge[1], EN, 12.0, MINT_EN if dark else INK_EN, False, 2)])
    if not dark:
        footer(s, foot_jp, foot_en, page)
    return s


def s_ttx(prs, case_id, title_jp, title_en, sc_jp, sc_en, injects,
          sop_jp, sop_en, source, foot_jp, foot_en, page):
    """TTX シナリオ。設問は s_ttx_q で別スライドにする。"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    badge(s, case_id)
    round_rect(s, 0.70, 1.56, 11.93, 2.34, NAVY, 0.019)
    text_box(s, 1.10, 1.76, 11.13, 0.28,
             [("シナリオ　SCENARIO", JP, 11.0, TEAL, True)])
    text_box(s, 1.10, 2.08, 11.13, 0.86, [(sc_jp, JP, 14.5, WHITE, False)])
    text_box(s, 1.10, 2.96, 11.13, 0.82, [(sc_en, EN, 13.5, MINT_EN, False)])
    for i, (a, b) in enumerate(injects[:2]):
        T = 4.06 + 0.82 * i
        round_rect(s, 0.70, T, 11.93, 0.72, LEARN_BG, 0.019)
        runs_box(s, 1.00, T + 0.08, 11.33, 0.28,
                 [(f"追加付与{'①②'[i]}　", JP, 11.0, TEAL_DK, True),
                  (a, JP, 12.5, INK, False)])
        text_box(s, 1.00, T + 0.38, 11.33, 0.28, [(b, EN, 12.0, INK_EN, False)])
    sop_and_source(s, sop_jp, sop_en, source)
    footer(s, foot_jp, foot_en, page)
    return s


def s_ttx_q(prs, title_jp, title_en, how_jp, how_en, questions,
            foot_jp, foot_en, page):
    """TTX 4つの問い。全幅の行組み（最終版と同形式）。"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    text_box(s, 0.70, 1.52, 11.93, 0.60,
             [(how_jp, JP, 13.0, NAVY, True), (how_en, EN, 12.0, INK_EN, False, 2)])
    for i, (a, b) in enumerate(questions[:4]):
        T = 2.36 + 1.06 * i
        round_rect(s, 0.70, T, 11.93, 0.92, CARD_A, 0.019)
        circle(s, 1.00, T + 0.26, 0.40, TEAL, i + 1, size=13)
        text_box(s, 1.66, T + 0.10, 10.55, 0.76,
                 [(a, JP, ROW_JP, INK, True), (b, EN, ROW_EN, INK_EN, False, 2)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_debrief(prs, case_id, title_jp, title_en, answers, injects,
              split_jp, split_en, source, foot_jp, foot_en, page):
    """TTX 模範解答。answers: [(見出し, 日, 英)] x4"""
    s = blank(prs)
    heading(s, title_jp, title_en)
    badge(s, "DEBRIEF")
    for i, (h, a, b) in enumerate(answers[:4]):
        T = 1.46 + 1.06 * i
        round_rect(s, 0.70, T, 11.93, 0.96, CARD_A if i % 2 == 0 else CARD_B, 0.019)
        circle(s, 1.00, T + 0.28, 0.40, TEAL, i + 1, size=13)
        runs_box(s, 1.66, T + 0.08, 10.55, 0.26, [(h, JP, 10.5, TEAL_DK, True)])
        text_box(s, 1.66, T + 0.32, 10.55, 0.60,
                 [(a, JP, 13.0, INK, False), (b, EN, 12.5, INK_EN, False, 1)])
    for i, (a, b) in enumerate(injects[:2]):
        T = 5.72 + 0.42 * i
        runs_box(s, 0.70, T, 11.93, 0.22,
                 [(f"追加付与{'①②'[i]}　", JP, 9.5, TEAL_DK, True),
                  (a, JP, 10.0, INK, False)])
        text_box(s, 0.70, T + 0.19, 11.93, 0.22, [(b, EN, 9.5, INK_EN, False)])
    if split_jp:
        runs_box(s, 0.70, 6.50, 11.93, 0.22,
                 [("割れる論点　", JP, 9.5, NAVY, True),
                  (split_jp, JP, 10.0, INK, False)])
        text_box(s, 0.70, 6.69, 11.93, 0.22, [(split_en, EN, 9.5, INK_EN, False)])
    text_box(s, 0.70, 6.88, 11.93, 0.18,
             [("注記　模範解答は判断の型を示すものです。実際の手順は各現場のSite SOPと警備指令書が優先します。",
               JP, 7.5, MUTED, False)])
    if source:
        text_box(s, 0.70, 7.01, 10.83, 0.18,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])
    footer(s, foot_jp, foot_en, page)
    return s


def s_figure(prs, title_jp, title_en, image, lead_jp, lead_en,
             caption_jp, caption_en, source, foot_jp, foot_en, page,
             img_box=(1.60, 2.10, 10.13, 3.90), extra=None):
    s = blank(prs)
    heading(s, title_jp, title_en)
    if lead_jp:
        text_box(s, 0.70, 1.50, 11.93, 0.50,
                 [(lead_jp, JP, 13.0, NAVY, True),
                  (lead_en, EN, 12.0, INK_EN, False, 2)])
    L, T, W, H = img_box
    s.shapes.add_picture(image, Inches(L), Inches(T), Inches(W), Inches(H))
    if extra:
        for (ex, ey, ew, eh, path) in extra:
            s.shapes.add_picture(path, Inches(ex), Inches(ey), Inches(ew), Inches(eh))
    if caption_jp:
        text_box(s, 0.70, 6.30, 11.93, 0.52,
                 [(caption_jp, JP, 11.0, TEAL_DK, True),
                  (caption_en, EN, 10.5, TEAL_DK, False, 1)])
    if source:
        text_box(s, 0.70, Y_SRC, 10.83, 0.22,
                 [(f"ソース　{source}", JP, 7.5, RULE, True)])
    footer(s, foot_jp, foot_en, page)
    return s


# ---------------------------------------------------------------- driver


def new_deck():
    prs = Presentation()
    prs.slide_width = Emu(12192000)
    prs.slide_height = Emu(6858000)
    return prs
