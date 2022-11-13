import React from "react";
import './header.css'

import{ Link, Router } from 'react-router-dom' 
// import { Link } from 'react-scroll'
import { nav } from "../../Data/data";

export default function Header() {


    const [navList, setNavList] = React.useState(false)

    return(
            
        <header>
            <div className="container flex" >
                <div className="logo"> 
                <h3 className="hh" href="#home"><hh>H</hh>AVEN <hh>H</hh>OMES</h3>
                
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

