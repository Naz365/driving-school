import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const AllCourses = () => {
    const [allcourses, setAllcourses] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setAllcourses(data));
  }, []);
    return (
        <div className="m-5 p-5">
          <h1>Get Best Driving Courses In one place</h1>
          <h3 className="m-3 p-2">We are committed to deliver best driving courses all over the country</h3>
            <Row xs={1} md={2} className="g-4">
        {allcourses.map((course) => ( <Courses course={course} ></Courses>
        ))}
      </Row>
        </div>
    );
};

export default AllCourses;