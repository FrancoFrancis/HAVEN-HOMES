
import "./awards.css"
import Heading from "../../common/heading "
import { awards } from "../../Data/data"
export default function Awards() {


    return(

        <div>
            <section className="awards padding">
                <div className="container">
                    <Heading title="Over 1, 324, 322+ happy users are with us and they still love our services" subtitle="OUR AWARDS"/>
                    
                    <div className="content grid4 mtop">
                        {awards.map((val, index) => {
                            return ( 
                            <div className="box" key={index}>
                                <div className="icon">
                                    <img src={val.icon}/>
                                    {/* <span>{val.icon}</span> */}
                                </div>
                                <h1>{val.num}</h1>
                                <p className="award--name">{val.name}</p>
                            </div>
                            )
                        })}
                    </div>
                
                </div>
            </section>
        </div>

    )
}