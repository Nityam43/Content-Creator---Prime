import { useNavigate } from "react-router-dom";
import "./Sticks.css";
import Button from "../../../components/Button/Button";
import { flavorSticks } from "../../../constants/flavorCans";

const Sticks = () => {
  const navigate = useNavigate();

  return (
    <div className="sticks_main">
      {flavorSticks.map((flavor) => (
        <div className="sticks_card" key={flavor.id}>
          <img src={flavor.src} alt={flavor.title} className="sticks_image" />
          <h2 className="sticks_title">{flavor.title}</h2>
          <p className="sticks_description">{flavor.description}</p>
          <Button
            label="Learn More"
            onClick={() => navigate(`/flavors/sticks/${flavor.slug}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default Sticks;
