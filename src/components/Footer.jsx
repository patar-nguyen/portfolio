import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='connect'>
        <p>Connect with me on social media</p>
      </div>
      <div className='socials'>
        <FaLinkedin size={50} style={{ color: "#FFF", marginRight: '2em' }} onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/patrick-nguyen-95657180/')}} />
        <FaGithub size={50} style={{ color: "#FFF", marginRight: '2em'}} onClick={(e) => {e.preventDefault(); window.open('https://www.github.com/patar-nguyen')}} />
        <FaInstagram size={50} style={{ color: "#FFF" }} onClick={(e) => {e.preventDefault(); window.open('https://www.instagram.com/patarnguyen')}} />
      </div>
    </div>
  );
}
export default Contact;