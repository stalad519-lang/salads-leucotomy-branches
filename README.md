# Salad's leucotomy branches wiki

A bilingual encyclopedia for **Salad's leucotomy branches**, a Roblox fan game of Lobotomy Corporation.

The wiki is built around four categories:

- **Abnormalities** / 异想体
- **Basics** / 基本信息 (damage types and other facts)
- **Personalities** / 性格
- **Creators** / 创作者

- Red / 红伤 — mental — Analysis / 解析
- Grey / 灰伤 — physical — Instinct / 本能
- Cyan / 青伤 — healing — Attachment / 沟通
- Black / 黑伤 — lasting — Repression / 压迫

- **English** is the source language of the site
- **中文** is switched from the header
- If a Chinese translation is missing, the English text is shown automatically

## Run locally

```bash
npm install
npm run dev
```

Open the address printed in the terminal (port `43217`).

## Language

The **English / 中文** control in the header changes:

- navigation and buttons
- article titles and bodies
- which language you are editing

`[[The Q]]` is intentionally English-only so you can see the fallback notice after switching to 中文.

The first abnormality file is **[[Qe]]** (`H-01-0`). It uses a structured sheet (portrait, PE, energy, resistances, story, guidelines, personality, EGO) instead of a long wall of text.

## Public site

Primary host: **Cloudflare Pages**  
Project: `salads-leucotomy-branches` → `https://salads-leucotomy-branches.pages.dev`

GitHub (source for continuous deploy):  
https://github.com/stalad519-lang/salads-leucotomy-branches

How the public site stays updated:

1. **GitHub Actions (continuous):** every push to `main` on GitHub builds and deploys to Cloudflare Pages.
2. **Local pre-push hook:** pushing `main` from this workspace mirrors to GitHub (and deploys locally if a Cloudflare token is present).
3. **Manual:** `npm run deploy`

```bash
npm run deploy
```

Skip helpers for one push:

```bash
SKIP_CLOUDFLARE_DEPLOY=1 SKIP_GITHUB_MIRROR=1 git push
```

Auth for local deploys lives in gitignored `secrets/deploy.local`.  
GitHub Actions needs repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Netlify remains available as a fallback via `npm run deploy:netlify`, but the account is currently credit-blocked.