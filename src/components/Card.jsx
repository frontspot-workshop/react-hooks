import ImageLoader from "./ImageLoader";

const Card = ({
  name,
  src,
  statusTitle,
  statusContent,
  sectionTitle,
  sectionContent,
  className = "status-title",
}) => {
  return (
    <div className="card">
      <div className="avatar">
        <ImageLoader src={src} alt={name} />
      </div>
      <div className="card-content">
        <div className="section">
          <div className="card-title">{name}</div>
          <span className="status">
            <span className={className}>{statusTitle}</span> -{" "}
            <span>{statusContent}</span>
          </span>
        </div>
        <div className="section">
          <span className="section-title">{sectionTitle}:</span>
          <span className="section-content">{sectionContent}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
