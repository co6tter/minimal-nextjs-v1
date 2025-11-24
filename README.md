# minimal-nextjs-v1

## Overview

Next.js App Routerを使用したミニマルなWebアプリケーションです。ユーザーの一覧表示と詳細ページを実装した、Next.js 15の基本機能を学ぶためのサンプルプロジェクトです。

## Tech Stack

- **Next.js**: 15.3.2 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Node.js**: 20.x

## Setup

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd minimal-nextjs-v1
```

2. 依存関係をインストール:
```bash
npm install
```

3. 開発サーバーを起動:
```bash
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## Usage

### 開発モード
```bash
npm run dev
```
Turbopackを使用した高速な開発サーバーが起動します。

### プロダクションビルド
```bash
npm run build
npm start
```

### リント
```bash
npm run lint
```

## Directory Structure

```
minimal-nextjs-v1/
├── app/
│   ├── lib/
│   │   └── users.ts          # ユーザーデータ
│   ├── users/
│   │   ├── [userId]/
│   │   │   └── page.tsx      # ユーザー詳細ページ（動的ルート）
│   │   └── not-found.tsx     # ユーザーが見つからない場合のページ
│   ├── globals.css           # グローバルスタイル
│   ├── layout.tsx            # ルートレイアウト
│   └── page.tsx              # ホームページ（ユーザー一覧）
├── public/                   # 静的ファイル
├── next.config.ts            # Next.js設定
├── tsconfig.json             # TypeScript設定
└── package.json
```

## License

This repository is for personal/private use only.
