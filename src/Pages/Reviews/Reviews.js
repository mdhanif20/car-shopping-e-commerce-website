import axios from 'axios';
import React, { useState } from 'react';
import "./Reviews.css";
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    const [allReview,setAllReview] = useState([]);
    axios.get("http://localhost:5000/reviews")
    .then(res =>{
        setAllReview(res.data)
    })
    // console.log(reviews);
    return (
        <div>
            <h2 className="my-3 pt-5">All Reviews</h2>
           <div className="row mx-md-5 mx-2">
           {
                allReview.map(review=><div key={review._id} className="card-group col-md-4">
                <div className="card">
                  <img src={review.productImg} className="card-img-top" alt="..." id="reviewImg"/>
                  <div className="card-body text-start">
                    <h5 className="card-title">{review.productName}</h5>
                    <small> {review.productDescription}</small>
                    <p className="card-text">
                      <span className="pe-2">Customer Name: {review.customerName}</span>
                      <span className="ps-4"><AiFillStar/> {review.rating}</span>
                    </p>
                  </div>
                </div>
              </div>)
            } 
           </div>
        </div>
    );
};

export default Reviews;