import {TodoState, TodoAction, ToDoActionTypes} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    error: ''
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ToDoActionTypes.FETCH_TODOS_ERROR:
            return {...state, error: action.payload}
        case ToDoActionTypes.FETCH_TODOS:
            return {error: '', todos: action.payload}
        default:
            return state
    }
}