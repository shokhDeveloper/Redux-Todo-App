import { useDispatch, useSelector } from "react-redux";
import { TodosDelete, TodosEdit } from "../redux/actioncreator";
export const Li = ({ name, id }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.TodosReducer);
  const handleKey = (event) => {
    if(event.keyCode === 13){   
        let todos = selector.todos.filter(item => item.id === id)
        todos[0].name = event.target.value 
        dispatch(TodosEdit())          
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
  const handleClick = (event) => {
    if (event.target.classList.contains("delete")) {
      dispatch(TodosDelete(id));
      window.localStorage.setItem("todos", JSON.stringify(selector.todos))
    } else if (event.target.matches("#edit")) {
      dispatch(TodosEdit());
    }
  };
  return (
    <li key={id}>
      <input onKeyUp={handleKey} readOnly={selector?.edit_id} type="text" defaultValue={name} />
      <button onClick={handleClick} id="edit">
        Edit
      </button>
      <button onClick={handleClick} className="delete">
        Delete
      </button>
    </li>
  );
};
