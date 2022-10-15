import { UserIcon, LogoutIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";

interface IProfileDropDown {
  showProfile: boolean;
  setShowProfile: (arg0: boolean) => void;
  setProfileDropdown: (arg0: boolean) => void;
  setProfileBorder: (arg0: boolean) => void;
}

const ProfileDropDown = ({
  showProfile,
  setShowProfile,
  setProfileDropdown,
  setProfileBorder,
}: IProfileDropDown) => {
  const { logout }: any = useAuth();
  const ref = useRef<any>(null);

  const expandProfile = () => {
    setShowProfile(true);
  };

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setProfileDropdown(false);
      setShowProfile(false);
      setProfileBorder(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div ref={ref} id="dropdown" className="absolute top-[46px] right-[10px]">
      <div
        className={`relative top-[7px] ${
          !showProfile ? "h-[100px] w-[153px]" : "h-40 w-80"
        } bg-white profileShadow rounded-lg transition-all ease-out duration-150`}
      >
        <ul
          className={`${
            showProfile ? "invisible h-0" : "visible h-10"
          } bg-white rounded-full h-full p-2 px-4 text-sm font-medium text-gray-500`}
        >
          <li onClick={expandProfile} className="h-1/2 flex items-center">
            <div className="hover:bg-[#E4E6EB] rounded-sm flex items-center pl-[9px] py-2 w-full cursor-pointer hover:active hover:text-black">
              <UserIcon className="menuIcon" />
              <span className="ml-[10px]">Profile</span>
            </div>
          </li>
          <hr />
          <li className="h-1/2 flex items-center">
            <div
              onClick={logout}
              className="hover:bg-[#E4E6EB] rounded-sm flex items-center pl-[12px] py-2 w-full cursor-pointer hover:active hover:text-black"
            >
              <LogoutIcon className="menuIcon text-gray-500" />
              <span className="ml-2">Sign out</span>
            </div>
          </li>
        </ul>
        <section
          className={`${
            showProfile ? "visible opacity-100 h-[20px]" : "invisible opacity-0 h-0"
          } transition-all ease-out duration-150`}
        >
          <h1>Profile page</h1>
          <h1>Profile page</h1>
        </section>
      </div>
    </div>
  );
};

export default ProfileDropDown;
