import React from "react";
import "animate.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import freeUp from '../components/img/freeUp.jpg'
import graphics from '../components/img/graphics.jpg'
import webdevelopment from '../components/img/webdevelopment.jpg'
import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => (
    <div className="container">
        <Carousel className="animate__animated animate__zoomIn" >
            <div className="shadow my-4">
                <img src={freeUp} className="card"/>
                <p className="legend">Free up</p>
            </div>
            <div className="shadow my-4">
                <img src={graphics} className="card"/>
                <p className="legend">Graphics Design</p>
            </div>
            <div className="shadow my-4">
                <img src={webdevelopment} className="card"/>
                <p className="legend">Web Development</p>
            </div>
        </Carousel>
    </div>
)

export default Portfolio