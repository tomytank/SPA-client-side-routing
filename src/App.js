import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//import { useRouteMatch } from "react-router";
import styled from "styled-components";
import Button from "./components/Button";

import "./styles.css";

// import Contact from "./components/Contact";
import Home from "./components/Home";
// console.log(<Home />);
// import About from "./components/About";
import AvengersList from "./components/AvengersList";
//import Users from "./components/Users";
import Avenger from "./components/Avenger";
import heros from "./avengersData";

export default function App() {
  const [hero] = useState(heros);

  return (
    <Router>
      <nav className="navbar">
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
      </nav>
      <div className="App">
        {/* <Router path="/contact" component={Contact} /> */}
        Goodness Gracious Avenger
        <Switch>
          <Route path="/avengers/:hero">
            <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route path="/avengers/">
            <AvengersList hero={hero} />
          </Route>
          {/* <Route path="/avengers" component={AvengersList} />
          <Route exact path="/" component={Home} /> */}
        </Switch>
      </div>
    </Router>

  );
}
