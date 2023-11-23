import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";
import Genres from "./components/genres";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const genres = [
    "All",
    "Personal Growth",
    "True crime and Investigation journalism",
    "History",
    "Comedy",
    "Entertainment",
    "Business",
    "Fiction",
    "News",
    "Kids and Family",
  ];

  const genre = genres.map((gen) => (
    <Genres key={genres.indexOf(gen)} onHeader={gen} />
  ));
  function handleSelectedId(id) {
    setSelectedId(id);
    console.log("It's working");
  }

  function handleCloseSelected() {
    setSelectedId(null);
  }
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Preview
        onSetPreviewInfo={setpreviewInfo}
        onPreviewInfo={previewInfo}
        onSelectedId={handleSelectedId}
      />
      <Shows
        selectedId={selectedId}
        isLoading={isLoading}
        oncloseSelected={handleCloseSelected}
        setIsLoading={setIsLoading}
      />
      {genre}
    </div>
  );
}

export default App;
