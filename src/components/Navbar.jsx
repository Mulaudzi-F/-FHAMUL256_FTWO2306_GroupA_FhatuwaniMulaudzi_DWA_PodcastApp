import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-4 md:py-8 bg-rose-300">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-9 justify-center">
        <li>
          <NavLink
            to="/show"
            className="block hover:text-cyan-400 text-center md:inline-block"
          >
            PlayList
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className="block text-center md:inline-block">
            Preview
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favourite"
            className="block text-center md:inline-block"
          >
            Favourite
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Recentlyplayed"
            className="block text-center md:inline-block"
          >
            Recentlyplayed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
