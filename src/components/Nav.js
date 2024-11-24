import React from 'react';

import logo from "../Assets/Images/Destivict  Solutions Logo full with motto.png";
import '../Assets/Styles/components/Nav.css';

function Nav() {

  function schedule() {
    window.location.href = '/booking';
  }

  return (
    <div className='Navsec'>
      <nav className="navbar navbar-expand-lg bg-transparent" style={{fontWeight: "700"}}>
        <div className="container-fluid">
          <span className="navbar-brand">
            <a href="/">
              <img id='navimg' alt='' src={logo}/>
            </a>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav" id='midnav'>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/" ? "#FFFF00" : 'white')}} href="/" className="nav-link" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/pricing" ? "#FFFF00" : 'white')}} href="/pricing" className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "#section2" ? "#FFFF00" : 'white')}} href="https://destivictsolutions.com/#section2" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/loyalty" ? "#FFFF00" : 'white')}} href="/loyalty" className="nav-link">Loyalty</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/warranty" ? "#FFFF00" : "white")}} href="/warranty" className="nav-link">Warranty</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/contact" ? "#FFFF00" : "white")}} href="/contact" className="nav-link">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a style={{color: (window.location.pathname == "/about" ? "#FFFF00" : "white")}} href="/about" className="nav-link">About Us</a>
                </li>
              </ul>
              <ul className="navbar-nav" id='endnav'>
                <button onClick={schedule} style={{color: "unset"}} className="nav-link active nav-item" aria-current="page">
                  <a href="/booking" style={{textDecoration: "none"}}>Book Now</a>
                </button>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;