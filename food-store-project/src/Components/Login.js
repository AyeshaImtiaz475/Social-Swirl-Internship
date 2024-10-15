import React from 'react';
import logoStore from "../assets/website-logo.png";
import { Link } from 'react-router-dom';
import google from "../assets/google.png";
import facebook from "../assets/facebook-image.png";
import headerImage from "../assets/image-2.png";
import LinkedInImage from "../assets/linkedIn.png";
import InstagramImage from "../assets/instagram.png";


const Login = () => {
  return (
    <div className='main'>
        <nav>
        <img src={logoStore} alt="website-logo" className='logo'/>
        <p>PureHarvest Market</p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </nav>
        <div className='header'>
            <img src={headerImage} alt="fruit-card imag" className='header-img'/>
            <div className='login'>
                <p className='para'>User LogIn</p>
                <div className='login-icons'>
                <img src={google} alt="google" />
                <img src={facebook} about='facebook' />
                </div>
                <p className='seperate'>Or</p>
                <form>
                    <label>E-Mail:</label><br/>
                    <input type="text" placeholder='Enter your Email...' /><br/>
                    <label>Passoword:</label><br/>
                    <input type="number" placeholder='Enter your Password...' /><br/>
                    <button className='btn'>Log In</button><br/>
                    <span>Help!</span>
                    <span>Forgot Password?</span>
                </form>
            </div>
        </div>
        <p className='content'>
            Welcome to <strong>PureHarvest Market</strong>, where fresh meets pure! Log in to access a wide selection of handpicked fruits, vegetables, and organic products. Start your journey towards healthier, farm-fresh living with just a click.
            </p>
        <footer>
            <div className='description'>
            <img src={logoStore} alt="Logo-image" />
            <span>PureHarvest Market</span>
            <p className='intro'>PureHarvest Market offers a wide selection of fresh, organic fruits, vegetables, and natural products delivered straight from local farms. Shop with ease and embrace a healthier lifestyle with our eco-friendly, farm-fresh goods.</p>
            </div>
            <div className='questions'>
                <h1>Frequently asked Questions</h1>
                <h3>How long does delivery take?</h3>
                <p>We deliver within 24-48 hours to ensure freshness.</p>
                <h3>Are your products organic?</h3>
                <p>Yes, all items are organic and pesticide-free.</p>
                <h3>What is your return policy?</h3>
                <p>Returns or refunds can be requested within 24 hours of delivery.
                </p>
            </div>
            <div className='Social-links'>
                <h4>Social Media Links</h4>
                <img src={facebook} className='social-icon'/>
                <img src={InstagramImage} className='social-icon' />
                <img src={google} className='social-icon'/>
                <img src={LinkedInImage} className='social-icon' />
            </div>
        </footer>
    </div>
  )
}

export default Login