import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Todo = ({ text, date, time, todo, todos, setTodos, setTotal, setCompleted }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        setTotal((prevCount) => prevCount - 1);
        if (todo.completed === true) {
            setCompleted(todo.completed === true ? (prevCount) => prevCount - 1 : null);
        }
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
        setCompleted(todo.completed === false ? (prevCount) => prevCount + 1 : (prevCount) => prevCount - 1);
    };

    return (
        <>
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' onClick={completeHandler} />
                    <span className={todo.completed ? 'completed' : null}>{text}</span>
                </div>
                <div>
                    <a className={todo.completed && 'disappear'}>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a onClick={deleteHandler}>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>
                {date}, {time}
            </small>
            <hr className='task-line' />
        </>
    );
};

export default Todo;
