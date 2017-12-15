import { connect } from "react-redux";
import AddNewTodo from "../components/AddNewTodo";

const actions = require("../actions");

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text,newId) => dispatch(actions.addTodo(text,newId))
    };
};

const ShowAddNewTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewTodo);
    
export default ShowAddNewTodo;