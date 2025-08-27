"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// Professional Hiring Modal Component
const ProfessionalHiringModal = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    role: '',
    message: '',
    timeline: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Hiring inquiry:', formData);
      
      // Simulate successful submission
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setCurrentStep(1);
        setFormData({
          company: '',
          name: '',
          email: '',
          role: '',
          message: '',
          timeline: '',
          budget: ''
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1a1f2e] border border-[#ff3c7f]/30 rounded-xl max-w-md w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c7f] to-[#0ef]">
            Professional Hiring Inquiry
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Inquiry Submitted!</h3>
            <p className="text-gray-300">I'll respond within 24 business hours. Thank you for your interest!</p>
          </div>
        ) : submitStatus === 'error' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Submission Failed</h3>
            <p className="text-gray-300">Please try again or contact me directly at mrafeef008@email.com</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                    placeholder="e.g. Google, Amazon, etc."
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-[#ff3c7f] to-[#d43f8c] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                    Role You're Hiring For *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                  >
                    <option value="">Select a role</option>
                    <option value="ML Engineer">ML Engineer</option>
                    <option value="AI Engineer">AI Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="AI Researcher">AI Researcher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                    Hiring Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just exploring">Just exploring options</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                  >
                    <option value="">Select range (optional)</option>
                    <option value="$50k-80k">$50k-80k</option>
                    <option value="$80k-120k">$80k-120k</option>
                    <option value="$120k-160k">$120k-160k</option>
                    <option value="$160k-200k">$160k-200k</option>
                    <option value="$200k+">$200k+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-[#ff3c7f] to-[#d43f8c] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Project/Position Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ff3c7f] focus:border-transparent"
                    placeholder="Describe the role, project requirements, technologies involved, team structure, etc."
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-[#0ef] to-[#0af] text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  const roles = ["ML Engineer", "AI Engineer", "Data Scientist"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [hiringModalOpen, setHiringModalOpen] = useState(false);

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/mr-afeef" },
    { Icon: FaLinkedin, href: "https://linkedin.com/Mr_Afeef" },
    { Icon: FaTwitter, href: "https://twitter.com/mrafeef008" },
    { Icon: FaEnvelope, href: "mrafeef008@email.com" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    setDownloadError("");
    
    try {
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = '/api/download-cv';
      link.setAttribute('download', 'Muhammad_Afeef_CV.pdf');
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Add a small delay to ensure download starts before resetting state
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    } catch (error) {
      console.error('Download error:', error);
      setDownloadError('Failed to download CV. Please try again.');
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-64px)]
                 bg-gradient-to-br from-[#1a1f2e] via-[#1f242d] to-[#0a0f1a]
                 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 pt-[80px] sm:pt-[100px] relative overflow-hidden"
    >
      {/* Floating Neon Shapes */}
      <motion.div
        className="absolute -top-40 -left-40 w-72 h-72 bg-[#0ef] opacity-10 rounded-full blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 160, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#ff3c7f] opacity-10 rounded-full blur-3xl"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-36 h-36 bg-[#0ef] opacity-20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-1/3 w-28 h-28 bg-[#ff3c7f] opacity-20 rounded-full blur-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left mt-16 md:mt-12 z-10">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 tracking-wide"
        >
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light font-sans block">
            Hello, it's me
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 block mt-2">
            Muhammad Afeef
          </span>
        </motion.h1>

        {/* Roles line with slight vertical shift */}
        <div className="h-14 sm:h-16 md:h-20 mb-6 flex items-center justify-center md:justify-start mt-3">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light Font-sans block">
            And I'm a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                className="text-[#0ef] inline-block font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="max-w-full sm:max-w-xl md:max-w-2xl mb-8 text-sm sm:text-base md:text-lg lg:text-xl font-dubai italic mx-auto md:mx-0 text-gray-300"
        >
          Designing production-ready AI & ML systems that transform complex data into actionable products, driving real world impact with intelligent automation and scalable solutions.
        </motion.p>

        {/* Error message */}
        {downloadError && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-sm"
          >
            {downloadError}
          </motion.div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-dubai mt-6">
          <motion.button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            whileHover={{ scale: 1.07, boxShadow: "0 0 20px rgba(9, 102, 109, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 sm:py-4 rounded-3xl border-2 border-[#0ef] text-[#0ef] font-semibold text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#0ef]/10 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Downloading...
              </>
            ) : (
              "Download CV"
            )}
          </motion.button>

          <motion.button
            onClick={() => {
              // Open a professional hiring modal/dialog
              setHiringModalOpen(true);
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            whileHover={{ 
              scale: 1.07, 
              boxShadow: "0 0 20px rgba(255, 60, 127, 0.5)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 sm:py-4 rounded-3xl border-2 border-[#ff3c7f] text-[#ff3c7f] font-semibold text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ff3c7f]/10"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Social Links Box */}
        <div className="flex justify-center md:justify-start mt-6">
          <div className="flex items-center gap-3 p-3 bg-[#1f242d]/50 rounded-2xl border border-gray-600 shadow-lg">
            {socialLinks.map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-2 rounded-full transition-all"
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 10, -10, 0],
                  color: "#0ef",
                  textShadow: "0 0 8px #0ef, 0 0 16px #0ef",
                  boxShadow: "0 0 15px #0ef, 0 0 25px #0ef",
                }}
                transition={{ duration: 0.4 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Profile Image with Neon Glow */}
      <motion.div
        className="flex-1 flex justify-start md:justify-start relative w-full max-w-[480px] z-10"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          {/* Neon Glow Layers */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#0ef]/25 blur-3xl"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-[#ff3c7f]/25 blur-2xl mix-blend-color-dodge"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-[#0ef]/15 blur-4xl"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Profile Image */}
          <Image
            src="/Image.jpg" // image in public folder
            alt="Muhammad Afeef"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </motion.div>

      {/* Hiring Modal */}
      <AnimatePresence>
        {hiringModalOpen && (
          <ProfessionalHiringModal onClose={() => setHiringModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}