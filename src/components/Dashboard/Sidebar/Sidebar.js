import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {

     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [isAdmin, setIsAdmin] = useState(false);

     useEffect(() => {
          fetch('https://aqueous-cliffs-02461.herokuapp.com/isAdmin', {
               method: 'POST',
               headers: { 'content-type': 'application/json' },
               body: JSON.stringify({ email: loggedInUser.email })
          })
               .then(res => res.json())
               .then(data => setIsAdmin(data));
     }, [])


     return (
          <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
               <ul className="list-unstyled">
                    <li>

                         <Link to='/'>Home</Link>
                    </li>
                    <li>

                         <Link to='/dashboard'>Dashboard</Link>

                    </li>
                    <li>

                         <Link to='/bookList'>BookList</Link>
                    </li>

                    <li>
                         <Link to='/review'>Review</Link>

                    </li>
                    <li>

                         <Link to='/book/:id'>Book</Link>
                    </li>
                   { isAdmin && <div>

                         <li>

                              <Link to='/serviceList'>ServiceList</Link>
                         </li>
                         <li>

                              <Link to='/addBook'>AddBook</Link>
                         </li>

                    </div>}


               </ul>
          </div>
     );
};

export default Sidebar;