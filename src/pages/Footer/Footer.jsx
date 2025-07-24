import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="footer_1 footer_part">
          <h2>ABOUT PRIME</h2>
          <p>
            Prime Hydration was founded by global icons KSI and Logan Paul with
            one simple goal — to create a better-for-you hydration option that
            tastes amazing and supports your active lifestyle.
          </p>
          <div className="footer_links">
            <a href="https://www.facebook.com/people/DrinkPrime/100076456194119/#">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/drinkprime/">
              <FaInstagram />
            </a>
            <a href="https://x.com/primehydrate">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="footer_2 footer_part">
          <div className="footer_2-inner">
            <div>
              <h1>Page Links</h1>
              <NavLink to="/" className="footer_link">
                Home
              </NavLink>
              <NavLink to="/product" className="footer_link">
                Products
              </NavLink>
              <NavLink to="/about" className="footer_link">
                About
              </NavLink>
              <NavLink to="/login" className="footer_link">
                Login
              </NavLink>
            </div>
            <div>
              <h1>FAQ LINKS</h1>
              <a href="" className="footer_link">
                Privacy Policy
              </a>
              <a href="" className="footer_link">
                Return Policy
              </a>
              <a href="" className="footer_link">
                Where to Buy
              </a>
              <a href="" className="footer_link">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="footer_3 footer_part">
          <h1>Get the latest information</h1>
          <div className="footer_btn">
            <input type="email" placeholder="Email address" />
            <button>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        © {new Date().getFullYear()} Prime Hydration. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
