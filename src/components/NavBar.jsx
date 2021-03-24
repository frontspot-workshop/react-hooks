import { useContext } from "react";
import { resourceTypeContext } from "../App";
import { RESOURCE_TYPE } from "../shared/constants";

const NavBar = ({ handleClick = () => {} }) => {
  const selectedType=useContext(resourceTypeContext);

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
