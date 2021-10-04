import React from "react";
import { Button, Form } from "react-bootstrap";
import "./About.css";
const AboutUs = () => {
  return (
    <>
      <div>
        <h2 className="mt-5 text-info text-capitalize fs-2 fw-bold">About Us</h2>
        <h3>OUR GOAL IS TO MAKE YOU A RESPONSIBLE AND SAFE DRIVER</h3>
        <p>
          Driving in <strong>Dhaka</strong> can be nerve-wracking. One of the largest cities
          in the world also has the largest variety of driving styles. At US ONE
          Driving School, we make certain that you are ready for the New York
          City driving experience. US ONE Driving School of New York City has
          always strived to provide all students with the best tools and
          instructions to become safe and law abiding drivers. Our licensed by
          state of New York driving instructors have professional drivers
          background with over 25 years of driving experience. Students
          graduating from our school help make New York City a better and a
          safer place for driving. Caring and polite nature of our private
          driving instructors make them one of the best in the driving school
          business. Our driving lessons have all components you will utilize at
          driving test time and also on a daily basis. Our proprietary driving
          lesson training methods are one of the most successful in the driving
          school business. During the practical driving lessons, New York City
          student drivers will obtain easy to follow guidance from our private
          driving instructors and are able to apply them with ease and
          confidence. Our goal at US ONE Driving School of New York City is to
          make our driving school students pass the New York City Driving Test
          along with instilling the importance of safe and defensive driving.
          Students who graduate from US ONE Driving School of New York City are
          competent, defensive and confident drivers who will be ready to handle
          any type of roads in any condition and any part of the world,
          especially in <strong>Dhaka City</strong>.
        </p>
      </div>

    <div className="div_bg  d-flex ">
        <div className="left ms-3 text-start w-50 ">
          <span>At Naz Drive X</span>
          <h1>Driving School,</h1>
          <span className="text-wrap">
            We pride ourselves with offering one of the most inclusive driving
            programs around the area. We offer a wide range of driving courses
            options based on your needs and preferences, plus amazing packages
            at accessible prices. A driving license is the next step to an
            independent life.
          </span>

          
        </div>
        <div className="right mb-5 p-5 flex-grow-1">
        <span className="text-center">
            <strong>Don’t wait longer and book your lessons now! For further information
            about our courses and locations</strong>
          </span>
          <Form className="text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="name" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
    </div>
    </>
  );
};

export default AboutUs;
