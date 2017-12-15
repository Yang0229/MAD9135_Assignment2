import React, { Component } from "react";
import PropTypes from "prop-types";
import { Todo } from "./Todo";


const TodoList = ({todos, toggleTodo}) => {
    return(
        <div className="todo">
            <ul className="todo__list">
                {todos.map(t => (
                    <li
                        key={t.get("id")}
                        className={t.get("status") ? "done" : "open"}
                        id={"todo-" + t.get("id")}
                        onClick={() => toggleTodo(t.get("id"))}>
                        <Todo todo={t.toJS()} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
