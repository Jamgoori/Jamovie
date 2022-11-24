import {Navbar, Container, Form, Button, Nav,NavDropdown,FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"
function TopNav() {
  return (
    <Navbar bg="dark" variant = "dark" expand="lg">
      <Container fluid>
        <Link to="/" className="nav-head">JAMOVIE</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/movies" className="nav-item">Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;