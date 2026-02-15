import "../styles/CoreValueCard.css";

function CoreValueCard({ image, title, content }) {
  return (
    <div className="coreValueCard">
      <div className="background">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default CoreValueCard;
