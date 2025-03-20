import services from "../../data/services.json";

const Services = () => {
  return (
    <div id="services" className="py-8 sm:mx-80 mx-10 max-w-full">
      <h1 className="text-2xl font-bold text-sky-800 underline mb-5">
        Nuestros servicios
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {services.map((service, index) => (
          <a
            key={index}
            href="#"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div className="flex items-center">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {service.title}
                </h3>
                <img
                  src={service.image}
                  className="h-11 ml-2"
                  alt={`${service.title} icon`}
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-pretty text-gray-500">
                {service.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
