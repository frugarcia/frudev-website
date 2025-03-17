import portfolio from "../../data/portfolio.json";

// Components
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="w-full sm:w-3/5 px-10 mx-auto" id="portfolio">
      <h2 className="text-2xl font-bold text-blue-900 underline">Portfolio</h2>
      <p className="mb-6 text-lg">
        A continuación muestro algunos de los proyectos que he llevado a cabo:
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <hr className="h-[3px] mb-20 mt-4 bg-blue-200 border-0 dark:bg-blue-300" />
    </section>
  );
};

export default Portfolio;


