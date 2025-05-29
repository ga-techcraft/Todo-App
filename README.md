
# ToDoApp

React（Vite）と Flask を使って構築した、シンプルなToDoアプリです。

---

## 使用技術

- フロントエンド：React（Vite）
- バックエンド：Flask（Python）

---

## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/ga-techcraft/Todo-App.git
cd Todo-App
````

### 2. バックエンド（Flask）の起動

```bash
cd back
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py
```

### 3. フロントエンド（React）の起動

```bash
cd front
npm install
npm run dev
```

---

## ディレクトリ構成

```
ToDoApp/
├── back/            # Flaskのバックエンド
│   ├── venv/
│   └── app.py
├── front/           # Reactのフロントエンド
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── vite.config.js
```

---

## API仕様

| メソッド   | エンドポイント          | 説明          |
| ------ | ---------------- | ----------- |
| GET    | `/todos`         | 全てのToDoを取得  |
| POST   | `/todos`         | 新しいToDoを追加  |
| DELETE | `/todos/<index>` | 指定したToDoを削除 |

## 学んだこと
* `useState` を使って状態を管理できる。状態が変化すると、自動的に再レンダリングされ、UIに反映される仕組みを体感できた。
* `onChange` や `onClick` に関数を渡すことで、ユーザーの操作に応じたUIの動きを定義できる。
* `useEffect` を使って、コンポーネントの初回表示時のみバックエンドからデータを取得する処理を記述できる

#### 作成したキータ記事
【Reactの仕組みの理解を整理する】
https://qiita.com/TechCraft/items/f06a410972132628a518

【Reactはjs起点でUI構築をする】
https://qiita.com/TechCraft/items/25ca012aa719d9803800
