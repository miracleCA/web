import React from 'react';

import logo from "../Assets/Images/Destivict  Solutions Logo full with motto.png";

import '../Assets/Styles/components/Footer.css';

function Footer() {
  return (
    <footer id='ft'>
        <div id='fstft' className='nm'>
            <span id='ftcont'>
                <img id='logo' alt='' src={logo} />
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-solid fa-location-dot"></i></span>
                    <span>54-644 Lakeshore Drive North Bay Ontario, Canada</span>
                </div>
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-solid fa-phone"></i></span>
                    <span>+1 437 661 8362</span>
                </div>
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-regular fa-envelope"></i></span>
                    <span>destivictsolutions@gmail.com</span>
                </div>
            </span>
            <div id='mobftcv'>
                <span id='ftnav' style={{display: 'grid', textAlign: 'start'}}>
                    <h2 style={{color: 'white'}}>Navigation</h2>
                    <span><a href='/'>Home</a></span>
                    <span><a href='/pricing'>Pricing</a></span>
                    <span><a href='/contact'>Contact Us</a></span>
                    <span><a href='/about'>About Us</a></span>
                </span>
                <span id='ftnav' style={{display: 'grid', textAlign: 'start'}}>
                    <h2 style={{color: 'white'}}>Solutions</h2>
                    <span><a href='https://destivictsolutions.com/#section2'>Services</a></span>
                    <span><a href='/loyalty'>Loyalty</a></span>
                    <span><a href='/warranty'>Warranty</a></span>
                </span>
            </div>
        </div>
        <div id='fstft' className='nn'>
            <img id='logo' alt='' src={logo} />
            <span id='ftcont'>
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-solid fa-location-dot"></i></span>
                    <span>54-644 Lakeshore Drive North Bay Ontario, Canada</span>
                </div>
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-solid fa-phone"></i></span>
                    <span>+1 437 661 8362</span>
                </div>
                <div style={{display: 'flex'}}>
                    <span style={{paddingRight: '15px'}}><i class="fa-regular fa-envelope"></i></span>
                    <span>destivictsolutions@gmail.com</span>
                </div>
            </span>
            <div id='mobftcv'>
                <span id='ftnav' style={{display: 'grid', textAlign: 'start'}}>
                    <h2 style={{color: 'white'}}>Navigation</h2>
                    <span><a href='/'>Home</a></span>
                    <span><a href='/pricing'>Pricing</a></span>
                    <span><a href='/contact'>Contact Us</a></span>
                    <span><a href='/about'>About Us</a></span>
                </span>
                <span id='ftnav' style={{display: 'grid', textAlign: 'start'}}>
                    <h2 style={{color: 'white'}}>Solutions</h2>
                    <span><a href='https://destivictsolutions.com/#section2'>Services</a></span>
                    <span><a href='/loyalty'>Loyalty</a></span>
                    <span><a href='/warranty'>Warranty</a></span>
                </span>
            </div>
        </div>
        <div id='lstft'>
            <span>Copyright © {new Date().getFullYear()}. All rights reserved.</span>
            <span style={{display: 'flex'}}>
                <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/company/105468056'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a rel='noreferrer' target='_blank' href='https://web.facebook.com/people/Destivict-Solutions-INC/61568692976625'>
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a rel='noreferrer' target='_blank' href=''>
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a rel='noreferrer' target='_blank' href='https://twitter.com/destivictINC'>
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer;