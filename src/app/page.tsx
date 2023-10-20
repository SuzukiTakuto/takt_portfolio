"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div className="h-screen bg-black"></div>
        </>
      ) : (
        <main className="flex flex-col min-h-screen bg-black">
          <Navbar />
          <div className="container mt-40 mx-auto scroll-pt-10">
            <About />

            <Works />

            <Contact />

            <Footer />
          </div>
        </main>
      )}
    </>
  );
}
