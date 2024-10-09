import React from 'react';
import { Link } from 'react-router-dom';
import pageLogo from "../assets/store-logo.png";
import facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import linkedIn from "../assets/linkedIn.png";
import vectorImage from "../assets/vector.png";


const Contact = () => {
  return (
    <div className="main">
      <nav>
        <img src={pageLogo} alt="Logo" />
        <h3>ApnaBazaar</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
          <button><Link to="/signin" >Login</Link></button>
        </ul>
      </nav>
      <br/><br/><br/><br/><br/>
      <h2 className='query'>If you have any questions or need assistance, feel free to reach out to us!.Contact Us Now -></h2>
      <form>
            <caption>Contact</caption>
            <input type="text" placeholder='Enter Name' />
            <br/><br/>
            <input type="text" placeholder='Enter Email' />
            <br/><br/>
            <input type="number" placeholder='Enter phone number' />
            <br/><br/>
            <input type="message" placeholder='Enter your query' />
            <br/><br/>
            <button><Link to="/" >Submit</Link></button> <br/><br/> <br/>
            <img className="pic" src={vectorImage} />
        </form>
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
}

export default Contact;
