import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
} from "react-icons/fa";
import "../assets/video.css";

const VideoCard = ({ video, currentUser }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    const storedLikes =
      JSON.parse(localStorage.getItem(`likes-${video.id}`)) || [];
    setLikesCount(storedLikes.length);
    setLikedUsers(storedLikes);

    const hasLiked = storedLikes.some((user) => user === currentUser);
    setLiked(hasLiked);
  }, [video.id, currentUser]);

  const handleLike = () => {
    let updatedLikes;
    if (liked) {
      updatedLikes = likedUsers.filter((user) => user !== currentUser);
    } else {
      updatedLikes = [...likedUsers, currentUser];
    }

    setLiked(!liked);
    setLikesCount(updatedLikes.length);
    setLikedUsers(updatedLikes);

    localStorage.setItem(`likes-${video.id}`, JSON.stringify(updatedLikes));
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    alert(`Video shared: ${video.title}`);
  };

  return (
    <div id="video-card">
      <video src={video.videoUrl} controls id="video-player"></video>
      <div id="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <div id="video-actions">
          <button
            onClick={handleLike}
            className={`action-button ${liked ? "liked" : ""}`}
            title={`Liked by: ${likedUsers.join(", ")}`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />} {likesCount} Like
          </button>

          <button
            onClick={handleSave}
            className={`action-button ${saved ? "saved" : ""}`}
          >
            {saved ? <FaBookmark /> : <FaRegBookmark />} Save
          </button>

          <button onClick={handleShare} className="action-button">
            <FaShareAlt /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;  
