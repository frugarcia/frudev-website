const PortfolioItem = ({ item }) => {
    return (
      <article className="relative border-2 border-gray-300 overflow-hidden group">
        <figure className="w-full h-full">
          <img
            src={`images/portfolio/${item.image}`}
            alt={item.short}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col bg-blue-900/90 text-white font-bold justify-center items-center text-lg text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-5 block">{item.short}</span>
      </div>
      </article>
    );
  };
  
  export default PortfolioItem;