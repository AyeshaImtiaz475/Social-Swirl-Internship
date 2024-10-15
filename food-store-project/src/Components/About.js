import React from 'react';
import logoStore from "../assets/website-logo.png";
import { Link } from 'react-router-dom';
import google from "../assets/google.png";
import facebook from "../assets/facebook-image.png";
import LinkedInImage from "../assets/linkedIn.png";
import InstagramImage from "../assets/instagram.png";
import video from "../assets/video.mp4";
import imagebasket from "../assets/image.png";
import myimage1 from "../assets/m1.png";
import myimage2 from "../assets/m2.png";
import myimage3 from "../assets/m3.png";
import myimage4 from "../assets/m4.png";


const About = () => {
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
        <div className='session'>
            <video src={video}   loop autoPlay muted/>
            <h2>About Us</h2>
            <p>
            At PureHarvest Market, we are dedicated to bringing you the freshest and finest organic produce directly from local farms. Our mission is to promote a healthier lifestyle by providing a wide selection of handpicked fruits, vegetables, and natural products that are both nutritious and eco-friendly.
            </p>
            <hr/>
            <div className='mission'>
                <img src={imagebasket} />
                <h3>Mission</h3>
                <p>
                At PureHarvest Market, we are committed to providing fresh, organic produce that supports local farmers and promotes sustainable agriculture. Our values center around quality, community, and transparency, ensuring you have the best shopping experience. We welcome your feedback and inquiries as they help us grow and improve our services.
                </p>
                
            </div>
            <br/><br/>
            <hr/>
            <h3 className='services'>Services</h3>
            <div className='container'>
                <br/><br/><br/><br/><br/>
                <div className='card'>
                    <img src={myimage1} />
                    <p>
                    At PureHarvest Market, we pride ourselves on offering a wide selection of fresh, organic fruits and vegetables sourced directly from local farms. Our commitment to quality ensures that you receive only the best produce, free from pesticides and artificial additives. Experience the taste of farm-fresh goodness with every bite!
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='card'>
                    <img src={myimage2} />
                    <p>
                    PureHarvest Market is dedicated to supporting our local farming community. By partnering with local farmers, we not only provide you with the freshest produce but also help sustain the livelihoods of those who grow our food. When you shop with us, you’re contributing to the growth and development of your community.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='card'>
                    <img src={myimage3} />
                    <p>
                    PureHarvest Market is dedicated to supporting our local farming community. By partnering with local farmers, we not only provide you with the freshest produce but also help sustain the livelihoods of those who grow our food. When you shop with us, you’re contributing to the growth and development of your community.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='card'>
                    <img src={myimage4} />
                    <p>
                    Sustainability is at the heart of everything we do at PureHarvest Market. We prioritize eco-friendly practices in our operations, from sourcing our products to packaging and delivery. By choosing us, you are not only making healthier choices for yourself but also taking a step towards a greener planet.
                    </p>
                    <br/>
                    <button>Learn More</button>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
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

export default About