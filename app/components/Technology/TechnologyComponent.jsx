import technologies from "../../data/technology.json";

const Technology = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl flex flex-col sm:flex-row gap-8">
      {technologies.map((technology, index) => (
        <div
          key={index}
          className="relative flex w-full sm:w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-800 p-4 text-center bg-sky-200">
            {technology.title}
          </h3>
          <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
            {technology.sub.map((tech, index) => (
              <div
                key={index}
                role="button"
                className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <div className="mr-4 grid place-items-center">
                  <img
                    alt={tech.title}
                    src={tech.icon}
                    className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                  />
                </div>
                <div>
                  <h6 className="text-slate-800 font-medium">{tech.title}</h6>
                  <p className="text-slate-500 text-sm"></p>
                </div>
              </div>
            ))}
          </nav>
        </div>
        
      ))}
      
    </div>
  );
};

export default Technology;
