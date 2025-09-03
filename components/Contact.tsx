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

  

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const countryCodes = [
    { code: "+1", name: "USA", min: 10, max: 10 },
    { code: "+44", name: "UK", min: 10, max: 11 },
    { code: "+91", name: "India", min: 10, max: 10 },
    { code: "+61", name: "Australia", min: 9, max: 9 },
    { code: "+81", name: "Japan", min: 10, max: 11 },
    { code: "+92", name: "Pakistan", min: 10, max: 11 },
    { code: "+49", name: "Germany", min: 10, max: 13 },
  ];

  const spamWords = ["free money", "lottery", "prize", "win big"];

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

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (
      !formData.email.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      )
    ) {
      newErrors.email = "Enter a valid email";
    }

    const selectedCountry = countryCodes.find(
      (c) => c.code === formData.countryCode
    );
    if (
      !formData.phone.match(/^\d+$/) ||
      (selectedCountry &&
        (formData.phone.length < selectedCountry.min ||
          formData.phone.length > selectedCountry.max))
    ) {
      newErrors.phone = `Phone must be between ${selectedCountry?.min}-${selectedCountry?.max} digits`;
    }

    if (!formData.subject) newErrors.subject = "Please select a subject";

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (
      spamWords.some((word) => formData.message.toLowerCase().includes(word))
    ) {
      newErrors.message = "Message contains spam words";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+1",
        subject: "",
        message: "",
        subscribe: false,
      });

      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1f242d] text-white py-20 px-6 overflow-hidden"
    >
      {/* Neon Background */}
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
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-[#1f242d] text-white border-2 border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-2xl bg-[#1f242d] text-white border-2 border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center bg-[#1f242d] rounded-2xl border-2 border-transparent focus-within:border-cyan-400 transition-all duration-300">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-[#1f242d] text-gray-300 px-3 py-3 rounded-l-2xl outline-none min-w-[90px]"
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
                placeholder="1234567890"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 p-3 rounded-r-2xl bg-[#1f242d] text-white focus:outline-none"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="flex flex-col">
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
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 mb-2 rounded-2xl bg-[#1f242d] text-white focus:outline-none focus:ring-2 focus:ring-[#0ef] transition"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

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

        {submitted && (
          <p className="text-green-400 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>

    {/* ✅ Social Links inside ContactSection */}
<div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* LinkedIn */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="relative group bg-[#2a2f3a]/80 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-transparent flex flex-col items-center text-center transition-all duration-500"
  >
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-400 group-hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6),0_0_40px_8px_rgba(34,211,238,0.4)] transition-all duration-500"></div>

    {/* ✅ LinkedIn Logo */}
    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[#1f242d] shadow-lg">
      <FaLinkedin className="text-5xl text-blue-500" />
    </div>

    <h3 className="relative z-10 text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      LinkedIn
    </h3>
    <p className="relative z-10 text-gray-300 mb-4">
      5k+ Followers • Active in AI/ML Community
    </p>
    <a
      href="https://www.linkedin.com/in/mr-afeef-553231375"
      target="_blank"
      className="relative z-10 px-6 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-[#1f242d] rounded-lg font-semibold transition hover:shadow-lg"
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
    whileHover={{ scale: 1.05 }}
    className="relative group bg-[#2a2f3a]/80 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-transparent flex flex-col items-center text-center transition-all duration-500"
  >
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.6),0_0_40px_8px_rgba(168,85,247,0.4)] transition-all duration-500"></div>

    {/* ✅ GitHub Logo */}
    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[#1f242d] shadow-lg">
      <FaGithub className="text-5xl text-gray-200" />
    </div>

    <h3 className="relative z-10 text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      GitHub
    </h3>
    <p className="relative z-10 text-gray-300 mb-4">
      50+ Repositories • AI/ML Projects & Open Source
    </p>
    <a
      href="https://github.com/mr-afeef"
      target="_blank"
      className="relative z-10 px-6 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-[#1f242d] rounded-lg font-semibold transition hover:shadow-lg"
    >
      Visit GitHub
    </a>
  </motion.div>
</div>

    </section>
  );
}
