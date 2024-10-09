import React from "react";
import { Link } from "react-router-dom";
import pageLogo from "../assets/store-logo.png";
import aboutImage from "../assets/about.png";
import facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import linkedIn from "../assets/linkedIn.png";

const About = () => {
  return (
    <div className="main">
      <nav>
        <img src={pageLogo} />
        <h3>ApnaBazaar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <button>
            <Link to="/signin">Login</Link>
          </button>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <div className="about">
        <img src={aboutImage} />
        <div className="aboutContent">
        <br/><br/><br/> <br/><br/>
          <h1>ApnaBazaar Online Store</h1>
          <p>
            Welcome to ApnaBazaar! We are your one-stop online marketplace,
            dedicated to providing a wide range of quality products at
            competitive prices. Our mission is to create a seamless and
            enjoyable shopping experience for everyone, with a diverse
            collection that caters to all your needs—from electronics and
            fashion to household essentials. At ApnaBazaar, customer
            satisfaction is our top priority, and we take pride in delivering
            exceptional service and convenience straight to your doorstep
          </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <footer>
                <img src={pageLogo} className='store-logo'/>
                <h3 className='store-name'>ApnaBazaar</h3>
                <br/>
                <br/>
                <p>ApnaBazaar is your one-stop e-commerce destination, offering a wide range of quality products at unbeatable prices. 
                </p>
                <div className='footer-content'>
                    <h3>Social Media links</h3>
                    <img src={facebook} />
                     <br/><br/><br/>
           <img src={linkedIn} />
                    <img src={Google} />
                </div>
            </footer>
    </div>
  );
};

export default About;
