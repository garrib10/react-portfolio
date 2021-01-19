import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import Header from "./Component/Header"




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch> 
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;