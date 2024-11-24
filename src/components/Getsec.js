import React from 'react';
import book from '../Assets/Images/Bookimg.png';

import '../Assets/Styles/components/Getsec.css';

function Getsec() {

    function get() {
        window.location.href = '/booking';
      }

    return (
        <section id='section8'>
            <div>
                <img alt='' src={book}/>
            </div>
            <div id='bktxt'>
                <h2>Get Rust Protection That Lasts</h2>
                <p>Ready to protect your vehicle from rust damage? Schedule your appointment today!</p>
                <button onClick={get} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center', margin: '2% 0px'}} className="btn">
                    <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold', fontSize: '20px'}}>Book Now</a>
                </button>
            </div>
        </section>
    )
}

export default Getsec;