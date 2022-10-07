import React, { useRef } from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="" />
      </div>
        <div className='rightSide' ref={navRef}>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/art">Art</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
          </button>
        </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
    </div>

  )
}

export default Navbar
