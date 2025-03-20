"use client";

const Hero = () => {
  return (
    <section className="relative w-full min-h bg-[url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <nav className="relative w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl sm:text-2xl font-semibold text-sky-700 w-auto"
            >
              Frudev Tech
            </a>
            <div className="hidden sm:flex justify-center space-x-4 sm:space-x-8 ml-2 sm:ml-20">
              <a
                href="#services"
                className="text-base sm:text-lg font-bold text-gray-800 hover:text-sky-700 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#about"
                className="text-base sm:text-lg font-bold text-gray-800 hover:text-sky-700 transition-colors"
              >
                Sobre Nosotros
              </a>
              <a
                href="#contact"
                className="text-base sm:text-lg font-bold text-gray-800 hover:text-sky-700 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="sm:hidden relative">
            {" "}
            <details className="dropdown">
              <summary className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                <div className="w-6 h-6">
                  {" "}
                  <svg className="fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </div>
              </summary>
              <ul className="menu dropdown-content absolute right-0 mt-2 bg-white rounded-box z-10 w-52 p-2 shadow-md">
                <li>
                  <a
                    href="#services"
                    className="text-base font-bold text-gray-800 hover:text-sky-700 transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-base font-bold text-gray-800 hover:text-sky-700 transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-base font-bold text-gray-800 hover:text-sky-700 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </nav>

      <div className="relative w-full px-1 py-32 sm:px-6 lg:items-center lg:px-8">
        <div className="mx-auto sm:max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-extrabold sm:text-5xl">
            Innovación en Desarrollo de
            <strong className="block font-extrabold text-sky-700">
              Software a Medida
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed text-md px-1 sm:px-0 max-w-full break-words">
            Creamos ecosistemas digitales innovadores y escalables, diseñados
            para resolver tus desafíos empresariales únicos y llevar tu negocio
            al siguiente nivel.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
            <a
              href="#contact"
              className="block w-auto rounded-sm bg-sky-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:ring-3 focus:outline-hidden sm:w-auto sm:px-12"
            >
              Contáctanos
            </a>

            <a
              href="#about"
              className="block w-auto rounded-sm bg-white px-4 py-3 text-sm font-medium text-sky-600 shadow-sm hover:text-sky-700 focus:ring-3 focus:outline-hidden sm:w-auto sm:px-12"
            >
              Sobre Nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
