import React from "react";
import PreviewCard from "./previewCard";
import Shows from "./Shows";
import Navbar from "./Navbar";

export default function Preview({
  onSetPreviewInfo,
  onPreviewInfo,
  onSelectedId,
  onDateConversion,
}) {
  React.useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        onSetPreviewInfo(data);
      });
  }, []);

  const Cards = onPreviewInfo.map((card) => {
    return (
      <PreviewCard
        onSelectedId={onSelectedId}
        key={card.id}
        image={card.image}
        title={card.title}
        descripton={card.descripton}
        updates={onDateConversion(card.updated)}
        numberOfSeasons={card.seasons}
        id={card.id}
      />
    );
  });

  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      <Navbar />
      {Cards}
    </div>
  );
}
