import type {NextPage} from 'next'
import {fetchAddToDo} from "../store/slices/todos-slice";
import {useAsyncAction} from "../hooks/useAction";


const Home: NextPage = (props) => {
    const addtoDo = useAsyncAction(fetchAddToDo)

    const adddd = () => {
        const data = addtoDo({
            "title": "et porro tempora",
        })
        console.log(data)
    }
    return (
        <>
            <button onClick={adddd}>Отправить</button>
        </>
    )
}

export default Home
