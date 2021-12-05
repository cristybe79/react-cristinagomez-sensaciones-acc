import React from 'react';
import './NavBar.css'
import logo from '../img/logoo.jpg'
import CartWidget from '../CartWidget/CartWidget';
import Menu from './menu'



function NavBar() {
    return <>
        <nav className="navBar">

            <div className="col"><img src={logo} className="App-logo" alt="logo" /></div>
            <Menu/>
            <CartWidget />


        </nav>
        </>
}

export default NavBar;