import React from "react";
import Header from "../common/Header/header";
import Footer from "../common/Footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";
import Services from "../services/services";
import Pricing from "../pricing/pricing";
import Blog from "../blog/blog"

export default function Pages() {
  return (
    <div>
      <Router>
      <Header />
      <div>
          <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact  path="/about">
                  <About />
                </Route>
                <Route exact  path="/services">
                  <Services/>
                </Route>
                <Route exact  path="/blog">
                  <Blog/>
                </Route>
                <Route exact  path="/pricing">
                  <Pricing/>
                </Route>
          </Switch>
      </div>
        <Footer />
      </Router>
    </div>
  );
}
