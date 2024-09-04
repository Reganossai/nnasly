import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBars, faChartSimple, faClockRotateLeft, faFutbol, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSlidIn, setIsSlidIn] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setIsSlidIn(!isSlidIn);
  };

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <nav className="navbar-container">
       <img src={logo} className="logo" alt="logo"/>
       
      <ul id="navbarSupportedContent">
        <li>
          <NavLink activeclassname="active" to="/">
            ABOUT US
          </NavLink>
        </li>

        <li>
          <NavLink activeclassname="active" to="/">
            MEAT
          </NavLink>
        </li>

        <li>
          <NavLink activeclassname="active" to="/">
            BUY
          </NavLink>
        </li>

        <li>
          <NavLink activeclassname="active" to="/">
            SERVICES
          </NavLink>
        </li>

        <li>
          <NavLink activeclassname="active" to="/">
            CONTACT
          </NavLink>
        </li>

      </ul>
      {nav ? (
        <div className={`your-container ${isSlidIn ? "slide-in" : ""}`}>
          <ul id="navbarSupportedContentMobile">
            <li>
              <Link  to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </li>

            <li>
              <Link to="/">
              <FontAwesomeIcon icon={faFutbol} />  ABOUT US
              </Link>
            </li>

            <li>
              <Link to="/standings">
              <FontAwesomeIcon icon={faChartSimple}  className="font"/> MEAT
              </Link>
            </li>

            <li>
              <Link to="/top-scorers">
              <FontAwesomeIcon icon={faArrowAltCircleUp}  className="font"/> BUY 
              </Link>
            </li>
            
            <li>
              <Link to="/about">
              <FontAwesomeIcon icon={faSuitcase} /> SERVICES
              </Link>
            </li>

            <li>
              <Link to="/contact">
              <FontAwesomeIcon icon={faAddressCard} />  CONTACT
              </Link>
            </li>
          </ul>
        </div>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} className="fas" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="fas" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

