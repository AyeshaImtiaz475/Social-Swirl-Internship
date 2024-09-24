// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>  
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

