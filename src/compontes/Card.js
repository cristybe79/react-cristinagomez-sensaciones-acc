import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'
import logoo from './img/logoo.jpg'

function CardUno() {
    return <>
        <div>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={logoo} />
            <Card.Body>
                    <Card.Title>Pulsera
                        
            </Card.Title>
            <Card.Text>
            
                    </Card.Text>
            <ItemCount/>

            </Card.Body>
            </Card>
        </div>
    </>
    
}

export default CardUno;