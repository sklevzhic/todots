import React from 'react'
import {Container, Grid, Paper} from "@material-ui/core";

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <Container maxWidth="sm">
        {children}
    </Container>
};