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

  // استرجاع البيانات من localStorage عند التحميل
  useEffect(() => {
    const storedLikes =
      JSON.parse(localStorage.getItem(`likes-${video.id}`)) || [];
    setLikesCount(storedLikes.length);
    setLikedUsers(storedLikes);

    // إذا كان المستخدم قد قام بعمل لايك من قبل، يتم تعيين الحالة على "مُعجب"
    const hasLiked = storedLikes.some((user) => user === currentUser);
    setLiked(hasLiked);

    // استرجاع حالة الحفظ من localStorage
    const storedSaved = JSON.parse(localStorage.getItem(`saved-${video.id}`));
    setSaved(!!storedSaved);
  }, [video.id, currentUser]);

  // التعامل مع حدث الضغط على زر اللايك
  const handleLike = () => {
    let updatedLikes;

    if (liked) {
      // إزالة اللايك إذا كان المستخدم قد قام بعمل لايك مسبقاً
      updatedLikes = likedUsers.filter((user) => user !== currentUser);
      setLiked(false);
    } else {
      // إضافة لايك للمستخدم الحالي
      updatedLikes = [...likedUsers, currentUser];
      setLiked(true);
    }

    setLikesCount(updatedLikes.length);
    setLikedUsers(updatedLikes);

    // تخزين البيانات في localStorage
    localStorage.setItem(`likes-${video.id}`, JSON.stringify(updatedLikes));
  };

  // التعامل مع حدث الضغط على زر الحفظ
  const handleSave = () => {
    const newSavedState = !saved;
    setSaved(newSavedState);

    // تخزين حالة الحفظ في localStorage
    localStorage.setItem(`saved-${video.id}`, JSON.stringify(newSavedState));
  };

  // التعامل مع حدث الضغط على زر المشاركة
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
            title={
              likedUsers.length > 0
                ? `Liked by: ${likedUsers.join(", ")}`
                : "No likes yet"
            }
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
