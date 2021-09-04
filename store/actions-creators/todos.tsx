import {TodoAction, ToDoActionTypes} from "../../types/todo";
import {Dispatch} from "react";
import axios from "axios";

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.get('http://localhost:3004/todos')
            dispatch({type: ToDoActionTypes.FETCH_TODOS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке'})
        }
    }
}