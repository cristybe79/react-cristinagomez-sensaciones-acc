import React from 'react';
import Carrito from '../img/IconoCarrito.svg';


const Menu = () => {
    return (
        
        <nav class="menu navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">
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
    </div>
</nav>
    )
}
export default Menu;