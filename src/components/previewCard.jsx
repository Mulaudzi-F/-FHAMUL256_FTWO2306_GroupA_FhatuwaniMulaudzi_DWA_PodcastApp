import React from "react";

export default function PreviewCard(item) {
  function DescriptionPreview() {
    return (
      <dialog open="true">
        <div>
          <p>{item.description}</p>
        </div>
      </dialog>
    );
  }

  return (
    <div className="flex w-64 h-64 flex-col rounded-lg bg-cyan-300">
      <div className="img--container">
        <img src={item.image} className="" />
      </div>
      <div className="show--title">
        <h1 className="text-center my-2 text-lg text-[#ffffff]">
          {item.title}
        </h1>
      </div>
      <div>
        <h3>seasons {item.numberOfSeasons}</h3>
      </div>
      <div className="flex  justify-between">
        <p>{item.updates}</p>
        <button onClick={DescriptionPreview} className="">
          View Description
        </button>
      </div>
    </div>
  );
}
