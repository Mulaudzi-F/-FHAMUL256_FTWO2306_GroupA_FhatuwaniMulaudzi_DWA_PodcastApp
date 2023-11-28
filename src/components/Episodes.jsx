import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
export default function Episodes({
  selectedSeason,
  onSetFavourite,
  favourite,
  handleAudioPlay,
  audioPlay,
  description,
}) {
  function getFavourite(newFavourite) {
    const targetFavourite = newFavourite;

    onSetFavourite([...favourite, targetFavourite]);
  }

  const episode = selectedSeason
    ? selectedSeason.map((singleEpisode) => (
        <EpisodesCollection
          item={singleEpisode}
          key={selectedSeason.indexOf(singleEpisode)}
          onHandleAudioPlay={handleAudioPlay}
          onGetFavourite={getFavourite}
        />
      ))
    : "";

  return (
    <>
      {selectedSeason ? (
        <section className="w-5/12 bg-stone-400 my-0 mx-auto text-left  justify-center items-center">
          <div className="flex justify-center items-center">
            <p>{description ? description : ""}</p>
          </div>
          {episode}

          {audioPlay ? (
            <AudioPlay onAudioPlay={audioPlay} onDescription={description} />
          ) : (
            ""
          )}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

function EpisodesCollection({ item, onHandleAudioPlay, onGetFavourite }) {
  return (
    <div
      className="audio my-1  bg-red-200 w-17"
      onClick={() => onHandleAudioPlay(item.file, item.description)}
    >
      <span className="flex justify-between">
        <p className="p-2">{item.title} </p>{" "}
        <img
          src="./images/white love.png"
          className="w-6 h-6 p-1 h-auto block"
          onClick={() => onGetFavourite(item)}
        />
      </span>
    </div>
  );
}

function AudioPlay({ onAudioPlay }) {
  return (
    <div className="audio border overflow-hidden  flex">
      <audio controls>
        <source src={onAudioPlay ? onAudioPlay : ""} type="audio/mp3" />
      </audio>
    </div>
  );
}
