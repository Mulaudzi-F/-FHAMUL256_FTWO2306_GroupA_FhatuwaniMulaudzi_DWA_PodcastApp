import React from "react";

export default function Search({ handleSearch, searchTerm }) {
  return (
    <input
      className="px-14 relative bottom-2 rounded-md bg-orange-200  h-10"
      type="text"
      value={searchTerm}
      placeholder="Search Show"
      onChange={handleSearch}
    />
  );
}
