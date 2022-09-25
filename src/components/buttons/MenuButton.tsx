import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState, useEffect } from "react";

interface IMenuButtonProps {
  href: string;
  label: string;
  children: ReactNode;
}

export const MenuButton = ({ href, label, children }: IMenuButtonProps) => {
  const [showLabel, setShowLabel] = useState(false);
  const [isDesktop, setDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.innerWidth > 640 ? setDesktop(true) : setDesktop(false);
    const updateMedia = () => {
      window.innerWidth > 640 ? setDesktop(true) : setDesktop(false);
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <li className="relative">
      <Link href={href}>
        <a
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
          onClick={() => setShowLabel(false)}
          className={`cursor-pointer flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-200 active:translate-y-1 rounded-md transition-all ease-out
		 ${router.pathname == href ? "active" : ""} 
	  `}
        >
          {children}
        </a>
      </Link>
      {showLabel && isDesktop && (
        <div className="absolute left-12 bottom-1 px-4 py-1 bg-white text-gray-600 text-center rounded-md shadow-md">
          <div className="absolute top-3 -left-1 bg-white p-1 rotate-45 shadow-md"></div>
          {label}
        </div>
      )}
    </li>
  );
};
