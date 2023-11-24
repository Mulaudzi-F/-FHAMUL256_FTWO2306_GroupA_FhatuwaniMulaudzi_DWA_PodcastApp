import React from "react";

export default function Search({ query, setQuery }) {
  return (
    <input
      className="px-14 relative bottom-2 rounded-md bg-orange-200  h-10"
      type="text"
      value={query}
      placeholder="Search Show"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
