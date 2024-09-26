import Nav from "./Nav";
import logo from "../assets/logo.png"

const Header = () => {
  return (
      <>
          <img src={logo} alt="Logo" width={200} />
      <Nav />
    </>
  )
}

export default Header;
