import { useDispatch, useSelector } from "react-redux"
import { v4 } from "uuid"
import { TodosCreate } from "../redux/actioncreator"
export const Input = () => {
    const selector = useSelector((state) => state.TodosReducer)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        if(event.keyCode === 13){
            const todo = {
                name: event.target.value,
                id: v4()
            }
            dispatch(TodosCreate(todo))
            window.localStorage.setItem("todos", JSON.stringify(selector.todos))
        }   
    }
    return(
        <input type="text" onKeyUp={handleChange} />
    )
}