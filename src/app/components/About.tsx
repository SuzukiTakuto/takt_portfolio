"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const iconPath = [
  "images/skill-icons/html5.svg",
  "images/skill-icons/css.svg",
  "images/skill-icons/react.svg",
  "images/skill-icons/next.svg",
  "images/skill-icons/js.svg",
  "images/skill-icons/ts.svg",
  "images/skill-icons/node.svg",
  "images/skill-icons/c++.svg",
  "images/skill-icons/php.svg",
  "images/skill-icons/tailwind.svg",
  "images/skill-icons/docker.svg",
];

const About = () => {
  const [showIcons, setShowIcons] = useState(false);
  useEffect(() => {
    const mainContentsTimer = setTimeout(() => {
      setShowIcons(true);
    }, 1.5 * 1000);

    return () => {
      clearTimeout(mainContentsTimer);
    };
  }, []);
  return (
    <div
      id="about"
      className="text-[#89B8BD] border border-[#89B8BD] mr-4 ml-4 mb-40"
    >
      <div className="title lg:text-5xl text-3xl mt-3 flex justify-center font-bold">
        <h1>about me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:px-40 md:px-24 py-5">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="col-span-4"
        >
          <Image
            src="/images/profile-img.png"
            alt="profile"
            width={230}
            height={230}
            className="hidden md:block"
          />
          <div className="flex justify-center md:hidden">
            <Image
              src="/images/profile-img-sm.png"
              alt="profile"
              width={120}
              height={120}
            />
          </div>
        </motion.div>

        <div className="col-span-8">
          <h1 className="lg:text-5xl text-3xl font-bold md:text-left text-center">
            鈴木啄斗
            <span className="lg:text-2xl text-sm ml-3">Suzuki Takuto</span>
          </h1>
          <p className="pt-5 px-7 md:px-0">
            芝浦工業大学大学院理工学研究科電気電子情報工学専攻の修士2年です。
            研究では主にトランスポート層周りのプロトコルについて考えています。個人的にWebフロントエンド、バックエンド、モバイルアプリ等の開発の勉強をしており、2025年の4月からモバイルアプリエンジニアとして働きます。
          </p>
          {showIcons && (
            <div className="social-links px-7 mt-2 mb-4 flex items-center md:px-0">
              <Link href="https://github.com/SuzukiTakuto" target="_blank">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  key="github"
                  className="w-[40px] h-[40px] mr-1 bg-white rounded-full relative"
                >
                  <Image
                    className="absolute top-[-0.5px] right-0"
                    src="images/github.svg"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </motion.div>
              </Link>
              <Link href="https://zenn.dev/ttaktt" target="_blank">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  key="zenn"
                >
                  <Image
                    src="images/zenn.svg"
                    alt="icon"
                    width={35}
                    height={35}
                  />
                </motion.div>
              </Link>
            </div>
          )}

          <div className="px-7 md:px-0">
            <h2 className="text-3xl font-bold">skills</h2>

            {showIcons && (
              <div className="flex flex-wrap items-center gap-x-8">
                {iconPath.map((path, index) => {
                  const style = index == 3 ? "px-2 bg-white" : "py-5";
                  return (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      key={index}
                      className={style}
                    >
                      <Image src={path} alt="icon" width={60} height={60} />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
