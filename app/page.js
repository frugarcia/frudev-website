import "./globals.css";
import Hero from "../app/components/Hero/HeroComponent";
import Footer from "./components/Footer/FooterComponent";
import Services from "./components/Services/ServicesComponent";
import Technology from "./components/Technology/TechnologyComponent";
import Contact from "./components/Contact/ContactComponent";
import About from "./components/About/AboutComponent";
import Portfolio from "./components/Portfolio/PortfolioComponent";

export default function Home() {
  return (
    <> 
      <main className="flex flex-col sm:gap-[32px] row-start-2 items-center sm:items-start w-full overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Technology />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}