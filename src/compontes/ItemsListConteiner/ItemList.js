import React, { useState } from "react";
import Item from './Item'; 




const ItemsList = () => {
    const [itemList, setItemList] = useState([{ id: "01", titulo: "pulsera infinito blanca", detalle: "pulsera infinito blanca", precio: 120, img: "http://127.0.0.1:5500/src/compontes/img/pulsera01.jpg" },
    { id: "02", titulo: "pulsera corazon naranja", detalle: "20 cm - hilo color naranja", precio: 120, img: "http://127.0.0.1:5500/src/compontes/img/pulsera02.jpg" },
    { id: "03", titulo: "pulsera trenzada bicolor", detalle: "18 cm pulsera naranja y verde", precio: 100, img: "http://127.0.0.1:5500/src/compontes/img/pulsera03.jpg" },
    { id: "04", titulo: "pulsera river", detalle: "20cm pulsera trenzada color rojo y blanca", precio: 100, img: "http://127.0.0.1:5500/src/compontes/img/pulsera05.jpg" },]) 

    console.log(itemList)

    const aux = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([ItemsList],2000)
    })
})
aux.then((res) => {
    console.log(res)
    return"Procesando respuesta..."
})

    const handleClick = ()=>{
        setItemList(aux)
    }
    

    return (
        <div className="row">
            {itemList.map((Prod) => {
                return (
                    
                    
                    <Item key={Prod.id}
                        titulo={Prod.titulo}
                        detalle={Prod.detalle}
                        img={Prod.img}
                        precio={Prod.precio}
                        click={Prod.click}
                    />

                        

                )
            })}
        </div>
)


}

export default ItemsList
