import React, { Component } from "react";
import ContactCard from "../../Component/ContactCard";
import contacts from "../../contact.json";
import "./style.css"


class Contact extends Component {

  state = {
    contacts
  };

  render() {
    return (
      <div id="contactRoot">
        <br></br>
        <br></br>
        <br></br>


        <main className="mainTop">
          <div className="container-fluid">
            <article className="socialmedia">

              <div className="row articleHeading">
                <div className="col-12"><h3>Follow Me</h3></div>
              </div>

              <div className="row justify" id="feature">

                {this.state.contacts.map(contact => (

                  <ContactCard

                    id={contact.id}
                    key={contact.id}
                    name={contact.name}
                    reference={contact.reference}
                    image={contact.image}
                    alt={contact.alt}
                    title={contact.title}

                  />
                ))}
              </div>
             <br></br>
             <br></br>
             <br></br>
              <div className="row articleHeading">
                <div className="col-12"><h3>Or Give Me a Call</h3></div>
              </div>

              <div className="row justify" id="feature">

                <h5 id="phone">Phone: 860-331-7857</h5>

              </div>
            </article>



            </div>
        </main>
  
      </div>
      
    );
  }
}

export default Contact;
