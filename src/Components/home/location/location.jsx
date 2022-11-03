
import "./location.css"
import Heading from "../../common/heading "
import { location } from "../../Data/data"

export default function Location () {
    return (
        <div>
            <section className="location padding">
                <div className="container">
                    <Heading title="Explore By Location" subtitle="Explore by choosing from the vast location we have our homes in, we have homes listed from all over the world from Asia to Africa to Europe" />
                    
                    <div className="content grid3 mtop">
                        {location.map((items, index) => {
                            return(
                                <div className="box" key={index}>
                                    <img src={items.cover}/>
                                    <div className="overlay">
                                        <h5>{items.name}</h5>
                                        <p>
                                            <label>{items.Villas}</label>
                                            <label>{items.Offices}</label>
                                            <label>{items.Apartments}</label>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}