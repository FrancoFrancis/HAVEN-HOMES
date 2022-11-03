import "./about.css"
import Back from "../common/back"
import Heading from "../common/heading "
import img from "../images/about1.jpg"
import img1 from "../images/about2.jpg" 
export default function About() {


    return(
        <section className="about" id="about">
            <Back name="About Us" title="Who Are We?" cover={img} />
            <div className="container flex mtop">
                <div className="left row">
                    <Heading  title="Our agency story" subtitle="check out our companies story and work process."/>
                    <p>We as a company have built an outstanding team of amazing people and we have made sure that we have 
                    made the work place as interesting as the havens in tale stories.We intend to make building doing what
                    is best for our old and new customers. </p>
                    <br/>
                    
                    <p>Haven Homes is real estate company that is passionate anout housing for people of the earth.
                        We will continue to provide world class service to our customers.
                    </p>
                    
                    <button className="btn2">More About Us</button>
                </div>

                <div className="right row">
                    <img src={img1}/>
                </div>
            </div>
        </section>
    )
}

