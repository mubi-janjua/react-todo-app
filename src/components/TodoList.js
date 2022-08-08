import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredStatus}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredStatus.map(todo => (
                        <Todo
                            text={todo.text}
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                            todo={todo}
                        ></Todo>
                    ))
                }

            </ul>

        </div>
    )
}

export default TodoList;