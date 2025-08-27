"use client";

import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaBrain, FaDatabase, FaCloud, FaNetworkWired } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Machine Learning Engineering",
      desc: "Building scalable machine learning models and deploying them into production systems.",
      icon: <FaBrain className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Data Science & Analytics",
      desc: "Extracting insights from structured and unstructured data with Python, SQL, and dashboards.",
      icon: <FaChartLine className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "AI Solution Architecture",
      desc: "Designing end-to-end AI pipelines with MLOps practices for real-world impact.",
      icon: <FaRobot className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Generative AI & LLMs",
      desc: "Fine-tuning and deploying large language models for enterprise use cases.",
      icon: <FaNetworkWired className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Big Data & Cloud AI",
      desc: "Leveraging AWS, GCP, and Azure services to train and deploy AI models at scale.",
      icon: <FaCloud className="text-4xl text-cyan-400 mb-4" />,
    },
    {
      title: "Data Engineering",
      desc: "Designing data pipelines, ETL workflows, and scalable database solutions.",
      icon: <FaDatabase className="text-4xl text-cyan-400 mb-4" />,
    },
  ];

  return (
    <motion.section
      id="services"
      
      className="relative bg-[#1f242d] py-20 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Neon Background Blurs same as Projects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        My <span className="text-white">Expertise</span>
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#2a2f3a]/80 backdrop-blur-md p-8 rounded-xl border border-gray-700 
                       hover:border-cyan-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] 
                       transition-all duration-300 flex flex-col items-center text-center"
          >
            {s.icon}
            <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
