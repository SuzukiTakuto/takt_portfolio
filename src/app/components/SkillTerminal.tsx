"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";

const skillGroups = [
  {
    dir: "frontend",
    items: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    dir: "backend",
    items: ["Node.js", "PHP", "C++"],
  },
  {
    dir: "infra",
    items: ["Docker"],
  },
];

// 上から順に流し込んで、コマンド出力がタイプされていくように見せる
const screen: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const block: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const SkillTerminal = () => {
  return (
    <div className="font-mono w-full border border-[#89B8BD]/60 bg-[#0A0C0C]">
      {/* タイトルバー: トップ画面の 3D ターミナルと揃えた信号機ボタン */}
      <div className="flex items-center gap-2 border-b border-[#89B8BD]/60 bg-[#1E1E1E] px-3 py-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[11px] tracking-wide text-[#89B8BD]/60">
          ~/skills
        </span>
      </div>

      <motion.div
        className="px-4 py-4 text-sm leading-7"
        variants={screen}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={line} className="text-[#89B8BD]">
          <span className="mr-2 text-[#28C840]">$</span>skills --list
        </motion.p>

        {skillGroups.map((group) => (
          <motion.div key={group.dir} variants={block} className="mt-3">
            <motion.p variants={line} className="text-[#89B8BD]/60">
              {group.dir}/
            </motion.p>
            <ul className="flex flex-wrap gap-x-6 sm:grid sm:grid-cols-[repeat(3,max-content)] sm:gap-x-12">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={line}
                  className="whitespace-nowrap text-[#D6E9EB]"
                >
                  <span className="mr-2 text-[#89B8BD]/40">-</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.p variants={line} className="mt-3 flex items-center">
          <span className="mr-2 text-[#28C840]">$</span>
          <span className="inline-block h-[1.05em] w-[0.55em] animate-blink bg-[#89B8BD]" />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SkillTerminal;
