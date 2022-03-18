import React from 'react';
import "./Contact.css"
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Phone from "../../Assets/fa-phone.png";
import Email from "../../Assets/email.png";
import FormSubmit from './Form';


function Contact() {
  return (
    <div>
    <Header/>
 <div className="legend3">
    <div>
      <p className="legendHeading">
      <span className='Headingpart' style={{ marginLeft: "403px" }}>CONTACT US</span>
      </p>
    </div>
  </div>
{/* 
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
  </div> */}
<div className='container' style={{ paddingBottom: "20%" }}>
  <div className='row' style={{ marginTop: "36px" }}>
    <div style={{ paddingLeft: "12%" }} className='col-lg-6'>
        <h1 style={{ color: "#D4A62A" }}>PHONE</h1>
         <img style={{ paddingLeft: "43px" }} src={Phone}/>
         <p style={{ textAlign: "justify" }}>+92-213-4322238-39</p>
    </div>

    <div style={{ paddingLeft: "26%",borderLeft: "1px solid #D4A62A"  }} className='col-lg-6'>
    <h1 style={{ color: "#D4A62A", paddingLeft: "30px"}}>Email</h1>
    <img  style={{ paddingLeft: "63px" }} src={Email}/>
    <p>info@rehmaniproperties.com</p>
   </div>
  </div>

  <div>
  <p style={{ textAlign: "center", marginTop: "35px" }}>IF YOU ANY QUESTIONS</p>
  <p style={{ textAlign: "center" }}>PLEASE DO NOT HESITATE TO SEND US A MESSAGE</p>
  <FormSubmit/>
  </div>
  </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Contact;