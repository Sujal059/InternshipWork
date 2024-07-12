import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import{getFirestore, setDoc, doc} from "firebase/firestore"

const Register = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDKPxtGIjypLmpk1zriGnf89srMwNR1zA8",
    authDomain: "userdatainternshiptask.firebaseapp.com",
    projectId: "userdatainternshiptask",
    storageBucket: "userdatainternshiptask.appspot.com",
    messagingSenderId: "914448982515",
    appId: "1:914448982515:web:bca2a6e2d64b356d187286",
    measurementId: "G-JJVGRVTG7M"
  };
  initializeApp(firebaseConfig);
  
  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

 const auth=getAuth();
 const db=getFirestore();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const { fullname, email, password, mobile } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
 
    createUserWithEmailAndPassword(auth, email, password)
     .then(async (userCredential)=>{
         const user=userCredential.user;
         await sendEmailVerification(user);
         const userData={
             fullname,
             email,
             mobile
         };
         showMessage('Account Created Successfully', 'signUpMessage');
         const docRef=doc(db, "users", user.uid);
         setDoc(docRef,userData)
         .then(()=>{
             window.location.href='/verificationConfirm';
         })
         .catch((error)=>{
             console.error("error writing document", error);
 
         });
     })
     .catch((error)=>{
         const errorCode=error.code;
         if(errorCode=='auth/email-already-in-use'){
             showMessage('Email Address Already Exists !!!', 'signUpMessage');
         }
         else{
             showMessage('unable to create User', 'signUpMessage');
         }
     })
   
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div id='signUpMessage'></div>
        <div className="input-group">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            name="fullname"
            id="fullName"
            value={fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={handleChange}
            required
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
          />
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
        <Link to="/login" className="login-here">
          Login Here
        </Link>
      </form>
    </div>
  );
};

export default Register;
