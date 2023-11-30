import React from "react";

export default function Episodes({
  episode,
  getFavourite,
  episodeIndex,
  selectedSeason,
}) {
  return (
    <>
      {selectedSeason ? (
        <li className="p-6 my-1 rounded-lg bg-slate-300">
          <div className="flex justify-between">
            <h4 className="text-lg font-bold">{episode.title}</h4>
            <img
              src="./images/white love.png"
              className="w-6 h-6 p-1 h-auto block"
              onClick={(event) => getFavourite(event, episode)}
            />
          </div>

          <p>{episode.description}</p>
          {/* Audio player for the episode */}
          <audio controls>
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
