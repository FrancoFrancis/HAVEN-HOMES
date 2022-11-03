import "./team.css"
import Heading from "../../common/heading "
import { team } from "../../Data/data"


export default function Team() {
    return(
        <section className="team team-bg ">
            <div className="container">
                <Heading title="Our Agents" subtitle="We have agents from across different parts of the globe, our agents are trustworthy and reliable" />
                <div className="content mtop grid3">  
                    {team.map((val, index) => {
                        return(
                            <div className="box" key={index}>
                                <button className="btn3"> {val.list} Listings </button>
                                <div className="details">
                                    <div className="img">
                                        <img src={val.cover} alt=""/>
                                        <i className="fa fa-circle-check"></i>
                                    </div>
                                    <i className="fa fa-location-dot"></i>
                                    <label htmlFor="">{val.location}</label>
                                    <h4>{val.name}</h4>
                                    <ul>
                                        {val.socials.map((socials, index) => {
                                            <li key={index}>{socials} </li>
                                        })}
                                    </ul>
                                    <div className="button flex">
                                        <button>
                                            <i className="fa fa-envelope"></i>
                                        </button>
                                        <button className="btn4">
                                            <i className="fa fa-phone-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}