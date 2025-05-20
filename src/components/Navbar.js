import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/TestLogo.svg";
import {
  faBell,
  faCalendar,
  faCreditCard,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faHouse,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Prevent horizontal scrolling when mobile menu is open
    if (nav) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]); // Depend on 'nav' so effect runs when nav state changes

  return (
    <nav className="navbar">
      <div className="logo-div">
        <Link to="/">
          <img src={logo} className="logoo" alt="logoo" />
        </Link>
      </div>

      <div id="navbarSupportedContent">
        <ul>
          <li className="nav-link">
            <NavLink to="/bla" className="nav-item" activeclassname="active">
              <p className="doc">
                <FontAwesomeIcon icon={faHouse} className="fonty" />
                Overview
              </p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/" className="nav-item" activeclassname="active">
              <p className="doc">
                <FontAwesomeIcon icon={faUser} className="fonty" />
                Patients
              </p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/schedule"
              className="nav-item"
              activeclassname="active"
            >
              <p className="doc">
                <FontAwesomeIcon icon={faCalendar} className="fonty" />
                Schedule
              </p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/messages"
              className="nav-item"
              activeclassname="active"
            >
              <p className="doc">
                <FontAwesomeIcon icon={faMessage} className="fonty" />
                Message
              </p>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/transactions"
              className="nav-item"
              activeclassname="active"
            >
              <p className="doc">
                <FontAwesomeIcon icon={faCreditCard} className="fonty" />
                Transactions
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
      {nav ? (
        <div id="navbarSupportedContentMobile">
          <div id="sidebarContent">
            <ul className="contt">
              <div className="soso">
               
                <li>
                  <NavLink to="/">Patients</NavLink>
                </li>
                
              </div>
            </ul>
          </div>
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
