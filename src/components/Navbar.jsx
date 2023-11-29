import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <nav className="flex items-center justify-center py-8 bg-amber-500">
      <ul className="flex gap-9 justify-between ">
        <li>PlayList</li>

        <li>Preview</li>

        <li>{children}</li>
        <li>
          <button>Favourites</button>
        </li>
      </ul>
    </nav>
  );
}
