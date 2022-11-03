import { list } from "../../Data/data";


export default function RecentCards(){



    return(
        <div>
            <div className="content grid3 mtop">
                {list.map((val, index) => {
                    const {cover, category, location, name, price, type} = val;
                    return (
                        <div className="box shadow card" key={index}>
                            
                            <img src={cover} alt="recent photo"/>
                            <div className="boxx">

                            <div className="text">
                                <div className="category flex">
                                    <span className="for-sale" style={{background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                                color:category === "For Sale" ? "#25b579" : "#ff9800"}}> {category}</span>
                                <i className="fa fa-heart"></i>
                                </div>
                                <h4 className="recent-names">{name}</h4>
                                <p>
                                    <i className="fa location fa-location-dot"><span>{location}</span></i>
                                </p>
                            </div>
                            <div className="button flex">
                                <div>
                                    <button className="btn2">{price} </button>
                                    <label htmlFor="" >    /sqf </label>
                                </div>
                                <span className="type">{type}</span>
                            </div>
                            </div>
                        </div>
                        
                        
                    )
                })}
            </div>
        </div>
    )
}