import { Link, useNavigate } from "react-router-dom";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Counter App",
      tech: "Increase and decrease numbers.",
      image: "/counter.png",
      path: "/project/counter",
    },
    {
      id: 2,
      title: "Todo App",
      tech: "Add todo reminder.",
      image: "/todo.png",
      path: "/project/todo",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col px-20 py-10">
      <div className="flex w-full justify-center py-10">
        <h1 className="text-6xl font-extrabold text-blue-800">MY WORKS</h1>
      </div>
      <div className="w-full h-full flex flex-col bg-white rounded-2xl mt-20 gap-10 p-10">
        <div className="grid grid-cols-4 gap-10">
          {projects.map((project) => (
            <Link
              to={project.path}
              key={project.id}
              className="w-full rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <img src={project.image} className="w-full h-full object-cover" />

              <div
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white
                          transform -translate-y-full group-hover:translate-y-0
                          transition-transform duration-500 ease-in-out"
              >
                <div className="flex gap-2">
                  <h1 className="text-2xl font-bold">{project.id}.</h1>
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                </div>
                <p className="text-sm opacity-70">{project.tech}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
