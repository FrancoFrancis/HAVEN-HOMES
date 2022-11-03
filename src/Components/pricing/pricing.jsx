
import "./pricing.css"
import Back from "../common/back"
import img from "../images/pricing.jpg"
import Featured from "../home/featured/featured"
// import PriceCard from "../home/price/priceCard"


export default function Pricing() {
    return(
        <section className="pricing mb" id="pricing">
            <Back name="30 days money back guarantee" title="Pricing-No Extra fees" cover={img}/>
            <div className="container price-cards">
                <Featured/>
            </div>
        </section>
    )
}