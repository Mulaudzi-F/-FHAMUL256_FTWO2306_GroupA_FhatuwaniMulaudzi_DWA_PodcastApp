import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Seasons from "./components/preview";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-12">
        <Seasons />
      </div>
    </div>
  );
}

export default App;
