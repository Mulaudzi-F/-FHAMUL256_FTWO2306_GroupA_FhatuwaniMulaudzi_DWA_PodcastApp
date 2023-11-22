import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";
import Genres from "./components/genres";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);
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
  /*
 <div className="p-12">
        <Preview
          onSetPreviewInfo={setpreviewInfo}
          onPreviewInfo={previewInfo}
        />
      </div>
      <Shows onPreviewInfo={previewInfo} />

      */
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Preview onSetPreviewInfo={setpreviewInfo} onPreviewInfo={previewInfo} />
      {genre}
    </div>
  );
}

export default App;
