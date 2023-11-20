import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  py-8 bg-amber-500">
      <ul className="flex  justify-around">
        <li className="mx-10">
          <a href="#">Home</a>
        </li>
        <li onClick={() => <>Hello World</>} className="mx-10">
          <a href="#">Discover</a>
        </li>
        <li className="mx-10">
          <a href="#">Favourite</a>
        </li>
      </ul>

      <div className="flex justify-end items-center">
        <div className="flex w-1/4 mx-5">
          <input type="text" />
          <img className="nav-icons w-1/5" src="./images/search.png" />
        </div>
        <span className="w-1/4">
          <img className="nav-icons w-1/5 " src="./images/user.png" />
        </span>
      </div>
    </nav>
  );
}
