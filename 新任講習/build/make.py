# -*- coding: utf-8 -*-
"""VRM 新任講習 Day1-2 ビルドドライバ

  python3 make.py           全時限をビルド
  python3 make.py 1 2       指定した時限だけビルド
"""

import importlib
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "out")
sys.path.insert(0, HERE)

import deck as D  # noqa: E402

D.LOGO = os.path.join(ROOT, "assets", "logo.png")

FILENAMES = {
    1: "01_1限_警備業務実施の基本原則",
    2: "02_2限_警備員の資質の向上",
    3: "03_3限_警備業法",
    4: "04_4限_刑法刑訴法と権限の限界",
    5: "05_5限_通報と現場保存",
    6: "06_6限_応急手当",
    7: "07_7限_護身の方法",
    8: "08_8限_コーポレートセキュリティ理解",
    9: "09_9限_情報資産保護と対外対応",
    10: "10_10限_立哨受付接遇",
    11: "11_11限_出入管理",
    12: "12_12限_巡回",
    13: "13_13限_不審者と不審物",
    14: "14_14限_消防用設備",
}


def build_one(n):
    mod = importlib.import_module(f"p{n:02d}")
    prs = D.new_deck()
    pages = mod.build(prs)
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, FILENAMES[n] + ".pptx")
    prs.save(path)
    return path, pages


def main(argv):
    targets = [int(a) for a in argv] if argv else sorted(FILENAMES)
    for n in targets:
        try:
            path, pages = build_one(n)
            print(f"OK   第{n:2d}時限  {pages:2d}枚  {os.path.basename(path)}")
        except ModuleNotFoundError:
            print(f"--   第{n:2d}時限  未作成")


if __name__ == "__main__":
    main(sys.argv[1:])
