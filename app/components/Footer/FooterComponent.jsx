const Footer = () => {
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 bg-sky-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start mb-4 sm:mb-0">
          <img src="images/logo.svg" className="h-10" alt="Logo" />
        </div>

        <div className="flex flex-col items-center sm:flex-row">
          <a
            className="icon-github"
            href="https://github.com/frugarcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <img src="images/github.png" alt="GitHub icon" />
            </figure>
          </a>
          <small className="text-xl ml-2 text-white">@frudev 2019</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;