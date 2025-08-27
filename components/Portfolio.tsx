"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaRobot } from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiNextdotjs, SiDocker, SiKubernetes, SiAwsamplify } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";
import React from "react";

type Project = {
  title: string;
  desc: string;
  tech: React.ReactNode[];
  demo: string;
  github: string;
  badge: string;
};

const projects: Project[] = [
  {
    title: "Dynamic Pricing System",
    desc: "Production-ready ML engine for predicting optimal prices in real-time across retail platforms.",
    tech: [<FaPython />, <SiTensorflow />, <FaNodeJs />],
    demo: "#",
    github: "#",
    badge: "Machine Learning Engineering",
  },
  {
    title: "Traffic Management AI",
    desc: "Real-time traffic optimization using computer vision & reinforcement learning.",
    tech: [<FaPython />, <SiTensorflow />, <SiMongodb />],
    demo: "#",
    github: "#",
    badge: "Machine Learning Engineering",
  },
  {
    title: "E-commerce Analytics Dashboard",
    desc: "Data pipeline with advanced analytics and predictive sales modeling for decision-making.",
    tech: [<FaPython />, <SiMongodb />, <FaReact />],
    demo: "#",
    github: "#",
    badge: "Data Science & Analytics",
  },
  {
    title: "Social Media Sentiment Analyzer",
    desc: "Scalable NLP pipeline for real-time sentiment insights across multiple platforms.",
    tech: [<FaPython />, <SiTensorflow />],
    demo: "#",
    github: "#",
    badge: "Data Science & Analytics",
  },
  {
    title: "AI Medical Chatbot Platform",
    desc: "Enterprise-grade conversational AI with NLP, knowledge base integration, and deployment pipeline.",
    tech: [<FaPython />, <SiTensorflow />, <SiDocker />],
    demo: "#",
    github: "#",
    badge: "AI Solution Architecture",
  },
  {
    title: "End-to-End AI Pipeline",
    desc: "Cloud-native AI deployment using Docker, Kubernetes, and AWS for scalable ML workflows.",
    tech: [<SiDocker />, <SiKubernetes />, <SiAwsamplify />],
    demo: "#",
    github: "#",
    badge: "AI Solution Architecture",
  },
];

const categories = ["All", "Machine Learning Engineering", "Data Science & Analytics", "AI Solution Architecture"];

// Badge Icons mapping
const badgeIcons: Record<string, React.ReactNode> = {
  "Machine Learning Engineering": (
    <span className="flex items-center gap-1 text-purple-400 text-xs font-semibold">
      <SiTensorflow className="text-yellow-400" /> ML
    </span>
  ),
  "Data Science & Analytics": (
    <span className="flex items-center gap-1 text-green-400 text-xs font-semibold">
      <MdAnalytics className="text-green-300" /> DS
    </span>
  ),
  "AI Solution Architecture": (
    <span className="flex items-center gap-1 text-cyan-400 text-xs font-semibold">
      <FaRobot className="text-cyan-300" /> AI
    </span>
  ),
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.badge === filter);

  return (
    <motion.section
      id="projects"
      className="relative bg-[#1f242d] py-20 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Neon Background Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Latest <span className="text-white">Projects</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 flex-wrap mb-12 relative z-10">
        {categories.map((cat, idx) => (
          <motion.button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`
              relative px-6 py-2 rounded-full font-medium border transition-all duration-300
              ${filter === cat
                ? "border-cyan-400 text-white shadow-[0_0_15px_2px_rgba(34,211,238,0.6)]"
                : "border-gray-600 text-gray-400 hover:border-cyan-300 hover:text-white"}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#2a2f3a]/80 rounded-xl p-5 flex flex-col justify-between h-[340px] hover:border hover:border-cyan-400/40 shadow-lg backdrop-blur-md"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Badge with Icon */}
                <div className="mb-2">{badgeIcons[project.badge]}</div>

                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex space-x-3 text-cyan-400 text-lg">
                  {project.tech.map((techIcon, i) => (
                    <span key={i}>{techIcon}</span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-3 mt-5">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center px-3 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center px-3 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-lg font-semibold hover:bg-cyan-400 hover:text-[#1f242d] transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
