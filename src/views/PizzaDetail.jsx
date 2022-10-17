import React, {useContext} from "react";
import {Button, Card} from "react-bootstrap";
import {ProductContext} from "../context/ProductProvider";
import {useParams} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const PizzaDetail = () => {
  const {id} = useParams();
  const pizzas = useContext(ProductContext);
  const filteredPizza = pizzas.filter((pizzas) => pizzas.id === `${id}`);
  console.log(filteredPizza)
  return (

    <div className="flexContainer">

        <Card.Img variant="top" src={filteredPizza[0].img}/>

      <Card>
        <Card.Header as="h5"> Pizza {filteredPizza[0].name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {filteredPizza[0].desc}
          </Card.Text>
          <Card.Title>Ingredientes</Card.Title>
          <ListGroup className="list-group-flush">
            {filteredPizza[0].ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
          <div className="flexContainer">
            <Card.Text>
              <strong>$ {filteredPizza[0].price.toLocaleString("es-CL")}</strong>
            </Card.Text>
            <Button variant="primary">añadir al carrito</Button>
          </div>

        </Card.Body>
      </Card>
    </div>

  )
};

export default PizzaDetail;