import React, { useEffect, useState } from 'react';
import './Profile.css';
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import{getFirestore, getDoc, doc} from "firebase/firestore"


const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

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
  
    const auth=getAuth();
    const db=getFirestore();

    useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        const loggedInUserId=localStorage.getItem('loggedInUserId');
        if(loggedInUserId){
            console.log(user);
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef)
            .then((docSnap)=>{
                if(docSnap.exists()){
                    const userData=docSnap.data();
                    setName(userData.fullname);
                    setEmail(userData.email);
                    setMobile(userData.mobile);
    
                }
                else{
                    console.log("no document found matching id")
                }
            })
            .catch((error)=>{
                console.log("Error getting document");
            })
        }
        else{
            console.log("User not Logged In")
        }
      })
    
    },[])

    const logoutButton = ()=>{
      localStorage.removeItem('loggedInUserId');
      signOut(auth)
        .then(()=>{
            setName("");
            setEmail("");
            setMobile("");
            window.location.href='/';
        })
        .catch((error)=>{
            console.error('Error Signing out:', error);
        })
    }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>
      <div className="profile-info">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Mobile Number: {mobile}</p>
      </div>
      <button className='logout-btn' onClick={logoutButton}>Logout</button>
    </div>
  );
};

export default Profile;
