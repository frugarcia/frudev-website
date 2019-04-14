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
        </strong>
      </span>
    </section>
  );
};

export default Contact;
