import "./about.css"
import Back from "../common/back"
import Heading from "../common/heading "
import img from "../images/about1.jpg"
import img1 from "../images/about2.jpg" 
import {motion} from "framer-motion"

export default function About() {


    return(
        <motion.section className="about" id="about"
        initial={{width:0}}
        animate={{width:"100vw"}}
        exit={{x:window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Back name="About Us" title="Who Are We?" cover={img} />
            <div className="container flex mtop">
                <div className="left row">
                    <Heading  title="Our agency story" subtitle="check out our companies story and work process."/>
                    <p>We as a company have built an outstanding team of amazing people and we have made sure that we have tale stories.We intend to make building doing what
                    is best for our old and new customers. </p>
            
                    
                    <button className="btn2">More About Us</button>
                </div>

                <div className="right row">
                    <img src={img1}/>
                </div>
            </div>
        </motion.section>
    )
}

