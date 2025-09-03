"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;
          if (scrollY >= top && scrollY < bottom) setActive(item.href);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#1f242d]/95 backdrop-blur-lg z-50 shadow-md"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.08 }}
          className="text-2xl md:text-3xl font-bold cursor-pointer bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <a
                href={item.href}
                className={`${
                  active === item.href
                    ? "text-cyan-400"
                    : "text-white hover:text-purple-300"
                } transition-colors duration-300`}
              >
                {item.name}
                {active === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded"
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
        >
          <motion.span
            className="block w-8 h-0.5 bg-white rounded"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-0.5 bg-white rounded my-1"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-0.5 bg-white rounded"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Full-Screen Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Full-Screen Menu */}
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-full bg-[#1f242d] text-white flex flex-col items-center justify-center gap-8 px-6 z-50 md:hidden"
            >
              {navItems.map((item, i) => (
                <li key={i} className="w-full text-center">
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg ${
                      active === item.href
                        ? "text-cyan-400"
                        : "text-white hover:text-purple-300"
                    } transition-colors duration-300 block py-2`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
