import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const AllTasks = () => {
    return (
        <div id='all-tasks'>
            <div className='flex-container'>
                <div>
                    <p className='allTasks-title'>All Tasks</p>
                </div>
                <button className='add-btn'>ADD</button>
            </div>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
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
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
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
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
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
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
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
        </div>
    );
};

export default AllTasks;
