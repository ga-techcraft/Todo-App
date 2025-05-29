import React from 'react';

const ToDoItem = ({ task, removeTask, index }) => {
    return (
        <li>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
        </li>
    );
};

export default ToDoItem;
