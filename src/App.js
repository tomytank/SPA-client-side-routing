import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";

import Users from "./components/Users";

export default function App() {
  return (
    <div className="App">
      <Router path="/contact" component={Contact} />
      <Router exact path="/" component={Home} />
      <Router path="/about" component={About} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
