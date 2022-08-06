import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';
import Image from "../images/rocketship.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="image">
        <img className="rocket" src={Image} alt="rockets" />
      </div>
      <div className="info">
        <h1>Hello, I'm Pat</h1>
        <p>Full Stack Software Developer</p>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro;