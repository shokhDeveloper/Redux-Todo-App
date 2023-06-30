import { useSelector } from "react-redux"
import { Li } from "./Li"

export const List = () => {
    const selector = useSelector((state) => state.TodosReducer)
    const todos = selector.todos || []
    return(
        <ul>
            {todos?.length ? (
            <>
                {todos?.map(item => (
                    <Li key={item.id} name={item.name} id={item.id}/>
                ))}
            </>
            ): <h1>Hali hech narsa yaratilmadi</h1>}
        </ul>
    )
}