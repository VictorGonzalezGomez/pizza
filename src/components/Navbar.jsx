import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import logoPizza from "../assets/img/pizza.png";
import logoCart from "../assets/img/shopping-cart.png";
import {useContext} from "react";
import {ShoppingCartContext} from "../context/ShoppingCartProvider";

function PizzaNavbar() {
  const {totalPriceCart} = useContext(ShoppingCartContext);
  const logoPizzaSlide = logoPizza;
  const cartLogo = logoCart;

  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <NavLink to="/"
                 className={({isActive}) =>
                   isActive ? "active" : "disable"
                 } end>
          <img src={logoPizzaSlide} className="logo"/>Pizzeria mamma mia!!
        </NavLink>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/carrito"
                   className={({isActive}) =>
                     isActive ? "active" : "disable"
                   }>
            <img src={cartLogo} className="logo"/> {totalPriceCart()}
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PizzaNavbar;