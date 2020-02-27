import React, { Component, useState } from 'react';

const TodoApp = () => {

    const [text, setText] = useState('Hello World');


    return (
        <div>
            <h1>{text}</h1>
        </div>
    )

}

export default TodoApp;