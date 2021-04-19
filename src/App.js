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
import BookList from "./components/Dashboard/BookList/BookList";
import AddBook from "./components/Dashboard/AddBook/AddBook";
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
            <PrivateRoute path='/dashboard'>
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review/>
            </PrivateRoute>
            <PrivateRoute path='/book/:id'>
              <Book/>
            </PrivateRoute>
            <PrivateRoute path='/serviceList'>
              <ServiceList/>
            </PrivateRoute>
            <PrivateRoute path='/bookList'>
              <BookList/>
            </PrivateRoute>
           <PrivateRoute path='/addBook'>
              <AddBook/>
           </PrivateRoute>
          
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
