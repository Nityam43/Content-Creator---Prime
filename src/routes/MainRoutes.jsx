import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop";
import CanSlider from "../components/CanSlider/CanSlider";
import Products from "../pages/Products/Products";
import FlavorDetails from "../components/FlavorDetails/FlavorDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/flavors/:flavorId" element={<FlavorDetails />} />
    </Routes>
  );
};

export default MainRoutes;
