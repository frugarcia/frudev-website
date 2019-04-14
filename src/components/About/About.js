// Dependencies
import React from "react";

// Assets
import "./About.css";

// Data
import habilidades from "../../content/habilidades.json";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>Sobre mí</h2>
      <p>
        Gracias por visitar mi sitio web, soy Fernando Ruiz,{" "}
        <strong>desarrollador frontend y diseñador UI/UX</strong>. Soy una
        persona curiosa, emprendedora, creativa y apasionada por la tecnología,
        <strong>internet, la programación y las startups</strong>.
      </p>
      <p>
        A lo largo de mi carrera profesional como programador (7 años), he
        trabajado en multitud de proyectos bajo{" "}
        <strong>diferentes tecnologías</strong>, sin embargo, durante los
        últimos años me he centrado casi por completo en{" "}
        <strong>Javascript</strong>, más concretamente en el área de frontend. 
      </p>
      <p>
        Dentro del mundo del frontend, he trabajado con frameworks como{" "}
        <strong>ReactJS o Vue</strong>. También me defiendo en el backend,
        habiendo trabajado en proyectos grandes con{" "}
        <strong>NodeJS y PHP</strong>. En cuanto a desarrollo móvil, tengo
        varias apps en mi portfolio (algunas de cierto éxito), en este caso
        suelo trabajar con React Native.
      </p>
      <p>
        Por último, además de la programación{" "}
        <strong>
          me encanta el diseño de producto y las interfaces de usuario
        </strong>
        , es por ello que{" "}
        <strong>
          suelo acometer también esta función durante el proceso de desarrollo
        </strong>
        . La gran mayoría de proyectos que puedes ver en mi portfolio han sido
        tanto diseñados como desarrollados por mi.
      </p>
      <p>
        A continuación detallo mis <strong>habilidades principales</strong>:
      </p>
      <ul className="habilities">
        {habilidades.map((item, index) => (
          <li className="hability" key={index}>
            <span className="hability-title">{item.title}</span>
            <ul className="sub-habilities">
              {item.sub.map((item, index) => (
                <li key={index}>
                  <img
                    alt={item.title}
                    src={require(`../../assets/icons/${item.icon}`)}
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
