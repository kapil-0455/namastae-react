import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <div className="header-container">
      <div className="img-container">
        <img src={LOGO_URL} alt="logo" className="img-logo" />
      </div>
      <div className="title-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
