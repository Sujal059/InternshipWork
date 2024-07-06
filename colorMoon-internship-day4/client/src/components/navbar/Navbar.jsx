import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import logo from '/assets/logo.jpg';
import './Navbar.css';

export default function Navbar (){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
     <div className="topBar">
        <p>A company of Distinction. ISO:XXXX:XXXX Certified Company.🏆</p>
        <ul className="contactInNav">
            <li>
                <img src="https://www.thecolourmoon.com/assets/images/india.svg" alt="icon" />
                <a href="tel:91 9676600666">+91 9876543210</a>
            </li>
            <li id="line"></li>
            <li>
                <img src="https://www.thecolourmoon.com/assets/images/dubai.svg" alt="dubai" />
                <a href="tel:971 558994399">+971 987654321</a>
            </li>
        </ul>
    </div>
    <nav>
        <div className="bottomBar">
            <a href="#" className="logo">
                
                <img src={logo} alt="logo" />
            </a >
            
            <ul>
                <li>
                    <i className='far fa-building'></i>
                    <strong>COMPANY</strong>
                </li>
                <li>
                    <i className='fas fa-cog'></i>
                    <strong>SERVICES</strong>
                </li>
                <li>
                    <i className='fas fa-globe'></i>
                    <strong>TECHNOLOGY</strong>
                </li>
                <li>
                    <i className='fas fa-stream'></i>
                    <strong>PRODUCTS</strong>
                </li>
                <li>
                    <i className='fas fa-users'></i>
                    <strong>HIRE</strong>
                </li>
                <li>
                    <i className='fas fa-phone'></i>
                    <strong>CONTACT</strong>
                </li>
                <li>
                    <i className='fas fa-laptop'></i>
                    <strong>portfolio</strong>
                </li>
                <li>
                    <i className='far fa-hand-point-down'></i>
                    <strong>GET A QUOTE</strong>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};

