import React from 'react';
import funnyImage from "../images/Trollface.png";

const Navbar = () => {
  return (
    <div className='nav--items'>
    <img src={funnyImage} />
    <h3>Meme Generator</h3>
    <h4>React Course - Project 4</h4>
    </div>
  )
}

export default Navbar