import React from "react";

export default function Genres({ onHeader }) {
  return (
    <div className=" genre-container bg-neutral-400 rounded-md shadow-md text-lg m-4">
      <h2 className="text-center">{onHeader}</h2>
    </div>
  );
}
