import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from "../../../images/banner/car6.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>ILMUN CAR SHOP</h3>
                        <p>Find Car Dealerships In Maryland. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;