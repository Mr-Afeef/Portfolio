"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Sparkles, Database, Code2, Server } from "lucide-react";

export default function AboutMe() {
  const skills = [
    { name: "Machine Learning", level: 90, icon: Brain, badge: "ML" },
    { name: "Deep Learning", level: 85, icon: Cpu, badge: "DL" },
    { name: "Generative AI", level: 80, icon: Sparkles, badge: "GenAI" },
    { name: "Data Science", level: 88, icon: Database, badge: "DS" },
    { name: "Python / SQL", level: 92, icon: Code2, badge: "Py/SQL" },
    { name: "MLOps / Deployment", level: 75, icon: Server, badge: "MLOps" },
  ];

  return (
    <motion.section
      id="about"
      className="relative w-full min-h-screen bg-[#1f242d] text-gray-300 py-20 px-6 flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Neon Background Blurs (same as footer) */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 
                   bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        About <span className="text-white">Me</span>
      </motion.h2>

      {/* About Text */}
  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="max-w-3xl text-center text-gray-400 text-lg leading-relaxed mb-16 relative z-10"
>
  I am an <span className="text-cyan-400 font-semibold">AI/ML Engineer </span> 
   passionate about designing intelligent systems that scale. My expertise spans 
  <span className="text-purple-400 font-medium"> Machine Learning</span>, 
  <span className="text-purple-400 font-medium"> Deep Learning</span>, and 
  <span className="text-purple-400 font-medium"> Generative AI</span>, with a strong 
  foundation in <span className="text-cyan-400">mathematics, data structures, and algorithms</span>. 

  I focus on <span className="text-cyan-400 font-semibold">production-grade ML pipelines</span>, 
  from data preprocessing and model training to deployment with MLOps. My approach emphasizes 
  <span className="text-purple-400"> system design, optimization, and scalability</span>,
  ensuring AI solutions work reliably in real-world environments. 

  With hands-on experience in <span className="text-cyan-400 font-semibold">Python, SQL, 
  distributed systems, and cloud platforms</span>, I aim to bridge research and production 
  by building solutions that are both innovative and business-driven. I am preparing to 
  contribute at top-tier companies by solving high-impact problems at scale.
</motion.p>


      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card
              className="relative bg-[#2a2f3a]/80 backdrop-blur-md border border-gray-700 
                         rounded-xl shadow-lg hover:border-cyan-400/40 
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] 
                         transition-all duration-300"
            >
              {/* Badge */}
              <span className="absolute top-3 right-3 text-xs font-semibold 
                               bg-gradient-to-r from-purple-400 to-cyan-400 
                               text-white px-2 py-1 rounded-md shadow">
                {skill.badge}
              </span>

              <CardContent className="p-6 flex flex-col items-start">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                  />
                </div>
                <p className="text-right text-gray-400 text-sm mt-2">
                  {skill.level}%
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
