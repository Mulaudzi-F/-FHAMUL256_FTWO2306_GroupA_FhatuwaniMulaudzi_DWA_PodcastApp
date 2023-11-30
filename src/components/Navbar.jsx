import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <nav className="flex items-center justify-center py-8 bg-amber-500">
      <ul className="flex gap-9 justify-between ">
        <li>
          <NavLink to="/show">PlayList</NavLink>
        </li>

        <li>
          <NavLink to="/"> Preview</NavLink>
        </li>

        <li>
          <NavLink to="/favourite"> Favourite</NavLink>
        </li>

        <li>
          <NavLink to="/Recentlyplayed">Recentlyplayed</NavLink>
        </li>
      </ul>
    </nav>
  );
}
