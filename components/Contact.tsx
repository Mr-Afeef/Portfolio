"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    subject: "",
    message: "",
    subscribe: false,
  });

  const countryCodes = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+91", name: "India" },
    { code: "+61", name: "Australia" },
    { code: "+81", name: "Japan" },
    { code: "+92", name: "Pakistan" },
    { code: "+49", name: "Germany" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1f242d] text-white py-20 px-6 overflow-hidden"
    >
      {/* Neon Glow Background similar to footer */}
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

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
      >
        Contact <span className="text-[#0ef]">me</span>
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto bg-[#2a2f3a]/80 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-gradient-to-r from-purple-400 to-cyan-400"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#1f242d] text-white border-2 border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#1f242d] text-white border-2 border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />
        </div>

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center bg-[#1f242d] rounded-2xl border-2 border-transparent focus-within:border-cyan-400 transition-all duration-300">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-[#1f242d] text-gray-300 px-3 py-3 rounded-l-2xl outline-none"
            >
              {countryCodes.map((country, idx) => (
                <option key={idx} value={country.code}>
                  {country.code} ({country.name})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-3 rounded-r-2xl bg-[#1f242d] text-white focus:outline-none"
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#1f242d] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ef] transition"
          >
            <option value="">Select Subject</option>
            <option value="job">Job Opportunity</option>
            <option value="collab">Collaboration</option>
            <option value="project">Project Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 mb-6 rounded-2xl bg-[#1f242d] text-white focus:outline-none focus:ring-2 focus:ring-[#0ef] transition"
        />

        {/* Subscribe Checkbox */}
        <label className="flex items-center mb-6">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mr-3 accent-[#0ef]"
          />
          <span className="text-gray-300">Subscribe to newsletter</span>
        </label>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #0ef" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-[#1f242d] font-semibold rounded-3xl shadow-md transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-[#2a2f3a]/80 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-gradient-to-r from-purple-400 to-cyan-400 flex flex-col items-center text-center"
        >
          <FaLinkedin className="text-5xl text-gradient bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            LinkedIn
          </h3>
          <p className="text-gray-300 mb-4">
            5k+ Followers • Active in AI/ML Community
          </p>
          <a
            href="https://www.linkedin.com/in/mr-afeef-553231375"
            target="_blank"
            className="px-6 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-[#1f242d] rounded-lg font-semibold transition hover:shadow-lg"
          >
            Visit Profile
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-[#2a2f3a]/80 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-gradient-to-r from-purple-400 to-cyan-400 flex flex-col items-center text-center"
        >
          <FaGithub className="text-5xl text-gradient bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            GitHub
          </h3>
          <p className="text-gray-300 mb-4">
            50+ Repositories • AI/ML Projects & Open Source
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="px-6 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-[#1f242d] rounded-lg font-semibold transition hover:shadow-lg"
          >
            Visit GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
