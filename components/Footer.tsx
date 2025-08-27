

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "AI Solutions",
    "ML Models",
    "Data Analysis",
    "Automation Tools",
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/mr-afeef" },
    { Icon: FaLinkedin, href: "https://linkedin.com/Mr_Afeef" },
    { Icon: FaTwitter, href: "https://twitter.com/mrafeef008" },
    { Icon: FaEnvelope, href: "mrafeef008@email.com" },
  ];


  return (
    <footer className="relative overflow-hidden bg-[#1f242d] text-gray-300">
      {/* Neon Glow Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        
        {/* Branding / About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
            Muhammad Afeef
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            AI & ML Engineer crafting next-gen solutions with 
            intelligent systems and scalable architectures. 
            Focused on building impactful AI products for 
            real-world challenges.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white mb-3 border-b-2 border-cyan-400 inline-block">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {links.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#0ef", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={link.href} className="transition-colors">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white mb-3 border-b-2 border-purple-400 inline-block">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((service, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#9b5de5", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links with Neon Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white mb-3 border-b-2 border-purple-400 inline-block">
            Connect
          </h2>
          <div className="flex space-x-6 text-2xl">
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-gray-400 group-hover:text-white transition duration-300" />
                </motion.div>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-700 text-center py-6 text-sm text-gray-500 z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
          Muhammad Afeef
        </span>{" "}
        · Portfolio · All Rights Reserved
      </div>
    </footer>
  );
}
