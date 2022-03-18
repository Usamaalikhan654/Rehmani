import React from 'react';
import "./Amenit.css"
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer"

function Amenit() {
  return (
    <div>
    <Header/>
 <div className="legend1">
    <div>
      <p className="legendHeading">
      <span className='Headingpart' style={{ paddingLeft: "187%" }}>AMENITIES</span>
      </p>
    </div>
  </div>

  <div className='container border-cont'>
  <div className='row equal'>
      <div className='col-lg-12'>
          <h2 className='Headingpart'>AMENITIES:</h2>
      </div>
      <div className='square-border col-1'>
                   <div className='border-item'>
                      
                   </div>
      </div>
      <div className='col-lg-1'>
          <div className='border-set'> </div>
      </div>
  </div>
    <div className='row'>
      <div className='col-lg-12'>
        <ul>
          <li>Mosque built on Oriental Architecture</li>
          <li>Purpose Built School Campus</li>
          <li>Fully-functional, State-of the-Art Hospital </li>
          <li>Park & Recreational Ground</li>
          <li>Market Place</li>
          <li>Gated Community</li>
          <li>CCTV Camera & Security Surveillance</li>
          <li>Mobile App Controlled Entrance & Exit</li>
        </ul>
      </div>
  </div>
  </div>
  
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Amenit;