import React from "react";
import PreviewCard from "./previewCard";

export default function Seasons() {
  const [season, setSeason] = React.useState([]);

  React.useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => setSeason(data));
  }, []);

  function dateConversion(date) {
    const dateObject = new Date(date);
    const day = String(dateObject.getUTCDate()).padStart(2, "0");
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
    const year = dateObject.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  const Cards = season.map((card) => {
    return (
      <PreviewCard
        key={card.id}
        image={card.image}
        title={card.title}
        descripton={card.descripton}
        updates={dateConversion(card.updated)}
        numberOfSeasons={card.seasons}
      />
    );
  });

  return <div className="grid grid-cols-4 gap-4">{Cards}</div>;
}
