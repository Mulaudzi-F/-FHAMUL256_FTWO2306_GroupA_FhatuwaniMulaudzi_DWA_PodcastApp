import React from "react";
import Loader from "./Loader";
export default function Shows({ setIsLoading, selectedId, isLoading }) {
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
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Genres :{genres} </p>
          </div>
        </div>
        <div className="flex-col justify-between my-4">
          {seasons
            ? seasons.map((eachSeason) => {
                return <ShowSeason item={eachSeason} key={eachSeason.id} />;
              })
            : ""}
        </div>
      </section>
    </>
  );
}

function ShowSeason({ item }) {
  console.log(item);
  return (
    <div className="my-1 flex bg-slate-100 rounded-b-lg">
      <div className="w-2/5 h-40">
        <img
          src={item.image}
          className="object-cover w-2/5 h-40 items-center "
        />
      </div>
      <div>
        <h3>{item.title}</h3>

        <p>No Episode {item.episodes.length}</p>
      </div>
    </div>
  );
}
