import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules"; // <-- Correct module!
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative"; // <-- Correct CSS import

const Home = () => {
  return (
    <div className="home_main">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, EffectCreative]}
        pagination={{ clickable: true }}
        effect="creative"
        loop={true}
        creativeEffect={{
          prev: {
            translate: ["-120%", 0, -500],
            scale: 0.8,
            opacity: 0.5,
          },
          next: {
            translate: ["120%", 0, -500],
            scale: 0.8,
            opacity: 0.5,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="./images/bottle/cherry_freeze.webp" alt="" />
          </div>
          <div className="slide-text">
            <h1>cherry freeze</h1>
          </div>
          <div className="slide-text-left">
            <h3>hydration</h3>
            <ul>
              <li>Zero Added Sugar</li>
              <li>20 Calories</li>
              <li>10% Coconut Water</li>
              <li>BCAAs + B Vitamins</li>
              <li>Antioxidants + Electrolytes</li>
              <li>Caffeine-Free</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="./images/bottle/cherry_freeze.webp" alt="" />
          </div>
          <div className="slide-text">
            <h1>cherry freeze</h1>
          </div>
          <div className="slide-text-left">
            <h3>hydration</h3>
            <ul>
              <li>Zero Added Sugar</li>
              <li>20 Calories</li>
              <li>10% Coconut Water</li>
              <li>BCAAs + B Vitamins</li>
              <li>Antioxidants + Electrolytes</li>
              <li>Caffeine-Free</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="./images/bottle/cherry_freeze.webp" alt="" />
          </div>
          <div className="slide-text">
            <h1>cherry freeze</h1>
          </div>
          <div className="slide-text-left">
            <h3>hydration</h3>
            <ul>
              <li>Zero Added Sugar</li>
              <li>20 Calories</li>
              <li>10% Coconut Water</li>
              <li>BCAAs + B Vitamins</li>
              <li>Antioxidants + Electrolytes</li>
              <li>Caffeine-Free</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
