import React from "react";
import PreviewCard from "./previewCard";
import Shows from "./Shows";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Preview({
  onSetPreviewInfo,
  onPreviewInfo,
  onSelectedId,
  onDateConversion,
  setIsLoading,
}) {
  React.useEffect(function () {
    async function getPreview() {
    
      const res = await fetch("https://podcast-api.netlify.app/shows");
      const data = await res.json();

      onSetPreviewInfo(data);
      
    }

    getPreview();
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

  return <div className="grid grid-cols-3 gap-4 my-10"> {Cards}</div>;
}
