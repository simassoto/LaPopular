import React from 'react'
import Mobile from "../assets/mobilePicture.jpg"
import Desktop from "../assets/desktopImage.png"
import "../styles/Home.css"

function Home() {

  const imageUrl = window.innerWidth >= 650 ? Desktop : Mobile;

  return (
    <div className='home' style={ {backgroundImage:`url(${imageUrl}`}}></div>

  );
}

export default Home
