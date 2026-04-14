import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    setCount((prev) => {
      const next = prev + value;
      return next < 0 ? 0 : next;
    });
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 items-center justify-center">
      <div className="p-10 bg-white shadow-xl flex flex-col items-center rounded-xl">
        <h1 className="text-3xl font-bold">Counter App</h1>
        <div className="w-[260px] py-3 justify-end px-5 flex shadow-inner my-5 bg-gray-200 rounded-xl">
          <h2 className="text-2xl text-gray-600 font-bold transition-all duration-200">
            {count.toLocaleString()}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <button
              onClick={() => handleChange(1)}
              className="bg-green-300 cursor-pointer text-white px-12 py-2 font-bold rounded-xl shadow-xl"
            >
              +1
            </button>
            <button
              disabled={count < 1}
              onClick={() => handleChange(-1)}
              className="bg-red-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-white px-12 py-2 font-bold rounded-xl shadow-xl"
            >
              -1
            </button>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => handleChange(5)}
              className="bg-green-300 cursor-pointer text-white px-12 py-2 font-bold rounded-xl shadow-xl"
            >
              +5
            </button>
            <button
              disabled={count < 5}
              onClick={() => handleChange(-5)}
              className="bg-red-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-white px-12 py-2 font-bold rounded-xl shadow-xl"
            >
              -5
            </button>
          </div>
          <button
            onClick={() => setCount(0)}
            className="bg-blue-300 cursor-pointer text-white px-8 py-2 font-bold rounded-xl shadow-xl"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="absolute p-5 top-0 left-0">
        <Link
          to="/home"
          className="bg-red-400 text-white cursor-pointer px-8 font-bold hover:bg-red-400/80 shadow-xl py-3 rounded-xl"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
