import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./project.css"


function project() {
  return (
    <div>
    <Header/>
 <div className="legend-back">
    <div>
      <p className="legendHeading">
      <span className='Headingpart' style={{ marginLeft: "320px" }}>REHMANI COTTAGES</span>
      </p>
    </div>
  </div>

  <div className='container border-cont'>
  <div className='row equal'>
      <div className='col-lg-12'>
          <h2 className='Headingpart'>ABOUT REHMANI COTTAGES</h2>
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
          <p style={{ textAlign: "justify" }}>
          Rehmani Cottages is a living promise made by Rehmani Properties to serve a multipurpose, affordable and reliable industrial cottages with residential amenities. It is the first time in Pakistan that you are presented with a holistic vision of having a work, living and lifestyle in one boundary wall. It ensures the provision of not only the basic utilities like gas, electricity, drainage and sewerage but makes it centrally located and accessible through wider road network, and to the main link roads that connects entire Pakistan. Located only 2 kilometers away from 4K Chowrangi in North Karachi, Rehmani Cottages is 20 minutes away from Shahrah-e-Faisal, Karachi and 10 minutes from National Highway. The location and accessibility of Rehmani Cottages make it highly feasible for small and medium scale enterprises and cottage industries to flourish.
          </p>
      </div>
  </div>
  </div>
     
  <div className='map1'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57917.47047089184!2d67.03297499066407!3d24.869248631974035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3eb33e849a7255ab%3A0x11cd094961dbc6a9!2sMehdi%20Tower%D8%8C%20Shahrah-e-Faisal%2C%20Sindhi%20Muslim%20Cooperative%20Housing%20Society%20Block%20A%20Sindhi%20Muslim%20CHS%20(SMCHS)%2C%20Karachi!3m2!1d24.8601414!2d67.0564934!4m0!5e0!3m2!1sen!2s!4v1647238217487!5m2!1sen!2s"  allowfullscreen="" style={{width: "100%",height: "540px",border: "none"}}></iframe>
 </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default project;