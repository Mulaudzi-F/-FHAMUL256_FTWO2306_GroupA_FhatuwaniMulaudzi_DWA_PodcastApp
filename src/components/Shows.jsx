import React from "react";
import Loader from "./Loader";
import Episodes from "./Episodes";

export default function Shows({
  setIsLoading,
  selectedId,
  isLoading,
  onDateConversion,
  handleSelectedSeason,
  setFavourite,
  favourite,
}) {
  const [show, setShow] = React.useState({});
  const [openEpisodes, setOpenEpisodes] = React.useState(false);
  const [selectedSeason, setSelectedSeason] = React.useState(null);

  function getSeasonClicked(season) {
    setSelectedSeason((prevSeason) => (prevSeason === season ? null : season));
  }

  function getFavourite(event, newFavourite) {
    console.log(newFavourite);
    const targetFavourite = newFavourite;
    setFavourite([...favourite, targetFavourite]);
    event.stopPropagation();
  }

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

        setShow(data);
        setIsLoading(false);
      }
      fetchShow();
    },
    [selectedId]
  );

  return (
    <>
      {show ? (
        isLoading ? (
          <Loader />
        ) : (
          <section className="flex-col">
            <div className="flex bg-slate-400 justify-between">
              <div>
                <img src={image} />
              </div>
              <div className="grid justify-items-center ">
                <h2 className="text-2xl font-bold pt-8">{title}</h2>
                <span className="mx-10 ">
                  <p className="tracking-wide leading-loose">{description}</p>
                  <p>{genres ? `Genres :${genres}` : ""}</p>
                </span>
              </div>
            </div>
            <div className="flex-col  pt-4">
              {seasons
                ? seasons.map((eachSeason) => {
                    return (
                      <>
                        <ShowSeason
                          updated={updated}
                          item={eachSeason}
                          key={seasons.indexOf(eachSeason)}
                          onDateConversion={onDateConversion}
                          numbering={seasons.indexOf(eachSeason)}
                          getSeasonClicked={getSeasonClicked}
                          selectedSeason={selectedSeason}
                          getFavourite={getFavourite}
                        />
                      </>
                    );
                  })
                : "No PlayList at the moment"}
            </div>
          </section>
        )
      ) : (
        ""
      )}
    </>
  );
}

function ShowSeason({
  item,
  updated,
  onDateConversion,
  numbering,
  getSeasonClicked,
  selectedSeason,
  getFavourite,
}) {
  return (
    <div
      className="m-1 flex-col  rounded-b-lg"
      onClick={() => {
        getSeasonClicked(item);
      }}
    >
      <div className="flex bg-red-100">
        <div className="flex">
          <div className="text-2xl  pt-10 font-bold">{numbering + 1}</div>
          <div className=" h-40">
            <img
              src={item.image}
              className="object-contain   h-40 items-center "
            />
          </div>
        </div>
        <div className="flex-col mx-10">
          <div className="ps-10 pt-9">
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>

          <div className="grid pt-16    self-end grid-flow-col gap-14">
            <p className="text-lg font-medium">
              No Episodes {item.episodes.length}
            </p>
            <p className="text-lg font-medium">
              🗓️ {onDateConversion(updated)}
            </p>
          </div>
          <ul
            className={`my-2 ${selectedSeason === item ? "block" : "hidden"}`}
          >
            {item.episodes.map((episode, episodeIndex) => (
              <Episodes
                key={episodeIndex}
                episode={episode}
                episodeIndex={episodeIndex}
                selectedSeason={selectedSeason}
                getFavourite={getFavourite}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
