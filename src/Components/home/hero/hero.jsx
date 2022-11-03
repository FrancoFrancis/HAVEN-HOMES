import "./hero.css"
import React from "react"
import Heading from "../../common/heading "

export default function Hero () {

    return(
        <section className="hero" id="hero">
            <div className="container">
                <div className="heading-container">
                    <Heading title="Find your dream home" subtitle={"find new & featured properties located in your local city."}/>
                </div>
                <form className="flex">
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder="location"/>
                    </div>
                    <div className="box">
                        <span>Property Type</span>
                        <input type="text" placeholder="Property Type"/>
                    </div>
                    <div className="box">
                        <span>Price Range</span>
                        <input type="text" placeholder="Price Range"/>
                    </div>
                    <div className="box">
                        <h5>Advance Filter</h5>
                    </div>
                    <button className="btn">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </section>

    )
}