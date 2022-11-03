import React from "react"
import Hero from "./hero/hero"
import Featured from "./featured/featured"
import Recent from "./recents/recent"
import Awards from "./awards/awards"
import Location from "./location/location"
import Team from "./team/team"
import Price from "./price/price"

export default function Home() {

    return(
        <div>
            <Hero/>
            <Featured/>
            <Recent/>
            <Awards/>
            <Price/>
            <Location/>
            <Team/>
        </div>
    )
}