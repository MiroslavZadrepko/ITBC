import { Redirect, useParams } from "react-router";

const Todo = ({todos}) => {
    
    let {id} = useParams()
   
    let todo = todos.find(el => el.id === Number(id))
    return todo?
        <div>
            <p>{todo.text}</p>
            <p>{todo.done}</p>
        </div>
     :
     <Redirect to='/todos'/>
}
 
export default Todo;