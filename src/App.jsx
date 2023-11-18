import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Seasons from "./components/seasons";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Seasons />
      </div>
    </>
  );
}

export default App;
