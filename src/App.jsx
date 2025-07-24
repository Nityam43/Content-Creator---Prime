import gsap from "gsap";
import Nav from "./components/Nav/Nav";
import MainRoutes from "./routes/MainRoutes";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Footer from "./pages/Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
