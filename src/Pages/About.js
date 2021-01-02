import React from "react";
import Hero from "../Component/Hero";
import Container from "../Component/Container";
import Row from "../Component/Row";
import Col from "../Component/Col";

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
            <p>
            My name is Brian Garrity. I am a Connecticut native born and raised in a small town called Coventry.
          I just moved back about a month ago while living in Chicago for two years. I worked in the restaurant industry
          while living there and got a chance to work at a Michelin Star restaurant after my first year living there.
          I love trying new restaurants, cooking, and pretty much anything that has to do with food.
            </p>
            <p>
            Currently, I am taking the UConn Full Stack Development Bootcamp. When I complete the program, I will be
          pursing a career in web development. I have obtained a lot of skills along the way during the bootcamp, and
          here are the some of them.
            </p>
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
