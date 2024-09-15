import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate();
  return (
    <h1>This is the about page
        <button onClick={() => {
            navigate("/")
        }}>Change to Home page</button>
    </h1>
  )
}

export default About