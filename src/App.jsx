import { useState, useRef } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';


import Home from './Pages/Home';
function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        onHomeClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    
    </>
  );
}

export default App;
