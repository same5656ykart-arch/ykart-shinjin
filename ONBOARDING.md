# 現調ナビ・見積ナビ 引き継ぎ（株式会社ワイケイアート）

このリポジトリ `same5656ykart-arch/ykart-shinjin` は、新人向けの現地調査アプリ「現調ナビ」と、その現調データから見積・請求・原価計算・発注書を作る「見積ナビ（試作）」です。

## まず読む
- `CLAUDE.md`：コンセプト・ファイル構成・編集のしかた・これまでの決定事項・次のタスク。Claude はセッション開始時に自動で読みます
- `README.md`：使い方と公開方法

## 公開先
- 現調ナビ：https://same5656ykart-arch.github.io/ykart-shinjin/
- 見積ナビ（試作）：https://same5656ykart-arch.github.io/ykart-shinjin/mitsumori/
- `main` に push すると GitHub Actions が自動で公開（1〜2分）

## 作業のしかた
1. 作業ブランチ `claude/genchi-navi` で直す
2. `index.html` の script を `node --check`、Playwright でスマホ幅のスクリーンショットを確認
3. `sw.js` のキャッシュ名を上げてコミット → `main` に fast-forward して push

## 相談先
- 担当：鮫島（d.sameshima@ykart.jp）
- 決めごと（ルール・書式・単価）は上司の確認を取ってから反映する

## 注意
- 公開リポジトリです。本物の単価・原価・業者名・お客様情報は入れない
- `docs/`（構想書）は .gitignore で除外。必要なら担当から受け取る
