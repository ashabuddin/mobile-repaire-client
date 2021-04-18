import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
     return (
          <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
               <ul className="list-unstyled">
                    <li>

                         <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                         <Link to='/review'>Review</Link>

                    </li>
                    <li>

                         <Link to='/book/:id'>Book</Link>
                    </li>
                    <li>

                         <Link to='/serviceList'>ServiceList</Link>
                    </li>
                    <li>

                         <Link to='/addBook'>AddBook</Link>
                    </li>
                    <li>

                         <Link to='/'>Review</Link>
                    </li>

               </ul>
          </div>
     );
};

export default Sidebar;