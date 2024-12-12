import React, { useContext } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Profile from './components/Profile';
import Project from './components/Project';


function App() {

  return (

    <div>

      <HeroSection />
      <MainSection />
      <Profile />
      <Project />
      <Footer />
    </div>

  )

}

export default App;
