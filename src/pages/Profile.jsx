import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import "../assets/profile.css";

const Profile = () => {
  const [savedVideos, setSavedVideos] = useState([]); // قائمة الفيديوهات المحفوظة
  const [likedVideos, setLikedVideos] = useState([]); // قائمة الفيديوهات المعجب بها
  const [profileImage, setProfileImage] = useState(null); // صورة الملف الشخصي
  const [username, setUsername] = useState(""); // اسم المستخدم

  // استرجاع بيانات المستخدم من localStorage عند التحميل
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUsername(currentUser.username);
      setProfileImage(currentUser.profileImage);
      setSavedVideos(currentUser.savedVideos || []);
      setLikedVideos(currentUser.likedVideos || []);
    }
  }, []);

  // التعامل مع تغيير صورة الملف الشخصي
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // حفظ صورة الملف الشخصي في localStorage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        currentUser.profileImage = reader.result;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      };
      reader.readAsDataURL(file);
    }
  };

  // تصفية الفيديوهات المحفوظة بناءً على معرفات الفيديو
  const savedVideoDetails = data.filter((video) =>
    savedVideos.includes(parseInt(video.id))
  );

  // تصفية الفيديوهات المعجب بها بناءً على معرفات الفيديو
  const likedVideoDetails = data.filter((video) =>
    likedVideos.includes(parseInt(video.id))
  );

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-image-container">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-image" />
          ) : (
            <div className="default-profile-image">A</div>
          )}
          <input
            type="file"
            onChange={handleProfileImageChange}
            accept="image/*"
            className="profile-image-upload"
          />
        </div>
        <div className="profile-info">
          <h3>{username}</h3>
        </div>
      </div>

      <div className="saved-videos-section">
        <h4>Saved Videos</h4>
        <div className="saved-videos">
          {savedVideoDetails.length > 0 ? (
            savedVideoDetails.map((video) => (
              <div key={video.id} className="saved-video-card">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="video-info">
                  <h5>{video.title}</h5>
                  <p>{video.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No saved videos yet!</p>
          )}
        </div>
      </div>

      <div className="liked-videos-section">
        <h4>Liked Videos</h4>
        <div className="liked-videos">
          {likedVideoDetails.length > 0 ? (
            likedVideoDetails.map((video) => (
              <div key={video.id} className="liked-video-card">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="video-info">
                  <h5>{video.title}</h5>
                  <p>{video.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No liked videos yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
