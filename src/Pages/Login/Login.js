import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.prventDefault();
    }
    return (
        <div  id="loginForm" className="m-auto text-start my-5">
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                        name="email"
                        onBlur={handleOnChange}
                        placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        name="password"
                        onBlur={handleOnChange}
                        placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button> <br />
                    <NavLink to="register">
                        <Button variant="link">New User?Please Register</Button>
                    </NavLink>
                </Form>
        </div>
    );
};

export default Login;