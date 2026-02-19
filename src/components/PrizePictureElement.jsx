import { Link } from "react-router-dom";
import "../styles/PrizePictureElement.css"

function PrizePictureElement({ PictureElement }) {
  return (
    <div className="PrizePictureElement">
      <img src={PictureElement} alt="" className="picture"/>
    </div>
  );
}

export default PrizePictureElement;