import React from 'react'
import "./Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import uipic from './pics/uimockup.PNG';


const Projects = () => {
    AOS.init();

  return (
    <div className='projects-container'>
        <h2 className='subtitle' id="projects">PROJECTS</h2>

        <div className='project-card' data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-offset="-500">
            <h3 className='project-title'>Utah Frontend Redesign</h3>
            <h4 className='project-subtitle'>HTML, CSS, JavaScript</h4>
            <a className='red-link' href='https://github.com/Max-Lythgoe/FunDesign' target="_blank" rel="noreferrer">
            <button className='red-button'>View Github Repo</button>
            </a>
            <br></br>
            
            <a target='_blank' rel="noreferrer" href='https://utahremake.netlify.app/'><button className='demo-btn'>View Demo</button></a>
            
            <p className='desc'>This was a fun little project I recently made to re-create the <a target='_blank' rel="noreferrer" href='https://www.utah.gov/index.html' className='utah-link'>Utah.gov</a> home page. I wanted to test my CSS skills by recreating certain animations or sections of the page while also creating some things entirely new in my own design. Made for fun using HTML, CSS and JavaScript. (Note: this was not optimized for mobile and was made for desktop view only)</p>
        </div>

        <div className='project-card' data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-offset="-500">
            <h3 className='project-title'>UI Mockups</h3>
            <h4 className='project-subtitle'>Figma</h4>
            <div className='rows'>
            <a className='red-link' href='https://www.figma.com/file/b77fvpU6MwJKZXoA7sOUso/Resturaunt?node-id=0%3A1&t=XU826n9AmkFRk2rx-1' target="_blank" rel="noreferrer">
            <button className='red-button'>View Resturaunt Mockup</button>
            </a>
            <a className='red-link' href='https://www.figma.com/file/KQLUivBJYlNVglXRFIfagw/TechStack?t=BsWXMbKjEmqpLoCU-1' target="_blank" rel="noreferrer">
            <button className='red-button'>View Tech Mockup</button>
            </a>
            <a className='red-link' href='https://www.figma.com/file/ub8BCDwNzR6t6oV2C38heT/Maxed-Out-Music?node-id=0%3A1&t=S1e2LjWRKswrgnHq-1' target="_blank" rel="noreferrer">
            <button className='red-button'>View Music Mockup</button>
            </a>
            </div>
            <br></br>
            <img className='ui-pic' alt='website wireframe mockup' src={uipic}></img>
            
            <p className='desc'>These are various UI mockups I have made using Figma. Checkout the links for more info. None of these sites are deployed but were made simply to showcase design guidelines and wireframes created for personal projects or for fun.</p>
        </div>

        <div className='project-card' data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-offset="-500">
            <h3 className='project-title'>TechStack</h3>
            <h4 className='project-subtitle'>React.js Frontend, Node.js Backend, and PostgreSQL Database</h4>
            <a className='red-link' href='https://github.com/Max-Lythgoe/Specs-Capstone' target="_blank" rel="noreferrer">
            <button className='red-button'>View Github Repo</button>
            </a>
            <br></br>
            <iframe className='youtube' width="787" height="443" src="https://www.youtube.com/embed/K_o8q-KdgIg" title="DevMountain - Final Project - Max Lythgoe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p className='desc'>TechStack is a fake company made for my DevMountain capstone project. It contains a home, categories, support and cart page. Each page is made with multiple components and custom CSS styling. Each product takes from my postgreSQL tables with general information and photos taken from BestBuy.com. Please watch the video below for a quick demo and more info, or check out the github repo for my code!</p>
        </div>
        
        <div className='project-card' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <h3 className='project-title'>Maxed Out Music</h3>
            <h4 className='project-subtitle'>HTML, CSS, JavaScript</h4>
            <a href='https://github.com/Max-Lythgoe/Foundations-Capstone' target="_blank" rel="noreferrer">
              <button className='red-button'>View Github Repo</button>
            </a>
            <br></br>
            <iframe className='youtube' width="787" height="443" src="https://www.youtube.com/embed/hu12cJahtD4" title="Foundations Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className='desc'>This is my Foundations project. This capstone project is the product of everything I have learned throughout the initial 8 weeks of learning the foundations of web development. I wanted to create a mock music playlist site. To create this I used bootstrap to create the main columns of playlists on the home screen. I also used axios methods such as get, post, and delete to create song cards which would appear when a playlist was clicked or when a song was created. This was a very fun project to work on and I enjoyed creating custom designs for the entire page. It was quite a challenge to make an entire site, both back end and front end, from scratch and I learned a lot from this project.</p>
        </div>
    </div>
  )
}

export default Projects