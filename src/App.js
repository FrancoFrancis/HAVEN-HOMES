import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/common/Header/header";

// import Home from "./Components/home/home";
// import Footer from "./Components/common/Footer/footer";
// import AnimatedRoutes from "./Components/common/AnimatedRoutes/AnimatedRoutes"
// import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
// import About from "./Components/about/about";
// import Services from "./Components/services/services";
// import Pricing from "./Components/pricing/pricing";
// import Contact from "./Components/contact/contact";
// import Blog from "./Components/blog/blog";

import Footer from "./Components/common/Footer/footer";
import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from "./Components/animatedroutes/animatedroutes"

export default function App() {
  
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
