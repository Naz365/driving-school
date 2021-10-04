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
        {/* <img className="image-fluid" src ="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="" srcset="" /> */}
        <h1 className="text-light">Setting the Standard in Drivers Education for Over 20 Years</h1>
        <h5 className="text-light py-3">
          Limited Time Offer! 20% or more off Drivers Ed with 1 FREE month of
          Allstate® Roadside Services (optional) Only $5.00 per month after
          offer ends. Cancel Anytime.
          Get 1 month of Allstate Roadside Services FREE and save 20% or more on Drivers Ed.
Protect your new driver with these services:
        </h5>
        <Button variant="success" size="lg" > APPLY NOW</Button>{' '}
      </div>

      <div className="container">
        <h1 className="mt-3 p-2">Popular Courses</h1>
        <Row xs={1} md={2} className="g-4 my-5 p-5">
          {courses.slice(0, 4).map((course) => (
            <Courses course={course}></Courses>
          ))}
        </Row>
      </div>
    </>
  );
};
//   src="https://images.unsplash.com/photo-1521336637830-92e5a50e21ee?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MjQ2MDU4OHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//   src="https://images.unsplash.com/photo-1543279385-618b485c1677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
export default Home;
