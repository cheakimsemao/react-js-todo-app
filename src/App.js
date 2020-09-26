import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AllTasks from './components/AllTodos';
import CompletedTasks from './components/CompletedTasks';
import AddTodo from './components/AddTodo';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Header />
            <AddTodo inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            <AllTasks todos={todos} />
            <CompletedTasks />
        </>
    );
}

export default App;
