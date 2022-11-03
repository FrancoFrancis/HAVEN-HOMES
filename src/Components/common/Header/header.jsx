import React from "react";
import './header.css'

import{ Link, Router } from 'react-router-dom' 
// import { Link } from 'react-scroll'
import { nav } from "../../Data/data";

export default function Header() {

    //animate on scroll

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if(entry.isIntersecting) {
            entry.target.classList.add("show")
          } else {
            entry.target.classList.remove("show")
          }
        })
      })
      
      const hiddenElements = document.querySelectorAll(".hidden")
      hiddenElements.forEach((el) => observer.observe(el))

    const [navList, setNavList] = React.useState(false)

    return(
            
        <header>
            <div className="container flex" >
                <div className="logo"> 
                <h3 className="hh"><hh>H</hh>AVEN <hh>H</hh>OMES</h3>
                {/* <img  src="../images/logo.png"/> */}
                </div>
                <div className="nav">
                    <ul className={navList ? "small" : "flex"}>
                        
                            <Link to="/" href="#home" spy={true} smooth={true} offset={50} duration={500}>
                                Home
                            </Link>
                        
                        
                            <Link to="about" href="#about" spy={true} smooth={true} offset={50} duration={500}>
                                About
                            </Link>
                        
                        
                            <Link to="services" href="#services" spy={true} smooth={true} offset={50} duration={500}>
                                Services
                            </Link>
                        
                        
                            <Link to="blog" href="#blog" spy={true} smooth={true} offset={50} duration={500}>
                                Blog
                            </Link>
                        
                        
                            <Link to="pricing" href="#pricing" spy={true} smooth={true} offset={50} duration={500}>
                                Pricing
                            </Link>
                        
                        
                            <Link to="contact" href="#contact" spy={true} smooth={true} offset={50} duration={500}>
                                contact
                            </Link>
                        
                        
                    </ul>
                </div> 
                
                <div className="button flex">
                    <h3>
                        <span>2</span>My List
                    </h3>
                    <button className="btn1">
                        <i className="fa fa-sign-out"></i> sign in
                    </button>
                </div>

                <div className="toggle">
                    <button onClick={() => setNavList(!navList)}>
                        {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
                    </button>
                </div>
            </div>
        </header>
    )
}


/*

<div className="nav">
                    <ul className={navList ? "small" : "flex"}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div> 


                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>

                
                <div className="nav">
                    <ul className={navList ? "small" : "flex"}>
                        {nav.map((list, index) =>(
                            <li key={index}>
                                <Router>
                                <Link to={list.path}> {list.text} </Link>
                                </Router>
                            </li>
                        ))}
                    </ul>
                </div> 
*/ 