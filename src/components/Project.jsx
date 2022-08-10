import React from 'react';
import './Project.css';
import img1 from '../images/Tweeter2.jpg';
import img2 from '../images/Notes.png';
import img3 from '../images/Wumboflix.png';
import img4 from '../images/Quiztacular.png';
import img5 from '../images/onlyFriendZ.png';
import img6 from '../images/Create.jpg';
import img7 from '../images/TinyApp.png';
import img8 from '../images/list.png';
import img9 from '../images/Login.png';
const Project = () => {

  const projects = [
    {
      title: "Wumboflix",
      description: "Movie search application",
      imgUrl: img1
    },

    {
      title: "Notes",
      description: "CRUD application",
      imgUrl: img1
    },
  ];

  return (
    <div className="projects">
      <div className="project">
        <h1>Projects</h1>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/rn-authenticator')}}>
        <img className="img" src={img9} width="350px" height="400px" alt="authenticator"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Authenticator</div>
            <p className="description">Authentication that allows users to register and login with an account.</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/rn-todo_list')}}>
        <img className="img" src={img8} width="350px" height="400px" alt="todo"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Todo list</div>
            <p className="description">React Native application that creates a todo list</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/wumboflix')}}>
        <img className="img" src={img3} width="350px" height="400px" alt="wumboflix"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Wumboflix</div>
            <p className="description">Movie search application</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/note_list')}}>
        <img className="img" src={img2} width="350px" height="400px" alt="notes"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Notes</div>
            <p className="description">CRUD application</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/crocka/onlyFriendZ')}}>
        <img className="img" src={img5} width="350px" height="400px" alt="onlyfriendz"/>
        <div className="overlay">
          <div className="content">
            <div className="title">OnlyFriendZ</div>
            <p className="description">Application to connect with other friends</p>
          </div>
        </div>
      </div>
      
      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/crocka/Quiztacular')}}>
        <img className="img" src={img4} width="350px" height="400px" alt="quiztacular"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Quiztacular</div>
            <p className="description">Quiz application</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/scheduler')}}>
        <img className="img" src={img6} width="350px" height="400px" alt="scheduler"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Scheduler</div>
            <p className="description">Scheduling application</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/tweeter')}}>
        <img className="img" src={img1} width="350px" height="400px" alt="tweeter"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Tweeter</div>
            <p className="description">Twitter Clone</p>
          </div>
        </div>
      </div>

      <div className="container" onClick={(e) => {  e.preventDefault(); window.open('https://github.com/patar-nguyen/tinyapp')}}>
        <img className="img" src={img7} width="350px" height="400px" alt="tinyapp"/>
        <div className="overlay">
          <div className="content">
            <div className="title">Tiny App</div>
            <p className="description">Application to shorten URLs</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project;