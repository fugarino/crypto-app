import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../contexts/AuthContext";
import ProfileButton from "../buttons/ProfileButton";

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
          <ProfileButton />
        </div>
      ) : (
        <Link href="/signin">
          <a className="bg-slate-500 text-white px-4 py-1 rounded-[5px] cursor-pointer hover:bg-slate-600">
            Sign in
          </a>
        </Link>
      )}
    </header>
  );
};
