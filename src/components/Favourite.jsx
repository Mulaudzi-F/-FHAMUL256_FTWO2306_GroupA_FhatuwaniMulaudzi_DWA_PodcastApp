import React from "react";
import { useEffect } from "react";

export default function Favourite({ favorites, setFavorites }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc"); // Default sorting order is ascending
  const [localFavorites, setLocalFavorites] = React.useState(favorites);

  // Function to remove an episode from favorites
  const removeFromFavorites = (episode) => {
    setLocalFavorites((prevFavorites) =>
      prevFavorites.filter((favEpisode) => favEpisode !== episode)
    );
  };

  // Effect hook to update the 'favorites' state in the parent component when 'localFavorites' changes
  useEffect(() => {
    setFavorites(localFavorites);
  }, [localFavorites, setFavorites]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); //The function retrieves the current value of an input element
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Filter and sort the favorite episodes based on search term and sort order
  const filteredAndSortedFavorites = localFavorites
    .filter((episode) =>
      episode.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc" || sortOrder === "desc") {
        const titleComparison = a.title.localeCompare(b.title);
        return sortOrder === "asc" ? titleComparison : -titleComparison;
      } else if (sortOrder === "asc-date" || sortOrder === "desc-date") {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "asc-date" ? dateA - dateB : dateB - dateA;
      }
    });
  return (
    <div className="favorite-container">
      <h1 className="text-xl text-center pt-4">Your Favorites</h1>
      <div className="favorite-controls flex flex-col md:flex-row items-center justify-center md:justify-between mt-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="relative rounded-md bg-slate-200 h-10 mx-0 md:mx-2 mb-2 md:mb-0 w-full md:w-auto"
        />
        {/* Dropdown for sorting */}
        <select
          className="bg-slate-400 p-2 rounded-lg w-full md:w-auto"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
          <option value="asc-date">Sort Ascending Date</option>
          <option value="desc-date">Sort Descending Date</option>
        </select>
      </div>
      {/* Render favorite episodes */}
      {filteredAndSortedFavorites.length > 0 ? (
        filteredAndSortedFavorites.map((episode, index) => (
          <div key={index} className="p-2 m-6 bg-gray-300 rounded-2xl">
            <h3 className="text-lg text-center font-bold">{episode.title}</h3>
            <h4 className="font-bold">{episode.season}</h4>
            <p>{episode.description}</p>
            <img
              src="./images/black love.png"
              className="w-6 h-6 p-1 h-auto block"
              onClick={() => removeFromFavorites(episode)}
            />
          </div>
        ))
      ) : (
        <p className="text-center mt-4">No favorite episodes found.</p>
      )}
    </div>
  );
}
