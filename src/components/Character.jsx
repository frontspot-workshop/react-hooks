import Card from "./Card";
import {dataContext} from '../App';
import { useContext } from "react";

const STATUS_STYLE = {
  ALIVE: "green",
  DEAD: "red",
  UNKNOWN: "gray",
};

const Character = () => {
  const data = useContext(dataContext);

  return data?.map((item) => {
    const { name, image, status, species, location } = item;
    return (
      <Card
        key={item.id}
        name={name}
        src={image}
        statusTitle={status}
        statusContent={species}
        sectionTitle="Last known location:"
        sectionContent={location?.name}
        className={STATUS_STYLE[status?.toUpperCase()]}
      />
    );
  });
};

export default Character;
