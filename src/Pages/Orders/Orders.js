import axios from 'axios';
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import useFirebase from './../Firebase/useFirebase';


const Orders = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({}); 
    const {users} = useFirebase();
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const customerName = users.displayName;
    const email=  users.email;
    const productName = product.name;
    const productDescription = product.description; 
    const price = product.price;
    const productImg = product.img;
    const productWeight= product.weight;

    const newOrder = {customerName,email, productName,productDescription,price,productImg,productWeight,phone,address};

    const placeOrders = () =>{
        axios.post("https://guarded-ocean-51430.herokuapp.com/order",newOrder)
        .then(res=>{
            console.log(res)
        })
        // console.log(newOrder);
    }

    const phoneNumberTaken = e =>{
        
        setPhone(e.target.value);
        
    }
    const addressTaking = e =>{
        setAddress(e.target.value);
    }
    // good1234
    //good3@gmail.com
    axios.get(`https://guarded-ocean-51430.herokuapp.com/products/${id}`)
        .then(res=>setProduct(res.data));
    return (
        <div>
            <h2 className="my-5">Place Orders</h2>
            <div className="card w-50 m-auto text-start">
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Product Price: {product.price}</li>
                    <li className="list-group-item">Product Weight: {product.weight}</li>
                    <li className="list-group-item">
                        Your Name: {users.displayName}
                    </li>
                    <li className="list-group-item">
                        Your Email: {users.email}
                    </li>
                    <li className="list-group-item">
                        <label htmlFor="phone">Your Phone Number: </label>
                        <input type="number" onBlur={phoneNumberTaken} name="phone" placeholder="Your Phone Number" required/>
                    </li>
                    <li className="list-group-item">
                        <label htmlFor="address">Your Address: </label>
                        <input type="text" onBlur={addressTaking} name="address" placeholder="Your Address" required />
                    </li>
                    <li className="list-group-item">
                        <button type="button" onClick={placeOrders}  className="btn btn-primary">Place Order</button>
                    </li>
                </ul>
                </div>
        </div>
    );
};

export default Orders;