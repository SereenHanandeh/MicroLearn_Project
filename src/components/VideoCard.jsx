import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
} from "react-icons/fa";
import "../assets/video.css";

const VideoCard = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    alert(`Video shared: ${video.title}`);
  };

  return (
      <div className="video-card">
        <video src={video.videoUrl} controls className="video-player"></video>
        <div className="video-info">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <div className="video-actions">
            <button onClick={handleLike} className={liked ? "liked" : ""}>
              {liked ? <FaHeart /> : <FaRegHeart />} Like
            </button>

            <button onClick={handleSave} className={saved ? "saved" : ""}>
              {saved ? <FaBookmark /> : <FaRegBookmark />} Save
            </button>

            <button onClick={handleShare}>
              <FaShareAlt /> Share
            </button>
          </div>
        </div>
      </div>
  );
};

export default VideoCard;
