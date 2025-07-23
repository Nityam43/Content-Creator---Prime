import { useNavigate } from "react-router-dom";
import "./IceBottle.css";
import Button from "../../../components/Button/Button";
import { flavorIce } from "../../../constants/flavorCans";

const IceBottle = () => {
  const navigate = useNavigate();

  return (
    <div className="icebottle_main">
      {flavorIce.map((flavor) => (
        <div className="icebottle_card" key={flavor.id}>
          <img
            src={flavor.src}
            alt={flavor.title}
            className="icebottle_image"
          />
          <h2 className="icebottle_title">{flavor.title}</h2>
          <p className="icebottle_description">{flavor.description}</p>
          <Button
            label="Learn More"
            onClick={() => navigate(`/flavors/icebottle/${flavor.slug}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default IceBottle;
