import React from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Abouts from '../components/Abouts';
import Project from '../components/Project';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Abouts />
      <Project />
      <Footer />
    </div>
  )
}

export default Home;