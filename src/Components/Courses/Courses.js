import { Card, Col } from "react-bootstrap";

const Courses = (props) => {
  // console.log(props.courses);
  const {img,title,price,rating,Mentor} = props.course;
  // console.log(img);

  return (
    <>
    
      <Col>
        <Card className="h-100 w-75">
          <Card.Img className="image-fluid" variant="top" src= {img}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {price}
              {rating}
              {Mentor}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Courses;
