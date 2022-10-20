import { updateProfile } from "firebase/auth";
import { SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { storage } from "../../configs/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LightInputField from "../forms/inputs/LightInputField";

interface IProfileEditForm {
  setEditProfile: (arg0: boolean) => void;
}

const ProfileEditForm = ({ setEditProfile }: IProfileEditForm) => {
  const { currentUser }: any = useAuth();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState("");

  const updatedDisplayName = useRef<any>();

  const upload = async (file: any, currentUser: any) => {
    const fileRef = ref(storage, currentUser.uid);
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL: any = await getDownloadURL(fileRef);
    updateProfile(currentUser, { photoURL: photoURL });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleProfileSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (profilePhoto || updatedDisplayName.current.value !== currentUser.displayName) {
        if (profilePhoto) {
          await upload(profilePhoto, currentUser);
        }
        if (updatedDisplayName.current.value !== currentUser.displayName) {
          await updateProfile(currentUser, { displayName: updatedDisplayName.current.value });
        }
        window.location.reload();
      } else {
        setEditProfile(false);
      }
    } catch {
      setError("Unable to update profile");
    }
  };

  return (
    <form onSubmit={handleProfileSubmit}>
      <button
        type="submit"
        id="profile"
        disabled={loading}
        className="flex justify-center border-2 border-slate-400 text-slate-500 rounded-[5px] hover:border-slate-500 hover:text-slate-600 absolute right-4 py-1 px-6 -top-[47px]"
      >
        <span>Save</span>
      </button>
      {error && <h1>{error}</h1>}
      <LightInputField
        labelText="Display name"
        type="text"
        id="name"
        currentRef={updatedDisplayName}
        defaultValue={currentUser.displayName}
      />
      <div className="relative -top-2 flex flex-col transition-all duration-150 ease-out mb-2">
        <label htmlFor="profileImage" className="font-medium">
          Profile picture
        </label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="py-1"
          onChange={handleFileChange}
        />
      </div>
      <hr className="pt-2" />
    </form>
  );
};

export default ProfileEditForm;
