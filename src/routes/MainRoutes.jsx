import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Sticks from "../pages/Products/Sticks/Sticks";
import IceBottle from "../pages/Products/IceBottle/IceBottle";
import Can from "../pages/Products/Can/Can";
import FlavorCan from "../components/FlavorCan/FlavorCan";
import FlavorStick from "../components/FlavorStick/FlavorStick";
import FlavorIce from "../components/FlavorIce/FlavorIce";
import Auth from "../pages/Auth/Auth";
import About from "../pages/About/About";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Auth />} />

      <Route path="/product/can" element={<Can />} />
      <Route path="/flavors/can/:flavorId" element={<FlavorCan />} />

      <Route path="/product/sticks" element={<Sticks />} />
      <Route path="/flavors/sticks/:flavorId" element={<FlavorStick />} />

      <Route path="/product/icebottle" element={<IceBottle />} />
      <Route path="/flavors/icebottle/:flavorId" element={<FlavorIce />} />
    </Routes>
  );
};

export default MainRoutes;
