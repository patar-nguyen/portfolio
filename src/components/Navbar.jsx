import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/patrick.png'
const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    {window.scrollY >= 100 ? setColor(true) : setColor(false)}
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={logo} width='70' height='70'/>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="side-bar" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{color:"white"}} /> : <FaBars size={20} style={{color:"white"}} />}
      </div>
    </div>
  )
}

export default Navbar;