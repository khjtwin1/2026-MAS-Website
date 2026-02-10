import "../styles/Hero.css";
import Apply from "../components/Apply";

function Hero() {
  const mars = "/mars.svg";
  const whiteRing = "/whiteRing.svg"
  const orangeRing = "/orangeRing.svg"
  return (
    <section id="hero">
      <div className="hero">
        <div className="heroRow">
          <div>
            <h1 className="texts">
              <p>SHARE<br/>YOUR</p>
              <p className="orange">ABILITY</p>
            </h1>
            <Apply className="hero_apply" />
          </div>
          <div className="planet">
            <img className="mars" src={mars} alt="행성" />
            <img className="wR" src={whiteRing} alt="흰고리" />
            <img className="oR" src={orangeRing} alt="주황고리" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
