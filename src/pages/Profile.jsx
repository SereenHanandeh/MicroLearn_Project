import React, { useState } from "react";
import data from "../assets/data.json";
import "../assets/profile.css";

const Profile = () => {
  const [savedVideos, setSavedVideos] = useState([1, 3]);

  const savedVideoDetails = data.filter((video) =>
    savedVideos.includes(parseInt(video.id))
  );

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <p>Name: Placeholder User</p>
      <p>Total Videos Watched: 10</p>
      <p>Badges Earned: 5</p>

      <h3>Saved Videos</h3>
      {savedVideoDetails.length > 0 ? (
        savedVideoDetails.map((video) => (
          <div key={video.id} className="saved-video">
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        ))
      ) : (
        <p>No saved videos yet!</p>
      )}
    </div>
  );
};

export default Profile;
