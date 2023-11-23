import React from "react";
import Loader from "./Loader";
export default function Shows({
  setIsLoading,
  selectedId,
  isLoading,
  onDateConversion,
}) {
  const [show, setShow] = React.useState({});

  const { title, updated, seasons, id, description, image, genres } = show;

  React.useEffect(
    function () {
      async function fetchShow() {
        setIsLoading(true);
        const res = await fetch(
          `https://podcast-api.netlify.app/id/${selectedId}`
        );

        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setShow(data).catch((error) => {
          console.error("Error during fetch:", error);

          setIsLoading(false);
        });
      }
      fetchShow();
    },
    [selectedId]
  );

  return (
    <>
      <section className="flex-col bg-slate-400">
        <div className="flex justify-between">
          <div>
            <img src={image} />
          </div>
          <div className="flex-col justify-items-center ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
            <p>Genres :{genres} </p>
          </div>
        </div>
        <div className="flex-col  pt-4">
          {seasons
            ? seasons.map((eachSeason) => {
                return (
                  <ShowSeason
                    updated={updated}
                    item={eachSeason}
                    key={eachSeason.id}
                    onDateConversion={onDateConversion}
                  />
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
}

function ShowSeason({ item, updated, onDateConversion }) {
  console.log(item);
  return (
    <div className="m-1 flex bg-slate-100 rounded-b-lg">
      <div className=" h-40">
        <img src={item.image} className="object-contain   h-40 items-center " />
      </div>
      <div className="flex-col   mx-10">
        <div className="ps-10 pt-9">
          <h3 className="text-xl font-bold">{item.title}</h3>
        </div>

        <div className="grid pt-16    self-end grid-flow-col gap-14">
          <p className="text-lg font-medium">
            No Episode {item.episodes.length}
          </p>
          <p className="text-lg font-medium">🗓️ {onDateConversion(updated)}</p>
        </div>
      </div>
    </div>
  );
}
