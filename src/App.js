import React from 'react';
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import Nav from "./Component/Nav";
import AboutMe from "./Component/AboutMe";
import Footer from "./Component/Footer"


function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <AboutMe/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;