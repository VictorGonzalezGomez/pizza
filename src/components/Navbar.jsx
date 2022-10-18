import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
function  PizzaNavbar() {
  return (
    <Navbar>
      <Container>
        <NavLink to="/">Pizzeria mamma mia!! </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/carrito">carrito</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PizzaNavbar;