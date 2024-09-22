import React from 'react';
import airLogo from "../images/air-logo.png";

const Navbar = () => {
  return (
    <nav>
        <img src={airLogo} alt="logo" className='nav--logo'/>
    </nav>
  )
}

export default Navbar