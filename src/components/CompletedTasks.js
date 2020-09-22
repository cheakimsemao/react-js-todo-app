import React from 'react';

const CompletedTasks = () => {
    return (
        <div id='completed-tasks'>
            <div className='flex-container'>
                <div>
                    <p className='completedTasks-title'>Completed</p>
                </div>
                <div>
                    <button className='hide-btn'>HIDE</button>
                </div>
            </div>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' checked />
                    <span>
                        <s>Meeting With Friends</s>
                    </span>
                </div>
                <div>
                    <a type='button' className='undo-task'>
                        UNDO
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' checked />
                    <span>
                        <s>Meeting With Friends</s>
                    </span>
                </div>
                <div>
                    <a type='button' className='undo-task'>
                        UNDO
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
        </div>
    );
};

export default CompletedTasks;
