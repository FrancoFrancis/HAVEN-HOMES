import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/common/Header/header";
import Home from "./Components/home/home";
import Footer from "./Components/common/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Components/about/about";
import Services from "./Components/services/services";
import Pricing from "./Components/pricing/pricing";
import Contact from "./Components/contact/contact";
import Blog from "./Components/blog/blog";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
