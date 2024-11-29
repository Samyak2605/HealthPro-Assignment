import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/ivf-pulse-logo.png";
import "./Header.css";
import Hamburger from "hamburger-react";
import FormModal from "../formModal/FormModal";
function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const openForm = () => {
    setFormOpen(true);
  };
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
          <button className="talk-button" onClick={openForm}>
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
          <button onClick={openForm}>Talk to Us</button>
        </div>
      )}
      {isFormOpen && <FormModal closeForm={() => setFormOpen(false)} />}
    </>
  );
}
export default Header;