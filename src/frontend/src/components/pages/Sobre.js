import React from 'react';
import './styles.css'
import { Container, ListGroup, Button } from 'react-bootstrap';

function Sobre(){
    return(
        <Container>
            <div className='div-h1-sobre div-sobre'> 
                <h1> Nossa História </h1>
            </div>
            <ListGroup id='lista-sobre'>
                <ListGroup.Item>
                    <p>
                    Uma aplicação para visualização das informações do QSA 
                    (Quadro de Sócios e Administradores) disponíveis nesse link:
                    <Button variant="link" href='https://bit.ly/3cRruVw'>aqui</Button>
                    , de modo que o sistema apresente as informações 
                    o mais rápido possível.
                    </p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Sobre;