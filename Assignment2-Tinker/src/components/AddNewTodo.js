import React, { Component } from "react";
import PropTypes from "prop-types";

let input;

let add = (addTask,currentSize) => {
    addTask(input.value, currentSize+1);
    input.value="";
};

const AddNewTodo = ({todos, addTodo}) => {
    return (
        <div>
            <input type="text" ref={node => {input = node;}} placeholder="Add New Todo"/>
            <button className="add" onClick={() => add(addTodo, todos.size)}>➕</button>
        </div>
    );
};

AddNewTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddNewTodo;