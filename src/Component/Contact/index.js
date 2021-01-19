import React from "react"

function Contact() {
    return (
        <div className="container">
            <section className="contact">
                <div>
                    <h1>Contact Me</h1>
                </div>

                <div id="email-icon" className="icon">
                    <h3 className="fa-align-centerr">Email</h3>
                    <a href="mailto:garrib10@gmail.com"><i
                        className="fa fa-envelope-o fa-5x fa-align-centerr"
                        aria-hidden="true"
                    ></i>My Email</a>
                </div>
                <div id="resume-icon" className="icon">
                    <h3 className="fa-align-centerr">Resume</h3>
                    <a href="https://docs.google.com/document/d/1gcNMeLkQet_GUg4J4n8ur233EdAXZiGUi3Av-Y8z7lk/edit?usp=sharing"
                    ><i
                        className="fas fa-file fa-5x fa-align-centerr"
                        aria-hidden="true"
                    ></i>My Resume</a>
                    <div id="github-icon" className="icon">
                        <h3 className="fa-align-centerr">Github</h3>
                        <a href="https://github.com/garrib10"
                        ><i
                            className="fa fa-github fa-5x fa-align-centerr"
                            aria-hidden="true"
                        ></i>My Github</a>
                    </div>
                    <div id="linkedin-icon" className="icon">
                        <h3 className="fa-align-centerr">LinkedIn!</h3>
                        <a href="https://www.linkedin.com/in/briangarrity26/"
                        ><i
                            className="fa fa-linkedin-square fa-5x fa-align-centerr"
                            aria-hidden="true"
                        ></i>My LinkedIn</a>
                    </div>
                    <div id="dribble-icon" className="icon">
                        <h3 className="fa-align-centerr">Dribble</h3>
                        <a href="https://dribbble.com/BGarrity26"
                        ><i
                            className="fas fa-basketball-ball fa-5x fa-align-centerr"
                            aria-hidden="true"
                        ></i>My Dribble</a>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Contact;











//<u>Email</u>:<a href="mailto:someone@example.com">garrib10@gmail.com</a>
//<u>Phone Number</u>: 860-331-7857

// <a href="https://github.com/garrib10" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
      //  <a href="https://docs.google.com/document/d/1gcNMeLkQet_GUg4J4n8ur233EdAXZiGUi3Av-Y8z7lk/edit?usp=sharing"
         // target="_blank" rel="noreferrer"><i class="far fa-file w3-hover-opacity"></i></a>
     //   <a href="https://www.linkedin.com/in/briangarrity26/" target="_blank" rel="noreferrer"><i
        //  class="fab fa-linkedin w3-hover-opacity"></i></a>
      //  <a href="https://dribbble.com/BGarrity26" target="_blank" rel="noreferrer"><i class="fas fa-basketball-ball"></i></a>