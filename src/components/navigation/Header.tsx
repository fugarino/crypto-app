import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [profileBorder, setProfileBorder] = useState(false);

  return (
    <header className="w-[100vw-1px] sm:w-[calc(100vw-56px)] border-b border-gray-200 h-14 flex items-center justify-between p-3">
      <Link href="/">
        <a className="flex cursor-pointer sm:hidden">
          <Image src="/L.svg" height={25} width={30} alt="logo" />
        </a>
      </Link>
      <div className="hidden sm:flex"></div>
      <div className="pr-1 flex items-center space-x-4">
        <Link href="/notifications">
          <a>
            <BellIcon className="menuIcon text-gray-500" />
          </a>
        </Link>
        <div
          className={`w-9 h-9 rounded-full border-[1px] border-gray-300 flex items-center justify-center ${
            profileBorder ? "hover:border-gray-400" : ""
          } transition-all duration-200 ease-out`}
        >
          <Link href="/profile">
            <a
              onMouseEnter={() => setProfileBorder(true)}
              onMouseLeave={() => setProfileBorder(false)}
              onClick={() => setProfileBorder(false)}
              className="w-[32px] h-[32px] rounded-full bg-orange-300"
            ></a>
          </Link>
        </div>
      </div>
    </header>
  );
};
