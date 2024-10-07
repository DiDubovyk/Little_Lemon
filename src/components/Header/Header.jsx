import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" width={250} />
      </div>
      <div>
        <ul className="container-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#book">Reservations</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
