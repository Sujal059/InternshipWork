import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { authContext } from './context/AuthContext/AuthContext';

const Login = () => {
  const { loginUserAction, userAuth } = useContext(authContext);


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
    loginUserAction(formData);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            {userAuth?.error && (
              <span className="text-red-500">{userAuth?.error}</span>
            )}
          </p>
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
