import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from './../Firebase/useFirebase';

const MyOrders = () => {
    const {users} = useFirebase();
    const [orders,setOrders] = useState([]);
    axios.get(`https://guarded-ocean-51430.herokuapp.com/order?email=${users.email}`)
    
    .then(res =>{
        setOrders(res.data);
    })
    // console.log(orders)
    const deleteOrders = (id) =>{
        axios.delete(`https://guarded-ocean-51430.herokuapp.com/order/${id}`)
        .then(res =>{
            console.log(res)
        })
    }
    return (
        <div>
            <h2 className="my-5">Your Orders</h2>
            {
                orders.map(order =><div key={order._id} className="card mb-3 mx-5">
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
                      <Button type="button" onClick={deleteOrders(order._id)} className="btn btn-primary">Delete Orders</Button>
                    </div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyOrders;