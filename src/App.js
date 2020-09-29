import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AllTodo from './components/AllTodos';
import AddTodo from './components/AddTodo';

function App() {
    const [inputText, setInputText] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [todos, setTodos] = useState([]);

    const initailCount = 0;
    const [total, setTotal] = useState(initailCount);
    const [completed, setCompleted] = useState(initailCount);
    const [done, setDone] = useState(initailCount);

    return (
        <>
            <Header total={total} completed={completed} done={done} setDone={setDone} />
            <AddTodo
                inputText={inputText}
                setInputText={setInputText}
                inputDate={inputDate}
                setInputDate={setInputDate}
                inputTime={inputTime}
                setInputTime={setInputTime}
                todos={todos}
                setTodos={setTodos}
                setTotal={setTotal}
            />
            <AllTodo
                todos={todos}
                setTodos={setTodos}
                total={total}
                setTotal={setTotal}
                completed={completed}
                setCompleted={setCompleted}
                done={done}
                setDone={setDone}
            />
        </>
    );
}

export default App;
