import React from "react";

export default function Episodes({
  episode,
  getFavourite,
  episodeIndex,
  selectedSeason,
  isFavourite,
}) {
  return (
    <>
      {selectedSeason ? (
        <li className="p-4 md:p-6 my-1 rounded-lg bg-slate-300">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h4 className="text-lg font-bold">{episode.title}</h4>
            <img
              src="./images/white love.png"
              className="w-6 h-6 p-1 h-auto block mt-2 md:mt-0"
              onClick={(event) => getFavourite(event, episode)}
            />
          </div>

          <p className="mt-2">{episode.description}</p>
          {/* Audio player for the episode */}
          <audio className="w-full" controls>
            <source src={episode.file} type="audio/mp3" />
          </audio>
          {/* Favorite button */}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
