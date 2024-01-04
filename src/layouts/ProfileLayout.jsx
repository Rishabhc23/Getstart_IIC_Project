import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Profile from "../Pages/Profile";
import Sidebar from "../Pages/Sidebar";
import "./ProfileLayout.scss";


export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  const handleEdit = () => {
    setEditProfile(!editProfile);
  };

  const handleEndorse = () => {
    // Implement the logic for endorsing the user
    console.log("Endorse button clicked");
  };
  return (
    <div className="box">
      <div className="profile-layout-container">
      <Topbar currentUser={currentUser} />
      <div className="profile-content-container">
        <Profile currentUser={currentUser} />
        <Sidebar currentUser={currentUser} onEndorse={handleEndorse} />
      </div>
    </div>
    </div>
  );
}
