import React from "react";

export default function Search() {
  return (
    <input
      type="text"
      value={query}
      placeholder="Search Show"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
