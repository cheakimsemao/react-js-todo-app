import React from 'react';
import Todo from './Todo';

const AllTasks = ({ todos, setTodos, total, setTotal, completed, setCompleted, done, setDone }) => {
    console.log(todos);
    return (
        <div id='all-todos'>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    date={todo.date}
                    time={todo.time}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    total={total}
                    setTotal={setTotal}
                    completed={completed}
                    setCompleted={setCompleted}
                    done={done}
                    setDone={setDone}
                />
            ))}
        </div>
    );
};

export default AllTasks;
