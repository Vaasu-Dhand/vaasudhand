#!/bin/bash
# Generates a -preview.png for every PDF in public/certificates/ that doesn't
# already have one. Uses macOS qlmanage (no extra tools required).
#
# Usage:  npm run cert-previews
# After:  add the new entry to public/json/certifications.json

set -euo pipefail

CERT_DIR="public/certificates"
TMP_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_DIR"' EXIT

if ! command -v qlmanage &>/dev/null; then
  echo "Error: qlmanage not found — this script requires macOS."
  exit 1
fi

generated=0

for pdf in "$CERT_DIR"/*.pdf; do
  [ -f "$pdf" ] || continue
  name=$(basename "$pdf" .pdf)
  preview="$CERT_DIR/${name}-preview.png"

  if [ -f "$preview" ]; then
    echo "skip  $name  (preview already exists)"
    continue
  fi

  echo "gen   $name ..."
  qlmanage -t -s 900 -o "$TMP_DIR" "$pdf" &>/dev/null || true

  tmp_png="$TMP_DIR/${name}.pdf.png"
  if [ -f "$tmp_png" ]; then
    cp "$tmp_png" "$preview"
    echo "  →  $preview"
    generated=$((generated + 1))
  else
    echo "  ✗  failed (qlmanage produced no output)"
  fi
done

echo ""
echo "$generated preview(s) generated."
echo "Don't forget to add the new entry to public/json/certifications.json!"
