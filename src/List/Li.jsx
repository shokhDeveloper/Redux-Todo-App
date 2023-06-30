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
    <li className="w-100 p-2 bg-light rounded mt-2 d-flex align-items-center justify-content-between" key={id}>
      <input style={{border: "1px solid transparent", "outline": "1px solid transparent", background: "#fff"}} onKeyUp={handleKey} readOnly={selector?.edit_id} type="text" defaultValue={name} />
        <div>
      <button onClick={handleClick} id="edit" className="btn btn-success">
        Edit
      </button>
      <button onClick={handleClick} className="delete ms-2 btn  btn-danger">
        Delete
      </button>
        </div>
    </li>
  );
};
