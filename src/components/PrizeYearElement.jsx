import { Link } from "react-router-dom";
import "../styles/PrizeYearElement.css"

function PrizeYearElement({ Year }) {
  return (
    <div className="PrizeYearElement">
      <button className="yearBtn">{Year}</button>
    </div>
  );
}

export default PrizeYearElement;