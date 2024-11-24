import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Carousel from "react-elastic-carousel";

import Nav from  '../components/Nav';
import Contsec from '../components/Contsec';
import Getsec from '../components/Getsec';
import Footer from '../components/Footer';

import img1 from '../Assets/Images/Pricing/image1.png'
import img2 from '../Assets/Images/Pricing/image2.png'
import img3 from '../Assets/Images/Pricing/image3.png'
import img4 from '../Assets/Images/Pricing/image4.png'
import img5 from '../Assets/Images/Pricing/image5.png'
import img6 from '../Assets/Images/Pricing/image6.png'
import img7 from '../Assets/Images/Pricing/image7.png'
import img8 from '../Assets/Images/Pricing/image8.png'
import img9 from '../Assets/Images/Pricing/image9.png'
import img10 from '../Assets/Images/Pricing/image10.png'
import img11 from '../Assets/Images/Pricing/image11.png'
import img12 from '../Assets/Images/Pricing/image12.png'
import img13 from '../Assets/Images/Pricing/image13.png'

import '../Assets/Styles/pages/Pricing.css';


function Pricing() {

    const [firstElement, firstElementShow] = useState(true);
    const [secondElement, secondElementShow] = useState(false);
    const [thirdElement, thirdElementShow] = useState(false);
    const [fourthElement, fourthElementShow] = useState(false);
    const [fifthElement, fifthElementShow] = useState(false);

    const [buttonActive, setButtonActive] = useState("A");

    const [servdp, setServdp] = useState('')

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];

    function schedule() {
        window.location.href = '/booking';
    }

  return (
    <div className='row' id='Pricing'>
        <Helmet>
            <title>Pricing - Destivict</title>
        </Helmet>
        <header>
            <Nav/>
            <div id='hd-inner'>
                <h1>Affordable Vehicle Rust Protection & Care Services</h1>
                <p>Transparent pricing for all vehicle types, from personal cars to heavy-duty equipment</p>
                <button onClick={schedule} style={{backgroundColor: "#B7410E", justifySelf: 'center'}} className="btn">
                    <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book a Service</a>
                </button>
          </div>
        </header>
        <main>
            <section id='section1'>
                <div style={{placeItems: 'center'}}>
                    <span id='serv1'>
                        <a style={{color: (buttonActive == 'A' ? '#FF6A00' : '#6F728C')}} onClick={() => {setButtonActive("A"); secondElementShow(false); thirdElementShow(false); fourthElementShow(false); fifthElementShow(false);firstElementShow(true)}}>Personal Vehicles</a>
                        <a style={{color: (buttonActive == 'B' ? '#FF6A00' : '#6F728C')}} onClick={() => {setButtonActive("B"); secondElementShow(true); thirdElementShow(false); fourthElementShow(false); fifthElementShow(false);firstElementShow(false)}}>Industrial Equipment</a>
                        <a style={{color: (buttonActive == 'C' ? '#FF6A00' : '#6F728C')}} onClick={() => {setButtonActive("C"); secondElementShow(false); thirdElementShow(true); fourthElementShow(false); fifthElementShow(false);firstElementShow(false)}}>Mobile Fleet</a>
                        <a style={{color: (buttonActive == 'D' ? '#FF6A00' : '#6F728C')}} onClick={() => {setButtonActive("D"); secondElementShow(false); thirdElementShow(false); fourthElementShow(true); fifthElementShow(false);firstElementShow(false)}}>Tire Change</a>
                        <a style={{color: (buttonActive == 'E' ? '#FF6A00' : '#6F728C')}} onClick={() => {setButtonActive("E"); secondElementShow(false); thirdElementShow(false); fourthElementShow(false); fifthElementShow(true);firstElementShow(false)}}>Desalting</a>
                    </span>
                    <span id='serv2'>
                        <select style={{width: '100%', height: '50px', fontSize: '20px', color: '#FF6A00'}} value={servdp} onChange={(e) => setServdp(e.target.value)}>
                            <option style={{color: '#6F728C'}}>Select Service</option>
                            <option style={{color: 'FF6A00', padding: '2%'}} value="Personal Vehicles">Personal Vehicles</option>
                            <option style={{color: 'FF6A00', padding: '2%'}} value="Industrial Equipment">Industrial Equipment</option>
                            <option style={{color: 'FF6A00', padding: '2%'}} value="Mobile Fleet">Mobile Fleet</option>
                            <option style={{color: 'FF6A00', padding: '2%'}} value="Tire Change">Tire Change</option>
                            <option style={{color: 'FF6A00', padding: '2%'}} value="Desalting">Desalting</option>
                        </select>
                    </span>
                </div>
                <h1 style={{padding: '3% 0px'}}>Service Pricing</h1>
                <div id='serv21'>
                    {firstElement ? 
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Rust Proofing for Personal Vehicles</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>2 and 4 door cars</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for 2 and 4 door cars (Eg Toyota Camry)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 130</p>
                                        </span>
                                        <img id="b" alt='' src={img1}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>4 Door Mini-Vans.</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for 4 Door Mini-Vans. (i.e Toyota Sienna Mini-Van)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 140</p>
                                        </span>
                                        <img id="b" alt='' src={img2}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Small or Medum SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Small or Medum SUV (ie.Toyota Rav4)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 150</p>
                                        </span>
                                        <img id="b" alt='' src={img3}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Large SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Large SUV (ie. Ford Explorer)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 150</p>
                                        </span>
                                        <img id="b" alt='' src={img4}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Extra-Large SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Extra-Large SUV (ie. Cadilac Escalade)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img5}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Small, Medium and Large</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for All 2 door pick-up trucks. Small, Medium and Large (ie. Ford F150, 2 & 4 door) </p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img6}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>   
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Full size cargo or passenger</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Full size cargo or passenger van. (ie. Ford E-series work van </p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img7}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>   
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {secondElement ? 
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Industrial Equipment Rust Protection</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Heavy Machinery Rust Proofing</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$300 - $500 per unit</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(based on size and complexity)</p>
                                        </span>
                                        <img id="b" alt='' src={img8}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {thirdElement ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Mobile Fleet Rust Protection</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Fleet Vehicles</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$150 per vehicle</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(discounted rates for fleets over 10 vehicles)</p>
                                        </span>
                                        <img id="b" alt='' src={img9}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : "" }
                    {fourthElement ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Tire Change Services</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Basic Tire Change (Summer/Winter)</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$60 - $80 (for all four tires)</p>
                                        </span>
                                        <img id="b" alt='' src={img10}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Tire Balancing and Alignment</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$100 - $150</p>
                                        </span>
                                        <img id="b" alt='' src={img11}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {fifthElement ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Desalting Services</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Vehicle Desalting (Exterior/Underbody)</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$80 - $120</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(discounted rates for fleets over 10 vehicles)</p>
                                        </span>
                                        <img id="b" alt='' src={img12}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Heavy Equipment Desalting</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$150 - $250</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(based on size)</p>
                                        </span>
                                        <img id="b" alt='' src={img13}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                </div>
                <div id='serv22'>
                    {servdp == 'Personal Vehicles' ? 
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Rust Proofing for Personal Vehicles</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>2 and 4 door cars</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for 2 and 4 door cars (Eg Toyota Camry)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 130</p>
                                        </span>
                                        <img id="b" alt='' src={img1}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>4 Door Mini-Vans.</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for 4 Door Mini-Vans. (i.e Toyota Sienna Mini-Van)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 140</p>
                                        </span>
                                        <img id="b" alt='' src={img2}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Small or Medum SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Small or Medum SUV (ie.Toyota Rav4)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 150</p>
                                        </span>
                                        <img id="b" alt='' src={img3}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Large SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Large SUV (ie. Ford Explorer)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 150</p>
                                        </span>
                                        <img id="b" alt='' src={img4}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Extra-Large SUV</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Extra-Large SUV (ie. Cadilac Escalade)</p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img5}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Small, Medium and Large</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for All 2 door pick-up trucks. Small, Medium and Large (ie. Ford F150, 2 & 4 door) </p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img6}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>   
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid'}}>
                                            <h3 style={{fontWeight: '600'}}>Full size cargo or passenger</h3>
                                            <p style={{color: '#707072', fontSize: '25px'}}>Standard Rust Proofing with Undercoating for Full size cargo or passenger van. (ie. Ford E-series work van </p>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$ 160</p>
                                        </span>
                                        <img id="b" alt='' src={img7}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>   
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {servdp == 'Industrial Equipment' ? 
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Industrial Equipment Rust Protection</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Heavy Machinery Rust Proofing</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$300 - $500 per unit</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(based on size and complexity)</p>
                                        </span>
                                        <img id="b" alt='' src={img8}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {servdp == 'Mobile Fleet' ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Mobile Fleet Rust Protection</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Fleet Vehicles</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$150 per vehicle</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(discounted rates for fleets over 10 vehicles)</p>
                                        </span>
                                        <img id="b" alt='' src={img9}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : "" }
                    {servdp == 'Tire Change' ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Tire Change Services</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Basic Tire Change (Summer/Winter)</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$60 - $80 (for all four tires)</p>
                                        </span>
                                        <img id="b" alt='' src={img10}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Tire Balancing and Alignment</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$100 - $150</p>
                                        </span>
                                        <img id="b" alt='' src={img11}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                    {servdp == 'Desalting' ?
                        <div id='priclist'>
                            <h2 style={{color: '#B7410E', fontWeight: '600', fontSize: '27px', paddingBottom: '3%'}}>Desalting Services</h2>
                            <Carousel breakPoints={breakPoints}>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Vehicle Desalting (Exterior/Underbody)</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$80 - $120</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(discounted rates for fleets over 10 vehicles)</p>
                                        </span>
                                        <img id="b" alt='' src={img12}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                                <item style={{display: 'grid'}}>
                                    <div id='item'>
                                        <span id="a" style={{display: 'grid', padding: '0px', width: '-webkit-fill-available'}}>
                                            <h3 style={{fontWeight: '600'}}>Heavy Equipment Desalting</h3>
                                            <p style={{color: '#000080', fontWeight: 700, fontFamily: 'Poppins', fontSize: '30px'}}>$150 - $250</p>
                                            <p style={{color: '#707072', fontSize: '25px'}}>(based on size)</p>
                                        </span>
                                        <img id="b" alt='' src={img13}/>
                                    </div>
                                    <button onClick={schedule} style={{backgroundColor: "#B7410E", width: '15%', padding: '2%', justifySelf: 'center'}} className="btn">
                                        <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
                                    </button>
                                </item>
                            </Carousel>
                        </div>
                    : '' }
                </div>
            </section>
            <Contsec/>
            <Getsec/>
        </main>
        <Footer/>
    </div>
  )
}

export default Pricing;