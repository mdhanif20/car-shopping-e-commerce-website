import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    const[name,setName] = useState('');
    const[img,setImg] = useState('');
    const[description,setDescription] = useState('');
    const[details,setDetails] = useState('');
    const[price,setPrice] = useState('');
    const[weight,setWeight] = useState('');
    const[availableColor,setAvailableColor] = useState('');
   
    const getName = e =>{
        setName(e.target.value)
    }
    const getImg = e =>{
        setImg(e.target.value)
    }
    const getDescription = e =>{
        setDescription(e.target.value)
    }
    const getDetails = e =>{
        setDetails(e.target.value)
    }
    const getPrice = e =>{
        setPrice(e.target.value)
    }
    const getWeight = e =>{
        setWeight(e.target.value)
    }
    const getColor = e =>{
        setAvailableColor(e.target.value)
    }

    const addedProduct = () =>{
        const addedProduct = {name,img,description,details,price,weight,availableColor};
        console.log(addedProduct);
        axios.post("https://guarded-ocean-51430.herokuapp.com/product",addedProduct)
        .then(res=>{
            // console.log(res)
            if(res.data){
                alert("Product Added Successfully")
            }
        })
    }

    return (
        <div>
            <h2 className="mt-5 py-3">Admin added product</h2>
           <div className="w-75 m-auto text-start">
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onBlur={getName} type="text" placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Image Url</Form.Label>
                    <Form.Control onBlur={getImg} type="text" placeholder="Product img url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onBlur={getDescription} type="text" placeholder="Product Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Details</Form.Label>
                    <Form.Control onBlur={getDetails} type="text" placeholder="Product Details" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control onBlur={getPrice} type="number" placeholder="Prduct Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Weight</Form.Label>
                    <Form.Control onBlur={getWeight} type="number" placeholder="Prduct Weight" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Available Color</Form.Label>
                    <Form.Control onBlur={getColor} type="text" placeholder="Prduct Color" />
                </Form.Group>

                <Button onClick={addedProduct} variant="primary" type="submit">
                    Add Product
                </Button>
                </div>
           </div>
        </div>
    );
};

export default AddProduct;