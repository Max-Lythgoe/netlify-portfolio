import React from 'react'
import "./Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
    AOS.init();

  return (
    <div className='projects-container'>
        <h2 className='subtitle' id="projects">PROJECTS</h2>

        <div className='project-card' data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-offset="-500">
            <h3 className='project-title'>TechStack</h3>
            <h4 className='project-subtitle'>React.js Frontend, Node.js Backend, and PostgreSQL Database</h4>
            <a className='red-link' href='https://github.com/Max-Lythgoe/Specs-Capstone' target="_blank" rel="noreferrer">
            <button className='red-button'>View Github Repo</button>
            </a>
            <br></br>
            <iframe width="787" height="443" src="https://www.youtube.com/embed/K_o8q-KdgIg" title="DevMountain - Final Project - Max Lythgoe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <iframe width="787" height="443" src="https://www.youtube.com/embed/hu12cJahtD4" title="Foundations Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className='desc'>This is my Foundations project. This capstone project is the product of everything I have learned throughout the initial 8 weeks of learning the foundations of web development. I wanted to create a mock music playlist site. To create this I used bootstrap to create the main columns of playlists on the home screen. I also used axios methods such as get, post, and delete to create song cards which would appear when a playlist was clicked or when a song was created. This was a very fun project to work on and I enjoyed creating custom designs for the entire page. It was quite a challenge to make an entire site, both back end and front end, from scratch and I learned a lot from this project.</p>
        </div>
    </div>
  )
}

export default Projects