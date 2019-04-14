// Dependencies
import React, { Component } from "react";

// Assets
import "./reset.css";
import "./default.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app" id="home">
        <Header />
        <Hero />
        <section className="main-container container">
          <About />
          <Portfolio />
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
