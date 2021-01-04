import React from "react";
import Badge from 'react-bootstrap/Badge';

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-me">
          <h1><u>About Me</u></h1>
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
              <Badge pill variant="dark">API</Badge>
              <Badge pill variant="dark"> AJAX </Badge>
              <Badge pill variant="dark">Bootstrap</Badge>
              <Badge pill variant="dark"> CSS </Badge>
              <Badge pill variant="dark">DOTENV</Badge>
              <Badge pill variant="dark"> Express </Badge>
              <Badge pill variant="dark">Express-handlebars</Badge>
              <Badge pill variant="dark"> HTML </Badge>
              <Badge pill variant="dark">Heroku</Badge>
              <Badge pill variant="dark">Javascript</Badge>
              <Badge pill variant="dark"> JawsDB </Badge>
              <Badge pill variant="dark">Jquery</Badge>
              <Badge pill variant="dark"> JSON </Badge>
              <Badge pill variant="dark">Moment.js</Badge>
              <Badge pill variant="dark"> MySql </Badge>
              <Badge pill variant="dark">Node.js</Badge>
              <Badge pill variant="dark"> ORM </Badge>
              <Badge pill variant="dark">Sequelize</Badge>
              <Badge pill variant="dark"> MongoDB</Badge>
              <Badge pill variant="dark">Mongoose</Badge>
              <Badge pill variant="dark">React</Badge>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;