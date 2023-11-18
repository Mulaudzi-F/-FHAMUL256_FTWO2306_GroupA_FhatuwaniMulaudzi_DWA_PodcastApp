import React from "react";

export default function ShowCard(item) {
  console.log(item);
  return (
    <div className="flex w-64 h-64 flex-col">
      <div className="img--container">
        <img src={item.image} className="" />
      </div>
      <div className="show--title">
        <h2>{item.title}</h2>
      </div>
      <div className="flex ">
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
