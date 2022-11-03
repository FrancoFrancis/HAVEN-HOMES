
import "./services.css"
import Back from "../common/back"
import img from "../images/services.jpg"
import Featured from "../home/featured/featured"
import FeaturedCard from "../home/featured/featuredCard"


export default function Services() {
    return(
        <section className="services mb" id="services">
            <Back name="Services" title="Services-We Are Here For You" cover={img}/>
            <div className="featured container">
                <Featured/>
                {/* <FeaturedCard/> */}
            </div>
        </section>
    )
}