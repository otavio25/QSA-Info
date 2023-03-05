import React from 'react';
import './styles.css'
import { Container, ListGroup } from 'react-bootstrap';

function Sobre(){
    return(
        <Container>
            <div className='div-h1-sobre div-sobre'> 
                <h1> Histórias de usuário </h1>
            </div>
            <ListGroup id='lista-sobre'>
                <ListGroup.Item>
                    <p>
                    Eu, como administrator de sistema, gostaria de abrir uma tela e visualizar a listagem do
    quadro societário em ordem de CPF em menos de 1s para uma listagem com 300
    registros.
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>
                    Eu, como administrador do sistema, gostaria de pesquisar o nome de um sócio e
    visualizar as empresas a que ele está vinculado.
                    </p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Sobre;