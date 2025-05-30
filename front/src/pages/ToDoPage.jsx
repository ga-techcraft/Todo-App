import { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import ToDoList from '../components/ToDoList';
import { Link } from 'react-router-dom';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    const addTask = async () => {
        if (text.trim() === '') return
        await fetch('localhost:5000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "task": text })
        });
        setText('')
        fetchTodos();
    }

    const removeTask = async (index) => {
        if (index < 0 || index >= tasks.length) return
        await fetch(`localhost:5000/todos/${index}`, {
            method: 'DELETE'
        });
        fetchTodos();
    }

    const fetchTodos = () => {
        fetch('localhost:5000/todos')
            .then(res => res.json())
            .then(data => setTasks(data));
    };

    useEffect(() => {
        fetchTodos();
    }, []);
    
    return (
        <div>
            <h1>To Do App</h1>
            <InputForm text={text} setText={setText} addTask={addTask}/>
            <ToDoList tasks={tasks} removeTask={removeTask}/>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ToDoPage;
