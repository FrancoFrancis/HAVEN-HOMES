import { price } from "../../Data/data";


export default function PriceCard() {

    return(
        <div className="content flex mtop">
            {price.map((item, index) => {
                return(
                <div className="box shadow" key={index}>
                    
                    <div className="topbtn">
                        <button className="btn3">{item.best}</button>
                    </div> 
                    <h3>{item.plan}</h3>
                    <h1>
                        <span>$</span>{item.price}
                    </h1>
                    <p>{item.ptext}</p>
                    {/*   */}
                    <button className="btn5"
                    style={{
                        background: item.plan === "Standard" ? "#27ae60" : "#fff",
                        color: item.plan === "Standard" ? "#fff" : "#27ae60",
                    }}
                    >
                    Start {item.plan}
                    </button>
                    </div>
                )
            })}
        </div>

    )
}