import logo from "./logo.svg";
import "./App.css";
import Logo from "../src/assets/pic1.png";
import myVideo from "../src/assets/video1.mp4";
import myVideo2 from "../src/assets/video4.mp4";
import myVideo3 from "../src/assets/video3.mp4";
import myImag2 from "../src/assets/pic2.png";
import myImage3 from "../src/assets/pic3.png";
import myImage4 from "../src/assets/pic4.png";
import myImage5 from "../src/assets/pic5.png";
import feedbackImage from "../src/assets/feedback.png";

function App() {
  return (
    <div className="main">
      <nav>
        <img src={Logo} />
        <button className="btn1">Learn More</button>
        <span>SignIn</span>
        <button className="btn2">Register Now</button>
        <hr />
      </nav>
      <div className="header">
        <video src={myVideo} autoPlay loop muted />
        <div className="headerContent">
          <h2>Bring your goals into focus</h2>
          <p>
            Peace of Mind offers online courses and programs designed to prepare
            you for every career milestone. Our holistic approach empowers you
            to learn, grow, and succeed with confidence. Start your journey
            towards a fulfilling future today.
          </p>
          <button className="btn3">Explore More!</button>
        </div>
      </div>
      <br />
      <br />
      <h2 className="heading">You set the goal. We'll mark the path</h2>
      <hr />
      <div className="header">
        <div className="headerContent">
          <h2>Hone your skills and explore your interests</h2>
          <p>
            Career progress isn't always linear. So when your industry evolves
            or your plans change, Peace of Minds is the education destination
            that works as hard as you. Explore thousands of job-relevant online
            courses that empower you to ramp up, reroute, or start fresh. We'll
            be with you every step of the way
          </p>
          <button className="btn3">Certificates</button>
        </div>
        <video src={myVideo2} autoPlay loop muted />
      </div>
      <br />
      <br />
      <br />
      <h2 className="heading">Important Topics we teach</h2>
      <hr />
      <div className="Session">
        <div className="card">
          <img src={myImag2} />
          <br />
          <h3>Artifical Intelligence</h3>
          <p>
            Artificial Intelligence is transforming the way we live, work, and
            interact, driving innovation across all industries.
          </p>
          <button className="btn4">Read more</button>
        </div>
        <div className="card">
          <img src={myImage3} />
          <br />
          <h3>Leadership skills</h3>
          <p>
            Leadership is about inspiring and guiding others towards a shared
            vision while empowering them to achieve their best.
          </p>
          <button className="btn4">Read more</button>
        </div>
        <div className="card">
          <img src={myImage4} />
          <br />
          <h3>Computer programming</h3>
          <p>
            Computer programming is the process of designing and building
            software to solve problems and create innovative digital solutions
          </p>
          <button className="btn4">Read more</button>
        </div>
        <div className="card">
          <img src={myImage5} />
          <br />
          <h3>Machine Learning</h3>
          <p>
            Machine learning enables systems to learn from data, identify
            patterns, and make decisions with minimal human intervention
          </p>
          <button className="btn4">Read more</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="career">
          Kick start your Career With our Professional Courses
        </h2>
        <hr />
        <div className="header">
          <video src={myVideo3} autoPlay loop muted />
          <div className="headerContent">
            <h2>Success starts within. We’re here to help you achieve it.</h2>
            <p>
              Fuel your career success — get up to 30% off with the code
              PeaceOfMindSUCCESS24. Offer ends October 28, 2024.
            </p>
            <button className="btn3">Learn more</button>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h2 className="heading">The reviews are in What learners are saying</h2>
      <div className="Session">
        <div className="card">
          <img src={feedbackImage} className="feedback" />
          <br />

          <h3>Maggie B.</h3>
          <span>TUMx Professional Certificate Program in Lean Six Sigma </span>
          <p>
            “This course helped me think about the person I want to be. The
            mental space that it afforded me allowed me to broaden my horizons.”
          </p>
          <button className="btn4">Read more</button>
        </div>
        <div className="card">
        <img src={feedbackImage} className="feedback" />
        <br/>
          <h3>Danielle D</h3>
          <span>University of Central Florida Digital Marketing Boot Camp</span>
          <p>
            “One employer was very interested in my boot camp experience and
            couldn’t believe all I learned in just six months. I ended up
            getting that job.”
          </p>
          <button className="btn4">Read more</button>
        </div>
        <div className="card">
        <img src={feedbackImage} className="feedback" />
        <br/>
          <h3>Maria G</h3>
          <span>Digital Marketing Masterclass</span>
          <p>
            “This course provided me with the tools to elevate my marketing
            strategies and understand the latest trends in the digital
            landscape.”
          </p>
          <button className="btn4">Read more</button>
        </div>

        <div className="card">
        <img src={feedbackImage} className="feedback" />
        <br/>
          <h3>Slim C</h3>
          <span>Oxford Executive Leadership Programme</span>
          <p>
            “The online program helped me refocus my main tasks as a leader:
            engaging with my team [and] connecting with potential stakeholders.”
          </p>
          <button className="btn4">Read more</button>
        </div>
       
      </div>
      <br/><br/><br/><br/><br/><br/>
      <hr/>
      <footer>
        <img src={Logo} />
        <p>Peace of Mind is dedicated to transforming education by offering a wide range of online courses tailored to meet the diverse needs of learners. Our mission is to empower individuals with the knowledge and skills necessary to excel in their careers while fostering a supportive and inclusive learning environment. With a commitment to quality and innovation, we provide engaging content, expert instructors, and practical resources to ensure that every student can achieve their personal and professional goals. Join us on this journey of lifelong learning and discover the path to success with Peace of Mind
          <br/><br/><br/>
          If you have any query feel free to contact Us!
        </p>
       
        <form>
          <caption>Contact us</caption>
          <input type="text" placeholder="Enter your name"/><br/>
          <input type="text" placeholder="Enter your email"/><br/>
          <input type="number" placeholder="Enter your number"/><br/>
          <input type="message" placeholder="Enter your Query"/>
          <button>Submit</button>
        </form>
      </footer>
      
    </div>
  );
}

export default App;
