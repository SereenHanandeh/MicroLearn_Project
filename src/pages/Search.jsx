import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import data from "../assets/data.json";
import "../assets/search.css";

const Search = () => {
  const [query, setQuery] = useState(""); // الكلمة التي يتم البحث عنها
  const [filter, setFilter] = useState(""); // الفئة المختارة

  // تصفية الفيديوهات حسب الكلمة الدلالية والفئة
  const filteredVideos = data.filter((video) => {
    const isTitleMatch = video.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const isCategoryMatch = filter ? video.category === filter : true; // إذا كانت الفئة فارغة، لا نفلتر حسب الفئة
    return isTitleMatch && isCategoryMatch;
  });

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // تحديث الكلمة المدخلة
      />

      <div className="filters">
        <button
          onClick={() => setFilter("")}
          className={filter === "" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Leadership")}
          className={filter === "Leadership" ? "active" : ""}
        >
          Leadership
        </button>
        <button
          onClick={() => setFilter("Productivity")}
          className={filter === "Productivity" ? "active" : ""}
        >
          Productivity
        </button>
        <button
          onClick={() => setFilter("Technology")}
          className={filter === "Technology" ? "active" : ""}
        >
          Technology
        </button>
      </div>

      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))
      ) : (
        <p>No videos found!</p>
      )}
    </div>
  );
};

export default Search;
