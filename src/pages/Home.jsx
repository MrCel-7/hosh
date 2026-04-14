import { useEffect, useState } from "react";
import Works from "./sections/Works";

export default function Home() {
  const words = ["Frontend Developer", "Backend Developer", "Web Designer"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 cursor-default scroll-smooth flex flex-col gap-50">
      {/* Home Page */}
      <div className="w-full h-screen flex flex-col">
        {/* Head */}
        <div className="w-full flex justify-center h-fit gap-2 px-10 my-5">
          <h1 className="text-xl garet font-bold hover:text-blue-800 cursor-pointer hover:scale-105 transition-all duration-400">
            <span className="text-gray-400">marcel</span>wang•
          </h1>
        </div>

        {/* Body */}
        <div className="flex h-full w-full px-10">
          {/* Left */}
          <div className="flex h-full flex-col gap-3 justify-center">
            <div className="w-15 border"></div>
            <div className="w-22 border border-gray-500"></div>
            <div className="w-15 border"></div>
          </div>

          <div className="h-full w-full garet flex flex-col items-center justify-center">
            <div className="flex flex-col text-center">
              <h1 className="text-4xl text-gray-500">I WORK AS</h1>
              <div className="overflow-hidden h-[90px]">
                <ul
                  className="transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateY(-${index * 90}px)`,
                  }}
                >
                  {words.map((word, i) => (
                    <li
                      key={i}
                      className="h-[90px] hover:text-blue-800 transition-all duration-400 flex items-center justify-center text-6xl font-bold"
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex gap-5 z-1">
              <button className="bg-blue-800 transition-all duration-300 cursor-pointer hover:bg-blue-800/80 shadow-xl px-10 py-4 rounded-full text-white border-white text-">
                My Works
              </button>
              <button className="bg-gray-600 transition-all duration-300 cursor-pointer hover:bg-gray-600/80 shadow-xl px-10 py-4 rounded-full text-white border-white text-">
                About Me
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex h-full items-end flex-col gap-3 justify-center">
            <div className="w-15 border"></div>
            <div className="w-22 border border-gray-500"></div>
            <div className="w-15 border"></div>
          </div>
        </div>

        {/* Foot */}
        <div className="w-full h-fit flex items-center justify-center gap-5 my-5 px-10">
          <p className="hover:text-blue-800 transition-all duration-400">
            Dribbble
          </p>
          <p className="hover:text-blue-800 transition-all duration-400">
            Github
          </p>
          <p className="hover:text-blue-800 transition-all duration-400">
            Instagram
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center gap-10 items-center">
        <div className="border border-t w-100"></div>
        <h1 className="font-bold hover:text-blue-800 transition-all duration-400">
          <span className="text-gray-400">my</span>
          works•
        </h1>
        <div className="border border-t w-100"></div>
      </div>

      {/* My Works Section */}
      <Works />
    </div>
  );
}
