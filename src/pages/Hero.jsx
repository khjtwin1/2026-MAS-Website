import "../styles/Hero.css";
import Apply from "../components/Apply";
import mars from "../../public/mars.svg";
import whiteRing from "../../public/whiteRing.svg";
import orangeRing from "../../public/orangeRing.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="heroRow">
        <div>
          <div className="texts">
            <p>SHARE</p>
            <p>YOUR</p>
            <p className="orange">ABILITY</p>
          </div>
          <Apply className="hero_apply" />
        </div>
        <div className="planet">
          <img className="mars" src={mars} alt="행성" />
          <img className="wR" src={whiteRing} alt="흰고리" />
          <img className="oR" src={orangeRing} alt="주황고리" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
