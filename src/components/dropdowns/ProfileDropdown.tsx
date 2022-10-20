import { useEffect, useRef } from "react";
import ProfileCard from "../cards/ProfileCard";

interface IProfileDropDown {
  setShowProfile: (arg0: boolean) => void;
  setDarkProfileBorder: (arg0: boolean) => void;
}

const ProfileDropDown = ({ setShowProfile, setDarkProfileBorder }: IProfileDropDown) => {
  const ref = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target) && e.target.id !== "profile") {
      setShowProfile(false);
      setDarkProfileBorder(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      ref={ref}
      className={`absolute top-[61px] right-[10px] w-80 bg-white shadow-md overflow-hidden rounded-md`}
    >
      <ProfileCard />
    </div>
  );
};

export default ProfileDropDown;
