import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

export default function Card() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulasi loading 2 detik

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  const users = [
    {
      id: 1,
      name: "Marcel Wang",
      role: "Frontend Web Developer",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "Loves building UI with React & Tailwindcss",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI Designer",
      image: "https://i.pravatar.cc/150?img=2",
      bio: "Designing clean & modern interfaces",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Fullstack Dev",
      image: "https://i.pravatar.cc/150?img=3",
      bio: "Building scalable web applications",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Team Members
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {users.map((user) => (
          <ProfileCard key={user.id} {...user} loading={loading} />
        ))}
      </div>
    </div>
  );
}
