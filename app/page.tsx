import Image from "next/image";
import Header from "./components/Header/HeaderComponent";
import Hero from "./components/Hero/HeroComponent";
import About from "./components/About/AboutComponent";
import "./globals.css";
import Portfolio from "./components/Portfolio/PortfolioComponent";
import Contact from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/FooterComponent";

export default function Home() {
  return (
    <div className="">
      <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      <Footer />
    </div>
  );
}
