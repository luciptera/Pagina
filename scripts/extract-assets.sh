#!/usr/bin/env bash
#
# extract-assets.sh — how the real photos + logo were pulled from the catalog PDF.
# Already run once; the curated output lives in src/assets/. Kept for documentation
# and in case the source PDF is updated.
#
# Requires: poppler (pdfimages, pdftoppm) + Python Pillow.
#   brew install poppler && pip3 install Pillow
#
# Usage: ./scripts/extract-assets.sh "/path/to/Luciptera catalogo.pdf"
set -euo pipefail

PDF="${1:?Pass the catalog PDF path}"
OUT="tmp/extract"
mkdir -p "$OUT"

echo "→ Extracting embedded images…"
pdfimages -all "$PDF" "$OUT/img"

echo "→ Image inventory (page · type · size):"
pdfimages -list "$PDF" | awk 'NR>2 {printf "img-%03d page%s %s %sx%s\n", NR-3, $1, $3, $4, $5}'

cat <<'NOTE'

→ Manual curation rules used (see git history of src/assets for the result):
  - KEEP   : large photographic JPEG/ICC images (the hand-painted art), grouped by page:
             p2 personas · p3 anime · p4 paisajes · p5/6 mascotas · p7 madera
             p8-10 llaveros · p11 placas · p12-13 cases
  - DISCARD: the tiled cream texture (1024x1536 duplicates), the 1434x498 title
             brushstrokes, the small RGB paint-splatter decals (+ their smasks),
             and the 1920x1080 / 1366x768 screenshots.
  - LOGO   : rendered from page 1 via `pdftoppm -png -r 300` and cropped to the
             firefly + "Luciptera" wordmark lockup (src/assets/brand/logo.png),
             plus a square firefly favicon (src/assets/brand/favicon.png).

Curated photos are downscaled to a 1500px long edge and saved as
src/assets/products/<slug>/<slug>-N.jpg  (-1 = hero). Astro converts to WebP at build.
NOTE
