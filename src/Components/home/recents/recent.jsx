import Heading from "../../common/heading "
import RecentCards from "./recentCards"
import "./recent.css"

export default function Recent(){
    return(
        <div>
            <section className="recent padding">
                <div className="container">
                    <Heading className="reveal" title={"Recent Property Listed"} subtitle="All the time there are list of most recent properties listed in our vast list of properties accross different regions"/>
                    <RecentCards/>
                </div>
            </section>
        </div>
    )
}