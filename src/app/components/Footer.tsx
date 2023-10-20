"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "10px",
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div ref={ref}>
      {inView && (
        <footer className="animate-fade-in footer z-10 text-[#89B8BD] text-center pb-4">
          <small>© 2023 Takuto Suzuki</small>
        </footer>
      )}
    </div>
  );
};

export default Footer;
