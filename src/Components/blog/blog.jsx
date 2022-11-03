import Back from "../common/back"
import "./blog.css"
import img from "../images/about1.jpg"
import RecentCards from "../home/recents/recentCards"


export default function Blog() {


    return(
        <section className="blog-out mb" id="blog">
            <Back name="Blog" title="Visit Our blog to learn more" cover={img}/>
            <div className="container recent">
                
                <RecentCards/>
            </div>
        </section>

    )
}