import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Contsec from '../components/Contsec';
import Getsec from '../components/Getsec';

import '../Assets/Styles/pages/Loyalty.css';

function Loyalty() {

    function schedule() {
        window.location.href = '/booking';
    }

    return (
        <div className='row' id='Loyalty'>
            <Helmet>
                <title>Loyalty - Destivict</title>
            </Helmet>
            <header>
                <Nav/>
                <div id='hd-inner'>
                    <h1>Loyalty Programs</h1>
                    <p>We want to build long-term relationships with our customers, so we will offer the following Loyalty Programs</p>
                    <button onClick={schedule} style={{backgroundColor: "#B7410E", justifySelf: 'center'}} className="btn">
                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book a Service</a>
                    </button>
                </div>
            </header>
            <main>
                <section id='sectionn1' style={{display: 'grid', placeItems: 'center', backgroundColor: '#1F1F1F'}}>
                    <div style={{display: 'grid', padding: '5%', borderRadius: '10px', color: 'white'}}>
                        <div id='wrapper' style={{textAlign: 'center'}}>Rust Care Loyalty Program</div>
                        <div id='lydt' style={{border: 'none'}}>
                            <span>After every <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>third rust proofing service</span>, customers will receive <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>50%</span> off their next service. </span>
                            <span>Special discounts of <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>10%</span> will be provided for rust proofing on multiple vehicles for families or small businesses.</span>
                        </div>
                    </div>
                    <div style={{display: 'grid', padding: '5%', borderRadius: '10px', color: 'white'}}>
                        <div id='wrapper' style={{textAlign: 'center', backgroundColor: '#C1A875'}}>Fleet Maintenance Loyalty</div>
                        <div id='lydt' style={{border: 'none'}}>
                            <span>Fleet customers who use our rust protection service for <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>5 vehicles or more</span> will receive a <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>5%</span> discount on future services after their first fleet treatment.</span>
                            <span>or fleets of <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>10 vehicles or more</span>, the discount will increase to <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>10%</span> after the second full fleet service.</span>
                        </div>
                    </div>
                    <div id='lstwrap' style={{border: 'none'}}>
                        <div>
                            <span style={{textAlign: 'center', padding: '2%',fontWeight: '700', marginBottom: '5%', borderRadius: '10px' , backgroundColor: '#59CAFA'}}>Tire Change Loyalty Program</span>
                            <span>Customers who return for a <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>third consecutive tire change</span> service will get <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>25%</span> off their next tire change.</span>
                        </div>
                        <div>
                            <span style={{textAlign: 'center', padding: '2%',fontWeight: '700', marginBottom: '5%', borderRadius: '10px' , backgroundColor: '#C95C5C'}}>Referral Bonus</span>
                            <span>Customers who refer new clients will receive a <span style={{color: '#FFFF00', border: 'none', padding: '0px'}}>$25 credit</span> for every Successful referral toward their next Service.</span>
                        </div>
                    </div>
                </section>
                <Contsec/>
                <Getsec/>
            </main>
            <Footer/>
        </div>
    )
}

export default Loyalty;