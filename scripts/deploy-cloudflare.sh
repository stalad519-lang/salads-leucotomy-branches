#!/usr/bin/env bash
# Build the static wiki and publish it to Cloudflare Pages.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f "$ROOT/secrets/deploy.local" ]]; then
  set -a
  while IFS= read -r line || [[ -n "$line" ]]; do
    line="${line%$'\r'}"
    case "$line" in
      ''|\#*) continue ;;
      *=*)
        key="${line%%=*}"
        val="${line#*=}"
        key="$(printf '%s' "$key" | tr -d '\r')"
        val="$(printf '%s' "$val" | tr -d '\r')"
        export "$key=$val"
        ;;
    esac
  done < "$ROOT/secrets/deploy.local"
  set +a
fi

PROJECT="${CLOUDFLARE_PAGES_PROJECT:-salads-leucotomy-branches}"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Missing CLOUDFLARE_API_TOKEN. Put it in secrets/deploy.local" >&2
  exit 1
fi
if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "Missing CLOUDFLARE_ACCOUNT_ID. Put it in secrets/deploy.local" >&2
  exit 1
fi

export CLOUDFLARE_API_TOKEN
export CLOUDFLARE_ACCOUNT_ID

echo "==> Building static site"
npm run build

echo "==> Preparing publish folder"
rm -rf /tmp/wiki-cf-deploy
mkdir -p /tmp/wiki-cf-deploy
cp -a out/. /tmp/wiki-cf-deploy/
find /tmp/wiki-cf-deploy -name '*.txt' -delete
find /tmp/wiki-cf-deploy -name '*:*' -exec rm -rf {} + 2>/dev/null || true
test -f /tmp/wiki-cf-deploy/abnormalities/containment-room.png
test -f /tmp/wiki-cf-deploy/favicon-32.png
test -f /tmp/wiki-cf-deploy/game-icon.jpg

echo "==> Deploying to Cloudflare Pages project: ${PROJECT}"
npx --yes wrangler pages deploy /tmp/wiki-cf-deploy \
  --project-name "$PROJECT" \
  --commit-dirty=true \
  --branch main

echo "==> Done. Project: https://${PROJECT}.pages.dev"
