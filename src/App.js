import Style from "./app.module.scss";
import "./app.scss";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext';

function App() {
const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/login">
          {!user ? <Login></Login> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/register">
          {!user ? <Register></Register> : <Redirect to="/"></Redirect>}
        </Route>

        {user ? (
          <>
            <Route path="/movies">
              <Home type={"movie"}></Home>
            </Route>
            <Route path="/series">
              <Home type={"series"}></Home>
            </Route>
            <Route path="/watch">
              <Watch></Watch>
            </Route>
          </>
        ) : (
          <Route>
            {" "}
            <Redirect to="/register"></Redirect>
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
