import React from 'react'
import {Container} from "@material-ui/core";
import {ReactChildren} from 'react'

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return <Container maxWidth="sm">
        <>{children}</>
    </Container>
};