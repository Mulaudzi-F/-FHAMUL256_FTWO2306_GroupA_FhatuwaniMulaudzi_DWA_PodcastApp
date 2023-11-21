import React from "react";

export default function Shows({ onPreviewInfo }) {
  const showId = onPreviewInfo.map((onPreviewInfo) => onPreviewInfo.id);
  const [show, setShow] = React.useState([]);
  React.useEffect(() => {
    // setShow((show) =>
    //   onShowId.map((ashow) =>
    //podcast-api.netlify.app/id/10716
    https: fetch(`https://podcast-api.netlify.app/id/${showId[0]}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        res.json();
      })
      .then((data) => data);
    //   )
    // );
  }, [showId, show]);

  return (
    <>
      <div className="flex ">
        <div className="preview--img"></div>
      </div>
    </>
  );
}

function ShowsBox() {
  return <></>;
}
