import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Todo = ({ text }) => {
    return (
        <>
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>{text}</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button'>
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
