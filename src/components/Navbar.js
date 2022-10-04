import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from "@material-ui/icons/Reorder"
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks,setOpenLinks] = useState(false)

  return (
    <div className='navbar'>
    <div className='leftSide'></div>
      <div className='rightSide'>
      <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/art">Art</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

        <button>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
