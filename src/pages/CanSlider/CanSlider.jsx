import { useGSAP } from "@gsap/react";
import { flavorCans } from "../../constants/flavorCans";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const MAX_DIST = 14;

const CanSlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const imgRefs = useRef([]);

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
    <div
      ref={sliderRef}
      className="lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0 bg-[#E3E3E3]"
    >
      <div
        ref={trackRef}
        className="h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap"
      >
        {/* Title Slide */}
        <div
          className="flex flex-col justify-center items-start
            lg:w-[60vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80
            flex-none
            pl-4 md:pl-12 xl:pl-24 2xl:pl-36"
        >
          <span
            className="font-extrabold
               uppercase
               text-[#1C1B1B]
               leading-tight
               text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-9xl translate-x-26"
          >
            WE HAVE 4{" "}
            <span className="relative -rotate-2 inline-block px-4 py-2 mx-2 rounded bg-[#22223b]">
              <span
                className="inline-block bg-gradient-to-r from-[#fbbf24] via-[#ff5f6d] to-[#9c27b0] 
      bg-clip-text text-transparent font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-9xl"
              >
                FREAKING
              </span>
            </span>
            <br className="hidden md:block" />
            DELICIOUS FLAVORS
          </span>
        </div>
        {/* Can Slides */}
        {flavorCans.map((flavor, idx) => (
          <div
            key={flavor.title}
            className={`
      flex flex-col md:flex-row items-center justify-center flex-none
      lg:w-[65vw] md:w-[80vw] w-full
      lg:h-[85vh] md:h-[70vh] h-[50vh] min-h-[350px]
      gap-12 md:gap-20 p-0 md:px-8
      bg-transparent rounded-3xl
      ${flavor.rotation}
    `}
          >
            {/* Image Panel */}
            <div className="flex items-center justify-center w-full md:w-1/2 min-w-[220px]">
              <div
                className="rounded-2xl shadow-2xl flex items-center justify-center w-full h-[320px] md:h-[510px] xl:h-[600px]"
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <img
                  ref={(el) => (imgRefs.current[idx] = el)}
                  src={flavor.src}
                  alt={flavor.title}
                  className="h-[200px] md:h-[380px] xl:h-[480px] w-auto object-contain"
                  style={{ minWidth: "180px", maxHeight: "90%" }}
                />
              </div>
            </div>
            {/* Text Panel*/}
            <div className="flex flex-col justify-center w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-10 ">
              <h3 className="font-extrabold mb-6 tracking-tighter drop-shadow-lg text-5xl md:text-7xl xl:text-8xl">
                <span
                  className="inline-block bg-gradient-to-r from-[#fbbf24] via-[#ff5f6d] to-[#9c27b0] 
      bg-clip-text text-transparent font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-9xl"
                >
                  {flavor.title}
                </span>
              </h3>

              <p className="text-2xl md:text-4xl xl:text-5xl text-[#1C1B1B] font-bold opacity-95 drop-shadow-sm pt-2 leading-snug">
                {flavor.description}
              </p>
            </div>
          </div>
        ))}

        {/* End Slide */}
        <div
          className="flex flex-col justify-center items-start
              lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80
              flex-none
              pl-4 md:pl-12 xl:pl-24 2xl:pl-36"
        >
          <span className="font-extrabold uppercase leading-tight text-[#1C1B1B] text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl">
            ONE SIP,
            <br className="hidden md:block" />
            INFINITE ENERGY.
            <br className="hidden md:block" />
            THAT'S&nbsp;
            <span className="relative -rotate-2 inline-block px-4 py-2 mx-2 rounded bg-[#22223b]">
              <span
                className="inline-block bg-gradient-to-r from-[#fbbf24] via-[#ff5f6d] to-[#9c27b0] 
      bg-clip-text text-transparent font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-9xl"
              >
                PRIME.
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CanSlider;
