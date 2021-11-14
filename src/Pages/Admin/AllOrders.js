
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AllOrders = () => {
    const [orders,setOrders] = useState([]);
    /* const [shipping,setShipping] = useState(false);
    const shippingSuccesss = () =>{
        alert("Shipping successful")
        setShipping(true);
    } */
    // https://guarded-ocean-51430.herokuapp.com/orders 
    axios.get("https://guarded-ocean-51430.herokuapp.com/orders")
    .then(res =>setOrders(res.data))
    // console.log(orders);
    return (
        <div>
            <h2 className="my-5">All Orders</h2>
            {
                orders.map(order=><div key={order._id} className="card mb-3 mx-5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={order.productImg} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <h5 className="card-title">Product Name: {order.productName}</h5>
                      <h6 className="card-text">Product Details: {order.productDescription}</h6>
                      <h6 className="card-text">Customer Name: {order.customerName}</h6>
                      <h6 className="card-text">Customer Email: {order.customerEmail}</h6>
                      <h6 className="card-text">Order Id: {order._id}</h6>
                      <h6 className="card-text">Product Price: {order.price}</h6>
            
                          <Button type="button" className="btn btn-primary">Shipping</Button>
                      
                    </div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default AllOrders;