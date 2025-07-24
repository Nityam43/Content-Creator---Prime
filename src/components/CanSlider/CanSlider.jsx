import { useGSAP } from "@gsap/react";
import { flavorCans } from "../../constants/flavorCans";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import "./CanSlider.css";
const MAX_DIST = 14;

const CanSlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const imgRefs = useRef([]);
  const navigate = useNavigate();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

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

  useGSAP(() => {
    if (isTablet) return;

    const track = trackRef.current;
    if (!track) return;

    const scrollAmount = track.scrollWidth - window.innerWidth;
    if (scrollAmount <= 0) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: `-${scrollAmount + 100}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top top",
          end: `+=${scrollAmount + 100}`,
          scrub: true,
          pin: true,
        },
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [isTablet]);

  return (
    <div ref={sliderRef} className="can-slider">
      <div ref={trackRef} className="can-slider-track">
        <div className="slider-panel">
          <span className="slider-title">
            WE HAVE 4 <span className="slider-highlight">FREAKING</span>
            <br className="slider-break" />
            DELICIOUS FLAVORS
          </span>
        </div>

        {flavorCans.map((flavor, idx) => (
          <div key={flavor.title} className={`can-slide ${flavor.rotation}`}>
            <div className="can-image-container">
              <div
                className="can-image-wrapper"
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <img
                  ref={(el) => (imgRefs.current[idx] = el)}
                  src={flavor.src}
                  alt={flavor.title}
                  className="can-image"
                  onClick={() => navigate(`/flavors/can/${flavor.slug}`)}
                />
              </div>
            </div>
            <div className="can-text">
              <h3>
                <span>{flavor.title}</span>
              </h3>
              <p>{flavor.description}</p>
            </div>
          </div>
        ))}

        <div className="slider-panel">
          <span className="slider-title">
            ONE SIP,
            <br className="slider-break" />
            INFINITE ENERGY.
            <br className="slider-break" />
            THAT'S <span className="slider-highlight">PRIME.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CanSlider;
