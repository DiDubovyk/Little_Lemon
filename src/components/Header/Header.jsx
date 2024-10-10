import "./Header.css";
import logo from "../../assets/logo.png";
import { NAVIGATION } from "../../constants"

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
              <a href={item.href} key={index}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
