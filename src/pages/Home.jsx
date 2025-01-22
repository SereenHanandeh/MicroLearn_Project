import React from "react";
import VideoCard from "../components/VideoCard";
import data from "../assets/data.json";
import "../assets/home.css"; 
const Home = () => {
  return (
    <div className="home-page">
      {data.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Home;
