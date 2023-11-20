import React from "react";

export default function Seasons() {
  fetch("https://podcast-api.netlify.app/id/10716")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <div className="flex ">
        <div className="preview--img"></div>
      </div>
    </>
  );
}
