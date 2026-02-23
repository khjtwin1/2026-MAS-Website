import { Link } from "react-router-dom";
import "../styles/Banner.css"

function Banner({ bannerIMG, h1Title, pExplanation1, pExplanation2 }) {
    const bannerStyle = {
    backgroundImage: `url(${bannerIMG})`
  };
  return (
    <div className="bannerAll" style={bannerStyle}>
        <h1 className="bannerTitle">{h1Title}</h1>
        <p className="bannerExplanation">{pExplanation1}<br/>{pExplanation2}</p>
      
    </div>
  );
}

export default Banner;
