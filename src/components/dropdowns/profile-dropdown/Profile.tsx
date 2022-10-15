import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const Profile = () => {
  const [profileBorder, setProfileBorder] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { currentUser }: any = useAuth();

  const onProfileMouseEnter = () => {
    setProfileBorder(true);
    setProfileDropdown(true);
  };

  const onProfileMouseLeave = () => {
    if (!showProfile) {
      setProfileBorder(false);
      setProfileDropdown(false);
      setShowProfile(false);
    }
  };

  const onProfileClick = () => {
    if (showProfile || profileDropdown) {
      setProfileBorder(false);
      setProfileDropdown(false);
      setShowProfile(false);
    }
  };

  return (
    <div id="dropdown" onMouseEnter={onProfileMouseEnter} onMouseLeave={onProfileMouseLeave}>
      <button
        className={`w-9 h-9 rounded-full border-[1px] border-gray-300 flex items-center justify-center ${
          profileBorder ? "border-gray-400" : ""
        } transition-all duration-200 ease-out`}
      >
        {currentUser.photoURL ? (
          <picture>
            <img
              src={currentUser.photoURL}
              alt="profile"
              referrerPolicy="no-referrer"
              className="relative w-[32px] h-[32px] rounded-full"
              onClick={onProfileClick}
            />
          </picture>
        ) : (
          <div className="w-[32px] h-[32px] rounded-full bg-gray-400"></div>
        )}
      </button>
      {profileDropdown && (
        <ProfileDropdown
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          setProfileDropdown={setProfileDropdown}
          setProfileBorder={setProfileBorder}
        />
      )}
    </div>
  );
};

export default Profile;
