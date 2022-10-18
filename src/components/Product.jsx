import React, {useContext} from "react";
import {ProductContext} from "../context/ProductProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, ButtonGroup, ButtonToolbar, Col, Row} from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import {ShoppingCartContext} from "../context/ShoppingCartProvider";

const Product = () => {

  const navigate = useNavigate()
  const pizzas = useContext(ProductContext);
  const { increaseItemAmount } = useContext(ShoppingCartContext);

  return (

    <div>
      <Row xs={1} md={3} className="g-4">
        {pizzas.map((pizza, index) => (
          <Col key={index}>

            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.desc}/>
              <Card.Body>
                <Card.Title> Pizza {pizza.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {pizza.ingredients.map((ingredient, index) => (
                  <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Body>
                <Card.Text>
                  <strong>$ {pizza.price.toLocaleString("es-CL")}</strong>
                </Card.Text>
              </Card.Body>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver mas</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button onClick={()=> increaseItemAmount(pizza)} >Añadir al carrito</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

  )
};

export default Product;