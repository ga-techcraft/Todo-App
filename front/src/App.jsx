import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const fetchTodos = () => {
    fetch('http://127.0.0.1:5000/todos')
      .then(res => res.json())
      .then(data => setTasks(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTask = async () => {
    if (text.trim() === '') return
    await fetch('http://127.0.0.1:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "task": text })
    });
    setText('')
    fetchTodos();
  }

  const removeTask = async (index) => {
    if (index < 0 || index >= tasks.length) return
    await fetch(`http://127.0.0.1:5000/todos/${index}`, {
      method: 'DELETE'
    });
    fetchTodos();
  }

  return (
    <>
      <div>
        <h1>To Do App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
