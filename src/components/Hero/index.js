import React from 'react'
import Teaser from '../../videos/Teaser.mp4'
import './hero.css'

const HeroSection = () => {
  return (
    <div className="hero-section">
       <div className='hero-section-content'>
       <div className="overlay"></div> 
       <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src={Teaser} type="video/mp4" />
  </video>
  <div className="container h-100">
    <div className="d-flex h-100 text-center align-items-center">
      <div className="w-100 text-white">
        <h1 className="display-3">GET A DAILY ENGLISH STORY</h1>
        <p className="lead mb-0">Subscribe to the application by e-mail</p>
        <button type="button" className="btn btn-outline-secondary mt-4">SIGN UP</button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default HeroSection;