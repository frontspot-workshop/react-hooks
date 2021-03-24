import { RESOURCE_TYPE } from "../shared/constants";

const NavBar = ({ handleClick = () => {}, selectedType = RESOURCE_TYPE.CHARACTER }) => {

  return (
    <div className="nav">
      {Object.values(RESOURCE_TYPE).map((resourceType, index) => {
        const active = resourceType === selectedType;
        return (
          <button
            key={index}
            onClick={() => handleClick(resourceType)}
            disabled={active}
            className={`nav-item ${active ? "active" : ""}`}
          >
            {resourceType}
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
