import React, { Component } from 'react';
import { Form,Button,Textarea } from "react-bootstrap";

export default class FormSubmit extends Component {
  render() {
    return (
      <>
      <div>
      <Form style={{ display: "flex" , justifyContent: "center" }}>
      <div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control style={{  backgroundColor: "#E1E1E1" , borderRadius: "1px"}} type="text" placeholder="Enter full name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control style={{  backgroundColor: "#E1E1E1" , borderRadius: "1px"}}  type="email" placeholder="Enter your email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Control style={{ backgroundColor: "#E1E1E1" , borderRadius: "1px"}}  type="text" placeholder="Subject" />
  </Form.Group>

   <Form.Group>
     <textarea  style={{ backgroundColor: "#E1E1E1" , borderRadius: "1px", width: "355px", height: "140px" , overflow:"hidden"}}  placeholder='Message'/>
   </Form.Group>
  <Button style={{ width: "100%", backgroundColor: "transparent" , color: "black" , borderRadius: "1px" , borderColor: "#D4A62A" }} variant="primary" type="submit">
    Submit
  </Button>

  </div>
</Form>
</div>
</>
    )
  }
}
