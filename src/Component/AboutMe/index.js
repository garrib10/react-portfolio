import React from "react";
import Badge from 'react-bootstrap/Badge';

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-me">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p> My name is Brian Garrity. I am a Connecticut native born and raised in a small town called Coventry.
          I just moved back about a month ago while living in Chicago for two years. I worked in the restaurant industry
          while living there and got a chance to work at a Michelin Star restaurant after my first year living there.
          I love trying new restaurants, cooking, and pretty much anything that has to do with food.
        </p>
          <p> Currently, I am taking the UConn Full Stack Development Bootcamp. When I complete the program, I will be
          pursing a career in web development. I have obtained a lot of skills along the way during the bootcamp, and
          here are the some of them.
          </p>
          <div>
            <p><u> Skills:</u> 
            <br></br>
              <Badge pill variant="primary">API</Badge>
              <Badge pill variant="primary"> AJAX </Badge>
              <Badge pill variant="primary">Bootstrap</Badge>
              <Badge pill variant="primary"> CSS </Badge>
              <Badge pill variant="primary">DOTENV</Badge>
              <Badge pill variant="primary"> Express </Badge>
              <Badge pill variant="primary">Express-handlebars</Badge>
              <Badge pill variant="primary"> HTML </Badge>
              <Badge pill variant="primary">Heroku</Badge>
              <Badge pill variant="primary">Javascript</Badge>
              <Badge pill variant="primary"> JawsDB </Badge>
              <Badge pill variant="primary">Jquery</Badge>
              <Badge pill variant="primary"> JSON </Badge>
              <Badge pill variant="primary">Moment.js</Badge>
              <Badge pill variant="primary"> MySql </Badge>
              <Badge pill variant="primary">Node.js</Badge>
              <Badge pill variant="primary"> ORM </Badge>
              <Badge pill variant="primary">Sequelize</Badge>
              <Badge pill variant="primary"> MongoDB</Badge>
              <Badge pill variant="primary">Mongoose</Badge>
              <Badge pill variant="primary">React</Badge>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;