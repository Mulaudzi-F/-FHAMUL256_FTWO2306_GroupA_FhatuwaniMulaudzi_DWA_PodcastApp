import React from "react";
import PreviewCard from "./previewCard";
import Shows from "./Shows";
import Loader from "./Loader";

export default function Preview({
  onSetPreviewInfo,
  onPreviewInfo,
  onSelectedId,
  onDateConversion,
  setIsLoading,
  isLoading,
}) {
  React.useEffect(function () {
    async function getPreview() {
      setIsLoading(true);
      const res = await fetch("https://podcast-api.netlify.app/shows");
      const data = await res.json();

      onSetPreviewInfo(data);
      setIsLoading(false);
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

  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {isLoading ? <Loader /> : Cards}
    </div>
  );
}
