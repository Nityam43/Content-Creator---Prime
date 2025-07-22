import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <img src={"/images/logo.png"} alt="" />
      </div>
      <div className="nav-inner">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/product" className="nav-link">
          Products
        </Link>
        <Link to="/shop" className="nav-link">
          Shops
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
