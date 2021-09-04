export interface ToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: ToDo[];
    error: string;
}

export enum ToDoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
}

interface FetchToDosAction {
    type: ToDoActionTypes.FETCH_TODOS,
    payload: ToDo[]
}

interface FetchToDosErrorAction {
    type: ToDoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}


export type TodoAction = FetchToDosAction | FetchToDosErrorAction