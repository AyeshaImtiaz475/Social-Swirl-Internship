import React from 'react';
import '../App.css';
import logo from '../logo.svg';


const Facts = () => {
  return (
    <div className='MainContent'>
        <h1>Fun facts about React</h1>
         <ul>
         <li>Was first released in 2013</li>
         <li>Was originally created by Jordan Walke</li>
         <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Facts