import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {


  return (

    <>
      <Card>
        <Card.Header as="h5">Detalle del pedido:</Card.Header>
        <Card.Body>
          <Card.Text>
            Lista de productos
          </Card.Text>
          <Card.Text>
            <strong> Total</strong>
          </Card.Text>
          <Button variant="primary">Ir a Pagar</Button>
        </Card.Body>
      </Card>

    </>

  )
};

export default Cart;