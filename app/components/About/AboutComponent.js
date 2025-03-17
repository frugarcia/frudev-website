import habilidades from "../../data/habilidades.json";

import htmlIcon from "../../assets/icons/html5.svg"; 




const About = () => {
    return (
<div className="w-full sm:w-3/5 max-w-7xl mx-auto p-5" id="about">
      <section className="bg-white flex justify-center sm-justify-left">
        <div className="w-full px-4">
          <h2 className="text-2xl font-semibold text-blue-900 underline mb-4">Sobre mí</h2>
          <p>
        Gracias por visitar mi sitio web, soy Fernando Ruiz,{" "}
        <strong>desarrollador frontend y diseñador UI/UX</strong>. Soy una
        persona curiosa, emprendedora, creativa y{" "}
        <strong>
          apasionada por la tecnología, internet, la programación y las startups
        </strong>
        .
      </p> <br />
      <p>
        A lo largo de mi carrera profesional como programador (7 años), he
        trabajado en multitud de proyectos bajo{" "}
        <strong>diferentes tecnologías</strong>, sin embargo, durante los
        últimos años me he centrado casi por completo en{" "}
        <strong>Javascript</strong>, más concretamente en el área de frontend.
      </p> <br />
      <p>
        Dentro del mundo del frontend, he trabajado con frameworks como{" "}
        <strong>ReactJS o Vue</strong>. También me defiendo en el backend,
        habiendo trabajado en proyectos grandes con{" "}
        <strong>NodeJS y PHP</strong>. En cuanto a desarrollo móvil, tengo
        varias apps en mi portfolio (algunas de cierto éxito), en este caso
        suelo trabajar con React Native.
      </p> <br />
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
      </p> <br />
      <p>
        A continuación detallo mis <strong>habilidades principales</strong>:
      </p>
          <ul className="grid grid-cols-1 grid-rows-auto grid-flow-row-dense gap-4 mt-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
            {habilidades.map((item, index) => (
              <li key={index}>
                <span className="block rounded-md px-4 py-2 font-semibold bg-blue-100">
                  {item.title}
                </span>
                <ul className="pt-5 pr-1 pb-2">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center p-2">
                      <img
                        alt={subItem.title}
                        src={`images/icons/${subItem.icon}`}
                        className="h-8 w-12"
                      />
                      <span className="pl-4">{subItem.title}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="h-[3px] ml-5 mb-20 mt-2 bg-blue-200 border-0 dark:bg-blue-300" />
    </div>
    
    );
};

export default About;