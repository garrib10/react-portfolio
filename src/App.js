import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./Components/NavBar";
//import Footer from "./Components/Footer";
//import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </div>
      </Router>
    
  
  );
}

export default App;
