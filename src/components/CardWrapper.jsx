import { Character, Location, Episode } from "./";
import { RESOURCE_TYPE } from "../shared/constants";
import {resourceTypeContext} from '../App';
import { useContext } from "react";

const CARD_TYPE = {
  [RESOURCE_TYPE.CHARACTER]: () => <Character />,
  [RESOURCE_TYPE.LOCATION]: () => <Location />,
  [RESOURCE_TYPE.EPISODE]: () => <Episode />,
};
const CardWrapper = () => {
  const selectedType = useContext(resourceTypeContext);
  return <div className="grid-container">{CARD_TYPE[selectedType]()}</div>;
};

export default CardWrapper;
