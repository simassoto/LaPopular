import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
      <PlaceIcon/>
      <AccessTimeIcon/>
      <CallIcon/>

      </div>
    </div>

  );
}

export default Footer;
