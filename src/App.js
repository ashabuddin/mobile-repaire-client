import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Review from "./components/Dashboard/Review/Review";
import Book from "./components/Dashboard/Book/Book";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import BookList from "./components/Dashboard/BookList/BookList";
import AddBook from "./components/Dashboard/AddBook/AddBook";
import Admin from "./components/Dashboard/Admin/Admin";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';



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
            <Route path='/dashboard'>
              <Dashboard/>
            </Route>
            <PrivateRoute path='/review'>
              <Review/>
            </PrivateRoute>
            <Route path='/book/:id'>
              <Book/>
            </Route>
            <Route path='/serviceList'>
              <ServiceList/>
            </Route>
            <Route path='/makeAdmin'>
              <MakeAdmin/>
            </Route>
            <Route path='/bookList'>
              <BookList/>
            </Route>
           <Route path='/addBook'>
              <AddBook/>
           </Route>
           <Route path='/admin'>
             <Admin/>
           </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
