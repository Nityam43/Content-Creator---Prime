import { useParams } from "react-router-dom";
import { flavorCans } from "../../constants/flavorCans";
import "./FlavorDetails.css";

const FlavorDetails = () => {
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
      </div>
    </div>
  );
};

export default FlavorDetails;
