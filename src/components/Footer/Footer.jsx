import { ImFacebook2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import logo from "../../assets/logo-footer.png";
import { ReactComponent as LogoX } from "../../assets/logoX.svg";
import "./Footer.css";
import { ADDRESS, DESCRIPTION_SHORTEST, NAVIGATION, WORKING_HOURS } from "../../constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social">
        <img src={logo} alt="logo" />
        <p>{DESCRIPTION_SHORTEST}</p>
        <div className="social-media">
          <a href="https://facebook.com">
            <ImFacebook2 />
          </a>
          <a href="https://instagram.com">
            <GrInstagram />
          </a>
          <a href="https://youtube.com">
            <GrYoutube />
          </a>
          <a href="https://x.com">
            <LogoX size={10} />
          </a>
        </div>
      </div>
      <div className="footer-nav">
        <h3>NAVIGATION</h3>
        <ul>
          {NAVIGATION.map((nav, index) => (
            <li>
              <a href={nav.href} key={index}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-hours">
        <h3>HOURS</h3>
        {WORKING_HOURS.map((h, index) => (
          <p>
            {h.title}
            <br />
            {h.hours}
          </p>
        ))}
      </div>
      <div className="footer-address">
        <h3>ADDRESS</h3>
        {ADDRESS.map((a, index) => (
          <p>
            {a.purpose}:
            <br />
            {a.adr}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
