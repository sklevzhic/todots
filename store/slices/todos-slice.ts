import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ToDo} from "../../types/todo";

export interface CounterState {
    todos: ToDo[]
}

const initialState: CounterState = {
    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDo>) => {
            state.todos.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {addToDo} = todosSlice.actions

export const TodosReducer = todosSlice.reducer