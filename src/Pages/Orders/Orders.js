import React from 'react';
import { useParams } from 'react-router-dom';

const Orders = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>My orders</h2>
        </div>
    );
};

export default Orders;