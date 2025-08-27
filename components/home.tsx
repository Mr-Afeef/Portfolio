"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-[#0a0f1e] text-white">
      
      {/* ---------- Left Section (Text, Animation, Buttons, Socials) ---------- */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Your <span className="text-blue-500">Name</span>
        </h1>

        {/* Role Animation Placeholder */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-blue-400">
          {/* Type Animation will go here */}
          Role Animation
        </h2>

        {/* Short Description */}
        <p className="mt-6 text-gray-400">
          Short description goes here.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-5 justify-center md:justify-start">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-400 px-6 py-3 rounded-xl"
          >
            Hire Me
          </Button>
        </div>

        {/* Social Icons Placeholder */}
        <div className="mt-10 flex gap-6 justify-center md:justify-start">
          {/* GitHub | LinkedIn | Twitter icons here */}
        </div>
      </motion.div>

      {/* ---------- Right Section (Profile Image) ---------- */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-10 md:mt-0"
      >
        <Image
          src="/profile.png" // place your photo in public/profile.png
          alt="Profile"
          width={400}
          height={400}
          className="rounded-full border-4 border-blue-500 shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
