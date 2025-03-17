const Hero = () => {
  return (
    <section className="bg-white flex justify-center">
      <div className="w-3/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          <div className="pl-8">
            <h1 className="text-[1.7rem] font-bold text-blue-900">
              En frudev nos dedicamos a hacer que tus proyectos digitales se conviertan en realidad
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src="images/hero.svg"
              alt="imagen principal del sitio"
              className="w-full h-auto object-contain opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
