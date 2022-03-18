import Header from "../../components/Header/Header";
import {Button} from "react-bootstrap";
import "./Get.css";
import {Form} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";

function Get() {
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

    <Form className="form-style">
    <h4 className="form-head">GET IN TOUCH</h4>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="text-white">FULL NAME</Form.Label>
    <Form.Control style={{ padding: "22px",borderRadius: "1px" }} type="text" placeholder="Enter full name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label className="text-white">EMAIL ADRESS</Form.Label>
    <Form.Control style={{ padding: "22px",borderRadius: "1px" }} type="email" placeholder="Enter your email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <div>
  <Form.Label className="text-white">PHONE NUMBER</Form.Label>

  </div>
  <div className="row">

<div className="col-3">
<Form.Select style={{ padding: "10px", borderColor: "white" }} aria-label="Default select example">
  <option value="1">+92</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </Form.Select>
</div>
<div className="col-9">
    <Form.Control style={{ padding: "22px",borderRadius: "1px" }} type="phone" placeholder="Enter your phone number" />

</div>
  </div>
    {/* <Form.Select style={{ padding: "10px", borderColor: "white" }} aria-label="Default select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </Form.Select> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me updated on news and offer" />
  </Form.Group>
  <Button style={{width: "116%", backgroundColor: "#D4A62A", color: "black", borderColor: "#D4A62A",borderRadius: "1px"}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>

  <div>
      <Footer/>
  </div>
</div>
  )
  }

export default Get;