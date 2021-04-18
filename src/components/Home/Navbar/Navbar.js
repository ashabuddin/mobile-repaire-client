import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
            <div className="container-fluid">
               
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-white">
                        <li className="nav-item ">
                             <Link className="nav-link ms-5" to='/'>Home</Link>
                            
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link ms-5"  to='/login'>Login</Link>
                           
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to='/dashboard'>Dashboard</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to='/dashboard'>Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;