import React from "react";

export default function PreviewCard(item) {
  return (
    <div
      onClick={() => item.onSelectedId(item.id)}
      className="flex-col items-center w-full bg-[#f7cad0] p-4 rounded-lg"
    >
      <div className="img--container mx-auto">
        <img
          src={item.image}
          className="w-full md:w-1/2 h-18 object-cover"
          alt={item.title}
        />
        <h1 className="my-2 text-xl text-[#080708] text-center">
          {item.title}
        </h1>
      </div>

      <div className="flex-col pt-4 md:pt-20">
        <span className="flex space-x-2">
          <p>🗓️ {item.updates}</p>
        </span>
        <h3>Seasons {item.numberOfSeasons}</h3>
      </div>
    </div>
  );
}
