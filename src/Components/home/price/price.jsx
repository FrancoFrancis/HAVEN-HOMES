import "./price.css"
import Heading from "../../common/heading "
import PriceCard from "./priceCard"
import { price } from "../../Data/data"

export default function Price() {

    return(
        <section className="price padding">
            <div className="container">
                <Heading title="Select Your Package" subtitle="You have the option of choosing from the vast varieties prices we have set, we have premium, standard and epic price range category"/>
                <PriceCard/>
            </div>
        </section>
    )
}