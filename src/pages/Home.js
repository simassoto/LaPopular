import React, { useState, useEffect } from 'react';
import Mobile from "../assets/mobilePicture.png"
<<<<<<< HEAD
import Desktop from "../assets/desktop.png"
=======
import Desktop from "../assets/desktopImage.png"
>>>>>>> cf0319b71b82818ce28cad1ffee0d04b3005a993
import "../styles/Home.css"

function Home() {

  const imageUrl = useWindowWidth() >= 750 ? Desktop : Mobile;



  return (
    <div className='home' style={ {backgroundImage:`url(${imageUrl}`}}></div>

  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};


export default Home
