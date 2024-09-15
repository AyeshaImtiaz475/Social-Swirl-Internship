import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
  return (
    <h1>This is the home page
        <button onClick={() => {
            navigate("/profile")
        }}>Change to profile</button>
    </h1>
  )
}

export default Home