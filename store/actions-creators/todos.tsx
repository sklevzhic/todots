import {AddToDoType, TodoAction, ToDoActionTypes} from "../../types/todo";
import {Dispatch} from "react";
import axios from "axios";

const URL = 'https://technicsklevzhits.herokuapp.com'
// const URL = 'http://localhost:3004'

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.get(URL + '/todos')
            dispatch({type: ToDoActionTypes.FETCH_TODOS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке'})
        }
    }
}

export const addTodo = (obj: AddToDoType) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.post(URL + '/todos', obj)
            dispatch({type: ToDoActionTypes.ADD_TODO, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при добавлении задания'})
        }
    }
}

export const deleteTodo = (id: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.delete(URL + `/todos/${id}`)
            dispatch({type: ToDoActionTypes.DELETE_TODO, payload: id})
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при удалении задания'})
        }
    }
}
export const completedTodo = (id: number, completed: boolean) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.patch(URL + `/todos/${id}`, {completed: !completed})
            dispatch({type: ToDoActionTypes.UPDATE_TODO, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка'})
        }
    }
}


