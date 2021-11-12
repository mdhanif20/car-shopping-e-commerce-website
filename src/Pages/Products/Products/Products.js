import axios from 'axios';
import React, { useState } from 'react';
import Product from '../../Shared/Product/Product';
import "./Products.css";
// ekram23@gmail.com
// ekram1234 
const Products = () => {
    const [products,setProducts] = useState([]);
    axios.get("https://guarded-ocean-51430.herokuapp.com/products")
    .then(res=>{
        setProducts(res.data);
    })
    return (
        <div>
            <h2 className="my-5">Our Products</h2>
            {
                products.slice(0,6).map(product =><Product key={product._id} product={product}></Product> )
            }
        </div>
    );
};

export default Products;