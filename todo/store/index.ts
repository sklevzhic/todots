import {combineReducers, configureStore, Store} from '@reduxjs/toolkit'
import {TodosReducer} from "./slices/todos-slice";

const rootReducer = combineReducers({
    todos: TodosReducer
})

// export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (): Store =>
    configureStore({
    reducer: rootReducer
})

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;



