import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from './pages/Home';
import {Profile} from "./pages/Profile"
import { Contact } from './pages/Contact';
import Navbar from "../src/Navbar";
import { useState , createContext} from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("PedroTech");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND: 404 ERROR</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

//Router help us to tell the browser where our router occur 
//Routes tell teh no of routes mentioned in our website 
//Route indicate only one route path

//higest level component is App which contain all the other component or enclose all 
//the component in it
