import React from 'react'

import Grid from '@material-ui/core/Grid';
import {Container, Paper} from "@material-ui/core";


interface MainLayoutProps {

}


export const MainLayout: React.FC<MainLayoutProps> = ({
                                                          children,
                                                      }) => {

    return <Container maxWidth="sm" style={{marginTop: "40px"}}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                {children}
            </Grid>
        </Grid>
    </Container>;
};