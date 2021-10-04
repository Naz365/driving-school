
import React from 'react';
import { Button,Col, Form, Row } from 'react-bootstrap';
import "./Apply.css"

const Apply = () => {
    return (
        <div className="apply_div mt-5">
            <h1>Application Form</h1>
            

            <Form className="mb-5 p-5">
            <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      
      <Form.Control placeholder="First name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridUsername">
      <Form.Control placeholder="Last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Username" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <>
  <Button variant="primary">APPLY NOW</Button>{' '}
  
  
</>
 
</Form>
        </div>
    );
};

export default Apply;