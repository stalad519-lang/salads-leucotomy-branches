#!/usr/bin/env bash
# Build the static wiki and publish it to the linked Netlify site.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f "$ROOT/secrets/deploy.local" ]]; then
  # shellcheck disable=SC1091
  set -a
  # Only export KEY=VALUE lines; ignore comments / blanks.
  while IFS= read -r line || [[ -n "$line" ]]; do
    case "$line" in
      ''|\#*) continue ;;
      *=*)
        key="${line%%=*}"
        val="${line#*=}"
        export "$key=$val"
        ;;
    esac
  done < "$ROOT/secrets/deploy.local"
  set +a
fi

SITE_ID="${NETLIFY_SITE_ID:-9adc9168-5491-4e81-9bfc-9f19068b0ab6}"
SITE_NAME="${NETLIFY_SITE_NAME:-admirable-moonbeam-ccd3df}"

echo "==> Building static site"
npm run build

echo "==> Preparing deploy folder (skip RSC .txt / colon paths)"
rm -rf /tmp/wiki-deploy
mkdir -p /tmp/wiki-deploy
cp -a out/. /tmp/wiki-deploy/
find /tmp/wiki-deploy -name '*.txt' -delete
# Paths with ":" break anonymous/some Netlify uploads; strip them if present.
find /tmp/wiki-deploy -name '*:*' -exec rm -rf {} + 2>/dev/null || true

MSG="${1:-Auto deploy $(date -u +%Y-%m-%dT%H:%MZ)}"
echo "==> Deploying to ${SITE_NAME} (${SITE_ID})"

AUTH_ARGS=()
if [[ -n "${NETLIFY_AUTH_TOKEN:-}" ]]; then
  AUTH_ARGS+=(--auth "$NETLIFY_AUTH_TOKEN")
fi

npx --yes netlify-cli@23.1.0 deploy \
  --dir /tmp/wiki-deploy \
  --prod \
  --site "$SITE_ID" \
  --message "$MSG" \
  "${AUTH_ARGS[@]}"

echo "==> Live: https://${SITE_NAME}.netlify.app"
