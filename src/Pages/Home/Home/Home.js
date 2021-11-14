import React from 'react';
import About from '../../About/About';
import Products from '../../Products/Products/Products';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import "./Home.css";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;