

import React from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import Home from "../home/home";
import About from "../about/about";
import Services from "../services/services";
import Pricing from "../pricing/pricing";
import Contact from "../contact/contact";
import Blog from "../blog/blog";

import {AnimatePresence} from "framer-motion"

export default function AnimatedRoutes() {

  const location = useLocation();
  
  return (
    <div className="content">
      <AnimatePresence>
      <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}
