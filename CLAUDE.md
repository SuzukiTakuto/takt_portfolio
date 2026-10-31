# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # 開発サーバー (Turbopack, http://localhost:3000)
npm run build   # 本番ビルド
npm run start   # 本番サーバー
npm run lint    # eslint (flat config: eslint.config.mjs)
```

テストフレームワークは導入されていない。

Next 16 で `next lint` が廃止されたため、lint は ESLint CLI を直接呼ぶ。設定は `eslint.config.mjs`（flat config、`eslint-config-next/core-web-vitals` を展開）。**ESLint は 9 系に固定**すること。eslint-config-next 16 のピア範囲は `>=9.0.0` だが、同梱の typescript-eslint v8 が ESLint 10 で `scopeManager.addGlobals is not a function` を投げて lint 自体が動かなくなる。

## 概要

鈴木啄斗の個人ポートフォリオサイト。Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS 3。Vercel にデプロイ (https://takt-portfolio.vercel.app/)。UI テキスト・コメントは日本語。

## アーキテクチャ

### 2 画面構成とルーティング

- `src/app/page.tsx` — 入口。3 秒間 `Loading`（SVG のパス描画アニメーション）を表示 → slide-up アニメーションで `Terminal` に切り替わる。
- `src/app/screenComponents/Terminal.tsx` — three.js を直接（`@react-three/fiber` ではなく素の `THREE` + `OBJLoader`/`MTLLoader`/`OrbitControls`）使い、`public/models/terminal1|2.obj` を 800ms ごとに交互表示して点滅する端末を演出。**Enter キー押下または touchstart で `router.push("/home")`** が唯一のサイト内遷移トリガー。
- `src/app/home/page.tsx` — 本体ページ。framer-motion の `clipPath` variants（円形 → 全画面）で開き、`Navbar` / `About` / `Works` / `Contact` / `Footer` を縦に並べる。

### コンテンツはコンポーネント内のハードコード配列

CMS もデータファイルもない。編集箇所は以下に直書きされた配列:

- 作品一覧 → `components/Works.tsx` の `workItems`（`technologyStack` は `["Next.js", "TypeScript", ...]` のような**技術名の文字列**。画像パスではない）
- スキル一覧 → `components/SkillTerminal.tsx` の `skillGroups`（`frontend` / `backend` / `infra` のカテゴリごとに技術名を並べる）
- ナビリンク → `components/Navbar.tsx` の `menuLinks`（`#about` / `#works` / `#contact` へのアンカー、スムーススクロールは `globals.css` の `html { scroll-behavior: smooth }`）

作品画像は `public/images/works-imgs/` に置く。

**第三者のロゴ画像は使わない方針。** 言語・フレームワークのロゴは商標／著作権（PHP ロゴは CC BY-SA 4.0、HTML5・CSS ロゴは W3C の CC BY 3.0 など、帰属表示義務のあるものを含む）を避けるため、すべてテキスト表記に置き換え済みで、`public/images/skill-icons/` ごと削除した。スキルを追加するときもロゴ画像ではなく技術名の文字列を足すこと。`github.svg` / `zenn.svg` は「自分のプロフィールへのリンクとしての使用」が各社に明示的に許可されているため例外として残している。

### 表示パターン

- `About` / `Works` / `Contact` は `react-intersection-observer` の `useInView({ triggerOnce: true })` でラップし、`inView` になって初めて中身をマウント + `animate-fade-in`（Tailwind 設定のカスタム keyframes）を当てる。セクションを追加する場合はこの形に合わせる。
- `Works` はレスポンシブ分岐に `window.innerWidth < 768` を直接使っている（メディアクエリや hook ではない）。768px 未満ではカードタップで `WorkDetails` をオーバーレイ表示、以上では常時横並びで表示。
- 配色は Tailwind テーマではなく任意値クラスで統一: 前景/枠線 `#89B8BD`、背景 `#050605` / `bg-black`、入力欄 `#1E1E1E`。
- `SkillTerminal` は skills をシェルの出力風に見せるコンポーネント。等幅フォントは `layout.tsx` で読み込む JetBrains Mono を `--font-mono` 経由で Tailwind の `font-mono` に割り当てている。カーソルの点滅は `tailwind.config.ts` の `blink` keyframes。狭い画面では `flex flex-wrap`、`sm` 以上では `grid` の 3 カラムに切り替えて横溢れを防いでいる。
- framer-motion 14 以降、`variants` の cubic-bezier は 4 要素タプルとして推論させる必要がある。オブジェクトを変数に切り出す場合は `const variants: Variants = {...}` と注釈を付けないと `number[]` と推論されて型エラーになる。

### お問い合わせフォーム

`components/Contact.tsx` → `POST /api/mail`（`src/app/api/mail/route.ts`）。名前に反して**メールは送信していない**。`googleapis` のサービスアカウント認証で Google スプレッドシートの `シート1!A:D` に `[タイムスタンプ(JST), name, email, msg]` を append するだけ。

必要な環境変数（`.env.local`、Vercel 側にも設定）: `CLIENT_EMAIL`, `PRIVATE_KEY`（`\n` はコード側でエスケープ解除）, `SPREADSHEET_ID`。`MAIL_USER` / `MAIL_PASS` / `CLIENT_ID` / `CLIENT_SECRET` / `REFRESH_TOKEN` は旧メール送信実装の名残で、現在は参照されていない。

ルートは失敗時も HTTP 200 でボディに `status: 500` を返すため、クライアント側は `response.status` だけ見ていて実質エラーを検知できない。ここを触るなら両側を合わせて直すこと。

## 注意点

- このファイルの末尾にある `<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
