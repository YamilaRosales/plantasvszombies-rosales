import './NavBar.css';
import logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}Plantas vs Zombies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href={'/category/1'}>Categoria 1</Nav.Link>
                    <Nav.Link href={'/category/2'}>Categoria 2</Nav.Link>
                    
                    <NavDropdown title="Cursos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Semillas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Interiores</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Exterioes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Jardin</NavDropdown.Item>                        
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="/">
                    <CartWidget/>
                </Nav.Link>
            </Container>            
      </Navbar>
    );
}

export default NavBar;