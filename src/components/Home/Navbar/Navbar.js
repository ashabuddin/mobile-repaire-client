import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
            <div class="container-fluid">
               
               
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto text-white">
                        <li class="nav-item ">
                            <a class="nav-link active ms-4" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-4" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled ms-4" href="/dashboard" >Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;