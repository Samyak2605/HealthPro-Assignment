import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/ivf-pulse-logo.png";
import "./Header.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Header() {
  // const [isSmallScreen, setSmallScreen] = useState(false);
  // // setSmallScreen(window.innerWidth < 768);
  // console.log(window.innerWidth < 768);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="header-container">
        <div>
          <img src={logo} alt="IVF Pulse Logo" />
        </div>
        <div className="nav-links">
          <Link>Donor Programme</Link>
          <Link>Fertility Preservation</Link>
          <Link>Advanced Treatments</Link>
          <Link>Infertility Treatments</Link>
          <Link>IVF Testing</Link>
          <Link>About Us</Link>
          <button className="talk-button">
            Talk to Us <span className="arrow">→</span>
          </button>
        </div>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="ham-nav-links">
          <Link>Donor Programme</Link>
          <Link>Fertility Preservation</Link>
          <Link>Advanced Treatments</Link>
          <Link>Infertility Treatments</Link>
          <Link>IVF Testing</Link>
          <Link>About Us</Link>
          <button>Talk to Us</button>
        </div>
      )}
    </>
  );
}

export default Header;
