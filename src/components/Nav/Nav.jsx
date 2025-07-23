import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/product" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
