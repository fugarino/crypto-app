import { PencilIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import { updateProfile } from "firebase/auth";
import { SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { auth } from "../../../configs/firebase.config";
import { storage } from "../../../configs/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LightInputField from "../../forms/inputs/LightInputField";

const ProfileInfo = () => {
  const { currentUser, logout }: any = useAuth();
  const [editProfile, setEditProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState("");

  const upload = async (file: any, currentUser: any) => {
    const fileRef = ref(storage, currentUser.uid);
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL: any = await getDownloadURL(fileRef);
    updateProfile(currentUser, { photoURL: photoURL });
    window.location.reload();
  };

  const updatedDisplayName = useRef<any>();

  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleProfileSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (profilePhoto) {
      upload(profilePhoto, currentUser);
    }
  };

  return (
    <section className={`relative -top-[16px] transition-all ease-out duration-150`}>
      <div className="relative h-20 bg-slate-300">
        <picture>
          <img
            src={currentUser.photoURL ? currentUser.photoURL : "/Untitled (5).svg"}
            alt="profile picture"
            referrerPolicy="no-referrer"
            className={`relative -bottom-[30px] ${
              !editProfile ? "-right-[115px]" : "-right-[1rem]"
            } w-24 h-24 rounded-full border-4 border-white transition-all duration-150 ease-out`}
          />
        </picture>
      </div>
      <div className="relative mt-14 px-4">
        {editProfile ? (
          <>
            <button
              onClick={() => setEditProfile(false)}
              id="profile"
              className="flex items-center justify-center border-[1.5px] rounded-[5px] absolute right-[67px] -top-[47px] w-[45px] h-[24px] border-slate-400 hover:border-slate-500"
            >
              <XIcon className="menuIcon text-slate-600 pointer-events-none" />
            </button>
            <form onSubmit={handleProfileSubmit}>
              <button
                type="submit"
                id="profile"
                className="flex justify-center border-2 border-slate-500 bg-slate-500 text-white rounded-[5px] absolute right-4 -top-[47px] w-[45px]"
              >
                <CheckIcon className="menuIcon text-white pointer-events-none" />
              </button>
              {error && <h1>{error}</h1>}
              <LightInputField
                labelText="Display name"
                type="text"
                id="name"
                currentRef={updatedDisplayName}
                defaultValue={currentUser.displayName}
              />
              <input type="file" name="profileImage" accept="image/*" onChange={handleFileChange} />
            </form>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditProfile(true)}
              id="profile"
              className="absolute right-[75px] -top-[47px] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-slate-200 transition-all duration-150 ease-out"
            >
              <PencilIcon className="text-gray-600 w-[20px] h-[20px] pointer-events-none" />
            </button>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold text-lg mt-1">{currentUser.displayName}</h1>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
            <div className="flex justify-between mt-4">
              <div></div>
              <span className="text-gray-500 text-sm cursor-pointer hover:text-black">
                delete account
              </span>
            </div>
            <hr className="mb-4" />
            <button
              onClick={logout}
              className="border-2 hover:border-slate-500 hover:text-slate-600 rounded-md border-slate-400 text-slate-500 font-semibold w-full py-2"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ProfileInfo;
