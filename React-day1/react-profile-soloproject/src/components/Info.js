import React from "react";
import girlImage from "./girl.jpg";

const Info = () => {
  return (
    <div className="section">
      <img src={girlImage} alt="profile-img" />
      <h1>Ayesha Imtiaz</h1>
      <h3>Frontend Developer | UI/UX designer</h3>
      <p>ayeshaio.webiste</p>
      <div className="button-wrapper">
        <button id="email">
          <i className="far fa-envelope"></i>Email
        </button>
        <button id="linkedin">
          <i className="fab fa-linkedin"></i>LinkedIn
        </button>
      </div>
      <h1 className="about">About</h1>
      <p className="info">
        Hello, I'm Ayesha, a 21-year-old UI/UX design intern at Octal Code. I'm
        also pursuing a Bachelor's degree in Software Engineering at Lahore
        Garrison University.I am about to start my final year.
      </p>
      <h1 className="interest">Interests</h1>
      <p className="passion">
        I have a deep passion for web development and UI/UX design. I dedicate
        my time to exploring various frameworks and designing solo projects.
        Additionally, I work on redesigning websites using tools like Figma and
        Notion.
      </p>
      <div className="footer">
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-pinterest"></i>
      <i class="fa-brands fa-github"></i>
      </div>
    </div>
  );
};

export default Info;
