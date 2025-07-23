import "./Button.css";

const Button = ({ label = "Click Me", onClick }) => {
  return <button className="button" onClick={onClick}>{label}</button>;
};

export default Button;
