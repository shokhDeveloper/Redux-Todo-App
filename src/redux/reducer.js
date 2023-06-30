export const initialState = {
    todos: window.localStorage.getItem("todos") ? JSON.parse(window.localStorage.getItem("todos")) : [] ,
    edit_id: true   
};

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Todos":
      {
        state.todos =  [...state.todos, action.payload]
        window.localStorage.setItem("todos", JSON.stringify(state.todos))        
        return {
          ...state
        };
        
    }
      break;
    case "Delete":
        state.todos =  state.todos.filter((item) => item.id !== action.payload)
        window.localStorage.setItem("todos", JSON.stringify(state.todos))        
        {
        return {
          ...state
        }
      }
      break;
    case "Edit": {
      return {
        ...state,
        edit_id: !state.edit_id
      };
    }break;
   
    default:
      return state;
  }
};
