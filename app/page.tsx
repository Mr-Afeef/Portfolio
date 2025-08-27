import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="relative z-10 max-w-full mx-auto px-1">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
