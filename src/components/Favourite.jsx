import React from "react";

export default function Favourite({ item }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending

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
    <ul className="block">
      {item.map((episode, episodeIndex) => {
        return (
          <li className="p-6 my-1 rounded-lg bg-slate-300" key={episodeIndex}>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold">{episode.title}</h4>
              <img
                src="./images/black love.png"
                className="w-6 h-6 p-1 h-auto block"
              />
            </div>

            <p>{episode.description}</p>
            {/* Audio player for the episode */}
            <audio controls>
              <source src={episode.file} type="audio/mp3" />
            </audio>
            {/* Favorite button */}
          </li>
        );
      })}
    </ul>
  );
}
