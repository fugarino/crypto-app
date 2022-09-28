import Image from "next/image";
import { ReactNode } from "react";

interface ILargeCardWithImageProps {
  altLayout?: boolean;
  url: string;
  children: ReactNode;
}

const LargeCardWithImage = ({ url, altLayout, children }: ILargeCardWithImageProps) => {
  return (
    <section className="flex mx-auto bg-white rounded-lg shadow-lg h-full max-h-[1000px] max-w-[1600px]">
      {altLayout ? (
        <>
          <article className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="w-5/6 max-w-[26rem]">{children}</div>
          </article>
          <aside className="lg:w-1/2 hidden lg:flex items-center justify-center pointer-events-none">
            <Image src={url} width={500} height={500} alt="rocket illustration" />
          </aside>
        </>
      ) : (
        <>
          <aside className="lg:w-1/2 hidden lg:flex items-center justify-center pointer-events-none">
            <Image src={url} width={500} height={500} alt="rocket illustration" />
          </aside>
          <article className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="w-5/6 max-w-[26rem]">{children}</div>
          </article>
        </>
      )}
    </section>
  );
};

export default LargeCardWithImage;
