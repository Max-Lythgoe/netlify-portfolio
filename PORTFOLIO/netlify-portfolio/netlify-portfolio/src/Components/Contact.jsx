import React from "react";
import "./Contact.css";
// import myResume from "./pics/max-resume.pdf"

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="subtitle" >CONTACT ME</h2>
      <div className="icon-container-contact">
        <div className="row1">
        <div className="icon-indv">
          <a href="https://github.com/Max-Lythgoe" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github white shake"></i>
          <p className="white">GitHub</p>
          </a>
        </div>

        <div className="icon-indv">
            <a href="https://www.linkedin.com/in/maxlythgoe/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-linkedin white shake"></i>
          <p className="white">LinkedIn</p>
          </a>
        </div>
        </div>

        <div className="row2">
        <div className="icon-indv">
            <a href="https://docs.google.com/document/d/1sEumTM1Fia80QPUgiL9wUAC4Im9C884sb3fkQ2P63uw/edit?usp=sharing" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-file-arrow-down white shake"></i>
          <p className="white">Resume</p>
          </a>
        </div>

        <div className="icon-indv">
            <a href="mailto:maxlythgoedev@gmail.com">
          <i class="fa-solid fa-envelope white shake"></i>
          <p className="white">Email</p>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
