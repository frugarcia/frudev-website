const Contact = () => {
  return (
    <section className="w-full sm:w-3/5 mx-auto grid-area-contact mb-24 mt-20 px-9 font-raleway text-base" id="contact">
      <h2 className="text-2xl font-bold underline text-justify text-blue-900 underline">Contacto</h2>
      <span className="block mt-4 text-lg text-justify">
        Escríbeme a:{" "}
        <strong>
          <a href="mailto:fernandoruiz@frudev.com" className="text-blue-900 hover:underline">
            fernandoruiz@frudev.com
          </a>
        </strong>{" "}
        o rellene el siguiente formulario:
      </span>
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Formulario de contacto:</h3>
        <form
          method="POST"
          action="https://formspree.io/frugarcia@gmail.com"
          className="flex flex-col text-base"
        >
          <label className="pb-2 font-semibold text-blue-900">Tu nombre y apellidos / Empresa:</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Tu nombre..."
            className="border border-blue-900 mb-3 p-2 text-base outline-none"
          />
          <label className="pb-2 font-semibold text-blue-900">Email:</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Tu email..."
            className="border border-blue-900 mb-3 p-2 text-base outline-none"
          />
          <label className="pb-2 font-semibold text-blue-900">Mensaje:</label>
          <textarea
            name="message"
            required
            placeholder="Escriba el mensaje..."
            rows="5"
            className="border border-blue-900 mb-3 p-2 text-base outline-none"
          />
          <button
            type="submit"
            className="mt-3 w-52 bg-blue-900 text-white font-semibold text-base py-2 transition hover:bg-blue-700"
          >
            Enviar formulario
          </button>
        </form>
      </div>
      <hr className="h-[3px] mb-20 mt-5 bg-blue-200 border-0 dark:bg-blue-300" />
    </section>
  );
};

export default Contact;
