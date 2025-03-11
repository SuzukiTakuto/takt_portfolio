"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const variants = {
  center: {
    clipPath: "inset(50% round 50%)",
    transition: {
      duration: 1,
      ease: [0.83, 0.67, 0.67, 0.17],
    },
  },
  filled: {
    clipPath: "inset(0% round 0%)",
    transition: {
      duration: 1,
      ease: "circOut",
    },
  },
};

export default function HomePage() {
  return (
    <AnimatePresence>
      <motion.div variants={variants} initial="center" animate="filled">
        <main className="flex flex-col min-h-screen bg-black">
          <Navbar />
          <div
            className="container mt-40 mx-auto scroll-pt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <About />

            <Works />

            <Contact />

            <Footer />
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
