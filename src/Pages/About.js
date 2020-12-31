import React from "react";
import "../App.css";
import AboutMe from "../Components/AboutMe";
import Header from "../Components/Header";
import Wrapper from "../Components/Wrapper"



function About() {
  
    return (
    <main>
      <div className="App"> 
          <Wrapper>
          <Header/>
          <AboutMe/>
          </Wrapper>
         </div>
    </main>
    );
  }
  
  export default About;
  