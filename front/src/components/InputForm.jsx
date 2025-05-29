import React from 'react';

const InputForm = ({text, setText, addTask }) => {
    return (
        <form>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </form>
    );
};

export default InputForm;
