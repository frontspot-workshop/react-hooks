import { Character, Location, Episode } from "./";
import { RESOURCE_TYPE } from "../shared/constants";

const CARD_TYPE = {
  [RESOURCE_TYPE.CHARACTER]: (data) => <Character data={data} />,
  [RESOURCE_TYPE.LOCATION]: (data) => <Location data={data} />,
  [RESOURCE_TYPE.EPISODE]: (data) => <Episode data={data} />,
};
const CardWrapper = ({ data = [], selectedType = RESOURCE_TYPE.CHARACTER }) => {
  return <div className="grid-container">{CARD_TYPE[selectedType](data)}</div>;
};

export default CardWrapper;
