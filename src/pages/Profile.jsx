import React, { useState } from "react";
import data from "../assets/data.json";
import "../assets/profile.css";

const Profile = () => {
  const [savedVideos, setSavedVideos] = useState([1, 3]); // يمكن تعديل هذه البيانات لتكون ديناميكية
  const [profileImage, setProfileImage] = useState(null); // حالة لتخزين صورة الملف الشخصي

  // تصفية الفيديوهات المحفوظة بناءً على المعرفات
  const savedVideoDetails = data.filter((video) =>
    savedVideos.includes(parseInt(video.id))
  );

  // التعامل مع تغيير صورة الملف الشخصي
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // تعيين صورة الملف الشخصي
      };
      reader.readAsDataURL(file); // قراءة الصورة كـ URL
    }
  };

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <div className="profile-image-container">
        {/* عرض صورة الملف الشخصي إذا كانت موجودة */}
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="profile-image" />
        ) : (
          <p>No profile image set.</p>
        )}
        <input
          type="file"
          onChange={handleProfileImageChange}
          accept="image/*"
          className="profile-image-upload"
        />
      </div>

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
