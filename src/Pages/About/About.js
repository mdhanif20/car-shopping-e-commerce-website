import React from 'react';
import img from "../../images/banner/location.jpg";
import { AiFillFacebook , AiFillInstagram} from 'react-icons/ai';
import { FaTwitterSquare} from 'react-icons/fa';
import { FaFacebookMessenger} from 'react-icons/fa';
import "./About.css";
const About = () => {
    return (
        <div className="py-2">
            <h2 className="mt-5 pb-3">About Us</h2>
            <div className="card mb-3 w-75 m-auto" >
            <div className="row g-0">
                <div className="col-md-6">
                <img src={img} className="img-fluid rounded-start h-100 w-100" alt="..."/>
                </div>
                <div className="col-md-6">
                <div className="card-body text-start">
                <h2 className="py-2" >Contact With Us</h2>
                        <form>
                            <div className="mb-3">
                                <input type="email" placeholder="Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Your Comments"  className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit"  className="btn btn-primary">Send</button>
                         </form>
                         <p id="aboutIcon">
                            <span><AiFillFacebook/></span>
                            <span><FaTwitterSquare/></span>
                            <span><AiFillInstagram/></span>
                            <span><FaFacebookMessenger/></span>
                         </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;