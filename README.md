# Salad's leucotomy branches wiki

A bilingual encyclopedia for **Salad's leucotomy branches**, a Roblox fan game of Lobotomy Corporation.

The wiki is built around four categories:

- **Abnormalities** / 异想体
- **Basics** / 基本信息 (damage types and other facts)
- **Mechanics** / 机制
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

Live URL: **https://admirable-moonbeam-ccd3df.netlify.app**

GitHub (source for continuous deploy):  
https://github.com/stalad519-lang/salads-leucotomy-branches

How the public site stays updated:

1. **GitHub Actions (continuous):** every push to `main` on GitHub builds and deploys to Netlify.
2. **Local pre-push hook:** pushing `main` from this workspace also mirrors to GitHub and publishes immediately.
3. **Manual:** `npm run deploy`

```bash
npm run deploy
```

Skip helpers for one push:

```bash
SKIP_NETLIFY_DEPLOY=1 SKIP_GITHUB_MIRROR=1 git push
```

Auth for local deploys lives in gitignored `secrets/deploy.local`.  
GitHub Actions uses repository secrets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`.

### Optional: Cloudflare Pages

```bash
npm run deploy:cf
```
