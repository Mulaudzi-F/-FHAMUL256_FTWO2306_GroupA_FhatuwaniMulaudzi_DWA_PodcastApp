import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <nav className="flex items-center justify-evenly  py-8 bg-amber-500">
      <ul className="flex  justify-around">
        <li>{children}</li>
        <li>
          <button>Favourites</button>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}
