require("./main.scss");

import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Main from "./components/Main";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById("react-app")
);

