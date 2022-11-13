
import "./services.css"
import Back from "../common/back"
import img from "../images/services.jpg"
import Featured from "../home/featured/featured"
import FeaturedCard from "../home/featured/featuredCard"
import {motion} from "framer-motion"

export default function Services() {
    return(
        <motion.section className="services mb" id="services"
        initial={{width:0}}
        animate={{width:"100vw"}}
        exit={{x:window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Back name="Services" title="Services-We Are Here For You" cover={img}/>
            <div className="featured container">
                <Featured/>
                {/* <FeaturedCard/> */}
            </div>
        </motion.section>
    )
}