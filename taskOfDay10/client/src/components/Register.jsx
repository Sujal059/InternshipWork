import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { authContext } from './context/AuthContext/AuthContext';

const Register = () => {

  
  const { registerUserAction, error } = useContext(authContext);

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
    registerUserAction(formData);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Registration</h1>
      <form onSubmit={handleSubmit}>
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
