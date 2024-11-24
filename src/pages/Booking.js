import React, {useState} from 'react';
import {Helmet} from "react-helmet";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../Assets/Styles/pages/Booking.css';

function Bookings() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className='row' id='Booking'>
      <Helmet>
        <title>Bookings - Destivict</title>
      </Helmet>
        <header>
          <Nav/>
          <div id='hd-inner'>
            <h1>Book a Service</h1>
          </div>
        </header>
        <span style={{placeItems: 'center'}}>
            <form style={{display: 'grid', textAlign: 'start'}}>
              <h2>Client Information</h2>
              <span id='formrw'>
                <span style={{display: 'grid'}}>
                  <label>First Name</label>
                  <input type='text'/>
                </span>
                <span style={{display: 'grid'}}>
                  <label>Last Name</label>
                  <input type='text'/>
                </span>
              </span>
              <span id='formrw'>
                <span style={{display: 'grid'}}>
                  <label>Phone Number</label>
                  <input type='number'/>
                </span>
                <span style={{display: 'grid'}}>
                  <label>Email</label>
                  <input type='email'/>
                </span>
              </span>
              <span style={{display: 'grid', paddingTop: '4%'}}>
                <h2>Service Selection</h2>
                <p>Type of Service Required</p>
                <span id='bkchecksp'>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck" name="" value=""/>
                    <label for="">Rust Proofing</label>
                  </span>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck" name="" value=""/>
                    <label for="">Undercoating</label>
                  </span>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck" name="" value=""/>
                    <label for="">Tire Change</label>
                  </span>
                </span>
              </span>
              <span id='bkchecksp'>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck" name="" value=""/>
                    <label for="">Desalting Services</label>
                  </span>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck" name="" value=""/>
                    <label for="">Exterior Detailing</label>
                  </span>
                  <span style={{display: 'flex'}}>
                    <input type="checkbox" id="bkcheck2" name="" value="" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label for="">Fleet Service</label>
                  </span>
                </span>

              {isChecked == true ?
                <>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Fleet Information</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Vehicle Count</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Vehicle Travel Area(s)</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Contact Person</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>P.O Instructions</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Other Instructions</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>P.O Instructions</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='bkchecksp'>
                      <span id='m1' style={{display: 'grid'}}>
                        <label style={{fontSize: 'unset'}}>Purchase Order </label>
                        <span style={{display: 'flex'}}>
                          <input type="radio" name='fleet' id="bkcheck" value="No"/>                      
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="no">No</label>
                          <input type="radio" name='fleet' id="bkcheck" value="Yes"/>
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="yes">Yes</label>
                        </span>
                      </span>
                      <span id='m2' style={{display: 'grid'}}>
                        <label id='mv' style={{fontSize: 'unset'}}>Payment Option</label>
                        <span style={{display: 'flex'}}>
                          <input type="radio" name='fleet2' id="bkcheck" value="Credit"/>                      
                          <label style={{marginRight: '5%'}} for="credit">Credit (Net 30)</label>
                          <input type="radio" name='fleet2' id="bkcheck" value="ATT"/>
                          <label style={{marginRight: '5%'}} for="att">During Service</label>
                        </span>
                      </span>
                    </span>
                    <span id='bkchecksp'>
                      <span style={{display: 'grid', width: '48%'}}>
                        <label style={{fontSize: 'unset'}}>PST Exemption</label>
                        <span style={{display: 'flex'}}>
                          <input type="radio" name='fleet21' id="bkcheck" value="No"/>                      
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="no">No</label>
                          <input type="radio" name='fleet21' id="bkcheck" value="Yes"/>
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="yes">Yes</label>
                        </span>
                      </span>
                      <span style={{display: 'grid', width: '48%'}}>
                        <label style={{fontSize: 'unset'}}>GST Exemption</label>
                        <span style={{display: 'flex'}}>
                          <input type="radio" name='fleet22' id="bkcheck" value="No"/>                      
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="no">No</label>
                          <input type="radio" name='fleet22' id="bkcheck" value="Yes"/>
                          <label style={{fontSize: 'unset', marginRight: '5%'}} for="yes">Yes</label>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                  <p>Specific Vehicle or Equipment Type</p>
                  <span id='bkchecksp'>
                    <span style={{display: 'flex'}}>
                      <input type="checkbox" id="bkcheck" name="" value=""/>
                      <label for="">Car</label>
                    </span>
                    <span style={{display: 'flex'}}>
                      <input type="checkbox" id="bkcheck" name="" value=""/>
                      <label for="">Truck</label>
                    </span>
                    <span style={{display: 'flex'}}>
                      <input type="checkbox" id="bkcheck" name="" value=""/>
                      <label for="">Industrial machinery</label>
                    </span>
                  </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Vehicle Details (if applicable)</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Make</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Model</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Year</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>VIN</label>
                        <input type='email'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Appointment Details</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Date</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Time</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Location for Service</label>
                        <input type='number'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Additional Requirement</h2>
                    <span id='formrw' style={{display: 'grid'}}>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Special Requests or Concerns</label>
                        <textarea rows='5' cols='100'></textarea>
                      </span>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Fleet Size</label>
                        <input type='text'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Payment Information</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Preferred Payment Method</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Billing contact</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Street address</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>City</label>
                        <input type='number'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>State/province</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Zip/postal code</label>
                        <input type='number'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Phone number</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Email</label>
                        <input type='number'/>
                      </span>
                    </span>
                  </span>
                  <span id='mlast' style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Confirmation Preference</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Preferred Payment Method</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Consent for Promotions or Follow-Up</label>
                        <input type='text'/>
                      </span>
                    </span>
                  </span>
                  <button style={{placeSelf: 'start', display: 'grid', backgroundColor: "#B7410E", width: '20%', marginTop: '4%', padding: '2%', justifySelf: 'center', color: "white", fontWeight: 'bold'}} className="btn">Submit</button>
                </>
              : 
                <>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <p>Specific Vehicle or Equipment Type</p>
                    <span id='bkchecksp'>
                      <span style={{display: 'flex'}}>
                        <input type="checkbox" id="bkcheck" name="" value=""/>
                        <label for="">Car</label>
                      </span>
                      <span style={{display: 'flex'}}>
                        <input type="checkbox" id="bkcheck" name="" value=""/>
                        <label for="">Truck</label>
                      </span>
                      <span style={{display: 'flex'}}>
                        <input type="checkbox" id="bkcheck" name="" value=""/>
                        <label for="">Industrial machinery</label>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Vehicle Details (if applicable)</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Make</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Model</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Year</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>VIN</label>
                        <input type='email'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Appointment Details</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Date</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Time</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Location for Service</label>
                        <input type='number'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Additional Requirement</h2>
                    <span id='formrw' style={{display: 'grid'}}>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Special Requests or Concerns</label>
                        <textarea rows='5' cols='100'></textarea>
                      </span>
                      <span style={{width: '100%', display: 'grid'}}>
                        <label>Fleet Size</label>
                        <input type='text'/>
                      </span>
                    </span>
                  </span>
                  <span style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Payment Information</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Preferred Payment Method</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Billing contact</label>
                        <input type='text'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Street address</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>City</label>
                        <input type='number'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>State/province</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Zip/postal code</label>
                        <input type='number'/>
                      </span>
                    </span>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Phone number</label>
                        <input type='number'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Email</label>
                        <input type='number'/>
                      </span>
                    </span>
                  </span>
                  <span id='mlast' style={{display: 'grid', paddingTop: '4%'}}>
                    <h2>Confirmation Preference</h2>
                    <span id='formrw'>
                      <span style={{display: 'grid'}}>
                        <label>Preferred Payment Method</label>
                        <input type='text'/>
                      </span>
                      <span style={{display: 'grid'}}>
                        <label>Consent for Promotions or Follow-Up</label>
                        <input type='text'/>
                      </span>
                    </span>
                  </span>
                  <button style={{placeSelf: 'start', display: 'grid', backgroundColor: "#B7410E", width: '20%', marginTop: '4%', padding: '2%', justifySelf: 'center', color: "white", fontWeight: 'bold'}} className="btn">Submit</button>
                </>
              }
                </form>
        </span>
        <Footer/>
    </div>
  )
}

export default Bookings;