import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";
import Favourite from "./components/Favourite";
import Loader from "./components/Loader";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const [favourite, setFavourite] = useState([]);
  const [audioPlay, setAudioPlay] = useState(null);
  const [description, setDescription] = useState("");

  function toggleIsFavourite() {
    setIsFavourite((isFavourite) => !isFavourite);
  }

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
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <Preview
                onSetPreviewInfo={setpreviewInfo}
                onPreviewInfo={previewInfo}
                onSelectedId={handleSelectedId}
                onDateConversion={dateConversion}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
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

          <Route path="/favourite" element={<Favourite item={favourite} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
