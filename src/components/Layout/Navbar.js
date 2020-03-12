import React from 'react'
import {Nav} from './styles/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../img/logo.png';
// simple nav bar diplay at every page 
function Navbar() {
    return (
        <Nav>
             <NavLink to='/' >
               <img src={logo} alt="logo"/>
              </NavLink>
            <NavLink className="link" to="/">
                <h1>Moviedb</h1>   
          </NavLink>
        </Nav>
    )
}
export default Navbar;