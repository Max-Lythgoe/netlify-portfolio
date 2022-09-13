import React from "react";
import "./About.css";
import maxPic from './pics/Me_About.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <div>
      <div
        className="about-container"
        data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
     id="about"
      >
        <h2 className="subtitle-black" >ABOUT ME</h2>
        <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
        <img src={maxPic} alt='pic of me' className="featured-pic"></img>
        </div>
        <p className="main-about-text">
          Hey! My name's Max, I'm an aspiring Web Developer in Utah. I
          love being creative in many forms: video editing, photoshop,
          photography, charcoal drawings, acrylic paintings ... and now
          websites. I enjoyed DevMountain's Web Development course and
          I'm always excited to learn more about web dev and coding in general.
          Thanks for visiting my portfolio!
        </p>
      </div>
      <div className="btm-btn-cont">
      <a href="#top">
      <button className="red-button"> Back To Top</button>
      </a>
      </div>
    </div>
  );
};

export default About;
