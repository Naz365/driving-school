import './App.css';
import AboutUs from './Components/About-us/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apply from './Components/Apply-now/Apply';
// import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import NotFounds from './Components/NotFounds/NotFounds';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AllCourses from './Components/AllCourses/AllCourses';

function App() {
  

  
  return (
    <div className="App">
     

    <Router>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Naz Drive X</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link}  to={"/home"}>Home</Nav.Link>
      <Nav.Link as={Link}  to={"/courses"}>Courses</Nav.Link>
      <Nav.Link as={Link}  to={"/apply"}>How To Apply</Nav.Link>
      <Nav.Link as={Link}  to={"/about-us"}>AboutUs</Nav.Link>
      <Nav.Link as={Link}  to={"*"}>Error 404</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


     
    <Switch>
      <Route path="/home">
                 <Home></Home>
      </Route>
      <Route path="/courses">
      <AllCourses></AllCourses>
      </Route>
      <Route path="/apply">
      <Apply></Apply>
      </Route>
      <Route path="/about-us">
      <AboutUs></AboutUs>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="*">
        <NotFounds></NotFounds>
      </Route>
    </Switch>
    <footer className="footer">
        <h2><span>Naz's</span> <strong>Drive X</strong></h2>
        <address>
          North Street, Badda, Dhaka, Bangladesh.
        </address>
        <p>Copyright © 2021 All rights reserved || Naz365</p>
      </footer>
      
    </Router>
    </div>
  );
}

export default App;
