import React from 'react';
import {Card} from 'react-bootstrap'
import './styles.css'
import ImageHome1 from '../img/home1.png'
//import ImageHome2 from '../img/home2.png'
//import ImageHome3 from '../img/home3.png'

function Home(){
    return(
        <Card>
            <Card.Body>
                <Card.Text>
                Uma aplicação desenvolvida para visualização das informações do QSA (Quadro de Sócios e Administradores).
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={ImageHome1} />
        </Card>
    )
}

export default Home;