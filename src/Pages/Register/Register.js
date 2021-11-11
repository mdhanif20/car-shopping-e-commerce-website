import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import useAuth from './../Shared/useAuth';
import useFirebase from './../Shared/useFirebase/useFirebase';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    
    const {singInUsingGoogle} = useFirebase();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
         if(loginData.password !== loginData.password2){
            alert("Your Password did not match.")
            return
        } 
        // registerUser(loginData.email,loginData.password);
        console.log(loginData);
        e.prventDefault();
    }
    
    return (
        <div  id="loginForm" className="m-auto text-start my-5">

        <Form  onSubmit={handleLoginSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                name="email"
                onBlur={handleOnChange}
                placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                name="password"
                onBlur={handleOnChange}
                placeholder="Password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Re-type your password</Form.Label>
                <Form.Control type="password" 
                name="password2"
                onBlur={handleOnChange}
                placeholder="Re-type password" />
            </Form.Group>


            <Button variant="primary" type="submit" >
                Register
            </Button> <br />
            <p>---------or----------</p>
            <Button onClick={singInUsingGoogle}>Google Sing In</Button>
            <NavLink to="login">
                <Button variant="link">Already Registered?Please Login</Button>
            </NavLink>
        </Form>
</div>
    );
};

export default Register;