"""各時限で共通に使う値。"""

DATE_JP = "2026年◯月◯日　施設警備 新任教育　コーポレートセキュリティ"
DATE_EN = "New-Hire Training, Facility Security / Corporate Security"

# 時程（8:00開始・7時限・16:20終了）
TIMES = {
    1: "08:00 – 09:00", 2: "09:05 – 10:05", 3: "10:15 – 11:15",
    4: "11:20 – 12:20", 5: "13:05 – 14:05", 6: "14:15 – 15:15",
    7: "15:20 – 16:20",
}
# Day2 は 8〜14 限だが時程は Day1 と同一
TIMES.update({7 + k: v for k, v in TIMES.items()})

NOTE_SPLIT = "割れる論点"


def slot(period):
    """時限番号 → 開始終了時刻"""
    return TIMES[period]


def footer_pair(period, division_jp, subject_jp, division_en, subject_en):
    return (f"第{period}時限｜{division_jp} {subject_jp}",
            f"Period {period} | {division_en} — {subject_en}")
