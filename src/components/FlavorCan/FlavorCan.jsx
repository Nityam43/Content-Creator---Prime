import { useParams, Navigate } from "react-router-dom";
import { flavorCans } from "../../constants/flavorCans";
import "./FlavorCan.css";

const FlavorCan = () => {
  const { flavorId } = useParams();
  const flavor = flavorCans.find((item) => item.slug === flavorId);

  if (!flavor) {
    console.log(`Invalid flavor ID: ${flavorId}`);
    console.log('Available flavors:', flavorCans.map(f => f.slug));
    return (
      <div className="flavor_not_found" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Flavor not found</h1>
        <p>The flavor ID "{flavorId}" is not valid.</p>
        <p>Available flavors: {flavorCans.map(f => f.slug).join(', ')}</p>
        <button 
          onClick={() => window.history.back()} 
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Go Back
        </button>
      </div>
    );
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
