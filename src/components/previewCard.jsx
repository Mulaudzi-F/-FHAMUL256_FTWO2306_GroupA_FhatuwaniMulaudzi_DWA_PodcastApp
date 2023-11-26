import React from "react";

export default function PreviewCard(item) {
  return (
    <div
      onClick={() => item.onSelectedId(item.id)}
      className="flex-col items-center w-full h-182 bg-[#f7cad0] p-4 rounded-lg"
    >
      <div className="img--container h-17">
        <img src={item.image} className="w-1/2 h-18" />
      </div>
      <div className="show--title flex-1 ml-4 ">
        <h1 className=" my-2 text-xl text-[#080708] text-center">
          {item.title}
        </h1>
        <div className="flex justify-between items-end">
          <span className="flex  space-x-2">
            <p> 🗓️ {item.updates}</p>
          </span>
          <h3>seasons {item.numberOfSeasons}</h3>
        </div>
      </div>
    </div>
  );
}
