import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import {ShoppingCartContext} from "../context/ShoppingCartProvider";

const Cart = () => {

  const {shoppingCartItem, decreaseItemAmount, increaseItemAmount, removeItem,totalPriceCart} = useContext(ShoppingCartContext);

const upperCase = (item) => {
  const upperCaseName =  (item.name).charAt(0).toUpperCase()+ item.name.slice(1);
  return upperCaseName;
  }
  return (


    <Card>
      <Card.Header as="h5">Detalle del pedido:</Card.Header>
      <Card.Body >
        <ListGroup className="list-group-flush">
          {shoppingCartItem.map((item, index) => (
            <ListGroup.Item key={index}>  <img variant="top" src={item.img} alt={item.desc} className="imageCart"/> {upperCase(item)}
              ${(item.price * item.quantity).toLocaleString("es-CL")}<Button onClick={() => decreaseItemAmount(item)}>-</Button>{item.quantity}<Button
                onClick={() => increaseItemAmount(item)}>+</Button>
              <Button
                onClick={() => removeItem(item)}>X</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text>
          <strong> Total: $ {totalPriceCart()}</strong>
        </Card.Text>
        <Button variant="primary">Ir a Pagar</Button>
      </Card.Body>
    </Card>

  )
};

export default Cart;