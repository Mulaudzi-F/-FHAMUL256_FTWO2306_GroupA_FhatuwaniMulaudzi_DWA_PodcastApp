import React from "react";

export default function Episodes({ selectedSeason }) {
  selectedSeason ? console.log(selectedSeason) : "";
  return (
    <section>
      <div className="cover--img"></div>
      <div></div>
    </section>
  );
}
