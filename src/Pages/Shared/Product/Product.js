import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Product.css";
import useFirebase from './../../Firebase/useFirebase';



const Product = (props) => {
    // console.log({product});
    const {name,img,description,details,price,weight,availableColor,_id} = props.product;
    const {users}= useFirebase();
    /* const productId = () =>{
        const getId = _id;
        <Orders id={getId}></Orders>
    } */
    return (
        <div className="ms-md-5 me-md-5 ms-2 me-2">
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start w-100 h-100" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body text-start">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{description}</h6>
                    <p className="card-text">{details}</p>
                    <h6 className="card-text">Price:{price}</h6>
                    <p className="card-text"><small className="text-muted">AvailAbleColor:{availableColor}</small></p>
                    {
                        users.email?<Link to={`orders/${_id}`}>
                        <button type="button" className="btn btn-primary">Buy Now</button>
                        </Link>:
                        <NavLink to="login">
                        <button type="button" className="btn btn-primary">Buy Now</button>
                    </NavLink>
                    }
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;