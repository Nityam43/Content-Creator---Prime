import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const sliderData = [
  { img: "./images/bottle/cherry_freeze.webp", name: "cherry freeze" },
  { img: "./images/bottle/collector_series.webp", name: "collector series" },
  { img: "./images/bottle/future freeze.webp", name: "future freeze" },
  { img: "./images/bottle/ice_pop.webp", name: "ice pop" },
  { img: "./images/bottle/peso_pluma.webp", name: "peso pluma" },
  { img: "./images/bottle/sournova.webp", name: "sournova" },
];

const MAX_DIST = 30;

const Home = () => {
  const swiperRef = useRef(null);
  const imgRefs = useRef([]);

  useGSAP(() => {
    const activeImg = document.querySelector(".swiper-slide-active img");
    if (activeImg) {
      gsap.fromTo(
        activeImg,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.7, delay: 0.3 }
      );
    }
  }, []);

  const handleSlideChange = () => {
    setTimeout(() => {
      const activeImg = document.querySelector(".swiper-slide-active img");
      if (activeImg) {
        gsap.fromTo(
          activeImg,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.7, delay: 0.3 }
        );
      }
    }, 10);
  };

  const handleMouseMove = (e, idx) => {
    const img = imgRefs.current[idx];
    if (!img) return;
    const rect = img.parentElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    gsap.to(img, {
      x: x * MAX_DIST,
      y: y * MAX_DIST,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    const img = imgRefs.current[idx];
    if (!img) return;
    gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
  };

  return (
    <div className="home_main">
      <Swiper
        ref={swiperRef}
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
        onSlideChange={handleSlideChange}
      >
        {sliderData.map(({ img, name }, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide-content"
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={img}
                alt={name}
                ref={(el) => (imgRefs.current[idx] = el)}
                style={{
                  transition: "box-shadow 0.15s",
                  willChange: "transform",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <div className="slide-text">
              <h1>{name}</h1>
            </div>
            <div className="slide-text-left">
              <h3>hydration</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
