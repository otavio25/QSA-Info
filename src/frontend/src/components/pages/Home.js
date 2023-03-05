import React from 'react';
import './styles.css'
import { Carousel } from 'react-bootstrap';
import ImageHome1 from '../img/home1.png'
import ImageHome2 from '../img/home2.png'
import ImageHome3 from '../img/home3.png'

function Home(){
    return(
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" alt="First slide" src={ImageHome1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Second slide" src={ImageHome2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Third slide" src={ImageHome3}/>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;