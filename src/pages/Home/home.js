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
      <span className='Headingpart'>REHMANI PROPERTIES </span> 
      {/* BY REHMANI PROPERTIES */}
      </p>
      <p className="legenSubHeading">
      Seal Of The Future
      </p>
      {/* <Button className='HeadingButton text-white'>ABOUT THE PROJECT</Button> */}
    </div>
  </div>

       <div>
          <Detail/>
      </div>

      {/* <div>
          <Footer/>
      </div> */}
      <div className='map1'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.799833628273!2d67.04281131500575!3d25.006916683985086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64dac87bc14f76f7!2zMjXCsDAwJzI0LjkiTiA2N8KwMDInNDIuMCJF!5e0!3m2!1sen!2s!4v1647623174043!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" style={{width: "100%",height: "540px",border: "none"}}loading="lazy"></iframe>
 </div>

 <div>
   <Footer/>
 </div>
  </div>
  )
}

export default Home;