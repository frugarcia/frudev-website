// Dependencies
import React, { Component } from "react";
import { Element } from "react-scroll";

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
    const commonStyles = {
      paddingTop: "100px"
    };
    return (
      <div>
        <Element name="home" />
        <div className="app" id="home">
          <Header />
          <Hero />
          <section className="main-container container">
            <Element name="about" style={commonStyles}>
              <About />
            </Element>
            <Element name="portfolio" style={commonStyles}>
              <Portfolio />
            </Element>
            <Element name="contact" style={commonStyles}>
              <Contact />
            </Element>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
