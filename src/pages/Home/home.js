import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Detail from './Detail';
import "./main.css";
import {Button} from "react-bootstrap";

function Home() {
  return (
<div>
    <Header/>
    <div className="legend">
    <div>
      <p className="legendHeading">
      <span className='Headingpart'>REHMANI COTTAGES</span> <br/>
      BY REHMANI PROPERTIES
      </p>
      <p className="legenSubHeading">
      Seal Of The Future
      </p>
      <Button className='HeadingButton text-white'>ABOUT THE PROJECT</Button>
    </div>
  </div>

       <div>
          <Detail/>
      </div>

      {/* <div>
          <Footer/>
      </div> */}
      <div className='map1'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57917.47047089184!2d67.03297499066407!3d24.869248631974035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3eb33e849a7255ab%3A0x11cd094961dbc6a9!2sMehdi%20Tower%D8%8C%20Shahrah-e-Faisal%2C%20Sindhi%20Muslim%20Cooperative%20Housing%20Society%20Block%20A%20Sindhi%20Muslim%20CHS%20(SMCHS)%2C%20Karachi!3m2!1d24.8601414!2d67.0564934!4m0!5e0!3m2!1sen!2s!4v1647238217487!5m2!1sen!2s"  allowfullscreen="" style={{width: "100%",height: "540px",border: "none"}}></iframe>
 </div>

 <div>
   <Footer/>
 </div>
  </div>
  )
}

export default Home;