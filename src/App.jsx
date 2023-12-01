import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";
import Favourite from "./components/Favourite";
import Loader from "./components/Loader";
import RecentlyPlay from "./components/RecentlyPlayed";
import Authentication from "./components/Authotications";
import React from "react";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [listenHistory, setListenHistory] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lastListened, setLastListened] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPodcast, setSelectedPodcast] = useState(
    JSON.parse(localStorage.getItem("selectedPodcast")) || null
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteEpisodes")) || []
  );

  function handleSelectedId(id) {
    setSelectedId(id);
  }

  function handleCloseSelected() {
    setSelectedId(null);
  }

  function dateConversion(date) {
    const dateObject = new Date(date);
    const day = String(dateObject.getUTCDate()).padStart(2, "0");
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
    const year = dateObject.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || "home"
  );
  const [selectedShow, setSelectedPodShow] = useState(
    JSON.parse(localStorage.getItem("selectedShow")) || []
  );

  function handleNavigation(page) {
    setCurrentPage(page);
  }

  // Function to handle episode completion and update listening history
  const handleEpisodeComplete = (episode) => {
    if (!listenHistory.some((item) => item.id === episode.id)) {
      setListenHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  // Function to handle episode progress and set last listened episode
  const handleEpisodeProgress = (episode, currentTime) => {
    if (currentTime >= episode.duration - 10) {
      setLastListened({
        show: episode.show,
        episode: episode.title,
        progress: currentTime,
      });
    }
  };

  // Function to handle favorite button click and update favorites
  const handleFavoriteClick = (episode) => {
    if (!favorites.some((fav) => fav.id === episode.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, episode]);
    }
  };

  // Save the current page and selected podcast in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
    localStorage.setItem("selectedPodcast", JSON.stringify(selectedPodcast));
  }, [currentPage, selectedPodcast]);

  // Save the favorite episodes in localStorage whenever the favorites change
  useEffect(() => {
    localStorage.setItem("favoriteEpisodes", JSON.stringify(favorites));
  }, [favorites]);

  // Add event listener for the beforeunload event to reset the current page when leaving the app
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentPage !== "home") {
        setCurrentPage("home");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentPage]);

  return (
    <>
      {" "}
      {isAuthenticated === false ? (
        <Authentication
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route
              path="/"
              element={
                currentPage === "home" && (
                  <Preview
                    onSetPreviewInfo={setpreviewInfo}
                    onPreviewInfo={previewInfo}
                    onSelectedId={handleSelectedId}
                    onDateConversion={dateConversion}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                  />
                )
              }
            />

            <Route
              path="/show"
              element={
                <Shows
                  selectedId={selectedId}
                  isLoading={isLoading}
                  oncloseSelected={handleCloseSelected}
                  setIsLoading={setIsLoading}
                  onDateConversion={dateConversion}
                  setFavourite={setFavourite}
                  favourite={favourite}
                />
              }
            />
            <Route
              path="/Recentlyplayed"
              element={currentPage === "history" && <RecentlyPlay />}
            />

            <Route
              path="/favourite"
              element={
                currentPage === "favorite" && <Favourite item={favourite} />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
