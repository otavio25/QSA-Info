import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'
import Logo from '../img/logo.png'

function Header(){
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/quadrosocios">Quadro Societário</Nav.Link>
                        <Nav.Link href="/grafo">Grafo Sócio/Empresas</Nav.Link>
                        <Nav.Link href="/buscasocio">Busca Sócio</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;