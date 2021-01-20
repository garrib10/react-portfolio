import React from 'react';
import Card from 'react-bootstrap/Card'
import Contact from "../Contact"




function ContactCard() {
   return (
    <Card style={{ width: '60rem',
    height: '45rem' }}>
    <Card.Body>
      <Card.Text>
        <Contact/>
      </Card.Text>
      </Card.Body>
  </Card>
    )
}

export default ContactCard;