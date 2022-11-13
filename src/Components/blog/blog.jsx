import Back from "../common/back"
import "./blog.css"
import img from "../images/about1.jpg"
import RecentCards from "../home/recents/recentCards"
import {motion} from "framer-motion"

export default function Blog() {


    return(
        <motion.section className="blog-out mb" id="blog"
        initial={{width:0}}
        animate={{width:"100vw"}}
        exit={{x:window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Back name="Blog" title="Visit Our blog to learn more" cover={img}/>
            <div className="container recent">
                
                <RecentCards/>
            </div>
        </motion.section>

    )
}