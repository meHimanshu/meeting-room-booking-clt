import React from "react";
import "./App.css";
import { LoginPage } from "./app/scenes/login/";
import Navbar from "../src/app/layout/Navbar";
import Routes from  "./Routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    <div className="App">
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
