import "../styles/CoreValues.css";
import CoreValueCard from "../components/CoreValueCard";
import coreValuesList from "../../data/coreValuesList";

function CoreValues() {
  return (
    <section id="coreValues">
      <div className="core-header">
        <h1 className="title">CORE VALUES</h1>
        <p className="orange">MAS가 추구하는 핵심 가치</p>
      </div>
      <div className="corevalues_items">
        {coreValuesList.map((item) => (
          <CoreValueCard
            key={item.title}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <div className="wave-container">
        <div className="wave-track">
          <svg viewBox="0 0 1920 288" preserveAspectRatio="none">
            <path
              d="M0 0
                L80 36
                C160 72 320 144 480 186
                C640 228 800 240 960 192
                C1120 144 1280 36 1440 36
                C1600 36 1760 144 1840 198

                L1920 252
                V288
                H0
                V0
                Z
                "
              fill="#FF6E00"
              fillOpacity="0.35"
            />
          </svg>

          <svg viewBox="0 0 1920 288" preserveAspectRatio="none">
            <path
              d="M0 0
                L80 36
                C160 72 320 144 480 186
                C640 228 800 240 960 192
                C1120 144 1280 36 1440 36
                C1600 36 1760 144 1840 198

                L1920 252
                V288
                H0
                V0
                Z
                "
              fill="#FF6E00"
              fillOpacity="0.35"
            />
          </svg>
        </div>
      </div>

    </section>
  );
}

export default CoreValues;
