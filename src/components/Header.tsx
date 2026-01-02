import type { FC } from "react";

type HeaderProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Header: FC<HeaderProps> = ({ setIndex }) => {
  return (
    <header className="flex items-center justify-between p-4 h-[100px] bg-[#a7d094] md:pr-20 md:pl-20 lg:pr-32 lg:pl-32 sticky top-0">
      <button
        onClick={() => setIndex(1)}
        className="text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] transition-colors duration-500 hover:text-[#ffff7f]"
      >
        Haze Of Brandy
      </button>
      <nav className="flex items-stretch gap-2 md:gap-4 lg:gap-6">
        <button
          onClick={() => setIndex(2)}
          className="text-white text-[20px] md:text-[25px] lg:text-[30px] transition-colors duration-500 hover:text-[#7fffff]"
        >
          connect
        </button>
        <button
          onClick={() => setIndex(3)}
          className="text-white text-[20px] md:text-[25px] lg:text-[30px] transition-colors duration-500 hover:text-[#ff99cc]"
        >
          Q & A
        </button>
      </nav>
    </header>
  );
};
