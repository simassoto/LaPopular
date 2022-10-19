import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"
import Bimba from "../assets/bimba.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
	<header>
    <div className="imageHeader">
      <div className="logo" >
        <img className="desktop" alt="" src={Logo}></img>
      </div>
      <nav ref={navRef}>
        <img className="toggle" alt="" src={Logo}></img>
        <a href="/#" id="home">Home </a>
        <a href="/menu">Menu</a>
        <a href="/#">Art</a>
        <a href="/#">Press</a>
        <a href="/#">About Us</a>
        <a href="/#">Contact</a>
        <div className="toggleh">
          <AccessTimeIcon className="time"/>
          <p>Mon - Fri:	<strong>17h - 23h</strong> <br />
            Tue: <strong>Closed</strong> <br />
            Sat & Sun :	<strong>11h - 23h</strong></p>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
        <div className="right">
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
          <div className="icons">
            <InstagramIcon className="social"  style={{ height: 50, width: 33,  }}alt=""/>
            <FacebookIcon className="social"  style={{ height: 50, width: 33, }} alt="" />
          </div>
        </div>
      </div>
  </header>
	);
}

export default Navbar;
