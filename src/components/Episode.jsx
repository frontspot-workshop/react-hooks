import Card from './Card';

const Episode = ({data = []}) => {

  return data?.map((item) => {
    const { name, air_date, episode } = item;
    return (
      <Card
        key={item.id}
        name={name}
        statusTitle="Air date"
        statusContent={air_date}
        sectionTitle="Episode"
        sectionContent={episode}
      />
    );
  });
};

export default Episode;
