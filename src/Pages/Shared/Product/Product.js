import React from 'react';
import "./Product.css";

const Product = (props) => {
    // console.log({product});
    const {name,img,description,details,price,weight,availableColor} = props.product;
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
                    <button type="button" className="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;