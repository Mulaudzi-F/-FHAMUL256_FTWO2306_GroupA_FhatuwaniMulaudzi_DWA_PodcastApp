import React from "react";
import PreviewCard from "./previewCard";
import Shows from "./Shows";
import Loader from "./Loader";
import Search from "./Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Preview({
  onSetPreviewInfo,
  onPreviewInfo,
  onSelectedId,
  onDateConversion,
  setIsLoading,
  isLoading,
}) {
  const [sortOption, setSortOption] = React.useState("A-Z");
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  // filtering preview based on the  search term

  const filteredPreview = onPreviewInfo.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const sortedPreview = filteredPreview.sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "Z-A") {
      return b.title.localeCompare(a.title);
    } else if (sortOption === "ascendingDate") {
      return new Date(a.updated) - new Date(b.updated);
    } else if (sortOption === "descendingDate") {
      return new Date(b.updated) - new Date(a.updated);
    }
    return;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(function () {
    async function getPreview() {
      setIsLoading(true);
      const res = await fetch("https://podcast-api.netlify.app/shows");
      const data = await res.json();

      onSetPreviewInfo(data);
      setIsLoading(false);
    }

    getPreview();
  }, []);

  const Cards = sortedPreview.map((card) => {
    return (
      <PreviewCard
        onSelectedId={onSelectedId}
        key={card.id}
        image={card.image}
        title={card.title}
        descripton={card.descripton}
        updates={onDateConversion(card.updated)}
        numberOfSeasons={card.seasons}
        id={card.id}
      />
    );
  });

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <select
          className="block px-4 py-2 m-3 bg-slate-300 text-gray-800 hover:bg-gray-200"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="A-Z"> Sort by A-Z</option>
          <option value="Z-A"> Sort by Z-A</option>
          <option value="ascendingDate">Sort by Ascending Order</option>
          <option value="descendingDate">Sort by Descending Order</option>
        </select>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 outline-none  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {isLoading ? <Loader /> : Cards}
      </div>
    </>
  );
}
