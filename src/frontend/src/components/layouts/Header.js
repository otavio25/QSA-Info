import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

function Header(){
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">QSA Info</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/quadrosocios">Quadro Societário</Nav.Link>
                        <Nav.Link href="/grafo">Grafo</Nav.Link>
                        <Nav.Link href="/buscasocio">Busca Sócio</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;