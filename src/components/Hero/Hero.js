// Dependencies
import React from "react";

// Assets
import "./Hero.css";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          En frudev nos dedicamos a hacer que tus proyectos digitales se
          conviertan en realidad
        </h1>
        <figure className="image-container">
          <img src={hero} alt="imagen principal del sitio" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
