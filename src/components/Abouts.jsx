import React from 'react';
import './Abouts.css';
import Image1 from '../images/react.png';
import Image2 from '../images/node.png';
import Image3 from '../images/js.png';
import Image4 from '../images/html.png';
import Image5 from '../images/css.png';

const Abouts = () => {
  return (
    <div className="about">
      <div className="info">
        <h1>About</h1>
        <p>
          I am a full-stack software developer from Toronto, Ontario
          with a background in nursing. Founding a new passion in coding,
          I decided to become a developer. I am a critical thinker and enjoy
          working in a fast-paced environment and solving problems. I am 
          constantly striving to learn new technologies to broaden my skills
          as a developer. This portfolio encapsulates some of my projects
          that I have created along the way of becoming a developer!
        </p>
      </div> 
      <div className="stack">
          <div>
            <img src={Image1} width="100px" alt="react"/>
          </div>
          <div>
            <img src={Image2} width="100px" alt="node"/>
          </div>
          <div>
            <img src={Image3} width="100px" alt="js"/>
          </div>
          <div>
            <img src={Image4} width="100px" alt="html"/>
          </div>
          <div>
            <img src={Image5} width="100px" alt="css"/>
          </div>
      </div>
    </div>
  )
}

export default Abouts;