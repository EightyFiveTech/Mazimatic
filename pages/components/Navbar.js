import React from 'react'
 
const Navbar = () => {
  
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="Navbar">
  <a className="navbar-brand" href="#">
      <img src="./assets/images/logo/logo.svg" className="navbar-logo" />
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
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
  </div>
</nav>
  )
}

export default Navbar