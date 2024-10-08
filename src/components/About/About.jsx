import "./About.css";
import above from "../../assets/About_above.png";
import under from "../../assets/About_under.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-imgs">
        <img src={above} alt="Chef" width={400} />
        <img src={under} alt="Chef" width={400} />
      </div>
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          lorem ipsum blah blah blah blah blah blah here on several lines of
          course ... lorem rpl ipsum blah blah blah blah blah blah here on
          several lines of course ...
        </p>
      </div>
    </div>
  );
}

export default About;
