import {
  BellIcon,
  BookmarkIcon,
  ChatAlt2Icon,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { MenuButton } from "../buttons/MenuButton";
import { MenuButtonAlt } from "../buttons/MenuButtonAlt";

export const Menu = () => {
  const { currentUser }: any = useAuth();

  return (
    <div className="h-14 border-t border-gray-200 w-[100vw-1px] sm:pt-4 sm:h-screen sm:border-t-0 sm:border-r sm:w-14">
      <Link href="/">
        <a className="hidden cursor-pointer sm:flex flex-col">
          <Image src="/L.svg" height={25} width={30} alt="logo" />
        </a>
      </Link>
      <div className="flex w-[100%] h-[100%] sm:flex-col justify-center sm:justify-between items-center sm:h-[calc(100%-41px)]">
        <menu className="sm:mt-20 sm:space-y-12 sm:space-x-0 px-6 w-full flex justify-between sm:flex-col sm:items-center">
          <MenuButton href="/" label="Home">
            <HomeIcon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/cryptocurrencies" label="Cryptocurrencies">
            <svg
              width="30"
              height="14"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_20_45" fill="white">
                <path d="M14.192 20.1896C15.7854 20.8548 17.5184 21.1168 19.2372 20.9522C20.9561 20.7877 22.6079 20.2018 24.0463 19.2465C25.4846 18.2911 26.6652 16.9957 27.4833 15.4751C28.3015 13.9545 28.732 12.2556 28.7368 10.5289C28.7415 8.80217 28.3204 7.10092 27.5106 5.57584C26.7008 4.05076 25.5274 2.74893 24.0943 1.78566C22.6612 0.822387 21.0127 0.227411 19.2948 0.0534326C17.5768 -0.120546 15.8425 0.131843 14.2454 0.788242L15.2848 3.31724C16.466 2.83177 17.7487 2.6451 19.0193 2.77378C20.2898 2.90245 21.5091 3.34249 22.569 4.05492C23.6289 4.76735 24.4967 5.73018 25.0956 6.85812C25.6945 7.98606 26.006 9.24429 26.0025 10.5214C25.999 11.7985 25.6806 13.055 25.0755 14.1796C24.4704 15.3042 23.5972 16.2622 22.5334 16.9688C21.4696 17.6754 20.248 18.1087 18.9767 18.2304C17.7054 18.3521 16.4238 18.1584 15.2453 17.6664L14.192 20.1896Z" />
              </mask>
              <path
                d="M14.192 20.1896C15.7854 20.8548 17.5184 21.1168 19.2372 20.9522C20.9561 20.7877 22.6079 20.2018 24.0463 19.2465C25.4846 18.2911 26.6652 16.9957 27.4833 15.4751C28.3015 13.9545 28.732 12.2556 28.7368 10.5289C28.7415 8.80217 28.3204 7.10092 27.5106 5.57584C26.7008 4.05076 25.5274 2.74893 24.0943 1.78566C22.6612 0.822387 21.0127 0.227411 19.2948 0.0534326C17.5768 -0.120546 15.8425 0.131843 14.2454 0.788242L15.2848 3.31724C16.466 2.83177 17.7487 2.6451 19.0193 2.77378C20.2898 2.90245 21.5091 3.34249 22.569 4.05492C23.6289 4.76735 24.4967 5.73018 25.0956 6.85812C25.6945 7.98606 26.006 9.24429 26.0025 10.5214C25.999 11.7985 25.6806 13.055 25.0755 14.1796C24.4704 15.3042 23.5972 16.2622 22.5334 16.9688C21.4696 17.6754 20.248 18.1087 18.9767 18.2304C17.7054 18.3521 16.4238 18.1584 15.2453 17.6664L14.192 20.1896Z"
                className="menuIconAlt"
                strokeWidth="2"
                mask="url(#path-1-inside-1_20_45)"
              />
              <circle cx="10.5" cy="10.5" r="9.2" className="menuIconAlt1" strokeWidth="2.6" />
            </svg>
          </MenuButton>
          <MenuButton href="/discussions" label="Discussions">
            <ChatAlt2Icon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/favorites" label="Favorites">
            <BookmarkIcon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/notifications" label="Notifications">
            <BellIcon className="menuIcon" />
          </MenuButton>
        </menu>
        <ul className="hidden sm:flex sm:flex-col sm:mt-12 sm:space-y-9">
          <MenuButton href="/help" label="Help">
            <QuestionMarkCircleIcon className="menuIcon" />
          </MenuButton>
          {!currentUser ? (
            <MenuButton href="/signin" label="Sign in">
              <LoginIcon className="menuIcon" />
            </MenuButton>
          ) : (
            <MenuButtonAlt label="Sign out">
              <LogoutIcon className="menuIcon" />
            </MenuButtonAlt>
          )}
        </ul>
      </div>
    </div>
  );
};
