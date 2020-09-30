import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AllTodo from './components/AllTodos';
import AddTodo from './components/AddTodo';

function App() {
    const initailCount = 0;
    const [total, setTotal] = useState(initailCount);
    const [completed, setCompleted] = useState(initailCount);
    const [done, setDone] = useState(initailCount);

    const [inputText, setInputText] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    // save to local
    const saveTodosInLocal = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.setItem('completed', JSON.stringify(completed));
        localStorage.setItem('done', JSON.stringify(done));
    };

    const getTodosFromLocal = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todosLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todosLocal);
        }
    };

    const getProgressFromLocal = () => {
        if (localStorage.getItem('todos') !== null) {
            let totalLocal = JSON.parse(localStorage.getItem('total'));
            let completedLocal = JSON.parse(localStorage.getItem('completed'));
            let doneLocal = JSON.parse(localStorage.getItem('done'));
            setTotal(totalLocal);
            setCompleted(completedLocal);
            setDone(doneLocal);
        }
    };

    // runs only once
    useEffect(() => {
        getTodosFromLocal();
        getProgressFromLocal();
    }, []);

    useEffect(() => {
        filterHandler();
        saveTodosInLocal();
    }, [todos, status]);

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
                setStatus={setStatus}
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
                filteredTodos={filteredTodos}
            />
        </>
    );
}

export default App;
