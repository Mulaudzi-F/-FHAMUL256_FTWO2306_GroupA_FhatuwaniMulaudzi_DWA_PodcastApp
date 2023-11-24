import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";
import Episodes from "./components/Episodes";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveEpisode, setIsActiveEpisode] = useState("");
  const [query, setQuery] = useState("");

  function getActiveEpisode() {}

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

  return (
    <div className="flex flex-col ">
      <Navbar />
      <Preview
        onSetPreviewInfo={setpreviewInfo}
        onPreviewInfo={previewInfo}
        onSelectedId={handleSelectedId}
        onDateConversion={dateConversion}
      />
      <Shows
        selectedId={selectedId}
        isLoading={isLoading}
        oncloseSelected={handleCloseSelected}
        setIsLoading={setIsLoading}
        onDateConversion={dateConversion}
      />
    </div>
  );
}

export default App;
