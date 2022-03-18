import React from "react";
import "./Footer.css";
import Img from "../../Assets/Bizintel Company Profile-19 1.png";
import Face from "../../Assets/facebook.png"
import link from "../../Assets/link.png"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          {/* <div style={{marginBottom: "40px"}} className="col-lg-4 items">
            <ul className="list-unstyled">
              <li>MY PROPERTIES</li>
              <li>PAYMENT</li>
              <li>EDIT PROFILE</li>
              <li>CHANGE PASSWORD</li>
              <li>LOGOUT</li>
            </ul>
          </div> */}
          {/* Column2 */}
          <div className="col-lg-12 items-2">
            <img style={{ height: "150px" }} src={Img}/>
           <p className="Img-para">MEHDI TOWER, SUITE 201-202, SMCHS,<br/>
             MAIN SHAHRAH-E-FAISAL, KARACHI.</p>
             <p style={{padding: "21px"}}><Link style={{ textDecoration: "none" }} to="/"><span style={{ padding: "20px",color: "black" }}>ABOUT</span></Link>    |    <Link style={{ textDecoration: "none" , color: "black" }} to="/project"><span style={{ padding: "20px" }}>PROJECTS </span></Link>   |    <Link style={{ textDecoration: "none" }} to="/amenities"><span style={{ padding: "20px", color: "black" }}>AMENITIES</span></Link>    |    <span style={{ padding: "20px" }}>CONTACT US</span></p>
             <div>
                   <a href="https://www.facebook.com/rehmaniproperties" target="_blank"><img style={{padding: "12px"}} src={Face}/></a>
                   <a href="https://www.linkedin.com/company/rehmaniproperties/" target="_blank"><img style={{padding: "12px"}} src={link}/></a>
             </div>
          </div>
          {/* Column3 */}
          {/* <div className="col-lg-4 items-3">
          <p>TERMS & CONDITIONS FAQ</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;