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
      <div className="wave-space"></div>
      <div className="wave"></div>
      {/* <div className="hexagon"></div> */}
      {/* <div className="octagon"></div>; */}

    </section>
  );
}

export default CoreValues;
