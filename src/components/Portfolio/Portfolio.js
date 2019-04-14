// Dependencies
import React from "react";

// Assets
import "./Portfolio.css";

// Data
import portfolio from "../../content/portfolio.json";

// Components
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>
        A continuación muestro algunos de los proyectos que he llevado a cabo:
      </p>
      <div className="portfolio-items">
        {portfolio.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
