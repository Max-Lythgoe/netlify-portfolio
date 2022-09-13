import React from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  AOS.init();

  return (
    <div>
      <div className="skills-container" id="skills">
        <h3 className="subtitle special">SKILLS</h3>
        <h3 className="subtext">Web Tools</h3>

        <div className="icon-container">
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="200"
            data-aos-offset="-300"
          >
            <i class="fa-brands fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="300"
            data-aos-offset="-300"
          >
            <i class="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="400"
            data-aos-offset="-300"
          >
            <i class="fa-brands fa-react"></i>
            <p>React.js</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
            data-aos-offset="-300"
          >
            <i class="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="600"
            data-aos-offset="-300"
          >
            <i class="fa-brands fa-node-js"></i>
            <p>Node-js</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="700"
            data-aos-offset="-300"
          >
            <i class="fa-solid fa-database"></i>
            <p>PostgreSQL</p>
          </div>
        </div>

        <h3 className="subtext">Adobe Creative Cloud</h3>
        <div className="icon-container">
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="200"
            data-aos-offset="-300"
          >
            <img
              alt="premiere pro icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968575.png"
            ></img>
            <p>Premiere Pro</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="300"
            data-aos-offset="-300"
          >
            <img
              alt="photoshop icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968572.png"
            ></img>
            <p>Photoshop</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="400"
            data-aos-offset="-300"
          >
            <img
              alt="illustrator icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968522.png"
            ></img>
            <p>Illustrator</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="500"
            data-aos-offset="-300"
          >
            <img
              alt="after effects icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968474.png"
            ></img>
            <p>After Effects</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="600"
            data-aos-offset="-300"
          >
            <img
              alt="audition icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968486.png"
            ></img>
            <p>Audition</p>
          </div>
          <div
            className="icon-indv"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="700"
            data-aos-offset="-300"
          >
            <img
              alt="character animator icon"
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968501.png"
            ></img>
            <p>Character Anim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
