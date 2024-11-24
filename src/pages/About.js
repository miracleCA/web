import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Getsec from '../components/Getsec';

import ceo from '../Assets/Images/CEO.jpg'

import '../Assets/Styles/pages/About.css';

function About() {
  return (
    <div className='row' id='About'>
      <Helmet>
        <title>About Us - Destivict</title>
      </Helmet>
        <header>
          <Nav/>
          <div id='hd-inner'>
            <h1>About us</h1>
            <div id='abtus'>
                <span id='cc1'>At Destivict Solutions Inc., we are dedicated to delivering top-tier rust protection and comprehensive fleet care services in North Bay, Ontario. Our mission is simple: to help our clients safeguard their vehicles and equipment from the damaging effects of rust and corrosion. We specialize in offering customized rust-proofing solutions for everything from personal vehicles to industrial fleets, ensuring durability, safety, and reduced maintenance costs.<br/><br/>
                    With a strong focus on customer satisfaction, we provide both in-house and mobile services, making it easier for fleet owners, individual vehicle owners, government entities, and agricultural businesses to maintain the value and lifespan of their assets. Whether it's rust-proofing, undercoating, fleet washing, or preventive maintenance, our experts are equipped with the skills and tools necessary to protect vehicles in even the harshest environments.
                </span>
                <span id='cc2'>
                    <img alt='' src={ceo}/>
                </span>
            </div>
          </div>
        </header>
        <main>
          <section id='section4'>
            <h1>Why Choose Us</h1>
            <div>
              <span>
                <h2>Comprehensive Services</h2>
                <p>From rust-proofing to fleet care, we offer solutions tailored to every need.</p>
              </span>
              <span>
                <h2>Mobile Fleet Care</h2>
                <p>We come to you, providing on-site services to keep your fleet in top condition without downtime.</p>
              </span>
              <span>
                <h2>High-Quality Standards</h2>
                <p>Our services are designed to protect your assets, reduce long-term maintenance costs, and extend operational life.</p>
              </span>
              <span>
                <h2>Eco-Friendly Solutions</h2>
                <p>We use eco-conscious products and methods to ensure minimal environmental impact.</p>
              </span>
            </div>
          </section>
          <section id='section2'>
            <h1 style={{color: '#000080'}}>Our Vision</h1>
            <p>Our goal is to be the leading provider of rust protection and fleet care services, not just in North Bay, but across Ontario and beyond. We are committed to innovation, superior customer service, and building long-term relationships with our clients.</p>
          </section>
          <Getsec/>
        </main>
        <Footer/>
    </div>
  )
}

export default About;