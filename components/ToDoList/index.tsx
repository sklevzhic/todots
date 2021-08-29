import {ListItemIcon, Checkbox, ListItem, List, ListItemText, ListItemSecondaryAction, Button, IconButton} from '@material-ui/core';
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
type ToDoItem = {
    id: number,
    title: string,
    completed: boolean
}

interface ToDoListProps {
    items: ToDoItem[]
}

export const ToDoList: React.FC<ToDoListProps> = ({items}) => {
        const [checked, setChecked] = React.useState([0]);

    const handleToggle = (el: number) => () => {
        const currentIndex = checked.indexOf(el);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(el);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return <List>
        {items.map((el) => {
            return (
                <ListItem key={el.id} role={undefined} dense button onClick={handleToggle(el.id)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(el.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText key={el.id} primary={el.title}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        })}
    </List>;
};