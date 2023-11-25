import React from "react";

export default function Episodes({ selectedSeason }) {
  const [audioPlay, setAudioPlay] = React.useState(null);
  const [description, setDescription] = React.useState("");
  selectedSeason ? console.log(selectedSeason) : "";

  audioPlay ? console.log(audioPlay) : "";

  function handleAudioPlay(file, episodeDescription) {
    setAudioPlay(file);
    setDescription(episodeDescription);
  }

  const episode = selectedSeason
    ? selectedSeason.map((singleEpisode) => (
        <EpisodesCollection
          item={singleEpisode}
          key={selectedSeason.indexOf(singleEpisode)}
          onHandleAudioPlay={handleAudioPlay}
        />
      ))
    : "";

  return (
    <>
      {selectedSeason ? (
        <section className="w-5/12 bg-stone-400 my-0 mx-auto text-left  justify-center items-center">
          <div className="flex justify-center items-center">
            <img src="./images/images.png" className="mix-blend-multiply" />

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

function EpisodesCollection({ item, onHandleAudioPlay }) {
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
