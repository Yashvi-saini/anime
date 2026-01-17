import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
  </main>
  )
}

export default App
