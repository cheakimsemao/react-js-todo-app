import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
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
    };

    return (
        <>
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' onClick={completeHandler} />
                    <span className={todo.completed ? 'completed' : null}>{text}</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button' onClick={deleteHandler}>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
        </>
    );
};

export default Todo;
