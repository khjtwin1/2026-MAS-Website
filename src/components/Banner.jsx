import { Link } from "react-router-dom";
import "../styles/Banner.css";

function Banner({ bannerIMG, h1Title, pExplanation1, pExplanation2 }) {
  return (
    <div className="bannerAll">
      <img src={bannerIMG} alt="" className="bannerBg" />
      <h1 className="bannerTitle" style={{ color: "#fff" }}>
        {h1Title}
      </h1>
      <p className="bannerExplanation" style={{ color: "#C3C3C3" }}>
        {pExplanation1}
        <br />
        {pExplanation2}
      </p>
    </div>
  );
}

export default Banner;
