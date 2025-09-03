"use client";

import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaBrain, FaDatabase, FaCloud, FaNetworkWired } from "react-icons/fa";

export default function Services() {
const services = [
  {
    title: "Applied Machine Learning Engineering",
    desc: "Designing and deploying ML systems that scale to millions of users, with optimized inference pipelines and real-time serving.",
    icon: <FaBrain className="text-4xl text-cyan-400 mb-4" />,
  },
  {
    title: "Data Science & Business Intelligence",
    desc: "Translating raw data into actionable insights through predictive modeling, A/B testing, and advanced visualization dashboards.",
    icon: <FaChartLine className="text-4xl text-cyan-400 mb-4" />,
  },
  {
    title: "AI Systems & Solution Architecture",
    desc: "Building enterprise-grade AI ecosystems integrating LLMs, multimodal models, and MLOps pipelines with cloud-native deployment.",
    icon: <FaRobot className="text-4xl text-cyan-400 mb-4" />,
  },
  {
    title: "Generative AI & Foundation Models",
    desc: "Developing cutting-edge generative AI solutions including LLM fine-tuning, RAG pipelines, and domain-specific foundation models.",
    icon: <FaNetworkWired className="text-4xl text-cyan-400 mb-4" />,
  },
  {
    title: "Cloud AI & Big Data Infrastructure",
    desc: "Leveraging distributed computing, GPU clusters, and serverless AI platforms on AWS, GCP, and Azure for large-scale workloads.",
    icon: <FaCloud className="text-4xl text-cyan-400 mb-4" />,
  },
  {
    title: "Data Engineering & Real-Time Pipelines",
    desc: "Architecting ETL/ELT workflows, data lakes, and streaming pipelines (Kafka, Spark, Airflow) to support AI-first applications.",
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
