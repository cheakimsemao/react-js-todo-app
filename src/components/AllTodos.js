import React from 'react';
import Todo from './Todo';

const AllTasks = ({ todos, setTodos }) => {
    console.log(todos);
    return (
        <div id='all-tasks'>
            <div>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        date={todo.date}
                        time={todo.time}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllTasks;
