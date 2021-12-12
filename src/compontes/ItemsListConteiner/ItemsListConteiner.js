import React from 'react';
import Common from './Common';
import Card1 from './Card';
const Producto = (props) => (<p>{props.greeting}</p>)



function ItemsListConteiner() {
    return <>
        <div>
            <Producto greeting="Catalogo" />
            <Common.ButtonSubmit>Catalogo</Common.ButtonSubmit>
            <Common.TitleLabel text="Ver"></Common.TitleLabel>
            <Common.Img src="./img/"></Common.Img>
            <Card1 />
            <Card1/>
        </div>
    </>
    
}

export default ItemsListConteiner;