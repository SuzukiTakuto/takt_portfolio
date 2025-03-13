"use client";
import { useState, useEffect, useRef } from "react";
import Loading from "./screenComponents/Loading";
import MainScreen from "./screenComponents/MainScreen";
import Terminal from "./screenComponents/Terminal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      setShowAnimation(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 3 * 1000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-screen bg-black">
      {isLoading && (
        <div
          className={`absolute inset-0 z-10 ${
            showAnimation ? "animate-slide-up" : ""
          }`}
        >
          <Loading />
        </div>
      )}

      <div
        ref={terminalRef}
        className={`absolute inset-0 transform transition-transform duration-700 ${
          !isLoading ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Terminal />
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.7s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
