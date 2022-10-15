import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import "../styles/Footer.css";



function Footer() {
  return (


    <div className='footer'>

      <div className='icons'>

        <div className='leftSide'>
          <PlaceIcon/>
          <a target="_blank" href='https://www.google.com/maps/dir//La+Popular.+Taberna/@38.9654121,-9.4883222,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1f2714104214af:0x205e92ff98675340!2m2!1d-9.4182822!2d38.965433' rel="noreferrer">
          GET DIRECTIONS </a>
        </div>
        <div className='center'>
          <AccessTimeIcon/>
          <p>Mon - Fri:	<strong>17h - 23h</strong> <br />
            Tue: <strong>Closed</strong> <br />
            Sat & Sun :	<strong>11h - 23h</strong></p>
        </div>
        <div className='rightSide'>
          <CallIcon/>
          <a target="_blank" href='tel:+351963205308'> CALL US</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
