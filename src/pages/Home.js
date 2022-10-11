import React from 'react'
import Mobile from "../assets/mobilePicture.png"
import Desktop from "../assets/desktopImage.jpg"
import "../styles/Home.css"

function Home() {

  const imageUrl = window.innerWidth >= 720 ? Desktop : Mobile;

  return (
    <div className='home' style={ {backgroundImage:`url(${imageUrl}`}}></div>

  );
}

export default Home
