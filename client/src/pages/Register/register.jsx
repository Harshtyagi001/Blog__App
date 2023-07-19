import React, { useState } from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import api from '../../api';
export default function Register() {

  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false) 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setError(false);
   var res=await api.post("/auth/register",{
    username,
    email,
    password,
   });
   res.data && window.location.replace("/login");
  }catch(err){
    setError(true);
    console.log(err);
  }
   console.log(res)
  }
;
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" onSubmit={handleSubmit}>
    <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your Username..." onChange={(e)=>setUserName(e.target.value)} />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your Email..." onChange={(e)=>setEmail(e.target.value)} />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." 
         onChange={(e)=>setPassword(e.target.value)}
      />
      <button className="registerButton" type='submit'>Register</button>
    </form>
      <button className="registerLoginButton">
      <Link className='link' to='/login'>Login</Link>
      </button>
     {error &&<span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
  </div>
  )
}
