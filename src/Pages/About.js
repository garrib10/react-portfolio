import React from "react";
import Hero from "../Component/Hero";
import Container from "../Component/Container";
import Row from "../Component/Row";
import Col from "../Component/Col";
import AboutMe from "../Component/AboutMe";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=sincerely-media-gPnHi8AmO5k-unsplash.jpg">
        <h1>Brian Garrity's Web Portfolio</h1>
        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <AboutMe>

            </AboutMe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
