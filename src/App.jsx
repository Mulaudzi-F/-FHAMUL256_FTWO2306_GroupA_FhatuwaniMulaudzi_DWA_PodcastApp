import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/preview";
import Seasons from "./components/season";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-12">
        <Preview />
      </div>
      <Seasons />
    </div>
  );
}

export default App;
