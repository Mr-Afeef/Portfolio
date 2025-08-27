import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1f242d] text-white font-sans relative">
      
      {/* Navbar */}
      <Navbar />

      {/* Content Wrapper with minimal margins */}
      <div className="max-w-full mx-auto px-1 relative z-10">
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
