import React from 'react';
import logoStore from "../assets/website-logo.png";
import { Link } from 'react-router-dom';
import google from "../assets/google.png";
import facebook from "../assets/facebook-image.png";
import LinkedInImage from "../assets/linkedIn.png";
import InstagramImage from "../assets/instagram.png";
import "../App.css";
import video2 from "../assets/video2.mp4";
import fruit1 from "../assets/fruit-1.png";
import fruit2 from "../assets/fruit-10.png";
import fruit3 from "../assets/fruit-11.png";
import fruit4 from "../assets/fruit-12.png";
import fruit5 from "../assets/fruit-13.png";
import fruit6 from "../assets/fruit-15.png";
import fruit7 from "../assets/fruit-16.png";
import fruit8 from "../assets/fruit-17.png";
import video3 from "../assets/video3.mp4";
import fruit9 from "../assets/fruit-18.png";
import fruit10 from "../assets/fruit-19.png";
import fruit11 from "../assets/fruit-2.png";
import fruit12 from "../assets/fruit-3.png";
import fruit13 from "../assets/fruit-4.png";
import fruit14 from "../assets/fruit-5.png";
import fruit15 from "../assets/fruit-6.png";
import fruit16 from "../assets/fruit-8.png";



const Product = () => {
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
        
        <div className='product-session'>
          <video src={video2} loop autoPlay muted/>
          <p>
          Discover the freshest selection of organic produce at PureHarvest Market, sourced directly from local farms. Explore our commitment to quality and sustainability, ensuring every bite is a step towards a healthier lifestyle.
          </p>
        </div>
        <br/><br/><br/>
        <hr/>
        <h3 className='product-intro'>Our Products</h3>
        <br/><br/>
        <div className='product-container'>
         <div className='product-card'>
          <img src={fruit1} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit2} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit3} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit4} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit5} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit6} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit7} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit8} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
        </div>
        <br/><br/><br/><br/>
        <div className='fruit-session'>
          <video src={video3} loop autoPlay muted/>
          <div className='fruit-cart'>
          <h3>Taste, health benefits, and versatility</h3>
          <p>
          Our farm-fresh cherries are bursting with juicy sweetness and rich flavor. Handpicked and 100% organic, they’re free from pesticides and packed with antioxidants. Perfect for snacking, baking, or adding a natural touch to your meals!
          </p>
          <button>Explore more</button>
          </div>
        </div>
        <br/><br/><br/><br/><br/>
        <hr/>
        <h3 className='product-intro'>Our Special Quality Products</h3>
        <br/><br/>
        <div className='product-container'>
         <div className='product-card'>
          <img src={fruit9} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit10} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit11} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit12} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit13} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit14} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit15} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
         <div className='product-card'>
          <img src={fruit16} />
          <p>Fresh, organic fruits—naturally delicious and packed with nutrients straight from local farms.</p>
          <button className='cart'>Add to cart</button>
         </div>
        </div>
        <br/><br/><br/><br/>
        <br/><br/>
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

export default Product