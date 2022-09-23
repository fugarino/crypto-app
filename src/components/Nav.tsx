import { ReactNode } from "react";

interface INavProps {
  children: ReactNode;
}

export const Nav = ({ children }: INavProps) => {
  return (
    <nav className="flex fixed top-0">
      <div className="bg-gray-100 h-screen border-r-2 w-14"></div>
      <div className="flex flex-col">
        <div className="bg-gray-100 w-[calc(100vw-56px)] border-b-2 h-14"></div>
        <main className="p-6">{children}</main>
      </div>
    </nav>
  );
};
