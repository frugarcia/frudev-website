// Dependencies
import React from "react";

// Assets
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <span>
        Escríbeme a:{" "}
        <strong>
          <a href="mailto:fernandoruiz@frudev.com">fernandoruiz@frudev.com</a>
        </strong>{" "}
        o rellene el siguiente formulario:
      </span>
      <div className="contact-form">
        <h3>Formulario de contacto:</h3>
        <form method="POST" action="https://formspree.io/frugarcia@gmail.com">
          <label>Tu nombre y apellidos / Empresa:</label>
          <input type="text" required name="name" placeholder="Tu nombre..." />
          <label>Email:</label>
          <input type="email" required name="email" placeholder="Tu email..." />
          <label>Mensaje:</label>
          <textarea
            name="message"
            required
            placeholder="Escriba el mensaje..."
            rows="5"
          />
          <button type="submit">Enviar formulario</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
