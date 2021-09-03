import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ToDo} from "../../types/todo";
import {ToDoApi} from "../../api/toDoApi";
import {Axios} from "../../axios";

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

export const fetchAddToDo = createAsyncThunk(
    'todos/fetchCreateToDoStatus',
    async ({title}: { title: string }) => {
        try {
            const room = await ToDoApi(Axios).addToDo({title});
            return room
        } catch (e) {
            throw Error('Ошибка при добавлении задачи')
        }
    }
)

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAddToDo.fulfilled.type]: (state, action: PayloadAction<ToDo>) => {
            state.todos.push(action.payload)
        },
        [fetchAddToDo.rejected.type]: (_, action) => {
            console.log(action)
        }
    }
})

export const TodosReducer = todosSlice.reducer