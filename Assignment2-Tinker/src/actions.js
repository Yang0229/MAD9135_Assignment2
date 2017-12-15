export function addTodo(text, newId) {
    return {
        type: "ADD_TODO",
        payload: {
            key: newId,
            id: newId,
            status: false,
            text
        }
    };
}

export function toggleTodo(id) {
    return {
        type: "TOGGLE_TODO",
        payload: id
    };
}