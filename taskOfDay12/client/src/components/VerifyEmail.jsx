import React from 'react';
import "./VerifyEmail.css";

const VerifyEmail = () => {
    const loginPage =()=>{
        window.location.href = "/login"
    }
  return (
    <div  className='container'>
        <h1>Email Already Sent!</h1>
        <h2>Please verify Email before Login</h2>
        <p>Email Verified?</p>
        <button className='login-btn' onClick={loginPage}>Login page</button>
    </div>
  )
}

export default VerifyEmail