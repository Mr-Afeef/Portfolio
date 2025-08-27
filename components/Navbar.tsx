"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1f242d]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          Afeef
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              onClick={() => setActive(item.href)}
              whileHover={{ scale: 1.1 }}
              className={`${
                active === item.href
                  ? "text-cyan-400"
                  : "text-white hover:text-purple-300"
              } font-medium transition-colors duration-300`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1f242d]/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.1 }}
                className={`text-2xl font-medium ${
                  active === item.href
                    ? "text-cyan-400"
                    : "text-white hover:text-purple-300"
                } transition-colors duration-300`}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
