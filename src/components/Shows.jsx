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
  onFavouriteClick,
}) {
  const [show, setShow] = React.useState({});
  const [openEpisodes, setOpenEpisodes] = React.useState(false);
  const [selectedSeason, setSelectedSeason] = React.useState(null);
  const [localFavorites, setLocalFavorites] = React.useState(favourite);

  function getSeasonClicked(season) {
    setSelectedSeason((prevSeason) => (prevSeason === season ? null : season));
  }

  // Handle favorite button click
  const handleFavoriteClick = (event) => {
    if (show) {
      onFavouriteClick(show);
      event.stopPropagation();
    }
  };

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
            <div className="flex flex-col lg:flex-row bg-slate-400 justify-between">
              <div className="w-full lg:w-1/3">
                <img src={image} className="w-full h-auto" alt="Show Poster" />
              </div>
              <div className="flex flex-col justify-center mx-4 lg:mx-0 lg:w-2/3">
                <h2 className="text-2xl font-bold pt-4 lg:pt-8">{title}</h2>
                <span className="mx-2 lg:mx-10">
                  <p className="tracking-wide leading-loose">{description}</p>
                  <p>{genres ? `Genres: ${genres}` : ""}</p>
                </span>
              </div>
            </div>
            <div className="flex-col pt-4">
              {seasons
                ? seasons.map((eachSeason, index) => (
                    <ShowSeason
                      updated={updated}
                      item={eachSeason}
                      key={index}
                      onDateConversion={onDateConversion}
                      numbering={index}
                      getSeasonClicked={getSeasonClicked}
                      selectedSeason={selectedSeason}
                      getFavourite={handleFavoriteClick}
                    />
                  ))
                : "No PlayList at the moment"}
            </div>
          </section>
        )
      ) : (
        ""
      )}
    </>
  );

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
        className="m-1 flex-col  rounded-b-lg cursor-pointer"
        onClick={() => {
          getSeasonClicked(item);
        }}
      >
        <div className="flex flex-col lg:flex-row bg-red-100">
          <div className="flex">
            <div className="text-2xl pt-4 lg:pt-10 font-bold">
              {numbering + 1}
            </div>
            <div className="h-40">
              <img
                src={item.image}
                className="object-cover h-40 lg:h-auto"
                alt={`Season ${numbering + 1} Poster`}
              />
            </div>
          </div>
          <div className="flex-col mx-4 lg:mx-10">
            <div className="ps-4 pt-4 lg:pt-9">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>

            <div className="grid pt-2 lg:pt-16 self-end grid-flow-col gap-2 lg:gap-14">
              <p className="text-lg font-medium">
                Episodes: {item.episodes.length}
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
}
