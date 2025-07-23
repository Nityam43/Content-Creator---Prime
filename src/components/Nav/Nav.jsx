import { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/product" className="nav-link" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/login" className="nav-link" onClick={closeMenu}>
          Login
        </NavLink>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
