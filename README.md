# 星尘百科

一份可以在浏览器里写的个人维基：条目、搜索、分类、信息框、`[[维基链接]]`，界面接近常见百科站。

## 免费域名怎么选

没有一种免费后缀能同时做到「国内永远秒开」和「国际也最稳」。按这个目标，推荐：

**Cloudflare 给你的 `项目名.pages.dev`**

- 国际访问：免费方案里通常最稳（Cloudflare 自己的网）
- 国内访问：多数时候能打开，部分网络会慢或失败，一般好于 `github.io` / `vercel.app`
- 别人拿到链接就能看，不必注册
- 以后若要更稳，再花大约 40–95 元买自己的域名，解析到 Cloudflare

`vercel.app` 对 Next.js 最省事，但国内波动更大。`github.io` 国内经常打不开。Fandom 也免费，但内容和规则都在他们平台上。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端里提示的地址（默认端口 `43217`）。首页里已有示例条目，可直接编辑。

修改保存在你自己的浏览器里。换电脑或清空站点数据会丢掉未备份的修改。

## 发布到 pages.dev

1. 把代码放到 Git 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages
3. 导入这个仓库，框架选 Next.js
4. 发布成功后会得到 `你的项目.pages.dev`

也可以用 [Vercel](https://vercel.com) 一键发布，得到 `xxx.vercel.app`。国际访问很好，国内可能不稳定。

## 编辑语法

- Markdown 标题、列表、表格
- `[[星尘号]]` 或 `[[星尘港|港口]]` 做内链
- 还不存在的条目会显示红链，点进去即可创建
