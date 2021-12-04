import React from 'react';
import { Link } from 'react-router-dom';
import "./Deshboard.css";

const Deshboard = () => {
    return (
        <div id="deshBoardAll">
         
            <h2 id="deshboard"><Link to="orders/:id">Orders</Link></h2>
            <h2 id="deshboard"><Link to="myorders">My Orders</Link></h2>
            <h2 id="deshboard"><Link to="payment">Payment</Link></h2>
          
        </div>
    );
};

export default Deshboard;