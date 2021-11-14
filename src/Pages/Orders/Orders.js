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
            // console.log(res)
            if(res.data){
                alert("Orders Successfully")
            }
        })
    }
    
    axios.get(`https://guarded-ocean-51430.herokuapp.com/products/${id}`)
        .then(res=>{
            setProduct(res.data)
            if(res.transformRequest){
                alert("Order Sucessfull")
            } 
        });

    const phoneNumberTaken = e =>{
        setPhone(e.target.value);
    }
    const addressTaking = e =>{
        setAddress(e.target.value);
    }
    // good1234
    //good3@gmail.com


    // review taken 
    const [comment,setComment] = useState('');
    const [rating,setRating] = useState('');
    const review = {comment,rating,customerName,productImg,productDescription,productName,email}
    const takenComment = e =>{
        setComment(e.target.value);
    }
    const takenRating = e =>{
        setRating(e.target.value);
    }
    const givesReview = () =>{
            axios.post("http://localhost:5000/reviews",review)
            .then(res=>{
                if(res.data){
                    alert("Reviews Added Successful")
                }
            })
        console.log(review);
    }
    
    return (
        <div className="row">
            <div className="col-md-6">
            <h2 className="my-5">Place Orders</h2>
            <div className="card mx-md-5 mx-2 m-auto text-start">
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


            <div className="col-md-6">
                <h2 className="my-5">Gives Review</h2>
                <div className="card mx-md-5 mx-2 m-auto text-start">
                
                <ul className="list-group b-none list-group-flush">
                    <img src={product.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <li className="list-group-item">
                        <textarea className="w-100" type="number" onBlur={takenComment} name="phone" placeholder="Your Comment" required/>
                    </li>
                    <li className="list-group-item">
                        <input type="number" onBlur={takenRating} name="address" placeholder="Gives Rating" required />
                    </li>
                    <li className="list-group-item">
                        <button type="button" onClick={givesReview}  className="btn btn-primary">Gives Your Review</button>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Orders;