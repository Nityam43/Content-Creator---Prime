import { useNavigate } from "react-router-dom";
import "./Can.css";
import { flavorCans } from "../../../constants/flavorCans";
import Button from "../../../components/Button/Button";

const Can = () => {
  const navigate = useNavigate();

  return (
    <div className="can_main">
      {flavorCans.map((flavor) => (
        <div className="can_card" key={flavor.id}>
          <img
            src={flavor.src}
            alt={flavor.title}
            className={`can_image ${flavor.rotation}`}
          />
          <h2 className="can_title">{flavor.title}</h2>
          <p className="can_description">{flavor.description}</p>
          <Button
            label="Learn More"
            onClick={() => navigate(`/flavors/can/${flavor.slug}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default Can;
