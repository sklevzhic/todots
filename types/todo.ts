export interface ToDo {
    id?: number | null,
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
    DELETE_TODO = 'DELETE_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    ADD_TODO = 'ADD_TODO',
}

interface FetchToDosAction {
    type: ToDoActionTypes.FETCH_TODOS,
    payload: ToDo[]
}

interface FetchToDosErrorAction {
    type: ToDoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

interface DeleteToDoAction {
    type: ToDoActionTypes.DELETE_TODO,
    payload: number
}

interface AddToDoAction {
    type: ToDoActionTypes.ADD_TODO,
    payload: ToDo
}

interface UpdateToDoAction {
    type: ToDoActionTypes.UPDATE_TODO,
    payload: {
        id: number,
        completed: boolean
    }
}


export type TodoAction = FetchToDosAction | FetchToDosErrorAction | DeleteToDoAction | AddToDoAction | UpdateToDoAction