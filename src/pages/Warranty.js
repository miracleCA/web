import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Getsec from '../components/Getsec';

import '../Assets/Styles/pages/Warranty.css';

function Warranty() {
  return (
    <div className='row' id='Warranty'>
        <Helmet>
            <title>Warranty - Destivict</title>
        </Helmet>
        <header>
          <Nav/>
          <div id='hd-inner'>
            <h1>Guaranteed Protection You Can Rely On</h1>
            <p>Our comprehensive warranty ensures lasting rust protection. Explore our coverage options and conditions for peace of mind on every service.</p>
          </div>
        </header>
        <main>
            <section id='section1'>
                <h1 style={{color: '#000080', fontWeight: '700'}}>Rust Protection Warranty</h1>
                <span>Our rust proofing services come with a <span style={{color: '#FF6A00', padding: "0px"}}>1-year warranty</span>. If rust appears in treated areas during this time, we will reapply the treatment <span style={{color: '#FF6A00', padding: '0px'}}>free of charge</span>.</span>
                <div id='mm' style={{backgroundColor: '#3B3838'}}>
                    <div id='wrd' style={{color: 'white'}}>
                        <h2 style={{textAlign: 'start'}}>Conditions</h2>
                        <ul>
                            <li>The warranty covers the areas treated and is applicable only if the vehicle or equipment is properly maintained (e.g., regular washing to remove road salts).</li>
                            <li>Vehicles that are driven in extreme conditions (e.g., off-road, heavy industrial work) are eligible, but warranty claims will be reviewed on a case-by-case basis.</li>
                        </ul>
                    </div>
                    <div id='wrd' style={{backgroundColor: '#FFFFFF'}}>
                        <h2 style={{textAlign: 'start', marginBottom: '0px', height: '0px'}}>Exclusions</h2>
                        <ul>
                            <li>The warranty does not cover untreated areas or pre-existing rust spots that were not addressed before the application.</li>
                        </ul>
                    </div>
                </div>
                <h1 style={{color: '#000080', fontWeight: '700'}}>Tire Service Warranty</h1>
                <span>Our tire change and balancing services come with a <span style={{color: '#FF6A00', padding: "0px"}}>6-month</span> warranty for alignment and balancing issues. If any issues arise, customers can bring their vehicle back within this period for a free adjustment.</span>
            </section>
            <Getsec/>
        </main>
        <Footer/>
    </div>
  )
}

export default Warranty;