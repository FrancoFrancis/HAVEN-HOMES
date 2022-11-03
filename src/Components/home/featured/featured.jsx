
import Heading from "../../common/heading "
import "./featured.css"
import FeaturedCard from "./featuredCard"

export default function Featured (){

    return(
        <div>
            <section className="featured background">
                <div className="card--heading--container">
                    <Heading title="Featured property types" subtitle=" Find all types of property"/>
                </div>
                <FeaturedCard/>
            </section>
        </div>

    )

}