import React from 'react';
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import Header from "./Component/Header";
import AboutMe from "./Component/AboutMe";


function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <AboutMe/>
    </div>
    </Router>
  );
}

export default App;