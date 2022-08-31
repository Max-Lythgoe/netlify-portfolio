import React from 'react'
import "./Header.css"
import mainPhoto from './pics/max-logo-white.png'

const Header = () => {

  return (
    <div className='main-container'>
    <img src={mainPhoto} alt='webdev'></img>
    <h1 className='main-title'>MAX LYTHGOE</h1>
    <hr></hr>
    <div className='links-container'>
    <a href="#projects">PROJECTS</a>
    <a href="#skills">SKILLS</a>
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT</a>
    </div>
    </div>
  )
}

export default Header