import type {NextPage} from 'next'
import React from "react";
import {MainLayout} from "../layouts/MainLayout";
import { ToDoList } from '../components/ToDoList';
import { NewToDo } from '../components/NewToDo';
import {Paper, Divider} from "@material-ui/core";
import Link from 'next/link'
export const todos = [
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
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },

]

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Paper style={{padding: "10px"}}>
                <NewToDo />
                <Divider />
                <ToDoList items={todos}/>
            </Paper>
        </MainLayout>
    )
}

export default Home
