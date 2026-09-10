# Salad's leucotomy branches wiki

A bilingual game encyclopedia for **Salad's leucotomy branches**.

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

## Publish (free public URL)

The local preview is only on your computer. To let a phone or other people open it, deploy the static site.

### Netlify (no account required to start)

```bash
npm run build
npx netlify-cli deploy --allow-anonymous --dir out --no-build --prod
```

This prints a `https://….netlify.app` address. Claim the site within 60 minutes if you want to keep it.

### Cloudflare Pages (recommended for a lasting `pages.dev` address)

1. Create a free [Cloudflare](https://dash.cloudflare.com/sign-up) account.
2. In a terminal in this folder:

```bash
npx wrangler login
npm run deploy
```

Or in the Cloudflare dashboard: **Workers & Pages → Create → Pages → Upload assets**, and upload the `out` folder after `npm run build`.
