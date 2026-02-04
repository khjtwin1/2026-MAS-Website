import "../styles/CoreValuesElements.css";

function CoreValuesElements({ image, title, content }) {
  return (
    <div className="coreValuesElement">
      <div className="background">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default CoreValuesElements;
