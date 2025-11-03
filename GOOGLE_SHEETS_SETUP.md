# Google Sheets連携セットアップガイド

このアプリケーションは、お問い合わせフォームのデータをGoogle Sheetsに自動保存します。

## 必要な設定

### 1. Google Cloud Projectの作成

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. 新しいプロジェクトを作成
3. Google Sheets APIを有効化

### 2. サービスアカウントの作成

1. 「IAMと管理」→「サービスアカウント」に移動
2. 「サービスアカウントを作成」をクリック
3. 名前を入力（例：gohei-sheets-integration）
4. 「作成して続行」をクリック
5. 役割は不要なのでスキップ
6. 「完了」をクリック

### 3. 認証キーの作成

1. 作成したサービスアカウントをクリック
2. 「キー」タブに移動
3. 「鍵を追加」→「新しい鍵を作成」
4. JSON形式を選択してダウンロード

### 4. Google Sheetsの共有設定

1. 対象のスプレッドシート（ID: 15DzTwHlmoa-RTFTpgm77WNOhIw6zUQUtiRDCVDLWeA4）を開く
2. 「共有」ボタンをクリック
3. サービスアカウントのメールアドレス（xxxxx@xxxxx.iam.gserviceaccount.com）を追加
4. 権限を「編集者」に設定

### 5. 環境変数の設定

Vercelプロジェクトの環境変数に以下を追加：

\`\`\`
GOOGLE_SHEETS_API_KEY=ダウンロードしたJSONファイルの内容
\`\`\`

または、より詳細な設定が必要な場合：

\`\`\`
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxxx@xxxxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
\`\`\`

### 6. スプレッドシートの列構成

「シート1」に以下の列ヘッダーを設定してください：

| A列 | B列 | C列 | D列 | E列 | F列 |
|-----|-----|-----|-----|-----|-----|
| 送信日時 | お名前 | メールアドレス | 電話番号 | 住所 | お問い合わせ内容 |

## トラブルシューティング

- **403エラー**: スプレッドシートの共有設定を確認してください
- **401エラー**: 環境変数の認証情報を確認してください
- **404エラー**: スプレッドシートIDとシート名を確認してください
