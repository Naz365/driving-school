import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Courses from "../Courses/Courses";
import Button from 'react-bootstrap/Button'

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <div
        className="container-fluid bg-primary p-5  "
        style={{
          height: "55vh",
        }}
      >
       
        <h1 className="text-light">Setting the Standard in Drivers Education for Over 20 Years</h1>
        <h5 className="text-light py-3">
          Limited Time Offer! 20% or more off Drivers Ed with 1 FREE month of
          Allstate® Roadside Services (optional) Only $5.00 per month after
          offer ends. Cancel Anytime.</h5>
          
        <h4 className="text-light mb-5 mt-4">Get 1 month of Allstate Roadside Services FREE and save 20% or more on Drivers Ed.
Protect your new driver with these services:</h4>
        <Button variant="success" size="lg" > APPLY NOW</Button>{' '}
      </div>

      <div className="container">
        <h1 className="mt-5 p-2">Checkout Our Popular Courses</h1>
        <Row xs={1} md={2} className="g-4 my-1 p-5 mb-5">
          {courses.slice(0, 4).map((course) => (
            <Courses course={course}></Courses>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
