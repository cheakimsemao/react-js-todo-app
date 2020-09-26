import React from 'react';
import Todo from './Todo';

const AllTasks = ({ todos }) => {
    console.log(todos);
    return (
        <div id='all-tasks'>
            <div>
                {todos.map((todo) => (
                    <Todo text={todo.text} />
                ))}
            </div>
        </div>
    );
};

export default AllTasks;
