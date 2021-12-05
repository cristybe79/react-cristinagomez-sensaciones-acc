import React from 'react';

const Producto = (props) => (<p>{props.greeting}</p>)



function ItemsListConteiner() {
    return <>
        <div>
            <Producto greeting="Catalogo"/>
        </div>
    </>
    
}

export default ItemsListConteiner;