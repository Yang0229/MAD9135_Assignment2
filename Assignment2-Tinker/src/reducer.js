import {Map, List} from "immutable";

const init = List([
    Map({key: 0, id: 0, status: 0, text: "Go To GYM"}),
    Map({key: 1, id: 1, status: 1, text: "Christmas Party"})
]);

export default function (state = init, action) {
    switch (action.type) {
        case "ADD_TODO":
            return state.push(
                Map(action.payload)
            );
        case "TOGGLE_TODO":
            return state.map(t => {
                if (t.get("id") === action.payload) {
                    return t.update("status", status => !status);
                } else {
                    return t;
                }
            });
        default:
            return state;
    }
}