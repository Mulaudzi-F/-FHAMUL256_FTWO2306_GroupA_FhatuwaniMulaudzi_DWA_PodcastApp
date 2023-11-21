import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Shows from "./components/Shows";

function App() {
  const [previewInfo, setpreviewInfo] = useState([]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-12">
        <Preview
          onSetPreviewInfo={setpreviewInfo}
          onPreviewInfo={previewInfo}
        />
      </div>
      <Shows onPreviewInfo={previewInfo} />
    </div>
  );
}

export default App;
