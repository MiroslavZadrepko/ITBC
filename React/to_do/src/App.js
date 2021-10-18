import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [todos , setTodos] = useState([
    {
      id: 'jfghkj-gdfg',
      text: 'neki tekst',
      done: false
    },
    {
      id: '6546-gdfg',
      text: 'neki tekst 2',
      done: false
    },
    {
      id: 'jfghkj-546456',
      text: 'neki tekst 3',
      done: false
    }
  ])
 

  return (
    <div>
      <Form setTodos={setTodos}/>
      <h1>Todos:</h1>
      <TodoList todos={todos} setTodos= {setTodos}/>
    </div>
  );
}

export default App;
