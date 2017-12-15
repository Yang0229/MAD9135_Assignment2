import React from "react";

export function Todo({todo}) {
    return(
        <span>
            <button className="todo" >{todo.status ? "✅" : "❎"}</button>
            {todo.text}
        </span>
    );
}