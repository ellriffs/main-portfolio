import "./Body.css";
import Logo from "../../assets/Logo.png";
const Body = () => {
  return (
    <div className="body-container">
      <img src={Logo} alt="selfie" className="body-img" />
      <p className="subtitle-1">CREATIVE/</p>
      <p className="subtitle-2">FRONTEND DEVELOPER</p>
      <p className="firstName">ELLIOT</p>
      <p className="secondName">ROBERTSON</p>
    </div>
  );
};

export default Body;
