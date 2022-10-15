import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import Handle from "./components/Handle";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import SecondHero from "./components/SecondHero";

function App() {
  return (
    <div className="absolute">
      <Navbar />
      <Hero />
      <Handle />
      <SecondHero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
