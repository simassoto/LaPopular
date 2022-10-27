import React from 'react'
import MenuImage from "../assets/menuImage2.png"
import "../styles/Menu.css";
import BackImage from "../assets/menuback1.png"

function Menu() {
  return (
    <div className='menuImage' style={{ backgroundImage: `url(${BackImage}` }}>

      <img src={MenuImage} alt="" />

    </div>
  );
}

export default Menu
