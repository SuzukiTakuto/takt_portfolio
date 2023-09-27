import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mt-44 mx-auto">
        <About />
      </div>
    </main>
  );
}
