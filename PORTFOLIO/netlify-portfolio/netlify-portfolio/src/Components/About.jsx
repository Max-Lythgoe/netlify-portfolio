import React from "react";
import "./About.css";
import maxPic from './pics/Me_About.jpg'
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
          Where to begin? Well, I'm a triplet so that's kinda fun (before you
          ask, no we are not identical). I've lived in Utah my entire life. I
          love being creative in many forms: video editing, photoshop,
          photography, charcoal drawings, acrylic paintings ... and now
          websites. I enjoyed DevMountain's Web Development course and
          I'm always excited to learn more about web dev and coding in general.
          It's so satisfying to see my (or your) ideas come to life.
        </p>
      </div>
    </div>
  );
};

export default About;
