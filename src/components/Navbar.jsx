import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function  PizzaNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Pizzeria mamma mia!! </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/carrito">carrito</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PizzaNavbar;