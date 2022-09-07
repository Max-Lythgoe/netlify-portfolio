import React from "react";
import "./Header.css";
import mainPhoto from "./pics/max-logo-white.png";

const Header = () => {
  return (
    <div className="main-container" id="top">
      <img src={mainPhoto} alt="webdev" ></img>
      <h1 className="main-title" >MAX LYTHGOE</h1>
      <div className="wrapper">
        <div className="typing-demo">&lt;h2&gt; web developer &lt;/h2&gt;</div>
      </div>
      <hr></hr>
      <div className="links-container">
        <a href="#contact">CONTACT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
        <a href="#about">ABOUT</a>
      </div>
    </div>
  );
};

export default Header;