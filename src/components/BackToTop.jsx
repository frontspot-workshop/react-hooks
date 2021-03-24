const BackToTop = ({ handleClick = () => {} }) => (
  <div className="back-to-top">
    <button onClick={handleClick} className="back-to-top-button">
      <i className="arrow up" />
    </button>
  </div>
);

export default BackToTop;
