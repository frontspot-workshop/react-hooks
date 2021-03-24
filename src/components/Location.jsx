import Card from "./Card";
import { dataContext } from "../App";
import { useContext } from "react";

const Location = () => {
  const data = useContext(dataContext);

  return data?.map((item) => {
    const { name, type, dimension } = item;
    return (
      <Card
        key={item.id}
        name={name}
        statusTitle="Type"
        statusContent={type}
        sectionTitle="Dimension"
        sectionContent={dimension}
      />
    );
  });
};

export default Location;
