import React from 'react'
import { NavLink } from 'react-router-dom'
import Cartbtn from './buttons/Cartbtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Home from './Home'



const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid py=2" >
                
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE STORE</NavLink>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>

                    <Login />
                    <Signup />
                    <Cartbtn />
                    
                
                    

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header