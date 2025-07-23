import { useParams } from "react-router-dom";
import { flavorCans } from "../../constants/flavorCans";
import "./FlavorCan.css";

const FlavorCan = () => {
  const { flavorId } = useParams();
  const flavor = flavorCans.find((item) => item.slug === flavorId);

  if (!flavor) {
    return <h1 className="flavor_not_found">Flavor not found</h1>;
  }

  return (
    <div className="flavor_details">
      <div className="flavor_left">
        <img src={flavor.src} alt={flavor.title} className="flavor_image" />
      </div>
      <div className="flavor_right">
        <h1 className="flavor_title">{flavor.title}</h1>
        <p className="flavor_description">{flavor.description}</p>
        <button className="flavor_button">Add to Cart</button>
        <hr />
        <ul className="flavor_list">
          <li>Zero Added Sugar</li>
          <li>15 Calories</li>
          <li>BCAAs + B Vitamins</li>
          <li>Antioxidants + Electrolytes</li>
        </ul>
      </div>
    </div>
  );
};

export default FlavorCan;
