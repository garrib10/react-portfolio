import React from "react"
import Card from 'react-bootstrap/Card'
import AboutMe from "../AboutMe"
//import Image from "../../assets/About-Me.png"


function AboutCard  (){
    return (
        
        <Card style={{ width: '70rem' }}>
  <Card.Img variant="top" src={Image} id="AboutMe" />
  <Card.Body>
    <Card.Text>
      <AboutMe/>
    </Card.Text>
    </Card.Body>
</Card>
    )
}

export default AboutCard;