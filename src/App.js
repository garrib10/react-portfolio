
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Header from "./Component/Header";

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
    </div>
    </Router>
  );
}

export default App;