import React from 'react';
import pageLogo from "../assets/store-logo.png";
import myImage from "../assets/img10.png";
import myfacebook from "../assets/facebook.png";
import myGoogle from "../assets/google.png";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="main">
        <nav>
            <img src={pageLogo} />
            <h3>ApnaBazaar</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About</Link></li>
               <button><Link to="/signin">Login</Link></button>
            </ul>
        </nav>
        <br/>
        <br/>
        <form>
            <caption>Signin</caption>
            <input type="text" placeholder='Username' />
            <br/><br/>
            <input type="number" placeholder='Password' />
            <br/><br/>
            <span className="password">Forget Password</span>
            <button><Link to="/" >Login</Link></button> <br/><br/> <br/>
            <span className='option'>---------------  OR  ----------------</span> <br/><br/>
            <img className='google' src={myGoogle} />
            <img className='facebook' src={myfacebook} />
            <img className='pic' src={myImage} />
        </form>
    </div>
  )
}

export default SignIn