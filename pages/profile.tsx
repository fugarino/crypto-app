import { useRef } from "react";
import { withProtected } from "../src/hooks/route";
import SmallCard from "../src/components/cards/SmallCard";
import { useAuth } from "../src/contexts/AuthContext";
import LightInputField from "../src/components/forms/inputs/LightInputField";

const Profile = () => {
  const { currentUser }: any = useAuth();

  console.log(currentUser);

  const userName = useRef<any>();
  const email = useRef<any>();
  const profileURL = useRef<any>();

  return (
    <SmallCard>
      <div className="flex items-center justify-center my-10 relative bg-slate-200">
        <div className="relative w-[316px] h-[316px] rounded-full border-[3px] flex items-center justify-center bg-white">
          <picture>
            <img
              src={currentUser.photoURL}
              alt="profile"
              referrerPolicy="no-referrer"
              className="w-[302px] h-[302px] rounded-full"
            />
          </picture>
        </div>
        <div className="absolute bottom-2 right-20 bg-slate-400 w-14 h-14 rounded-full"></div>
      </div>
      <LightInputField
        labelText="Username"
        type="text"
        id="displayName"
        currentRef={userName}
        defaultValue={currentUser.displayName}
        placeholder="Add a username"
      />
      <LightInputField
        labelText="Email"
        type="email"
        id="email"
        currentRef={email}
        defaultValue={currentUser.email}
        placeholder="Add new email"
      />
      <LightInputField
        labelText="Profile Picture"
        type="text"
        id="profilePicture"
        currentRef={profileURL}
        defaultValue={currentUser.photoURL}
        placeholder="Add profile picture url - https://example.com"
      />
    </SmallCard>
  );
};

export default withProtected(Profile);
