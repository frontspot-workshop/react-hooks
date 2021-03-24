const Pagination = ({ info, handleClick, disabled }) => {
  const { prev, next, pages } = info;

  return (
    <div className="pagination">
      <span className="total-pages">Total pages: {pages}</span>
      <button
        onClick={() => handleClick(prev)}
        disabled={!prev || disabled}
        className="pagination-button"
      >
        <i className="arrow left" />
      </button>
      <button
        onClick={() => handleClick(next)}
        disabled={!next || disabled}
        className="pagination-button"
      >
        <i className="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
