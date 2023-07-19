import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'

import { Context } from '../../context/context';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const userRef=useRef();
  const passRef=useRef();
  const {user,dispatch,loading,error}=useContext(Context);
  const navigate=useNavigate();
  console.log("user: ",user);
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try{
      console.log("clicked Try");
      console.log(userRef.current.value);
      console.log(passRef.current.value);
     const res=await api.post("http://localhost:5000/api/auth/login",{
      username:userRef.current.value,
      password:passRef.current.value,
     });
     console.log("res: ",res.data);
     dispatch({type:"LOGIN_SUCCESS",payload:res.data})
     navigate("/");
    }catch(err){
    dispatch({type:"LOGIN_FAILURE"});
    }
  };
  console.log(user);
  console.log(loading);

  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit} type="submit">
      <label>Username</label>
      <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." ref={passRef} />
      <button className="loginButton" type="submit" disabled={loading}>Login</button>
    </form>
      <button className="loginRegisterButton">
    <Link className='link' to='/register'>Register</Link>
      </button>
  </div>
  )
}
