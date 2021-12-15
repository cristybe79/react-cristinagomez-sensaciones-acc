import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'


const Item = (props) => {



    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.img} alt={props.id}/>
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>{props.detalle}</Card.Text>
                    <Card.Text>$ {props.precio}</Card.Text>
                    <ItemCount />
                </Card.Body>
            </Card>
        </div>

    );
    
};

export default Item;