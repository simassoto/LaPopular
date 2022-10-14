import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"
import Bimba from "../assets/bimba.png"
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
        <a href="/#">Home</a>
        <a href="/#">Menu</a>
        <a href="/#">Art</a>
        <a href="/#">Press</a>
        <a href="/#">About Us</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
        <div className="right">
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
          <div className="icons">
            <InstagramIcon  style={{ height: 43, width: 26 }}
              alt=""/>  <FacebookIcon style={{ height: 43, width: 26 }}
              alt="" />
          </div>
        </div>
      </div>
  </header>
	);
}

export default Navbar;
