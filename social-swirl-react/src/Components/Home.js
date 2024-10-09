import React from 'react';
import Logo from "../assets/store-logo.png";
import { Link } from 'react-router-dom';
import frontVideo from "../assets/video5.mp4";
import downImage from "../assets/down.png";
import mobileVideo from "../assets/video1.mp4";
import purse1Image from "../assets/purse1.png";
import purse2Image from "../assets/purse2.png";
import purse3Image from "../assets/purse3.png";
import purse4Image from "../assets/purse4.png";
import purse5Image from "../assets/purse5.png";
import purseVideo from "../assets/purse.mp4";
import product1Image from "../assets/img25.png";
import product2Image from "../assets/img24.png";
import product3Image from "../assets/img23.png";
import product4Image from "../assets/img22.png";
import product5Image from "../assets/img1.png";
import product6Image from "../assets/img2.png";
import product7Image from "../assets/img15.png";
import product8Image from "../assets/img14.png";
import product9Image from "../assets/img13.png";
import product10Image from "../assets/img12.png";
import product11Image from "../assets/img18.png";
import product12Image from "../assets/img19.png";
import product13Image from "../assets/img17.png";
import product14Image from "../assets/img9.png";
import product15Image from "../assets/img7.png";
import product16Image from "../assets/img6.png";
import product17Image from "../assets/img26.png";
import product18Image from "../assets/img21.png";
import product19Image from "../assets/img11.png";
import heartImage from "../assets/heart.png";
import arrivalImage from "../assets/img16.png";
import cameraVideo from "../assets/video3.mp4";
import arrival1 from "../assets/newarrival1.png";
import arrival2 from "../assets/newarrival2.png";
import arrival3 from "../assets/newarrival3.png";
import arrival4 from "../assets/newarrival4.png";
import arrival5 from "../assets/newarrival5.png";
import facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import linkedIn from "../assets/linkedIn.png";


