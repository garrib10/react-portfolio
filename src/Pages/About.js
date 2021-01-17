import React from "react";
import Container from "../Component/Container";
import Row from "../Component/Row";
import Col from "../Component/Col";
import AboutCard from "../Component/AboutCard"

function About() {
  return (
    <div>
   
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <AboutCard/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;


//<Nav/>
//     <br></br>
 //    <br></br>
  //   <br></br>
   //  <br></br>
  //   <br></br>
   //  <AboutMe/>
 //    <Footer/>