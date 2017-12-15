import React, {Component} from "react";
import Header from "./Header";
import ShowTodoList from "../containers/ShowTodoList";
import ShowAddNewTodo from "../containers/ShowAddNewTodo";


export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <ShowTodoList />
                <ShowAddNewTodo />
            </div>
        );
    }
}
