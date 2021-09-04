import type {NextPage} from 'next'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchTodos} from "../store/actions-creators/todos";
import {MainLayout} from "../layouts/mainLayout";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import {TodoList} from '../components/TodoList';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {AddToDo} from '../components/AddToDo';
import styles from '../styles/Home.module.scss'

const Home: NextPage = (props) => {
    const {todos} = useTypedSelector(state => state.todo)

    return (
        <MainLayout>
            <Grid container spacing={3} style={{marginTop: "20px"}}>
                <Grid item xs={12}>
                    <Paper>
                        <Box p={2}>
                            <Typography className={styles.toDoListTitle} variant={"h6"}>To Do List</Typography>
                            <AddToDo/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        {
                            todos.length !== 0
                                ? <TodoList todoList={todos}/>
                                : <div className={styles.listWrapper}>
                                    <Typography>Список задач пуст</Typography>
                                    <DoneAllIcon className={styles.icon}/>
                                </div>
                        }

                    </Paper>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTodos())
})
