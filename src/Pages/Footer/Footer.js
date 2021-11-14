import React from 'react';
import { Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="row px-5 bg-black text-white mt-5">
            <div className="col-md-4 text-start mt-3">
                <h2 className="py-2">About Us</h2>
                <p>Shop new & used cars, research & compare models, find local dealers/sellers,calculate payments, value your car, sell/trade in your car & more at Cars.com.</p>
            </div>
            <div className="col-md-4 text-start mt-3">
                <h2 className="py-2" >Our Products</h2>
                <ul>
                    <li>IS iStock</li>
                    <li>Jaguar</li>
                    <li>Luxury</li>
                    <li>Estimacao</li>
                    <li>HRV</li>
                    <li>WIRED</li>
                </ul>
            </div>
            <div className="col-md-4 text-start mt-3">
                <h2 className="py-2" >Contact With Us</h2>
                        <form>
                        <div className="mb-3">
                            <input type="email" placeholder="Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <textarea type="text" placeholder="Your Comments"  className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit"  className="btn btn-primary">Send</button>
                        </form>
            </div>
           
        </div>
    );
};

export default Footer;