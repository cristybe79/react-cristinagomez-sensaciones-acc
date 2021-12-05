import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoo from './img/logoo.jpg'

function CardUno() {
    return <>
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logoo} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    </>
    
}

export default CardUno;