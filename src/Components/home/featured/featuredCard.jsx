import { featured } from "../../Data/data";

export default function FeaturedCard() {
  return (
    <div>
      <div className="content grid5 mtop">
        {featured.map((items, index) => {
          const { cover } = items;
          return (
            <div className="box " key={index}>
              <img src={items.cover} alt="" />
              <h5 className="name">{items.name}</h5>
              <label className="total">{items.total}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

<img src="https://img.icons8.com/color/48/000000/village.png" />;
