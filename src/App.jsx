import gsap from "gsap";
import Nav from "./components/Nav/Nav";
import MainRoutes from "./routes/MainRoutes";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div className="">
      <Nav />
      <MainRoutes />
      <div className="h-dvh bg-sky-400"></div>
    </div>
  );
};

export default App;
