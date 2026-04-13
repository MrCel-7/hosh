import { useEffect, useRef, useState } from "react";

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
    <div className="w-full bg-gray-200 h-screen flex flex-col">
      {/* Head */}
      <div className="w-full flex justify-center h-fit gap-2 px-10 my-5">
        <h1 className="text-xl garet font-bold">
          <span className="text-gray-400">dya</span>cel•
        </h1>
      </div>

      {/* Body */}
      <div className="flex h-full w-full px-10">
        {/* Left */}
        <div className="flex h-full flex-col gap-3 justify-center">
          <div className="w-15 border-2"></div>
          <div className="w-25 border-2 border-gray-500"></div>
          <div className="w-15 border-2"></div>
        </div>

        <div className="h-full w-full garet flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <h1 className="text-5xl text-gray-500">WE WORK AS</h1>
            <div className="overflow-hidden h-[60px]">
              <ul
                className="transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateY(-${index * 60}px)`,
                }}
              >
                {words.map((word, i) => (
                  <li
                    key={i}
                    className="h-[60px] flex items-center justify-center text-4xl font-bold"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex gap-5 z-1">
            <button className="bg-blue-800 transition-all duration-300 cursor-pointer hover:bg-blue-800/80 shadow-xl px-10 py-4 rounded-full text-white border-white text-">
              Our Work
            </button>
            <button className="bg-gray-600 transition-all duration-300 cursor-pointer hover:bg-gray-600/80 shadow-xl px-10 py-4 rounded-full text-white border-white text-">
              About Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex h-full items-end flex-col gap-3 justify-center">
          <div className="w-15 border-2"></div>
          <div className="w-25 border-2 border-gray-500"></div>
          <div className="w-15 border-2"></div>
        </div>
      </div>

      {/* Foot */}
      <div className="w-full h-fit flex items-center justify-center gap-5 my-5 px-10">
        <p>Dribbble</p>
        <p>Github</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}
