import React from "react";
import "./App.css";
import Routes from "./app/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
