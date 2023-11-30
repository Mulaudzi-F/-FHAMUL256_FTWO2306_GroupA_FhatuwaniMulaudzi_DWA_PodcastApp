import React, { useEffect } from "react";
import { json } from "react-router-dom";

export default function RecentlyPlay() {
  const [playHistory, setPlayHistory] = React.useState(
    JSON.parse(localStorage.getItem("listenHistory")) || []
  );

  const [lastListened, setLastListened] = React.useState(
    JSON.parse(localStorage.getItem("lastListened")) || {}
  );

  useEffect(() => {
    localStorage.setItem("listeningHistory", JSON.stringify(playHistory));
  }, [playHistory]);

  useEffect(() => {
    localStorage.setItem("lastListened", JSON.stringify(lastListened));

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

    return () => clearTimeout(timer);
  }, [lastListened]);

  function handleResetProgress() {
    setPlayHistory([]);
    setLastListened({});
  }

  return (
    <div>
      <h1>Listening History </h1> 
      {listeningHistory.length > 0 ? (
        <ul>
          {listeningHistory.map((episode, index) => (
            <li key={index}>
              <p>Show: {episode.show}</p>
              <p>Episode: {episode.episode}</p>
              <p>Progress: {episode.progress} seconds</p>
              <p>Timestamp: {episode.timestamp}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No listening history found.</p>
      )}
      <button onClick={handleResetProgress}>Reset Listening Progress</button>
    </div>
  );
} 

export default History;
