import React from "react";

export default function PreviewCard(item) {
  return (
    <div className="flex w-64 h-64 flex-col rounded-lg bg-cyan-300">
      <div className="img--container">
        <img src={item.image} className="" />
      </div>
      <div className="show--title">
        <h1>{item.title}</h1>
      </div>
      <div>
        <h3>seasons {item.numberOfSeasons}</h3>
      </div>
      <div className="flex  justify-between">
        <p>{item.updates}</p>
        <button className="">View Description</button>
      </div>
      <dialog>
        <div>
          <p>{item.description}</p>
        </div>
      </dialog>
    </div>
  );
}
