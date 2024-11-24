import React from 'react';
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../Assets/Styles/pages/Contact.css';

function Contact() {
  return (
    <div className='row' id='Contact'>
      <Helmet>
        <title>Contact Us - Destivict</title>
      </Helmet>
        <header>
          <Nav/>
          <div id='hd-inner'>
            <h1>Contact us</h1>
            <p>We're here to answer your questions, assist with any inquiries, and provide the support you need. Reach out today!</p>
          </div>
        </header>
        <span id='mss' style={{placeItems: 'center'}}>
            <form style={{display: 'grid', textAlign: 'start'}}>
                <label>Your Name</label>
                <input type='text'/>
                <label>Your Email</label>
                <input type='email'/>
                <label>Topic</label>
                <input type=''/>
                <label>Message</label>
                <textarea placeholder='Write your message' rows='5' cols='50'></textarea>
                <button style={{placeSelf: 'start', display: 'grid', backgroundColor: "#B7410E", marginTop: '4%', padding: '2%', justifySelf: 'center', color: "white", fontWeight: 'bold'}} className="btn">Send Message</button>
            </form>
        </span>
        <Footer/>
    </div>
  )
}

export default Contact;