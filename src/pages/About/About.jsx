import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_main">
        <div className="about_ksi">
          <div className="about_left">
            <img src="public/images/about/ksi.webp" alt="" />
          </div>
          <div className="about_right">
            <h1>KSI</h1>
            <p>United Kingdom</p>
            <ul>
              <li>Co-founder of the hydration brand Prime</li>
              <li>Rapper with multiple chart-topping singles and albums</li>
              <li>Professional boxer</li>
              <li>Actor, author, and businessman</li>
            </ul>
          </div>
        </div>
        <div className="about_logan">
          <div className="about_left">
            <img src="public/images/about/logan_paul.webp" alt="" />
          </div>
          <div className="about_right">
            <h1>LOGAN PAUL</h1>
            <p>United States</p>
            <ul>
              <li>Co-founder of the hydration brand Prime</li>
              <li>WWE Superstar</li>
              <li>Professional boxer</li>
              <li>Actor and podcast host</li>
            </ul>
          </div>
        </div>
        <div className="about_prime">
          <img src="public/images/about/hero.webp" alt="" />
          <div className="about_prime-info">
            <h1>
              KSI and Logan Paul launched Prime Hydration together on January 4,
              2022
            </h1>
            <h3>
              To create a healthier, better-tasting hydration drink for
              athletes, fans, and everyday people.
            </h3>
            <ul>
              <li>Low sugar content</li>
              <li>No artificial colors</li>
              <li>Added electrolytes</li>
              <li>Vegan and gluten-free formula</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
