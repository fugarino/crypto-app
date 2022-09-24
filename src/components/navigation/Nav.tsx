import { ReactNode } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";

interface INavProps {
  children: ReactNode;
}

export const Nav = ({ children }: INavProps) => {
  return (
    <nav className="flex flex-col-reverse sm:flex-row">
      <Menu />
      <div className="flex flex-col">
        <Header />
        <main className="bg-[#f4f4f4] w-screen sm:w-[calc(100vw-56px)] h-[calc(100vh-112px)] sm:h-[calc(100vh-56px)] p-6">
          {children}
        </main>
      </div>
    </nav>
  );
};
