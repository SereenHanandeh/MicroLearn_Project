import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import data from "../assets/data.json";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  // تصفية الفيديوهات حسب الكلمة الدلالية والفئة
  const filteredVideos = data.filter(
    (video) =>
      video.title.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "" || video.category === filter)
  );

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="filters">
        <button
          onClick={() => setFilter("")}
          className={!filter ? "active" : ""}
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
