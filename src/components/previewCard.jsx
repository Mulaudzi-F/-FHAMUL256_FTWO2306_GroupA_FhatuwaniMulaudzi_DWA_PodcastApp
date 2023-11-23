import React from "react";

export default function PreviewCard(item) {
  return (
    <div
      onClick={() => item.onSelectedId(item.id)}
      className="flex items-center w-full bg-[#f7cad0] p-4 rounded-lg"
    >
      <div className="img--container">
        <img src={item.image} className="w-full h-auto" />
      </div>
      <div className="show--title flex-1 ml-4 ">
        <h1 className=" my-2 text-xl text-[#080708] text-center">
          {item.title}
        </h1>
        <div className="flex justify-between items-end">
          <span className="flex items-end space-x-2">
            <img src="./images/time-left.png" className="w-4 h-4 my-1" />
            <p>{item.updates}</p>
          </span>
          <h3>seasons {item.numberOfSeasons}</h3>
        </div>
      </div>
    </div>
  );
}
