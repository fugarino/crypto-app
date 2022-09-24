import { ReactNode, useState } from "react";

interface IMenuButtonAltProps {
  label: string;
  children: ReactNode;
}

export const MenuButtonAlt = ({ label, children }: IMenuButtonAltProps) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <li className="relative">
      <button
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        onClick={() => setShowLabel(false)}
        className={`cursor-pointer flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-200 active:translate-y-1 rounded-md transition-all ease-out`}
      >
        {children}
      </button>
      {showLabel && (
        <div className="absolute left-12 bottom-1 px-4 py-1 bg-white text-gray-600 text-center rounded-md shadow-md">
          <div className="absolute top-3 -left-1 bg-white p-1 rotate-45 shadow-md"></div>
          <p>{label}</p>
        </div>
      )}
    </li>
  );
};
