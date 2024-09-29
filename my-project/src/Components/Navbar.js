import React, { useState } from 'react';
import '../Stylesheets/Navbar.css';
import Logo from '../Assets/Logo.svg';
import Toggle from './Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <div id="navbar">
            <div id="navbarBrand">
                <img src={Logo} id="navbarLogo" alt="GDG Logo"/>
                <p>GDG RCOEM</p>
            </div>
            <button id="navbarMenuButton" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
            </button>
            <div id='navbarPages' className={menuOpen ? 'open' : ''}>
                <ul>
                <li className="navbarPage"><a href="#" id="HomePage" className="activePage">Home</a></li>
                    <li className="navbarPage"><a href="#">Events</a></li>
                    <li className="navbarPage"><a href="#">Team</a></li>
                    <li className="navbarPage"><a href="#">Alumni</a></li>
                    <li className="navbarPage"><a href="#">Contact</a></li>
                    <Toggle />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
