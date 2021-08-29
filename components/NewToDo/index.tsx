import React, {useState} from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './NewToDo.module.scss'

interface NewToDoProps {

}

export const NewToDo: React.FC<NewToDoProps> = () => {

    const [text, setText] = React.useState('');
    const [isClicked, setIsClicked] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handlerSubmit = (e) => {
        e.preventDefault()
        setText("")
        console.log(text)
        setIsClicked(!isClicked)
    }

    return <form onSubmit={(e) => handlerSubmit(e)}>
        <div className={`${styles.newToDoWrapper} ${ (!isClicked) ? styles.newTodoColumn : ''}`}>
            <Input
                autoFocus
                classes={{ root: styles.fieldRoot }}
                onFocus={() => setIsClicked(!isClicked)}
                placeholder="Add To Do"
                value={text}
                multiline
                onChange={handleChange}
                rows={(isClicked) ? 1 : 4}
            />
            {(!isClicked) && <Button className={styles.newToDoSend} disabled={!text} variant={"contained"} type={"submit"}>Add</Button>}
        </div>

    </form>;
};