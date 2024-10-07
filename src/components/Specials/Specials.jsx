import Card from "./Card";
import { SPECIALS } from "../../constants";
import "./Specials.css"

const Specials = () => {
  return (
    <div className="specials-container">
      <div className="specials-top">
        <h1>Specials</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials-items">
        {SPECIALS.map((item) => (
          <Card
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
