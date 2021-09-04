import type {NextPage} from 'next'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchTodos} from "../store/actions-creators/todos";
import {MainLayout} from "../layouts/mainLayout";
import {Grid, Paper, Typography, Button, TextField, List, ListItem} from "@material-ui/core";
import React from "react";


const Home: NextPage = (props) => {
    const {todos} = useTypedSelector(state => state.todo)

    return (
        <MainLayout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <Typography>Список задач</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper>
                        <TextField></TextField>
                        <Button variant={"contained"} color={"primary"}>Send</Button>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper>
                        <List>
                            {
                                todos.map(el => {
                                    return <ListItem button key={el.id}>el.title</ListItem>
                                })
                            }
                        </List>

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
