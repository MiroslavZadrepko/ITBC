import { Link } from "react-router-dom";


const Todos = ({todos}) => {
    return ( 
        <div>
            {todos.map(todo => <div key={todo.id}><Link to={`/todos/${todo.id}`}>{todo.text}</Link></div>)}
        </div>
    );
}
 
export default Todos;