const Home = () => {
  return (
    <div className='main'>
     <nav>
            <img src={Logo} />
            <h3>ApnaBazaar</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About</Link></li>
               <button><Link to="/signin" >Login</Link></button>
            </ul>
        </nav>
        <br/>
        <br/>
        <div className='header'>
            <video src={frontVideo} autoPlay loop muted/>
            <div className='headerContent'>
             <h1>Discover the Latest Trends in Fashion Today!</h1>
             <br/>
             <p>
             Step into a world of stylish possibilities with our newest clothing collection. From casual wear to statement pieces, our curated selection will keep you looking effortlessly chic
             </p>
             <button>Shope Now</button>
             <img src={downImage} />
            </div>
            </div>
            <br/> <br/>
            <br/>
            <br/> <br/>
            <br/>
            <br/>
           
            <h2 className='capture'>Capture Life's Finest Moments with Stunning Clarity!</h2>
            <hr/>
            <br/>
            <div className="feature">
                <div className='featureContent'>
                    <h4 className='myfeature'>Feature</h4>
                    <h4>4K Ultra HD Video Recording</h4>
                    <p>
                    Experience the highest quality video capture with crisp details and vibrant colors, making every memory unforgettable.
                    </p>
                    <br/>
                    <h4>Superb Stabilization</h4>
                    <p>
                    Say goodbye to shaky footage. Built-in stabilization ensures smooth, steady videos, perfect for capturing action on the go.
                    </p>
                    <br/>
                    <h4>Cinematic Mode</h4>
                    <p>Bring out your inner filmmaker! With cinematic focus and depth control, every shot feels like a scene from a movie.</p>
                </div>
                <video src={mobileVideo} autoPlay loop muted />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className='capture'>Carry Your Essentials in Style: Shop Our Trendy Purse </h2>
            <hr/>
            <div className='purseCategory'>
                    <div className='card'>
                        <img src={purse1Image} />
                        <p>Chic Clutch</p>
                    </div>
                    <div className='card'>
                        <img src={purse2Image} />
                        <p>Everyday Tote</p>
                    </div>
                    <div className='card'>
                        <img src={purse3Image} />
                        <p>Glamour Satchel</p>
                    </div>
                    <div className='card'>
                        <img src={purse4Image} />
                        <p>Wanderlust Crossbody</p>
                    </div>
                    <div className='card'>
                        <img src={purse5Image} />
                        <p>Urban Sling</p>
                    </div>
                    <br/>
                    <br/>  
                    <video src={purseVideo} autoPlay loop muted />
            </div>
            <br/>
            <br/>
            <br/> <br/><br/><br/><br/>
            <br/> <br/>
           
           
           
            <h2 className='capture'>Top Rated Products </h2>
            <hr/>
            <div className='purseCategory'>
                    <div className='card'>
                        <img  className="heart" src={heartImage} />
                        <img src={product1Image} />
                        <p>Apple Laptop</p>
                        <span>$1,999</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product2Image} />
                        <p>Digital Printer</p>
                        <span>$749</span>
                    </div>
                    <div className='card'>
                        <img src={product3Image} />
                        <p>Ear Cups</p>
                        <span>$650</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product4Image} />
                        <p>Laptop Carrier</p>
                        <span>$399</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product5Image} />
                        <p>umbrella</p>
                        <span>$2,250</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product6Image} />
                        <p>Ear pots</p>
                        <span>$1450</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product7Image} />
                        <p>Ear Phones</p>
                        <span>$299</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product8Image} />
                        <p>Apple Latest Ipad </p>
                        <span>$45,199</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product9Image} />
                        <p>Ear pots</p>
                        <span>$34,99</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product10Image} />
                        <p>Umbrella</p>
                        <span>$1899</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product11Image} />
                        <p>Apple Laptop Cover</p>
                        <span>$1299</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product12Image} />
                        <p>Digital Ear Cups</p>
                        <span>$2450</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product13Image} />
                        <p>Apple Ipad Pen</p>
                        <span>$34,699</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product14Image} />
                        <p>Digital Watch</p>
                        <span>$25,789</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product15Image} />
                        <p>Dell Laptop</p>
                        <span>$60,999</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product16Image} />
                        <p>Laptop keyboard</p>
                        <span>$17,899</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product17Image} />
                        <p>Iphone</p>
                        <span>$90,999</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product18Image} />
                        <p>Digital Watch</p>
                        <span>$1,999</span>
                    </div>
                    <div className='card'>
                    <img  className="heart" src={heartImage} />
                        <img src={product19Image} />
                        <p>Ipad & Eye Cups</p>
                        <span>$12,999</span>
                    </div>
                    <br/>
                    <br/>  
            </div>
            <br/><br/><br/><br/><br/>
            <h2 className='capture'>New Arrival</h2>
            <hr/>
            <div className="arrival">
                <div className="arrivalContent">
                    <h4>4K Ultra HD Video Recording</h4>
                    <p>
                    Experience the highest quality video capture with crisp details and vibrant colors, making every memory unforgettable.
                    </p><br/>
                    <button>Shop Now</button>
            </div>
            <img src={arrivalImage} />
            <video class="camera" src={cameraVideo} autoPlay loop muted/>
            </div>
           
            <div className='purseCategory'>
                    <div className='card'>
                        <img src={arrival1} />
                        <p>Canon EOS R5</p>
                    </div>
                    <div className='card'>
                        <img src={arrival2} />
                        <p>Nikon Z6 II</p>
                    </div>
                    <div className='card'>
                        <img src={arrival3} />
                        <p>Sony Alpha a7 III</p>
                    </div>
                    <div className='card'>
                        <img src={arrival4} />
                        <p>Fujifilm X-T4 </p>
                    </div>
                    <div className='card'>
                        <img src={arrival5} />
                        <p>Panasonic Lumix GH5</p>
                    </div>
                    <br/>
            </div>
            <footer>
                <img src={Logo} className='store-logo'/>
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
  )
}

export default Home