import React from 'react';
import ContactCard from "../../Component/ContactCard";
import Col from "../../Component/Col";
import Row from "../../Component/Row";
import Container from "../../Component/Container"





function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 70, marginBottom: 40 }}>
        <Row>
          <Col size="md-12">
            
      <br></br>
      <br></br>
      <ContactCard />
      </Col>
      </Row>
      </Container>
    </div>


  )


}

export default Contact;



