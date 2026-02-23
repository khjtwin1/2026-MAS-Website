import "../styles/PrizePictureElement.css"

function PrizePictureElement({ PictureElement, explanationElement }) {
  return (
    <div className="PrizePictureElement">
      <img src={PictureElement} alt="" className="picture"/>
      <p className="overlayText">{explanationElement}</p>
    </div>
  );
}

export default PrizePictureElement;