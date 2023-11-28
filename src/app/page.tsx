"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(137, 184, 189, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(137, 184, 189, 1)",
  },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3 * 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <svg
            width="63"
            height="40"
            viewBox="0 0 63 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="st"
          >
            <motion.path
              d="M23.2614 10.6364C23.0398 8.76515 22.1411 7.3125 20.5653 6.27841C18.9896 5.24432 17.0568 4.72727 14.767 4.72727C13.0928 4.72727 11.6278 4.9981 10.3722 5.53977C9.12879 6.08144 8.15625 6.82623 7.45455 7.77415C6.76515 8.72206 6.42046 9.79924 6.42046 11.0057C6.42046 12.0151 6.66051 12.883 7.14062 13.6094C7.63305 14.3234 8.26089 14.9205 9.02415 15.4006C9.78741 15.8684 10.5876 16.2562 11.4247 16.5639C12.2618 16.8594 13.0312 17.0994 13.733 17.2841L17.5739 18.3182C18.5587 18.5767 19.6544 18.9337 20.8608 19.3892C22.0795 19.8447 23.2429 20.4664 24.3509 21.2543C25.4711 22.0298 26.3944 23.027 27.1207 24.2457C27.8471 25.4645 28.2102 26.9602 28.2102 28.733C28.2102 30.7765 27.6747 32.6231 26.6037 34.2727C25.545 35.9223 23.9938 37.2334 21.9503 38.206C19.919 39.1785 17.4508 39.6648 14.5455 39.6648C11.8371 39.6648 9.49195 39.2277 7.50994 38.3537C5.54025 37.4796 3.98911 36.2609 2.85653 34.6974C1.73627 33.134 1.10227 31.3182 0.954546 29.25H5.68182C5.80492 30.678 6.28504 31.8598 7.12216 32.7955C7.97159 33.7187 9.04261 34.4081 10.3352 34.8636C11.6402 35.3068 13.0436 35.5284 14.5455 35.5284C16.2936 35.5284 17.8632 35.2453 19.2543 34.679C20.6454 34.1004 21.7472 33.3002 22.5597 32.2784C23.3722 31.2443 23.7784 30.0379 23.7784 28.6591C23.7784 27.4034 23.4276 26.3816 22.7259 25.5938C22.0241 24.8059 21.1009 24.1657 19.956 23.6733C18.8111 23.1809 17.5739 22.75 16.2443 22.3807L11.5909 21.0511C8.63636 20.2017 6.29735 18.9891 4.57386 17.4134C2.85038 15.8376 1.98864 13.7756 1.98864 11.2273C1.98864 9.10985 2.56108 7.26326 3.70597 5.6875C4.86316 4.09943 6.4143 2.86837 8.35938 1.99432C10.3168 1.10795 12.5019 0.664771 14.9148 0.664771C17.3523 0.664771 19.5189 1.1018 21.4148 1.97585C23.3106 2.83759 24.8125 4.01941 25.9205 5.5213C27.0407 7.0232 27.6316 8.72822 27.6932 10.6364H23.2614ZM33.6715 5.24432V1.18182H62.0352V5.24432H50.1431V39H45.5636V5.24432H33.6715Z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <p className="text-[#89B8BD] text-center text-3xl">
            Welecome to Takuto&apos;s Portfolio!
          </p>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div variants={variants} initial="center" animate="filled">
            <main className="flex flex-col min-h-screen bg-black">
              <Navbar />
              <div className="container mt-40 mx-auto scroll-pt-10">
                <About />

                <Works />

                <Contact />

                <Footer />
              </div>
            </main>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
