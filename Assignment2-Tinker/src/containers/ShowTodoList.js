import { connect } from "react-redux";
import TodoList from "../components/Todolist";

const actions = require("../actions");

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => dispatch(actions.toggleTodo(id))
    };
};

const ShowTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
    
export default ShowTodoList;