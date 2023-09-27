import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mt-40 mx-auto">
        <About />
      </div>
    </main>
  );
}
