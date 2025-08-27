"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight);
      pdf.save("Muhammad_Afeef_CV.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="text-right mb-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <h1 className="text-3xl font-bold">Muhammad Afeef</h1>
          <div className="mt-4 md:mt-0 space-y-1 text-sm text-gray-700">
            <div>📍 Islamabad, Pakistan</div>
            <div>📧 afeef@example.com</div>
            <div>☎ +92-300-1234567</div>
            <div>
              🌐{" "}
              <a
                href="https://github.com/muhammadafeef"
                className="text-cyan-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/muhammadafeef
              </a>
            </div>
            <div>
              🔗{" "}
              <a
                href="https://linkedin.com/in/muhammadafeef"
                className="text-cyan-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/muhammadafeef
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700 text-sm">
            Aspiring AI/ML Engineer with strong foundations in Python, SQL, Machine Learning,
            Deep Learning, and MLOps. Experienced in building real-world AI projects, generative
            AI applications, and deployment pipelines.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <p className="text-gray-700 text-sm">
            Python, SQL, NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow, Keras, MySQL,
            PostgreSQL, Docker, AWS, Streamlit, Tableau, PowerBI, DSA.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Dynamic Pricing System — ML engine predicting real-time optimal prices.</li>
            <li>Traffic Management AI — Real-time traffic optimization using CV & RL.</li>
            <li>E-commerce Analytics Dashboard — Predictive sales modeling and analytics.</li>
            <li>Social Media Sentiment Analyzer — NLP pipeline for sentiment insights.</li>
            <li>AI Medical Chatbot Platform — Enterprise conversational AI with deployment.</li>
            <li>End-to-End AI Pipeline — Cloud-native ML workflows using Docker, Kubernetes, AWS.</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700 text-sm">🎓 BSc in Computer Science — NUML, Islamabad (2021–2025)</p>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Achievements & Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Completed DeepLearning.AI Generative AI Specialization.</li>
            <li>Kaggle participant — Multiple competitions with top percentile ranking.</li>
            <li>Published articles on LinkedIn about AI/ML projects.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
