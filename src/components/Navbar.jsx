import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-8 bg-amber-500">
      <ul className="flex  justify-around">
        <li className="mx-10">
          <a href="#">Home</a>
        </li>
        <li className="mx-10">
          <a href="#">Discover</a>
        </li>
        <li className="mx-10">
          <a href="#">Favourite</a>
        </li>
      </ul>
    </nav>
  );
}
