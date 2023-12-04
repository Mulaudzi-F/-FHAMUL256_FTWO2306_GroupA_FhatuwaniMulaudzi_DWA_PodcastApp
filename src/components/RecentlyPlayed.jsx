import React, { useEffect } from "react";
import { json } from "react-router-dom";

export default function RecentlyPlay() {
  // State to store listening history and the last listened episode
  const [playHistory, setPlayHistory] = React.useState(
    JSON.parse(localStorage.getItem("listenHistory")) || []
  );

  const [lastListened, setLastListened] = React.useState(
    JSON.parse(localStorage.getItem("lastListened")) || {}
  );

  // Effect to update 'listeningHistory' in local storage when it changes
  useEffect(() => {
    localStorage.setItem("listeningHistory", JSON.stringify(playHistory));
  }, [playHistory]);

  // Effect to update 'lastListened' in local storage and add to history
  useEffect(() => {
    localStorage.setItem("lastListened", JSON.stringify(lastListened));

    // Create a timer to add to history after 10 minutes of no activity
    const timer = setTimeout(
      () => {
        if (
          lastListened.show &&
          lastListened.episode &&
          lastListened.progress
        ) {
          setPlayHistory((prevHistory) => [
            ...prevHistory,
            {
              show: lastListened.show,
              episode: lastListened.episode,
              progress: lastListened.progress,
              timestamp: new Date().toISOString(),
            },
          ]);
        }
      },
      10 * 60 * 1000
    );
    // Clean up the timer if component unmounts or 'lastListened' changes
    return () => clearTimeout(timer);
  }, [lastListened]);

  // Function to reset listening history and last listened episode
  function handleResetProgress() {
    setPlayHistory([]);
    setLastListened({});
  }

  // Render the History component
  return (
    <div className="md:mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3">
      <h1 className="text-center mt-7 text-2xl md:text-3xl lg:text-4xl">
        Listening History
      </h1>
      {playHistory.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {playHistory.map((episode, index) => (
            <li
              className="w-full h-3/4 bg-gray-300 flex flex-col text-center justify-center leading-48 p-4"
              key={index}
            >
              <p>Show: {episode.show}</p>
              <p>Episode: {episode.episode}</p>
              <p>Progress: {episode.progress} seconds</p>
              <p>Timestamp: {episode.timestamp}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4">No listening history found.</p>
      )}
      <button
        className="bg-stone-400 rounded-sm p-2 md:p-4 px-4 md:px-9 mt-4 bg-amber-200 w-full"
        onClick={handleResetProgress}
      >
        Reset Listening Progress
      </button>
    </div>
  );
}
