import { useState } from "react";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import Register from "./components/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quote from "./components/Quote";


// HTML5 history API

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/create_quote">CreateQuote</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/register">
          <Register setUser={setUser} />
        </Route>
        <Route exact path="/quotes">
          <Quotes loggedIn={user} />
        </Route>
        <Route exact path="/quotes/:id">
          <Quote loggedIn={user} />
        </Route>
        <Route path="/create_quote">
          <CreateQuote loggedIn={user} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
