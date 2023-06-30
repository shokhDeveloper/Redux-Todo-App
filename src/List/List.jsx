import { useSelector } from "react-redux"
import { Li } from "./Li"

export const List = () => {
    const selector = useSelector((state) => state.TodosReducer)
    const todos = selector.todos || []
    return(
        <ul className="w-25 list-unstyled  mx-auto overflow-scroll" style={{height: "300px"}}>
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