import "./About.css";
import above from "../../assets/About_above.png";
import under from "../../assets/About_under.png"
import { DESCRIPTION_LONG } from "../../constants";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-imgs">
        <img src={above} alt="Chef" width={300} className="img-above" />
        <img src={under} alt="Chef" width={300} className="img-under" />
      </div>
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          {DESCRIPTION_LONG}
        </p>
      </div>
    </div>
  );
}

export default About;
