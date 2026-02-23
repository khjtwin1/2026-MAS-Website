import "../styles/Hero.css";
import Apply from "../components/Apply";
import Typewriter from 'typewriter-effect';

function Hero() {
  const mars = "/mars.svg";
  const whiteRing = "/whiteRing.svg"
  const orangeRing = "/orangeRing.svg"
  
  return (
    <section id="vision">
      <div className="heroRow">
        <div className="left">
          <div className="texts">
            <Typewriter
              options={{
                strings: [
                  'SHARE<br/>YOUR<br/><span class="orange">ABILITY</span>',
                  'MY<br/><span class="orange">ABILITY</span><br/>SHARE'
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </div>
          <Apply/>
        </div>
        <div className="planet">
          <img className="mars" src={mars} alt="행성" />
          <img className="wR" src={whiteRing} alt="흰고리" />
          <img className="oR" src={orangeRing} alt="주황고리" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
