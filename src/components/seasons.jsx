import React from "react";
import ShowCard from "./ShowCard";

export default function Seasons() {
  const [season, setSeason] = React.useState([]);

  React.useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => setSeason(data));
  }, []);

  const Cards = season.map((card) => {
    return (
      <ShowCard
        key={card.id}
        image={card.image}
        title={card.title}
        descripton={card.descripton}
        updates={card.updated}
      />
    );
  });
  console.log(season);

  return <div className="grid grid-cols-4 gap-4">{Cards}</div>;
}
