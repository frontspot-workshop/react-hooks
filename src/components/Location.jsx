import Card from "./Card";

const Location = ({data = []}) => {

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
