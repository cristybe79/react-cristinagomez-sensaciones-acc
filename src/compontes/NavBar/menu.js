import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const Menu = () => {
    return (
        
        <nav class="menu navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
            <div ><img className="App-logo" src={logo}  alt="logo" ></img></div>

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Quienes Somos</a>
        <a class="nav-link" href="#">Catalogo</a>
        <a class="nav-link" href="#">Contacto</a>
                    </div>
    </div>
        <CartWidget/>
    </div>
</nav>
    )
}
export default Menu;