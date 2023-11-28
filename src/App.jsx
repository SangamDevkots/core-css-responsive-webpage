import { useState } from 'react'
import Home from './Pages/Home'
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
   <Home />
   <Services />
   <About />
<Contact />

    </>
  )
}

export default App
