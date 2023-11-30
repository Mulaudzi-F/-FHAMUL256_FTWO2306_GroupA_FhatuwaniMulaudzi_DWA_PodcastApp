import React from "react";

export default function Favourite({ item }) {
  console.log(item);
  return (
    <ul className="block">
      {item.map((episode, episodeIndex) => {
        return (
          <li className="p-6 my-1 rounded-lg bg-slate-300" key={episodeIndex}>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold">{episode.title}</h4>
              <img
                src="./images/black love.png"
                className="w-6 h-6 p-1 h-auto block"
              />
            </div>

            <p>{episode.description}</p>
            {/* Audio player for the episode */}
            <audio controls>
              <source src={episode.file} type="audio/mp3" />
            </audio>
            {/* Favorite button */}
          </li>
        );
      })}
    </ul>
  );
}
