import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AllTasks from './components/AllTodos';
import AddTodo from './components/AddTodo';

function App() {
    const [inputText, setInputText] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Header />
            <AddTodo
                inputText={inputText}
                setInputText={setInputText}
                inputDate={inputDate}
                setInputDate={setInputDate}
                inputTime={inputTime}
                setInputTime={setInputTime}
                todos={todos}
                setTodos={setTodos}
            />
            <AllTasks todos={todos} setTodos={setTodos} />
        </>
    );
}

export default App;
