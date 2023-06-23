import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import  './Header.css'

import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
   
    return (
       




        <Navbar expand="lg" class='div' style={{backgroundColor:'blue'}}>
            <Container fluid class='div' style={{color:'green'}}>
                <Navbar.Brand href="#" style={{color:'crimson',backgroundColor:'white',borderRadius:'10px',fontFamily:'cursive',fontStyle:'revert-layer'}}>CINEMAWALA</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{color:'white'}}>Movies</Nav.Link>
                        <Nav.Link href="#action2" style={{color:'white'}}>TV shows</Nav.Link>
                       
                        <Nav.Link href="#" style={{color:'white'}} >
                            More
                        </Nav.Link>
                        <Nav.Link href="#" style={{color:'white'}} >
                            Login
                        </Nav.Link>
                        <Nav.Link href="#" style={{color:'white'}} >
                            Sign Up
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}




export default Header;