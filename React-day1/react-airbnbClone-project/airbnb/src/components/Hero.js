import React from 'react';
import gridImg from "../images/picture-grid.png";

const Hero = () => {
  return (
    <div className='hero--section'>
     <img src={gridImg} alt="grid-image" />
     <br/>
     <h1>Online Experiences</h1>
     <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}

export default Hero