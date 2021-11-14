import React from 'react';
import { useState } from 'react';
import useFirebase from './../Firebase/useFirebase';


const Register = () => {
    const {passwordAuthentication,users} = useFirebase();
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [retypePassword,setRetypePassword] = useState('');
    const getEmail = e =>{
        setEmail(e.target.value);
    }
    const getName = e =>{
        setName(e.target.value);
    }
    const getPassword = e=>{
        setPassword(e.target.value);
    }
    const getRetypePassword = e =>{
        setRetypePassword(e.target.value);
    }
  
    const handleLoginSubmit = () =>{
        if(password !== retypePassword){
            alert("Password don't match.")
        }
        else{
            passwordAuthentication(email,password,name);
            if(users.email){
                alert("Register Successfull")
            }
        }
    }
  
    
    return (
        <div  id="loginForm" className="m-auto text-start my-5">
        <div>
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Your Name" onBlur={getName} className="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Email" onBlur={getEmail} className="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input onBlur={getPassword} placeholder="Password" type="password" className="form-control" id="inputPassword3"/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Re-type Password</label>
            <div className="col-sm-10">
            <input onBlur={getRetypePassword} placeholder="Re-type Password" type="password" className="form-control" id="inputPassword3"/>
            </div>
        </div>
        
        <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
           {/*  <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
                </label>
            </div> */}
            </div>
        </div>
        <button onClick={handleLoginSubmit} className="btn btn-primary">Regster</button>
        </div>
        </div>
    );
};

export default Register;