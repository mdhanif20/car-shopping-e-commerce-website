import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import "./Login.css";
import useFirebase from './../Firebase/useFirebase';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {singIn} = useFirebase();
    const {singInUsingGoogle} = useFirebase();
    /* const location = useLocation();
    const history = useHistory(); */
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const singInYourAccount = () =>{
        singIn(loginData.email,loginData.password);
    }
    return (
        <div  id="loginForm" className="m-auto text-start my-5">
                <div>
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
                    <Button variant="primary" onClick={singInYourAccount}>
                        Login
                    </Button> <br />
                    <p>---------or----------</p>
                    <Button onClick={singInUsingGoogle}>Google Sing In</Button>
                    <NavLink to="register">
                        <Button variant="link">New User?Please Register</Button>
                    </NavLink>
                </div>
        </div>
    );
};

export default Login;