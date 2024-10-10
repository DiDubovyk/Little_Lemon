import plate from "../../assets/Hero_img.png"
import { DESCRIPTION_SHORT } from "../../constants";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="img-container">
        <img className="hero-image" src={plate} alt="Food" height={570} />
      </div>
      <div className="content-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            {DESCRIPTION_SHORT}
          </p>
        </div>
        <div className="hero-button">
          <button className="button-reserve">Reserve a Table</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
