export const ActionCreator = (type) =>  (payload) => {
    return{
        type,
        payload
    }
}
export const TodosCreate = ActionCreator("Todos")
export const TodosDelete = ActionCreator("Delete")
export const TodosEdit = ActionCreator("Edit")
export const TodosEditValue = ActionCreator("Edit-value")
