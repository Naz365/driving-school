import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Slider = (props) => {
    const {img,title} = props.course;
    return (
        
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{title}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

    );
};

export default Slider;