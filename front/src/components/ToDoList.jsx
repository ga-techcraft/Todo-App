import React from 'react';
import ToDoItem from './ToDoItem';
import { Link } from 'react-router-dom';

const ToDoList = ({ tasks , removeTask}) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <div key={index}>
                    <ToDoItem task={task} removeTask={removeTask} index={index} />
                </div>
            ))}
        </ul>
        // <Link to="/">Home</Link>
    );
};

export default ToDoList;