import React from 'react';

import {useStyles} from "./HeaderStyle";
import {AppBar, Toolbar, Button, IconButton, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const classes = useStyles();
    return <AppBar position="static">
        <div className={classes.root}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
        </div>
    </AppBar>
}

export default Header