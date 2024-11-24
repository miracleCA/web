import React from 'react';
import '../Assets/Styles/components/Contsec.css';

function Contsec() {

  function myFunction() {
    window.location.href = '/contact';
  }

  return (
    <section id='section7'>
        <div style={{display: 'grid', color: 'white'}}>
            <h1>Fleet Care On Your Terms, At Your Location</h1>
            <p>We bring our expert rust protection and maintenance services to you—saving time, reducing downtime, and keeping your fleet in top shape, wherever you are.</p>
            <button onClick={myFunction} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center', margin: '2% 5%'}} className="btn">
                <a href="/contact" style={{textDecoration: "none", color: "white", fontWeight: 'bold', fontSize: '20px'}}>Contact Us</a>
            </button>
        </div>
    </section>
  )
}

export default Contsec;