## 画像をランク付けするアンケートフォーム

![代替テキスト](/public/ranking.png)

### 特徴

- 進捗状況を表すプログレスバーの表示
- ラジオボタンによる順位付け
- 画像の表示順序をランダム化
- サーバ内にCSVファイルを保存

## 開発環境
あくまで開発時の環境です．「絶対にこれじゃないと動かない」というものではありません．

```
node        v22.12.0
React       v19.0.0
Next.js     v15.1.0
csv-writer  v1.6.0
```

## 使い方 (手元でのテスト)

1. 上記の動作環境を元に環境構築を行う
1. このリポジトリをクローンする
1. 下記のコマンドを用いて環境を構築する (nodeインストール済みを想定)
    ```bash
    npm install next@15.1.0 react@19.0.0 react-dom@19.0.0
    ```
1. 開発用サーバを立てる
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
1. ブラウザで `http://localhost:3000` にアクセスする
1. アンケートを完了すると `public/` に結果のCSVファイルが保存される

## カスタマイズ

### 画像ファイルを変更・追加する

1. `public/imgs`の中に以下のディレクトリ構成で画像ファイルを保存する
    ```bash
    /imgs
        ├─fuga # 画像ID 半角英数字が良い
        │   a.png # 画像ファイル名
        │   b.png # 3パターンを扱うとき a～c
        │   c.png # ファイル名が全部バラバラでもOK
        │
        └─hoge
            a.png
            b.png
            c.png
    ```
1. `src/mocks/list.ts`をコードエディタで開く
    1.  1, 2行目のパターンのリストを任意の数に変更する (3つの場合)
        ```ts
        export const mockDataPatterns = ['A', 'B', 'C'];  // パターンのリスト 
        export const mockDataImgRanks = [1, 2, 3]; // 順位を表すリスト
        ```
    1. 続きのコードを例にならって追加する
        ```ts
        export const mockDataItems: Array<{ Item: ItemType }> = [
            {
                Item: {
                    ImgID: "hoge", // 画像ID 先程出てきたディレクトリ名
                    Pattern: {
                        A: "a.png", //各画像のファイル名
                        B: "b.png",
                        C: "c.png", //3つの場合
                    },
                },
            },

            ...

        ]
        ```
1. 開発用サーバを立ち上げ動作を確認する

> [!NOTE]
> 画像枚数を増減した場合はCSSとコードの両方を修正する必要あり．  
> `src/app/ranking/page.tsx` 内の画像の並びを調整する部分を変更する．
>    ```html
>    <div className="grid grid-cols-2 gap-4">
>     ↓
>    <div className="grid grid-cols-3 gap-4">
>    ```
> 動作検証時は4枚を同時に表示


### 見た目を変更する
#### ヘッダの色を変える
デフォルトではカスタムカラーを設定している  
ここでは紫に変更

```html
// src/components/layout/header.tsx
<header className="bg-customOlive h-16 sticky flex items-center justify-between px-4">
 ↓
<header className="bg-purple-900 h-16 sticky flex items-center justify-between px-4">

```
#### 注意事項に追記する

```html
// src/app/page.tsx
<ul className="list-inside list-disc text-gray-700 mt-2">
    <li>PCのブラウザで表示することをおすすめします</li>
    <li>回答中にブラウザの戻るボタンは押さないでください</li>
    <li>回答中はブラウザのアドレスバーに触れないでください</li>
    <li>「次へ」ボタンを連打しないでください</li>
    <li>全部で{mockDataItems.length}セットの回答項目があります</li>

    <li> ここに追加！ </li>
    <li> ここに追加！ </li>
    <li> ここに追加！ </li>
</ul>

```

## 謝辞
本プロジェクトの作成にあたり，きっかけを与えてくださり，また React および Next.js に関するご指導を賜りました tamago.tech の皆様に心より感謝申し上げます．



<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
