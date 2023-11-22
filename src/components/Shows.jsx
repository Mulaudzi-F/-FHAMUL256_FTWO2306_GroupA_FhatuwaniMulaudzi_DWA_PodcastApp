import React from "react";

export default function Shows({ onPreviewInfo }) {
  const showId = onPreviewInfo.map((onPreviewInfo) => onPreviewInfo.id);
  const [show, setShow] = React.useState([]);

  console.log(showId);
  React.useEffect(() => {
    // setShow((show) =>
    //   onShowId.map((ashow) =>
    //podcast-api.netlify.app/id/10716

    fetch("https://podcast-api.netlify.app/id/10716")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // Now you can work with the JSON data
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  }, []);

  return (
    <>
      <div className="flex ">
        <div className="preview--img">
          <img src={show.image} />
        </div>
        <div>
          <p>{show.title}</p>
        </div>
      </div>
    </>
  );
}

function ShowsBox() {
  return (
    <div className="flex">
      <div></div>
    </div>
  );
}
