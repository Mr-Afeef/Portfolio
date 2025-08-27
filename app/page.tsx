import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
