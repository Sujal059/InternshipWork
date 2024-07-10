import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { authContext } from './context/AuthContext/AuthContext';


const Profile = () => {

  const { fetchProfileAction, profile } = useContext(authContext);

    useEffect(()=>{
        fetchProfileAction();
    },[])

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>
      <div className="profile-info">
        <p>Name: {profile?.fullname}</p>
        <p>Email: {profile?.email}</p>
        <p>Mobile Number: {profile?.mobile}</p>
      </div>
    </div>
  );
};

export default Profile;
