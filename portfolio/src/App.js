import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Portfolio from "../src/Pages/Portfolio";
import Contact from "../src/Pages/Contact";
//import Navbar from "./components/NavBar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        
        
      </div>
    </Router>
  );
}

export default App;
