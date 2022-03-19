import React from 'react'
import { Navbar,Nav,Form,FormControl,Button, NavDropdown,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import phone from "../../Assets/phone.png";
import logo from "../../Assets/logo.png";
import Whatsapp from "../../Assets/Whatsapp.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
  <div className='Header_container'>
  <div class="Header_rightContainer">
  </div>
  <div className='Header_leftContainer'>
      <div className='Header_box'>
          <ul className='ul-group d-flex'>
            <li className='text-white'>
            <img className='ul-img' src={phone}/>
            +92-213-4322238-39
            </li>
            {/* <li className='text-white'>
            WHATSAPP
            <img className='ul-img1' src={Whatsapp}/>
            </li> */}
            <li className='text-white'>
            {/* <Link to="/"><Button className='li-button'>GET IN TOUCH</Button></Link> */}
            </li>
          </ul>
      </div>
  </div>
  </div>
<Navbar bg="white" expand="lg">
  <Container style={{ marginLeft: "25%" }}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Link style={{ textDecoration: "none" }} to="/"><Nav.Link className="nav-link" href="#link">ABOUT</Nav.Link></Link>
      <Link style={{ textDecoration: "none" }} to="/project"><Nav.Link className="nav-link" href="#link">PROJECTS</Nav.Link></Link> */}
        {/* <Nav.Link className="nav-link" href="#link">DOCUMENT DOWNLOAD</Nav.Link> */}
        <Navbar.Brand style={{paddingLeft: "26px"}} href="#home">
        <Link  to="/"><img style={{height: "60px", paddingLeft: "110%"}} src={logo}/></Link>
        </Navbar.Brand>
        {/* <Link style={{ textDecoration: "none" }} to="/amenities"><Nav.Link className="nav-link" href="#home">AMENITIES</Nav.Link></Link> */}
        {/* <Nav.Link className="nav-link" href="#link">BUY-BACK</Nav.Link>
        <Nav.Link className="nav-link" href="#link">MY BOOKING</Nav.Link> */}
        {/* <Link style={{ textDecoration: "none" }} to="/contact"><Nav.Link className="nav-link" href="#link">CONTACT US</Nav.Link></Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default Header