import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Button from "./components/Button";
import "./styles.css";

import Contact from "./components/Contact";
import Home from "./components/Home";
console.log(<Home />);
import About from "./components/About";
import AvengersList from "./components/AvengersList";
//import Users from "./components/Users";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li>
            <Button type="primary">
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button type="success">
              <Link to="/avengers">Avengers</Link>
            </Button>
          </li>
        </ul>
        {/* <Router path="/contact" component={Contact} /> */}
        Goodness Gracious
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AvengersList} />
      </div>
    </Router>

  );
}
