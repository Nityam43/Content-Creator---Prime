import CanSlider from "../../components/CanSlider/CanSlider";
import "./Products.css";

const Products = () => {
  return (
    <>
      {/* <ProductSlider /> */}
      <div className="products_main">
        <div className="products_inner">
          <div className="products_inner1">
            <img src="/images/products/sticks.webp" alt="" />
            <div>
              <img src="/images/products/sticksdetails.webp" alt="" />
              <button>learn more</button>
            </div>
          </div>
        </div>
        <div className="products_inner">
          <div className="products_inner2">
            <img src="/images/products/can.webp" alt="" />
            <div>
              <img src="/images/products/candetails.webp" alt="" />
              <button>learn more</button>
            </div>
          </div>
        </div>
        <CanSlider />
        <div className="products_inner">
          <div className="products_inner3">
            <img src="/images/products/icebottle.webp" alt="" />
            <div>
              <img src="/images/products/icebottledetails.webp" alt="" />
              <button>learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
