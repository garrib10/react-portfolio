import React from "react";

import Container from "../Component/Container";
import Row from "../Component/Row";
import Col from "../Component/Col";
import AboutMe from "../Component/AboutMe";

function About() {
  return (
    <div>
   
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <br></br>
            <AboutMe>

            </AboutMe>
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