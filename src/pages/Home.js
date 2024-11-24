import React from 'react';
import Carousel from "react-elastic-carousel";
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Contsec from '../components/Contsec';
import Getsec from '../components/Getsec';

import rustV from '../Assets/Images/Sec1 rust vehcle.png';

import icon1 from '../Assets/Icons/WhyIcon1.png';
import icon2 from '../Assets/Icons/WhyIcon2.png';
import icon3 from '../Assets/Icons/WhyIcon3.png';

import why21 from '../Assets/Images/Why21.png';
import why22 from '../Assets/Images/Why22.png';

import '../Assets/Styles/pages/Home.css';

function Home() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  function pricing() {
    window.location.href = '/pricing';
  }

  function schedule() {
    window.location.href = '/booking';
  }

  return (
    <div className='row' id='Home'>
      <Helmet>
        <title>Home - Destivict</title>
      </Helmet>
        <header>
          <Nav/>
          <div id='hd-inner'>
            <h1>Protect Your Vehicle and Equipment from Rust Damage with Our Advanced Solutions.</h1>
            <p>Extend your vehicle's lifespan with industry-leading anti-rust treatments.</p>
            <button onClick={schedule} style={{backgroundColor: "#B7410E", justifySelf: 'center'}} className="btn">
              <a href="/booking" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Book Now</a>
            </button>
          </div>
        </header>
        <main>
          <section id='section1'>
            <article>
              <h1 style={{color: '#000080'}}>Why Rust Protection Matters for Your Vehicle</h1>  
              <img id='mbimg' alt='' src={rustV}/>
              <div id='listicle'>
                <ol style={{display: 'grid'}}>
                  <li style={{color: '#000080', fontWeight: '600', fontSize: '30px', textAlign: 'left', borderTop: '2px solid black'}}>
                    <span style={{color: 'black', fontWeight: '400', fontSize: '25px', marginLeft: '2%'}}>Prevent structural damage</span>
                    <p style={{color: '#7E8492',  marginLeft: '2%', fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur. Dolor faucibus cursus purus dui vitae mi tortor. Vestibulum pretium tellus mauris ut sagittis. Eget.</p>
                  </li>
                  <li style={{color: '#000080', fontWeight: '600', fontSize: '30px', textAlign: 'left', borderTop: '2px solid black'}}>
                    <span style={{color: 'black', fontWeight: '400', fontSize: '25px', marginLeft: '2%'}}>Increase vehicle resale value</span>
                    <p style={{color: '#7E8492',  marginLeft: '2%', fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur. Dolor faucibus cursus purus dui vitae mi tortor. Vestibulum pretium tellus mauris ut sagittis. Eget.</p>
                  </li>
                  <li style={{color: '#000080', fontWeight: '600', fontSize: '30px', textAlign: 'left', borderTop: '2px solid black'}}>
                    <span style={{color: 'black', fontWeight: '400', fontSize: '25px', marginLeft: '2%'}}>Maintain the safety of your vehicle</span>
                    <p style={{color: '#7E8492',  marginLeft: '2%', fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur. Dolor faucibus cursus purus dui vitae mi tortor. Vestibulum pretium tellus mauris ut sagittis. Eget.</p>
                  </li>
                </ol>
                <img id='dskimg' alt='' src={rustV}/>
              </div>
            </article>        
          </section>
          <section id='section2' style={{backgroundColor: '#3B3838'}}>
            <h1 style={{color: 'white', textAlign: 'left'}}>Our Comprehensive services</h1>
            <section className="slider-container">
                <div className="slider-images pagination">
                    <div id='bk1' className="slider-img active">
                      <div id='spst' style={{backgroundColor: 'rgb(0 0 0 / 72%)', width: '100%', height: '100%', placeContent: 'center', fontFamily: 'Poppins'}}>
                        <h2 style={{fontFamily: 'Roboto Slab'}}>Rust Protection Service</h2>
                      </div>
                        <span>
                          <h2 style={{fontFamily: 'Roboto Slab'}}>Rust Protection Service</h2>
                          <p style={{fontFamily: 'Open Sans'}}> a. Rust Proofing: Application of protective coatings to prevent rust on vehicle bodies and undercarriages.<br/>
                              b. Undercoating: Application of a protective layer to the underbody of vehicles, shielding against moisture and road debris.<br/>
                              c. Touch-Up Treatments: Spot treatments for existing rust areas to prevent further corrosion.
                          </p>
                          <button onClick={pricing} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center'}} className="btn">
                            <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>See Pricing</a>
                          </button>
                        </span>
                    </div>
                    <div id='bk2' className="slider-img">
                      <div id='spst' style={{backgroundColor: 'rgb(0 0 0 / 72%)', width: '100%', height: '100%', placeContent: 'center', fontFamily: 'Poppins'}}>
                        <h2 style={{fontFamily: 'Roboto Slab'}}>Mobile Fleet Care Service</h2>
                      </div>
                        <span>
                          <h2 style={{fontFamily: 'Roboto Slab'}}>Mobile Fleet Care Service</h2>
                          <p style={{fontFamily: 'Open Sans'}}>a. On-Site Rust Proofing: Mobile rust protection services for fleet vehicles at the client’s location.<br/>
                            b. Preventive Maintenance: Regular inspections and maintenance services for fleet vehicles to identify and address rust early.<br/>
                            c. Fleet Wash and Decontamination: Cleaning services to remove contaminants that can lead to rust.

                          </p>
                          <button onClick={pricing} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center'}} className="btn">
                            <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>See Pricing</a>
                          </button>
                        </span>
                    </div>
                    <div id='bk3' className="slider-img">
                      <div id='spst' style={{backgroundColor: 'rgb(0 0 0 / 72%)', width: '100%', height: '100%', placeContent: 'center', fontFamily: 'Poppins'}}>
                        <h2 style={{fontFamily: 'Roboto Slab'}}>Tire Change Services</h2>
                      </div>
                        <span>
                          <h2 style={{fontFamily: 'Roboto Slab'}}>Tire Change Services</h2>
                          <p style={{fontFamily: 'Open Sans'}}> Tire replacement and rotation services for vehicles.</p>
                          <button onClick={pricing} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center'}} className="btn">
                            <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>See Pricing</a>
                          </button>
                        </span>
                    </div>
                    <div id='bk4' className="slider-img">
                      <div id='spst' style={{backgroundColor: 'rgb(0 0 0 / 72%)', width: '100%', height: '100%', placeContent: 'center', fontFamily: 'Poppins'}}>
                        <h2 style={{fontFamily: 'Roboto Slab'}}>Exterior Detailing</h2>
                      </div>
                        <span>
                          <h2 style={{fontFamily: 'Roboto Slab'}}>Exterior Detailing</h2>
                          <p style={{fontFamily: 'Open Sans'}}> Cleaning and protecting the exterior surfaces of vehicles to enhance appearance and longevity.</p>
                          <button onClick={pricing} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center'}} className="btn">
                            <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>See Pricing</a>
                          </button>
                        </span>
                    </div>
                    <div id='bk5' className="slider-img">
                      <div id='spst' style={{backgroundColor: 'rgb(0 0 0 / 72%)', width: '100%', height: '100%', placeContent: 'center', fontFamily: 'Poppins'}}>
                        <h2 style={{fontFamily: 'Roboto Slab'}}>Desalting Services</h2>
                      </div>
                        <span>
                          <h2 style={{fontFamily: 'Roboto Slab'}}>Desalting Services</h2>
                          <p style={{fontFamily: 'Open Sans'}}>Removal of salt buildup from vehicles, particularly after winter or exposure to salt roads.</p>
                          <button onClick={pricing} style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center'}} className="btn">
                            <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>See Pricing</a>
                          </button>
                        </span>
                    </div>
                </div>
            </section>
          </section>
          <section id='section3'>
            <h1>Why Choose Destivict Solutions Inc.</h1>
            <div>
              <span>
                <img alt='' src={icon1}/>
                <h2>Expertise You Can Trust</h2>
                <p>Over a decade of experience in rust protection and vehicle maintenance.</p>
              </span>
              <span>
                <img alt='' src={icon2}/>
                <h2>Mobile Services</h2>
                <p>We come to you, saving you time and hassle.</p>
              </span>
              <span>
                <img alt='' src={icon3}/>
                <h2>Customer Satisfaction</h2>
                <p>We build long-term relationships with our clients, ensuring every job is done right.</p>
              </span>
            </div>
          </section>
          <section id='section4'>
            <h1>Our Proven Rust Protection Process</h1>
            <Carousel id="mobcaro" breakPoints={breakPoints}>
              <span className="card">
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 1</div>
                <h2>Inspection</h2>
                <p>Comprehensive vehicle inspection for existing rust.</p>
              </span>
              <span className="card">
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 2</div>
                <h2>Cleaning</h2>
                <p>Thorough cleaning to remove dirt and contaminants.</p>
              </span>
              <span className="card">
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 3</div>
                <h2>Application</h2>
                <p>Applying our proprietary rust protection formula to vulnerable areas.</p>
              </span>
              <span className="card">
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 4</div>
                <h2>Final Inspection</h2>
                <p>Ensuring full coverage and quality of protection.</p>
              </span>
            </Carousel>
            <div id='deskcar'>
              <span>
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 1</div>
                <h2>Inspection</h2>
                <p>Comprehensive vehicle inspection for existing rust.</p>
              </span>
              <span>
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 2</div>
                <h2>Cleaning</h2>
                <p>Thorough cleaning to remove dirt and contaminants.</p>
              </span>
              <span>
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 3</div>
                <h2>Application</h2>
                <p>Applying our proprietary rust protection formula to vulnerable areas.</p>
              </span>
              <span>
                <div style={{fontFamily: 'Open Sans', color: '#FFFF00'}}>Step 4</div>
                <h2>Final Inspection</h2>
                <p>Ensuring full coverage and quality of protection.</p>
              </span>
            </div>
            <button onClick={schedule} id='carbtn' style={{backgroundColor: "#B7410E", padding: '2%', textAlign: 'center', margin: '5%'}} className="btn">
              <a href="/pricing" style={{textDecoration: "none", color: "white", fontWeight: 'bold'}}>Schedule Your Rust Protection Today</a>
            </button>
          </section>
          <section id="section5">
            <p>TRUSTED BY 2000+ Customers</p>
            <h1>What Our Customers Are Saying</h1>
            <div id='deskcar2'>
              <span>
                <img alt='' src={why21}/>
                <p>Destivict Solutions saved my truck from rust damage, and the results were incredible!
                  <span style={{color: '#FFFF00'}}>John D.</span>
                </p>
              </span>
              <span>
                <img alt='' src={why22}/>
                <p>I was impressed with their professionalism and the detailed rust protection process. Highly recommend.
                  <span style={{color: '#FFFF00'}}>Sarah M.</span>
                </p>
              </span>
            </div>
            <Carousel id="mobcaro2" breakPoints={breakPoints}>
              <span className='card'>
                <img alt='' src={why21}/>
                <p style={{color: '#FFFFFF'}}>Destivict Solutions saved my truck from rust damage, and the results were incredible!</p>
                <p style={{color: '#FFFF00'}}>John D.</p>
              </span>
              <span className='card'>
                <img alt='' src={why22}/>
                <p style={{color: '#FFFFFF'}}>I was impressed with their professionalism and the detailed rust protection process. Highly recommend.</p>
                <p style={{color: '#FFFF00'}}>Sarah M.</p>
              </span>
            </Carousel>
          </section>
          <section id='section6'>
            <h1>Frequently Asked Questions</h1>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is AdMinting?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    AdMinting is the first community-driven advertising platform that connects advertisers with niche digital promoters. Our platform offers easy ad creation, transparent tracking, targeted advertising, and powerful insights to help you achieve quality results.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I create an ad on AdMinting?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Creating an ad on AdMinting is simple and intuitive.<br/>
                    First Download the app on play store or apple store
                    Signup and Create an account with adminting, Fund your Wallet, click on Create a Task,  setup your ad,select niche and location, upload your AD design, Select an AD goal, drop the link to your ad goal,drop the link to similar ad assets (for advertisers that want to use the community Promoters), You can chose to boost your ad using the community, pay for the ads, and watch your ad convert.

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Who are the digital promoters on AdMinting?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Our digital promoters are, online community owners, influencers and content creators who have large following and  a genuine connection with their followers. They are selected based on their niche, engagement levels, and ability to effectively promote your brand to their audience.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How does AdMinting ensure transparency in ad tracking?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    AdMinting provides a transparent tracking solution that allows you to monitor your campaigns in real-time. You can access detailed analytics and reports to see exactly how your ads are performing and where your budget is being spent.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What targeting options are available on AdMinting?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    AdMinting offers niche targeting based on type of community you want to access, and their locations. This ensures that your ads reach the right people at the right time, maximizing your campaign's impact.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    How can I measure the success of my ad campaigns on AdMinting?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Our platform provides powerful advertising insights with in-depth reports and analytics. You can track key performance indicators (KPIs), such as impressions,  engagement, reach and conversions., to understand the effectiveness of your campaigns and make data-driven decisions.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    How do I get started with AdMinting?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Getting started with AdMinting is easy. Download our app via IOS or Android store, to sign up on our platform, create your account, and follow the prompts to set up your first ad campaign. Our support team is also available to assist you at every step of the way.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    What types of businesses can benefit from AdMinting?
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    AdMinting is ideal for any business looking to enhance its online presence and reach a targeted audience. Whether you're a small business, a startup, or a large corporation, our platform can help you connect with the right digital promoters and achieve your advertising goals.
                  </div>
                </div>
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

export default Home;