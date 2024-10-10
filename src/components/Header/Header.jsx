import "./Header.css";
import logo from "../../assets/logo.png";
import { NAVIGATION } from "../../constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" width={250} />
      </div>
      <div>
        <ul className="container-nav">
          {NAVIGATION.map((item, index) => (
            <li>
              <Link to={item.href} key={index}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
