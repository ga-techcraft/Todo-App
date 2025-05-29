
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
│   │   └── main.jsx # アプリのエントリーポイント
│   │   ├── components/
│   │   │   ├── InputForm.jsx # 入力フォーム
│   │   │   ├── ToDoItem.jsx # 1つのタスク表示
│   │   │   └── ToDoList.jsx # タスク一覧表示
│   │   └── pages/
│   │       ├── Home.jsx # トップページ
│   │       └── ToDoPage.jsx # To Doページ
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
* `react-router-dom` を使って、URLに応じてページを切り替えることができる。
* 親→子にデータを渡すには、propsを使用する。
``` jsx
<ToDoItem task={task} removeTask={removeTask} index={index} />
```
* 子コンポーネント側では、`props.task` などで受け取るか、分割代入を使用する。
``` jsx
// 分割代入
const ToDoItem = ({ task, removeTask, index }) => {
    return (
        <li>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
        </li>
    );
};
```
* 親で定義した関数を子コンポーネントで実行するには、コールバック関数を使用する。
``` jsx
const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
};
```
* `.map()` で複数要素を描写するときは必ず `key` を指定する。理由は、Reactが各要素を識別するため。
``` jsx
{tasks.map((task, index) => (
    <ToDoItem key={index} task={task} removeTask={removeTask} index={index} />
))}
```
 
#### 作成したキータ記事
【Reactの仕組みの理解を整理する】
https://qiita.com/TechCraft/items/f06a410972132628a518

【Reactはjs起点でUI構築をする】
https://qiita.com/TechCraft/items/25ca012aa719d9803800