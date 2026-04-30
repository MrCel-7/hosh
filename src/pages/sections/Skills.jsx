const Skills = () => {
  const frontend = [
    {
      id: 1,
      title: "HTML",
      percentage: 80,
      image: "/html.png",
    },
    {
      id: 2,
      title: "CSS",
      percentage: 90,
      image: "/css.png",
    },
    {
      id: 3,
      title: "Javascript",
      percentage: 65,
      image: "/javascript.png",
    },
    {
      id: 4,
      title: "React",
      percentage: 75,
      image: "/react.png",
    },
    {
      id: 5,
      title: "TailwindCSS",
      percentage: 90,
      image: "/tailwind.png",
    },
    {
      id: 6,
      title: "NextJS",
      percentage: 45,
      image: "/nextjs.png",
    },
  ];

  const backend = [
    {
      id: 1,
      title: "NodeJS",
      percentage: 45,
      image: "/nodejs.png",
    },
    {
      id: 2,
      title: "ExpressJS",
      percentage: 55,
      image: "/expressjs.png",
    },
  ];

  const database = [
    {
      id: 1,
      title: "MySQL",
      percentage: 70,
      image: "/mysql.png",
    },
    {
      id: 2,
      title: "PostgreSQL",
      percentage: 30,
      image: "/postgre.png",
    },
    {
      id: 3,
      title: "MongoDB",
      percentage: 20,
      image: "/mongodb.png",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center py-20">
      <h1 className="font-bold text-5xl">MY SKILLS</h1>

      {/* Table Skills 4Cols */}
      <div className="w-full h-full flex flex-col rounded-2xl p-10">
        <h1 className="text-4xl font-bold mt-20 mb-5 mx-5">FRONTEND</h1>
        <div className="grid grid-cols-3">
          {frontend.map((frontend) => (
            <div
              key={frontend.id}
              className="group w-full h-60 justify-center border py-10 flex flex-col items-center overflow-hidden transition-all duration-500"
            >
              {/* Logo */}
              <img
                src={frontend.image}
                className="
                  w-20 mb-5
                  group-hover:-translate-y-2
                  transition-all duration-500
                "
              />

              {/* Content */}
              <div
                className="
                flex flex-col px-5 w-full items-center
                opacity-0 max-h-0 
                group-hover:opacity-100 group-hover:-max-h-40
                transition-all duration-500
              "
              >
                <div className="flex w-full px-3 justify-between">
                  <h1 className="font-bold">{frontend.title}</h1>
                  <p>{frontend.percentage}%</p>
                </div>

                <div className="w-full rounded-full bg-gray-400 mt-2">
                  <div
                    style={{ width: `${frontend.percentage}%` }}
                    className="bg-blue-800 py-2 rounded-full transition-all duration-700"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-20 mb-5 mx-5">BACKEND</h1>
        <div className="grid grid-cols-3 mb-20">
          {backend.map((backend) => (
            <div
              key={backend.id}
              className="group w-full h-60 justify-center border py-10 flex flex-col items-center overflow-hidden transition-all duration-500"
            >
              {/* Logo */}
              <img
                src={backend.image}
                className="
                  w-20 mb-5
                  group-hover:-translate-y-2
                  transition-all duration-500
                "
              />

              {/* Content */}
              <div
                className="
                flex flex-col px-5 w-full items-center
                opacity-0 max-h-0 
                group-hover:opacity-100 group-hover:-max-h-40
                transition-all duration-500
              "
              >
                <div className="flex w-full px-3 justify-between">
                  <h1 className="font-bold">{backend.title}</h1>
                  <p>{backend.percentage}%</p>
                </div>

                <div className="w-full rounded-full bg-gray-400 mt-2">
                  <div
                    style={{ width: `${backend.percentage}%` }}
                    className="bg-blue-800 py-2 rounded-full transition-all duration-700"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-20 mb-5 mx-5">DATABASE</h1>
        <div className="grid grid-cols-3 mb-20">
          {database.map((database) => (
            <div
              key={database.id}
              className="group w-full h-60 justify-center border py-10 flex flex-col items-center overflow-hidden transition-all duration-500"
            >
              {/* Logo */}
              <img
                src={database.image}
                className="
                  w-20 mb-5
                  group-hover:-translate-y-2
                  transition-all duration-500
                "
              />

              {/* Content */}
              <div
                className="
                flex flex-col px-5 w-full items-center
                opacity-0 max-h-0 
                group-hover:opacity-100 group-hover:-max-h-40
                transition-all duration-500
              "
              >
                <div className="flex w-full px-3 justify-between">
                  <h1 className="font-bold">{database.title}</h1>
                  <p>{database.percentage}%</p>
                </div>

                <div className="w-full rounded-full bg-gray-400 mt-2">
                  <div
                    style={{ width: `${database.percentage}%` }}
                    className="bg-blue-800 py-2 rounded-full transition-all duration-700"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
