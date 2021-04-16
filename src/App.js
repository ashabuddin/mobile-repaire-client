import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
