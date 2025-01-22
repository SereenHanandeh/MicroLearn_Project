import React from "react";
import VideoCard from "../components/VideoCard";
import data from "../assets/data.json";
import "../assets/home.css";

const Home = () => {
  // استرجاع المستخدم الحالي من localStorage
  const currentUser = JSON.parse(localStorage.getItem("user")) || null; // استرجاع المستخدم من localStorage

  return (
    <div className="home-page">
      {data.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          currentUser={currentUser ? currentUser.username : "guest"} 
        />
      ))}
    </div>
  );
};

export default Home;
