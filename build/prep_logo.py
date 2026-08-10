#!/usr/bin/env python3
"""Prepare the corporate logo for embedding in the decks.

Drop the original at assets/logo.tif (or .tiff/.png/.jpg) and run:

    python3 build/prep_logo.py

It writes assets/logo.png and assets/logo.meta.json. Colour values and the
aspect ratio are preserved: the pixels are copied, never resampled or recoloured.
PowerPoint and Google Slides do not render TIFF reliably, which is the only
reason a conversion happens at all.
"""
import json
import pathlib
import sys

from PIL import Image

REPO = pathlib.Path(__file__).resolve().parent.parent
ASSETS = REPO / "assets"
SOURCES = ["logo.tif", "logo.tiff", "logo.png", "logo.jpg", "logo.jpeg"]


def main() -> int:
    src = next((ASSETS / n for n in SOURCES if (ASSETS / n).exists()), None)
    if src is None:
        print(f"no logo found. place one of {SOURCES} in {ASSETS}/", file=sys.stderr)
        return 1

    im = Image.open(src)
    print(f"source : {src.name}  {im.width}x{im.height}  mode={im.mode}")

    if im.mode in ("CMYK", "YCbCr"):
        # Slides are RGB. This conversion moves colour slightly and cannot be
        # made exact — flagged loudly rather than done silently.
        print("WARNING: source is CMYK. Converting to RGB will shift colour slightly.")
        print("         Supply an RGB original if exact brand colour matters.")
        im = im.convert("RGB")
    elif im.mode == "P":
        im = im.convert("RGBA")
    elif im.mode not in ("RGB", "RGBA", "L"):
        im = im.convert("RGBA")

    out = ASSETS / "logo.png"
    im.save(out, format="PNG")
    meta = {"width": im.width, "height": im.height, "source": src.name, "mode": im.mode}
    (ASSETS / "logo.meta.json").write_text(json.dumps(meta, indent=2) + "\n")

    print(f"wrote  : {out.name}  ratio={im.width / im.height:.4f}")
    print("next   : node build/generate.js")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
