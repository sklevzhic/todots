import {TodoState, TodoAction, ToDoActionTypes} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    error: ''
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ToDoActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.payload)
            }
        case ToDoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case ToDoActionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(el => {
                    if (el.id === action.payload.id) {
                        el.completed = action.payload.completed
                    }
                    return el
                })
            }
        case ToDoActionTypes.FETCH_TODOS_ERROR:
            return {...state, error: action.payload}
        case ToDoActionTypes.FETCH_TODOS:
            return {error: '', todos: action.payload}

        default:
            return state
    }
}