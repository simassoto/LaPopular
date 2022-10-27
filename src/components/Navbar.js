import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"
import LaPopular from "../assets/taberna.svg"
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

      <nav ref={navRef}>
        <img className="toggle" alt="" src={Logo}></img>
        <div className="desktop">
        <a href="/#" id="home"> <img  alt="" src={LaPopular}></img></a>
        </div>
        <a href="/#" id="casa">Home</a>
        <a href="/menu">Menu</a>
        <a href="/#">Art</a>
        <a href="/#">Press</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
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
          <a href="https://www.instagram.com/lapopularericeira/?hl=pt">
          <InstagramIcon className="social"  style={{ height: 47, width: 30,  }}alt=""/>
          </a>
          <a href="https://m.facebook.com/profile.php?id=100063365822320">
            <FacebookIcon className="social"  style={{ height: 47, width: 30, }} alt="" />
          </a>

          </div>
        </div>
      </div>
  </header>
	);
}

export default Navbar;
