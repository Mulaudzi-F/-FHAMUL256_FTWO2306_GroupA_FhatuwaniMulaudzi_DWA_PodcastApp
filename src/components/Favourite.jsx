import React from "react";
import Navbar from "./Navbar";

export default function Favourite({
  favourite,
  description,
  audioPlay,
  handleAudioPlay,
}) {
  console.log(favourite);

  const favoriteEpisode = favourite
    ? favourite.map((singleEpisode) => (
        <FavouriteCollection
          item={singleEpisode}
          key={favourite.indexOf(singleEpisode)}
          onHandleAudioPlay={handleAudioPlay}
        />
      ))
    : "";

  return (
    <div>
      <Navbar />
      <>
        {favourite ? (
          <section className="w-5/12 bg-stone-400 my-0 mx-auto text-left  justify-center items-center">
            <div className="flex justify-center items-center">
              <img src="./images/images.png" className="mix-blend-multiply" />

              <p>{description ? description : ""}</p>
            </div>
            {favoriteEpisode}

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
    </div>
  );
}

function FavouriteCollection({ item }) {
  return (
    <div className="audio my-1  bg-red-200 w-17">
      <span className="flex justify-between">
        <p className="p-2">{item.title} </p>{" "}
        <img
          src="./images/black love.png"
          className="w-6 h-6 p-1 h-auto block"
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
