import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Todo = ({ text, date, time, todo, todos, setTodos }) => {
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
                    <a type='button' className={todo.completed ? 'disappear' : null}>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button' onClick={deleteHandler}>
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
