import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Header from "./Component/Header"

function App() {
  return (
    <Router>
    <div>
      <Header />

      <Route exact path="/" Component={About} />
      <Route exact path="/About" Component={About}/>
      <Route exact path="/Portfolio" Component={Portfolio} />
      <Route exact path="/Contact" Component={Contact} />
    </div>
    </Router>
  
  );
}

export default App;