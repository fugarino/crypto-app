import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../contexts/AuthContext";
import Profile from "../dropdowns/profile-dropdown/Profile";

export const Header = () => {
  const { currentUser }: any = useAuth();
  return (
    <header className="relative w-[100vw-1px] sm:w-[calc(100vw-56px)] border-b border-gray-200 h-14 flex items-center justify-between p-3 pr-4">
      <div className="hidden sm:flex"></div>
      <Link href="/">
        <a className="flex cursor-pointer sm:hidden">
          <Image src="/L.svg" height={25} width={30} alt="logo" />
        </a>
      </Link>
      {currentUser && currentUser.emailVerified ? (
        <div className="flex items-center">
          <Link href="/notifications">
            <a className="mr-4">
              <BellIcon className="menuIcon text-gray-500" />
            </a>
          </Link>
          <Profile />
        </div>
      ) : (
        <Link href="/signin">
          <a className="bg-[#E87483] text-white px-4 py-1 rounded-sm cursor-pointer hover:bg-[#da6877] transition-all duration-150 ease-out">
            Sign in
          </a>
        </Link>
      )}
    </header>
  );
};
