import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.from("#img1", {
      y: 300,
      delay: 1,
      opacity: 0,
      onStart: () => {
        document.querySelector("#img1").style.display = "block";
      },
    });
  });

  return (
    <>
      <div className="home_main">
        <div className="home_upper">
          <img src="./images/img1.png" alt="" id="img1" />
        </div>
      </div>
    </>
  );
};

export default Home;
