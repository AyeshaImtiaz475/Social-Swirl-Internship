import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import About from './Components/About';
import Product from './Components/Product'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

