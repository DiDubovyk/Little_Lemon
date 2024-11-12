import plate from "../../assets/Hero_img.png"
import { DESCRIPTION_SHORT } from "../../constants";
import "./Hero.css";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
      {currentPath === "/home"|| currentPath==="/" ? (
        <div className="hero-container">
          <div className="img-container">
            <img className="hero-image" src={plate} alt="Food" height={570} />
          </div>
          <div className="content-container">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>{DESCRIPTION_SHORT}</p>
            </div>
            <div className="hero-button">
              <button className="button-reserve">Reserve a Table</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero-container" style={{height:"20rem"}}>
            {currentPath === "/book" ? (<h1 className="reserv-text">Welcome to our restaurant reservation form!</h1>) : null}
        </div>
      )}
    </div>
  );
      };

export default Hero;
