import Image from "next/image";
import { ReactNode } from "react";

interface ISmallCard {
  children: ReactNode;
}

const SmallCard = ({ children }: ISmallCard) => {
  return (
    <section className="mx-auto overflow-hidden relative bg-white rounded-lg shadow-lg h-full max-h-[1000px] max-w-[600px]">
      {children}
    </section>
  );
};

export default SmallCard;
