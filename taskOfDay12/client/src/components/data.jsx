import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import{getFirestore, getDoc, doc} from "firebase/firestore"

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

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

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

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })