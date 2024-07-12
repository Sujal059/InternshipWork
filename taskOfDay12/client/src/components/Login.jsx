import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import{getFirestore, setDoc, doc} from "firebase/firestore"

const Login = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDKPxtGIjypLmpk1zriGnf89srMwNR1zA8",
    authDomain: "userdatainternshiptask.firebaseapp.com",
    projectId: "userdatainternshiptask",
    storageBucket: "userdatainternshiptask.appspot.com",
    messagingSenderId: "914448982515",
    appId: "1:914448982515:web:bca2a6e2d64b356d187286",
    measurementId: "G-JJVGRVTG7M"
  };
  const app = initializeApp(firebaseConfig);
  
  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

 const auth=getAuth(app);
 const db=getFirestore();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        if(user.emailVerified){
        showMessage('login is successful', 'signInMessage');
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='/profile';
        }else if(!user.emailVerified){
        showMessage('Please Verify Email First', 'signInMessage');
        window.location.href='/verificationConfirm';
        }else{
          showMessage('Internal Server Error! Try Again Later!', 'signInMessage');
        }
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    });


    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div id='signInMessage'></div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to="/" className="register-here">
          Register Here
        </Link>
      </form>
    </div>
  );
};

export default Login;
