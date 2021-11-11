import axios from 'axios';
import React, { useState } from 'react';
// import AllProduct from './../AllProduct/AllProduct';



const AllProducts = () => {
    const [products,setProducts] = useState([]);
    axios.get("https://guarded-ocean-51430.herokuapp.com/products")
    .then(res=>{
        setProducts(res.data);
    })
    return (
        <div>
            <h2 className="my-5">Our All Products</h2>
            {
                products.map(product =><div key={product._id} className="ms-md-5 me-md-5 ms-2 me-2">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={product.img} className="img-fluid rounded-start w-100 h-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-title">{product.description}</h6>
                        <p className="card-text">{product.details.slice(0,400)}</p>
                        <h6 className="card-text">Price:{product.price}</h6>
                        <p className="card-text"><small className="text-muted">AvailAbleColor:{product.availableColor}</small></p>
                        <button type="button" className="btn btn-primary">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div> )
            } 
        </div>
    );
};

export default AllProducts;