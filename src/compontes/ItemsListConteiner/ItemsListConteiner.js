import React from 'react';
import ItemList from './ItemList';

const Producto = (props) => (<p>{props.greeting}</p>)



function ItemsListConteiner() {
    return <>
        <div>
            <Producto greeting="Catalogo" />

            <ItemList />

        </div>
    </>
    
}

export default ItemsListConteiner;