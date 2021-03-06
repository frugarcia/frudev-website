// Dependencies
import React from "react";

const PortfolioItem = ({ item }) => {
  return (
    <article className="portfolio-item">
      <figure className="portfolio-item-image">
        <img
          src={require(`../../assets/images/portfolio/${item.image}`)}
          alt={item.short}
        />
      </figure>
      <div className="portfolio-item-detail">
        <span>{item.short}</span>
      </div>
    </article>
  );
};

export default PortfolioItem;
