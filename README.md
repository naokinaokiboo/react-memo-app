# REACT MEMO APP

- ストレージに`Cloud Firestore`を使用するメモアプリです。

## Firebaseのセットアップ

### プロジェクトの作成

- googleアカウントにログインした状態で、[Firebase](https://firebase.google.com)にアクセスします。
- `使ってみる`を選択
- `Firebaseへようこそ`という画面が表示されたら`プロジェクトを作成`を選択します。
- `プロジェクトの作成`ページが表示されるので、画面の指示に従ってプロジェクトの作成を完了してください。

### アプリにFirebaseを追加する

- [Firebaseコンソール](https://console.firebase.google.com/)から作成したプロジェクトに移動し、以下の赤枠のボタンを選択し、画面の指示に従い進めます。
  - ※`Firebase SDKの追加`では`npmを使用する`を選択してください。

![image](https://github.com/naokinaokiboo/react-memo-app/assets/131861805/60644ae3-b381-4875-a7b9-39842b8429fe)

### データベースの作成

- [Firebaseコンソール](https://console.firebase.google.com/)から作成したプロジェクトに移動、`Cloud Firestore`を選択し、データベースを作成します。

  - `本番環境モード`か`テストモード`かを選択できますが、すぐに使用したい場合は`テストモード`を選択してください。（デフォルトで30日間、読み込み、書き込みができるセキュリティルールが設定されます。）
  - `本番環境モード`を選択した場合は、デフォルトでセキュリティルールにより読み込み、書き込みが共に無効になっているので、以下の手順で読み込み、書き込みを有効にする必要があります。

    - [Firebaseコンソール](https://console.firebase.google.com/)から作成したプロジェクトに移動後、`Cloud Firestore`へ移動します。
    - `ルール`タブを選択し、以下のように変更します。

    ```
    rules_version = '2';

    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if true;
        }
      }
    }
    ```

## Firebase構成情報を用意

- プロジェクトルートに`.env`ファイルを作成し、以下のように入力してください（`...`は自身の環境での構成情報）

```
REACT_APP_FIREBASE_API_KEY="..."
REACT_APP_FIREBASE_AUTH_DOMAIN="..."
REACT_APP_FIREBASE_PROJECT_ID="..."
REACT_APP_FIREBASE_STORAGE_BUCKET="..."
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="..."
REACT_APP_FIREBASE_APP_ID="..."
```

- 構成情報の確認方法
  - [Firebaseコンソール](https://console.firebase.google.com/)から作成したプロジェクトに移動
  - 画面左のサイドバーから`プロジェクトの設定`を選択  
    ![image](https://github.com/naokinaokiboo/react-memo-app/assets/131861805/67aff692-6039-4614-8d1e-f0ca1b38b5e6)
  - `全般`タブの`マイアプリ`内の`SDKの設定と構成`にある`firebaseConfig`を参照
    ```
    const firebaseConfig = {
      apiKey: "xxxxxxxxxx",
      authDomain: "xxxxxxxxxx",
      projectId: "xxxxxxxxxx",
      storageBucket: "xxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxx",
      appId: "xxxxxxxxxx",
      measurementId: "xxxxxxxxxx",
    };
    ```

## 実行方法

- プロジェクトディレクトリに移動し、インストールを実行します

```zsh
$ npm install
```

- 起動します

```zsh
$ npm start
```

- `http://localhost:3000/`にアクセスすることで利用できます
