import React from 'react';

const Navbar = ({ onHomeClick, onServicesClick, onAboutClick, onContactClick }) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className='navlists'>
            <li><button onClick={onHomeClick}>Home</button></li>
            <li><button onClick={onServicesClick}>Services</button></li>
            <li><button onClick={onAboutClick}>About us</button></li>
            <li><button onClick={onContactClick}>Contact</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
