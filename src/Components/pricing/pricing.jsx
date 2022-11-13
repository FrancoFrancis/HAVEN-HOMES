
import "./pricing.css"
import Back from "../common/back"
import img from "../images/pricing.jpg"
import Featured from "../home/featured/featured"
// import PriceCard from "../home/price/priceCard"
import { motion } from "framer-motion"

export default function Pricing() {
    return(
        <motion.section className="pricing mb" id="pricing"
        initial={{width:0}}
        animate={{width:"100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Back name="30 days money back guarantee" title="Pricing-No Extra fees" cover={img}/>
            <div className="container price-cards">
                <Featured/>
            </div>
        </motion.section>
    )
}