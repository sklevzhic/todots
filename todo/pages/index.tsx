import type {NextPage} from 'next'
import {addToDo} from "../store/slices/todos-slice";
import {useDispatch} from "react-redux";

const Home: NextPage = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(addToDo({
                "userId": 11,
                "id": 8,
                "title": "et porro tempora",
                "completed": true
            }))}>Отправить</button>
        </>
    )
}

export default Home
