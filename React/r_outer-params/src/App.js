import React, { useState } from 'react';
import {BrowserRouter as Router , Switch , Link , Route} from 'react-router-dom'
import Todo from './components/Todo';
import Todos from './components/Todos';

function App() {
  const [todos,setTodos] = useState([{id:1,text:'prvi todo',done:'uradjen'},{id:2,text:'drugi todo',done:'nije uradjeno'}])
  return (
    <Router>
      <nav>
        <Link to ="/todos">Todos</Link>
      </nav>
     <Switch>
       <Route exact path="/todos">
          <Todos todos = {todos}/>
       </Route>
       <Route exact path="/todos/:id">
          <Todo todos = {todos}/>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
