import React from 'react'
 
const Navbar = () => {
  
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="Navbar">
  <a className="navbar-brand" href="#">
      <img src="./assets/images/logo/logo.svg" className="navbar-logo" />
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto desktop-links">
      <li className="nav-item">
        <a className="nav-link" href="#our-vision">Our Vision</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#mazi-verse">MaziVerse</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Nftkart">NFTkart</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Roadmap">Roadmap</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Features">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Comingsoon">More</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto mobile-links">
      <li className="nav-item">
        <a className="nav-link" href="#OurVisionMobile">Our Vision</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#MaziVerseMobile">MaziVerse</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#NftkartMobile">NFTkart</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#RoadmapMobile">Roadmap</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#FeaturesMobile">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#ComingsoonMobile">More</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar