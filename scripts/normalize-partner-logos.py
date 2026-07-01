#!/usr/bin/env python3
"""Normalise partner logos so every mark reads at the same optical size.

Source logos (public/images/partners/) are all padded onto different-sized
canvases with wildly different amounts of internal whitespace, so a plain
object-fit box renders them at very different visual sizes. This script trims
each logo to its real content bounding box, then rescales it by GEOMETRIC MEAN
of width*height (which equalises optical AREA across any aspect ratio) onto one
uniform white canvas. The homepage partner wall (app/page.tsx) then just drops
each file into a fixed 5:3 box.

Re-run this whenever a logo is added/changed:
    cd public/images/partners && python3 ../../../scripts/normalize-partner-logos.py

Output: public/images/partners-normalized/<name>.png (always PNG).
"""
from PIL import Image, ImageChops
import glob, os, math

CANVAS_W, CANVAS_H = 600, 340        # uniform output canvas
USABLE_W, USABLE_H = 560, 300        # max content box inside the canvas
TARGET_GM = 220.0                    # target sqrt(w*h) -> equal optical area

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "partners-normalized")


def content_bbox(im):
    """Bounding box of the non-white content."""
    bg = Image.new("RGB", im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg).convert("L").point(lambda p: 255 if p > 12 else 0)
    return diff.getbbox()


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    files = sorted(glob.glob("*.png")) + sorted(glob.glob("*.jpg"))
    for f in files:
        im = Image.open(f).convert("RGB")
        w, h = im.size
        bbox = content_bbox(im) or (0, 0, w, h)  # solid-bg logos fill the frame
        content = im.crop(bbox)
        cw, ch = content.size
        scale = min(TARGET_GM / math.sqrt(cw * ch), USABLE_W / cw, USABLE_H / ch)
        nw, nh = max(1, round(cw * scale)), max(1, round(ch * scale))
        content = content.resize((nw, nh), Image.LANCZOS)
        canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), (255, 255, 255))
        canvas.paste(content, ((CANVAS_W - nw) // 2, (CANVAS_H - nh) // 2))
        out = os.path.join(OUT_DIR, os.path.splitext(f)[0] + ".png")
        canvas.save(out)
        print(f"{f:24s} -> {nw}x{nh}")


if __name__ == "__main__":
    main()
