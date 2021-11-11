import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
import "./Home.css";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;