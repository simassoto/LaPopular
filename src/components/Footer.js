import React,  {useState} from 'react'
import Modal from 'react-modal';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import "../styles/Footer.css";

Modal.setAppElement("#root");

function Footer() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className='footer'>

      <div className='icons'>

        <div className='leftSide'>

          <a target="_blank" href='https://www.google.com/maps/dir//La+Popular.+Taberna/@38.9654121,-9.4883222,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1f2714104214af:0x205e92ff98675340!2m2!1d-9.4182822!2d38.965433' rel="noreferrer">
            <button className='button'><PlaceIcon/>Directions </button></a>
        </div>

        <div className='center'>


          <button className='button' onClick={openModal}><AccessTimeIcon/>Hours</button>
          <Modal
          isOpen ={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Exemple Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
          >

          <div className='container'>

           <p>Monday:	<strong>17h - 23h</strong> <br />
            Tuesday: <strong>Closed</strong> <br />
            Wednesday:	<strong>17h - 23h</strong> <br />
            Thurdsday:	<strong>17h - 23h</strong> <br />
            Saturday  :	<strong>11h - 23h</strong><br/>
            Sunday  :	<strong>11h - 23h</strong></p>

          </div>

            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
        <div className='rightSide'>

          <a target="_blank" href='tel:+351963205308'><button className='button'><CallIcon/>Call</button> </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
