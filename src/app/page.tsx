import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mt-40 mx-auto scroll-pt-10">
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
